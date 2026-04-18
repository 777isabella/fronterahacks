import FindForm from "@/app/find/ui/FindForm";

export default function FindPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <div className="rounded-2xl border border-zinc-200/70 bg-white p-10 shadow-sm dark:border-white/10 dark:bg-zinc-950">
        <h1 className="text-3xl font-semibold tracking-tight">Find for me</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
          Tell us what you’re looking for and we’ll recommend RGV resources.
        </p>
      </div>

      <div className="mt-8">
        <FindForm />
      </div>
    </div>
  );
}
