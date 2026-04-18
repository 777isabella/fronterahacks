import OpenAI from "openai";
import { NextResponse } from "next/server";
import { RESOURCES, type ResourceCategory } from "@/lib/resources";

type RecommendRequest = {
  categories: ResourceCategory[];
  audience: "adult" | "youth" | "family" | "educator";
  format: "in_person" | "online" | "both";
  county: "cameron" | "hidalgo" | "starr" | "willacy" | "rgv";
  language: "english" | "spanish" | "bilingual";
  notes?: string;
};

function isCategory(value: unknown): value is ResourceCategory {
  return (
    value === "literacy" ||
    value === "ged" ||
    value === "esl" ||
    value === "tutoring" ||
    value === "libraries" ||
    value === "job_training" ||
    value === "health" ||
    value === "community"
  );
}

function safeJsonParse(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      {
        error:
          "Missing OPENAI_API_KEY. Add it to .env.local and restart the dev server.",
      },
      { status: 500 },
    );
  }

  const body = (await req.json().catch(() => null)) as RecommendRequest | null;
  if (!body || !Array.isArray(body.categories)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const categories = body.categories.filter(isCategory);
  if (categories.length === 0) {
    return NextResponse.json(
      { error: "Select at least one category." },
      { status: 400 },
    );
  }

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const catalog = RESOURCES.map((r) => ({
    id: r.id,
    title: r.title,
    url: r.url,
    description: r.description,
    categories: r.categories,
    audience: r.audience ?? [],
    format: r.format ?? [],
    region: r.region ?? [],
  }));

  const system =
    "You are a helpful bilingual community navigator for the Rio Grande Valley (RGV). " +
    "Given a user's needs and a catalog of curated resources, return the best matches. " +
    "Return only valid JSON. Do not include markdown.";

  const user = {
    userProfile: {
      categories,
      audience: body.audience,
      format: body.format,
      county: body.county,
      language: body.language,
      notes: body.notes ?? "",
    },
    catalog,
    outputSpec: {
      maxRecommendations: 6,
      jsonShape: {
        recommendations: [
          {
            resourceId: "string (must exist in catalog)",
            title: "string",
            url: "string",
            reason: "string (1-2 sentences, plain language)",
            confidence: "high|medium|low",
          },
        ],
      },
    },
  };

  const completion = await client.chat.completions.create({
    model: process.env.OPENAI_MODEL || "gpt-4o-mini",
    temperature: 0.2,
    messages: [
      { role: "system", content: system },
      { role: "user", content: JSON.stringify(user) },
    ],
  });

  const text = completion.choices[0]?.message?.content ?? "";
  const parsed = typeof text === "string" ? safeJsonParse(text) : null;

  if (!parsed || typeof parsed !== "object") {
    return NextResponse.json(
      {
        error:
          "LLM returned an invalid response. Try again or simplify your notes.",
      },
      { status: 502 },
    );
  }

  const obj = parsed as {
    recommendations?: Array<{
      resourceId?: unknown;
      title?: unknown;
      url?: unknown;
      reason?: unknown;
      confidence?: unknown;
    }>;
  };

  const recommendations = Array.isArray(obj.recommendations)
    ? obj.recommendations
        .map((r) => {
          const resourceId = typeof r.resourceId === "string" ? r.resourceId : "";
          const fromCatalog = RESOURCES.find((x) => x.id === resourceId);
          if (!fromCatalog) return null;

          const title =
            typeof r.title === "string" && r.title.trim().length > 0
              ? r.title
              : fromCatalog.title;
          const url =
            typeof r.url === "string" && r.url.trim().length > 0
              ? r.url
              : fromCatalog.url;
          const reason =
            typeof r.reason === "string" && r.reason.trim().length > 0
              ? r.reason
              : fromCatalog.description;
          const confidence =
            r.confidence === "high" || r.confidence === "medium" || r.confidence === "low"
              ? r.confidence
              : "medium";

          return { resourceId, title, url, reason, confidence };
        })
        .filter((x): x is NonNullable<typeof x> => Boolean(x))
        .slice(0, 6)
    : [];

  if (recommendations.length === 0) {
    return NextResponse.json(
      { error: "No recommendations returned. Try different categories." },
      { status: 502 },
    );
  }

  return NextResponse.json({ recommendations });
}
