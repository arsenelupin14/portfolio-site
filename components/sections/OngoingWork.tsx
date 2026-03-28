import { SectionTitle } from "@/components/ui/SectionTitle";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { OngoingProject } from "@/types/project";

export function OngoingWork({ items }: { items: OngoingProject[] }) {
  if (items.length === 0) return null;

  return (
    <section id="systems" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="Active Build Path"
        title="Current Systems"
        subtitle="Active builds are logged separately from finished case studies so iteration, architecture decisions, and public-facing system work stay visible without being overstated."
      />

      <div className="grid gap-12">
        {items.map((item) => (
          <article key={item.slug} className="border-y border-[var(--line)] py-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_240px]">
              <div className="max-w-3xl">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
                    Active system
                  </span>
                  <StatusBadge status={item.status} />
                </div>

                <h3 className="text-2xl font-medium tracking-tight text-[var(--foreground)] sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {item.currentFocus}
                </p>

                {item.links && item.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="button-link"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-[var(--line)] pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                {item.tags && item.tags.length > 0 && (
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                      Tags
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                      {item.tags.join(" / ")}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {item.problemStatement && (
              <div className="mt-8 grid gap-4 border-t border-[var(--line)] pt-6 lg:grid-cols-[180px_minmax(0,1fr)]">
                <p className="eyebrow">Why It Exists</p>
                <p className="max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {item.problemStatement}
                </p>
              </div>
            )}

            {item.sections && item.sections.length > 0 && (
              <div className="mt-8 grid gap-8 border-t border-[var(--line)] pt-6 lg:grid-cols-3">
                {item.sections.map((section) => (
                  <section key={section.title}>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]">
                      {section.title}
                    </h4>

                    {section.paragraphs?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm leading-7 text-[var(--muted)] not-last:mb-3"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="space-y-2 text-sm leading-7 text-[var(--muted)]">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
