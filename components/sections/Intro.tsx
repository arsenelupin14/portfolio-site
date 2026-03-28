import { siteIdentity } from "@/data/site";

export function Intro() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 max-w-3xl">
        <p className="eyebrow mb-3">About / Working Model</p>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
          Engineering signal first, context second.
        </h2>
      </div>

      <div className="grid gap-12 border-t border-[var(--line)] pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <p className="eyebrow mb-5">What I Build</p>
          <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
            {siteIdentity.introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow mb-5">How This Site Is Structured</p>
          <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
            {siteIdentity.workingModelParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
