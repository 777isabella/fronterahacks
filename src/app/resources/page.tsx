import { RESOURCES, type ResourceCategory } from "@/lib/resources";

const CATEGORY_LABELS: Record<ResourceCategory, string> = {
  literacy: "Literacy",
  ged: "GED / HSE",
  esl: "ESL",
  tutoring: "Tutoring",
  libraries: "Libraries",
  job_training: "Job training",
  health: "Health literacy",
  community: "Community",
};

function groupByCategory() {
  const groups = new Map<ResourceCategory, typeof RESOURCES>();
  for (const category of Object.keys(CATEGORY_LABELS) as ResourceCategory[]) {
    groups.set(category, []);
  }
  for (const resource of RESOURCES) {
    for (const category of resource.categories) {
      const group = groups.get(category);
      if (group) group.push(resource);
    }
  }
  return groups;
}

export default function ResourcesPage() {
  const groups = groupByCategory();

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <div className="aero-panel p-10">
        <h1 className="text-3xl font-semibold tracking-tight">Resources</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 opacity-80">
          A curated starting point for literacy support, education pathways, and
          community spaces across the Rio Grande Valley.
        </p>
        <p className="mt-3 max-w-3xl text-base leading-7 opacity-80" style={{ fontSize: "12px" }}>
          Disclaimer: Some sources may be outdated or invalid.
        </p>
      </div>

      <div className="mt-10 space-y-10">
        {(Object.keys(CATEGORY_LABELS) as ResourceCategory[]).map((category) => {
          const items = groups.get(category) ?? [];
          if (items.length === 0) return null;

          return (
            <section key={category}>
              <h2 className="text-lg font-semibold">{CATEGORY_LABELS[category]}</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {items.map((resource) => (
                  <a
                    key={`${category}:${resource.id}`}
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-zinc-200/70 bg-white p-6 hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950 dark:hover:bg-white/5"
                  >
                    <div className="text-sm font-semibold">{resource.title}</div>
                    <div className="mt-2 text-sm leading-6 opacityy-80">
                      {resource.description}
                    </div>
                    <div className="mt-3 text-xs opacity-70">
                      {resource.url}
                    </div>
                  </a>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
