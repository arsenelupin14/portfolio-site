import Link from "next/link";
import { WorkflowDiagram } from "@/components/ui/WorkflowDiagram";
import { currentDirection, siteIdentity } from "@/data/site";

type HeroProps = {
  completedCount: number;
};

export function Hero({ completedCount }: HeroProps) {
  const proofPoints = siteIdentity.proofPoints.map((item) =>
    item.label === "completed systems"
      ? {
          ...item,
          value: completedCount.toString().padStart(2, "0"),
        }
      : item
  );

  return (
    <section className="px-6 pb-20 pt-24 sm:pb-24 sm:pt-28">
      <div className="mx-auto max-w-6xl border-b border-[var(--line)] pb-16">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.35fr)_340px] lg:items-start">
          <div>
            <p className="eyebrow mb-5">Editorial Technical Portfolio</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              {siteIdentity.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {siteIdentity.heroSummary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex h-11 items-center border border-[var(--foreground)] bg-[var(--foreground)] px-5 text-sm font-medium text-[var(--background)] transition hover:bg-[var(--accent)] hover:border-[var(--accent)]"
              >
                View Case Studies
              </Link>
              <a
                href={siteIdentity.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center border border-[var(--line-strong)] px-5 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--foreground)]"
              >
                GitHub
              </a>
            </div>

            <div className="mt-12 max-w-4xl">
              <p className="eyebrow mb-4">Workflow Model</p>
              <WorkflowDiagram stages={siteIdentity.workflowStages} />
            </div>
          </div>

          <aside className="border-t border-[var(--line)] pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="eyebrow mb-4">Proof Rail</p>
            <div className="space-y-6">
              {proofPoints.map((item, index) => (
                <div
                  key={item.label}
                  className="border-t border-[var(--line)] pt-5 first:border-t-0 first:pt-0"
                >
                  <div className="flex gap-4">
                    <span className="font-mono text-xs tracking-[0.22em] text-[var(--muted)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                        {item.value}
                      </p>
                      <p className="mt-1 text-sm font-medium text-[var(--foreground)]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-[var(--line)] pt-6">
              <p className="eyebrow mb-4">Current Direction</p>
              <p className="text-sm leading-7 text-[var(--muted)]">
                {siteIdentity.availability}
              </p>
              <div className="mt-5 space-y-3">
                {currentDirection.map((item) => (
                  <p key={item} className="text-sm leading-7 text-[var(--muted)]">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
