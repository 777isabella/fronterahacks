"use client";

import { useMemo, useState } from "react";
import type { ResourceCategory } from "@/lib/resources";

type RecommendResponse = {
  recommendations: Array<{
    resourceId: string;
    title: string;
    url: string;
    reason: string;
    confidence: "high" | "medium" | "low";
  }>;
};

const CATEGORY_OPTIONS: Array<{ value: ResourceCategory; label: string }> = [
  { value: "literacy", label: "Literacy support" },
  { value: "ged", label: "GED / high school equivalency" },
  { value: "esl", label: "English (ESL)" },
  { value: "tutoring", label: "Tutoring" },
  { value: "libraries", label: "Libraries" },
  { value: "job_training", label: "Job training" },
  { value: "health", label: "Health literacy" },
  { value: "community", label: "Community groups / events" },
];

export default function FindForm() {
  const [categories, setCategories] = useState<ResourceCategory[]>(["literacy"]);
  const [audience, setAudience] = useState<"adult" | "youth" | "family" | "educator">(
    "adult",
  );
  const [format, setFormat] = useState<"in_person" | "online" | "both">("both");
  const [county, setCounty] = useState<
    "cameron" | "hidalgo" | "starr" | "willacy" | "rgv"
  >("rgv");
  const [language, setLanguage] = useState<"english" | "spanish" | "bilingual">(
    "bilingual",
  );
  const [notes, setNotes] = useState<string>("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<RecommendResponse | null>(null);

  const canSubmit = useMemo(() => categories.length > 0 && !loading, [categories, loading]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ categories, audience, format, county, language, notes }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Request failed (${res.status})`);
      }

      const json = (await res.json()) as RecommendResponse;
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <form
        onSubmit={onSubmit}
        className="rounded-2xl border border-zinc-200/70 bg-white p-8 dark:border-white/10 dark:bg-zinc-950"
      >
        <fieldset className="space-y-3">
          <legend className="text-sm font-semibold">What are you looking for?</legend>
          <div className="grid gap-2">
            {CATEGORY_OPTIONS.map((opt) => {
              const checked = categories.includes(opt.value);
              return (
                <label key={opt.value} className="flex items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => {
                      setCategories((prev) => {
                        if (e.target.checked) return Array.from(new Set([...prev, opt.value]));
                        return prev.filter((c) => c !== opt.value);
                      });
                    }}
                    className="h-4 w-4"
                  />
                  {opt.label}
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm">
            Audience
            <select
              value={audience}
              onChange={(e) => setAudience(e.target.value as typeof audience)}
              className="rounded-xl border border-zinc-300 bg-white px-3 py-2 dark:border-white/20 dark:bg-zinc-900"
            >
              <option value="adult">Adult</option>
              <option value="youth">Youth</option>
              <option value="family">Family</option>
              <option value="educator">Educator</option>
            </select>
          </label>

          <label className="grid gap-2 text-sm">
            Format
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value as typeof format)}
              className="rounded-xl border border-zinc-300 bg-white px-3 py-2 dark:border-white/20 dark:bg-zinc-900"
            >
              <option value="both">In-person or online</option>
              <option value="in_person">In-person</option>
              <option value="online">Online</option>
            </select>
          </label>

          <label className="grid gap-2 text-sm">
            County
            <select
              value={county}
              onChange={(e) => setCounty(e.target.value as typeof county)}
              className="rounded-xl border border-zinc-300 bg-white px-3 py-2 dark:border-white/20 dark:bg-zinc-900"
            >
              <option value="rgv">RGV (any)</option>
              <option value="cameron">Cameron</option>
              <option value="hidalgo">Hidalgo</option>
              <option value="starr">Starr</option>
              <option value="willacy">Willacy</option>
            </select>
          </label>

          <label className="grid gap-2 text-sm">
            Language
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as typeof language)}
              className="rounded-xl border border-zinc-300 bg-white px-3 py-2 dark:border-white/20 dark:bg-zinc-900"
            >
              <option value="bilingual">Bilingual</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
            </select>
          </label>
        </div>

        <label className="mt-6 grid gap-2 text-sm">
          Anything else? (optional)
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            className="resize-none rounded-xl border border-zinc-300 bg-white px-3 py-2 dark:border-white/20 dark:bg-zinc-900"
            placeholder="Example: I work nights, need weekend classes, starting from scratch…"
          />
        </label>

        <button
          type="submit"
          disabled={!canSubmit}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-700 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          {loading ? "Thinking…" : "Recommend resources"}
        </button>

        {error ? (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-200">
            {error}
          </div>
        ) : null}
      </form>

      <div className="rounded-2xl border border-zinc-200/70 bg-white p-8 dark:border-white/10 dark:bg-zinc-950">
        <h2 className="text-sm font-semibold">Recommendations</h2>
        {!data ? (
          <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            Submit the form to see suggested links.
          </p>
        ) : (
          <div className="mt-4 space-y-4">
            {data.recommendations.map((r) => (
              <a
                key={r.resourceId}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-zinc-200/70 p-5 hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-white/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-sm font-semibold">{r.title}</div>
                  <div className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-white/10 dark:text-zinc-200">
                    {r.confidence}
                  </div>
                </div>
                <div className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                  {r.reason}
                </div>
                <div className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                  {r.url}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
