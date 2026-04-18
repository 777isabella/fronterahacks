export default function MissionPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <div className="rounded-2xl border border-zinc-200/70 bg-white p-10 shadow-sm dark:border-white/10 dark:bg-zinc-950">
        <h1 className="text-3xl font-semibold tracking-tight">Our mission</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
          UStopia RGV is inspired by Dr. Ruha Benjamin’s concept of UStopia: the
          idea that our futures are built collectively, not individually. We’re
          building a local hub that connects Rio Grande Valley residents to
          literacy support, learning pathways, and community involvement.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
          According to the Barbara Bush Foundation, the average literacy rate
          across counties in the RGV is about 57.5%, compared to an
          approximately 79% national literacy rate. Low literacy shapes access
          to employment, income stability, and health outcomes.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
          Our goal is to make it easy to discover trustworthy, nearby resources
          — and to make community growth feel like something you can join.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200/70 bg-white p-8 dark:border-white/10 dark:bg-zinc-950">
          <h2 className="text-lg font-semibold">What we prioritize</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            <li>Literacy support for adults, youth, and families</li>
            <li>GED and continuing education pathways</li>
            <li>Community groups, events, and local learning spaces</li>
            <li>Accessibility-first discovery and plain-language summaries</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200/70 bg-white p-8 dark:border-white/10 dark:bg-zinc-950">
          <h2 className="text-lg font-semibold">How recommendations work</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            On the “Find for me” page, you’ll answer a short form. Our
            recommendation engine uses an LLM to match your needs to our curated
            resource list and returns a ranked set of links with reasons.
          </p>
        </div>
      </div>
    </div>
  );
}
