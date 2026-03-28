import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";
import type { CompletedProject } from "@/types/project";

export function ProjectSlice({
  project,
  featured = false,
}: {
  project: CompletedProject;
  featured?: boolean;
}) {
  const meta = [
    project.language,
    project.stars > 0 ? `${project.stars} stars` : null,
    project.updatedAt ? `Updated ${formatDate(project.updatedAt)}` : null,
  ].filter(Boolean);

  return (
    <article
      className={cn(
        "border-t border-[var(--line)] py-8",
        featured && "border-b pb-10 pt-10"
      )}
    >
      <div
        className={cn(
          "grid gap-8",
          featured
            ? "lg:grid-cols-[minmax(0,1.45fr)_320px]"
            : "lg:grid-cols-[minmax(0,1.35fr)_280px]"
        )}
      >
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
              {project.category}
            </span>
            <span className="inline-flex items-center border border-[var(--line)] px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
              {project.status}
            </span>
          </div>

          <h3
            className={cn(
              "max-w-4xl font-semibold tracking-tight text-[var(--foreground)]",
              featured ? "text-3xl sm:text-4xl" : "text-2xl"
            )}
          >
            {project.title}
          </h3>

          <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[var(--muted)] sm:text-base">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <Link
              href={`/projects/${project.slug}`}
              className="font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
            >
              Open case study
            </Link>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              View repository
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                Live demo
              </a>
            )}
          </div>
        </div>

        <div className="space-y-5 border-t border-[var(--line)] pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
              Repository
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--foreground)]">
              {project.repo}
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
              Stack
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
              {project.stack.join(" / ")}
            </p>
          </div>

          {meta.length > 0 && (
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                Snapshot
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                {meta.join(" / ")}
              </p>
            </div>
          )}

          {project.repositorySummary && (
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                Repository Note
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                {project.repositorySummary}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
