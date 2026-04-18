import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <section className="rounded-2xl border border-zinc-200/70 bg-white p-10 shadow-sm dark:border-white/10 dark:bg-zinc-950">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          UStopia RGV
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          A community accessibility hub for the Rio Grande Valley focused on
          literacy, learning pathways, and local involvement.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/find"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Get recommendations
          </Link>
          <Link
            href="/resources"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold hover:bg-zinc-50 dark:border-white/20 dark:hover:bg-white/5"
          >
            Browse resources
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200/70 bg-white p-6 dark:border-white/10 dark:bg-zinc-950">
          <h2 className="text-base font-semibold">Literacy is infrastructure</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            Low literacy impacts employment, poverty, and healthcare outcomes
            across the RGV.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200/70 bg-white p-6 dark:border-white/10 dark:bg-zinc-950">
          <h2 className="text-base font-semibold">UStopia as a practice</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            Inspired by Dr. Ruha Benjamin: build futures by building with each
            other.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200/70 bg-white p-6 dark:border-white/10 dark:bg-zinc-950">
          <h2 className="text-base font-semibold">Personalized pathways</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            Answer a few questions and get tailored links to RGV programs,
            classes, and community groups.
          </p>
        </div>
      </section>
    </div>
  );
}
