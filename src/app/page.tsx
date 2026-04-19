import Link from "next/link";
import LanguageSelector from "./LanguageSelector";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <header className="mb-6 flex justify-end">
        {/*<LanguageSelector />*/}
      </header>

      <section className="aero-panel p-10">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">UStopia RGV</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 opacity-80">
          A community accessibility hub for the Rio Grande Valley focused on literacy, learning
          pathways, and local involvement.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/find" className="aero-btn-primary">
            Get recommendations
          </Link>
          <Link href="/resources" className="aero-btn-secondary">
            Browse resources
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <h4 className="text-base font-semibold">
          &ldquo;Whereas utopias are the stuff of dreams, dystopias, the stuff of nightmares, ustopias
          are what we create together when we&apos;re wide awake.&rdquo; — Dr. Ruha Benjamin
        </h4>

        <h4 className="mt-4 text-base font-semibold">
          Dr. Ruha Benjamin&apos;s TED Talk discusses creating an UStopia—a world where everyone can
          thrive, especially alongside technological advancements.
        </h4>

        <div className="mt-4 aspect-video w-full overflow-hidden rounded-2xl">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/QO3nY_u6hos?autoplay=1&rel=0"
            title="Youtube link to TED Talk."
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="aero-panel-soft p-6">
          <h2 className="text-base font-semibold">Literacy is infrastructure</h2>
          <p className="mt-2 text-sm leading-6 opacity-80">
            Low literacy impacts employment, poverty, and healthcare outcomes across the RGV.
          </p>
        </div>
        <div className="aero-panel-soft p-6">
          <h2 className="text-base font-semibold">UStopia as a practice</h2>
          <p className="mt-2 text-sm leading-6 opacity-80">
            Inspired by Dr. Ruha Benjamin: build futures by building with each other.
          </p>
        </div>
        <div className="aero-panel-soft p-6">
          <h2 className="text-base font-semibold">Personalized pathways</h2>
          <p className="mt-2 text-sm leading-6 opacity-80">
            Answer a few questions and get tailored links to RGV programs, classes, and community
            groups.
          </p>
        </div>
      </section>
    </div>
  );
}
