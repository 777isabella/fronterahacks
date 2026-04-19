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
        <p
          className="mt-3 max-w-3xl text-base leading-7 opacity-80"
          style={{ fontSize: "12px" }}
        >
          Disclaimer: Some sources may be outdated or invalid.
        </p>
      </div>

      <section className="mt-8">
        <div className="aero-panel-soft overflow-hidden">
          <div className="px-8 pt-8">
            <h2 className="text-lg font-semibold">Public libraries in the RGV</h2>
            <p className="mt-2 text-sm leading-6 opacity-80">
              Explore nearby public libraries across the Rio Grande Valley.
            </p>
          </div>
          <div className="mt-6 aspect-video w-full">
            <iframe
              className="h-full w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=public%20libraries%20Rio%20Grande%20Valley%20TX&output=embed"
              title="Google Maps showing public libraries in the Rio Grande Valley"
            />
          </div>
        </div>
      </section>

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
                    className="aero-link-card p-6"
                  >
                    <div className="text-sm font-semibold">{resource.title}</div>
                    <div className="mt-2 text-sm leading-6 opacity-80">
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
