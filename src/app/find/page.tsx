import FindForm from "@/app/find/ui/FindForm";

export default function FindPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <div className="aero-panel p-10">
        <h1 className="text-3xl font-semibold tracking-tight">Find for me</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 opacity-80" style={{ fontSize: "18px" }}>
          Tell us what you’re looking for and we’ll recommend RGV resources.
        </p>
        <p className="mt-3 max-w-3xl text-base leading-7 opacity-80" style={{ fontSize: "14px" }}>
          Disclaimer: Some sources may be outdated or invalid.
        </p>
      </div>

      <div className="mt-8">
        <FindForm />
      </div>
    </div>
  );
}
