import { SectionTitle } from "@/components/ui/SectionTitle";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { OngoingProject } from "@/types/project";

export function OngoingWork({ items }: { items: OngoingProject[] }) {
  if (items.length === 0) return null;

  return (
    <section id="ongoing" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="In Progress"
        title="Ongoing Work"
        subtitle="Active workflow engineering, data ingestion, and platform work kept separate from completed systems so evolving directions stay visible without being overstated."
      />
      <div className="grid gap-6">
        {items.map((item) => (
          <article key={item.slug} className="panel-soft rounded-[30px] p-6 sm:p-8">
            <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-3xl">
                <h3 className="text-xl font-medium text-white sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                  {item.currentFocus}
                </p>
              </div>
              <StatusBadge status={item.status} />
            </div>

            {item.tags && item.tags.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {item.links && item.links.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-3">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-100 transition-colors duration-150 hover:border-sky-200/30 hover:bg-sky-200/[0.06]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {item.problemStatement && (
              <div className="mb-6 rounded-[22px] border border-sky-200/10 bg-sky-200/[0.04] p-5">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-sky-100/70">
                  Workflow Problem
                </p>
                <p className="text-sm leading-7 text-slate-200 sm:text-base">
                  {item.problemStatement}
                </p>
              </div>
            )}

            {item.sections && item.sections.length > 0 && (
              <div className="grid gap-4 lg:grid-cols-2">
                {item.sections.map((section) => (
                  <section
                    key={section.title}
                    className="rounded-[24px] border border-white/8 bg-white/[0.025] p-5"
                  >
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                      {section.title}
                    </h4>

                    {section.paragraphs?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm leading-7 text-slate-300 not-last:mb-3"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="space-y-2 text-sm leading-7 text-slate-300">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-200/70" />
                            <span>{bullet}</span>
                          </li>
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
