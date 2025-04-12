import { TailorForm } from "@/components/tailor-form";

export default function TailorPage() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6">🎯 Resume Tailor</h1>
      <TailorForm />
    </div>
  );
}
