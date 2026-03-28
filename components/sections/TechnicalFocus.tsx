import { SectionTitle } from "@/components/ui/SectionTitle";
import type { FocusArea } from "@/types/project";

export function TechnicalFocus({ areas }: { areas: FocusArea[] }) {
  return (
    <section id="focus" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="Core Areas"
        title="Technical Focus"
        subtitle="The grouping is engineering-first: workflow handling, structured execution, and reproducibility come before the domain context."
      />

      <div className="grid gap-8 border-t border-[var(--line)] pt-8 lg:grid-cols-3">
        {areas.map((area, index) => (
          <div key={area.title}>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mb-3 text-xl font-semibold tracking-tight text-[var(--foreground)]">
              {area.title}
            </h3>
            <p className="text-sm leading-7 text-[var(--muted)]">
              {area.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
