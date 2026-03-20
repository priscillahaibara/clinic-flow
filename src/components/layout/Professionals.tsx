import { practitioners } from "@/data/practitioners";
import { ProfessionalCard } from "./ProfessionalCard";

export function Professionals() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-14 text-center text-3xl font-semibold">
          Available Professionals
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {practitioners.map((p) => (
            <ProfessionalCard key={p.id} professional={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
