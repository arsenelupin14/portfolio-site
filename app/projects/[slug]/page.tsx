import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getCompletedProjects, getProjectBySlug } from "@/lib/projects";
import { formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getCompletedProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const meta = [
    project.language,
    project.stars > 0 ? `${project.stars} stars` : null,
    project.updatedAt ? `Updated ${formatDate(project.updatedAt)}` : null,
  ].filter(Boolean);

  const sections = [
    {
      label: "Overview",
      content: project.summary,
    },
    {
      label: "Problem",
      content: project.narrative.problem,
    },
    {
      label: "Workflow / System Design",
      content: project.narrative.workflow,
    },
    {
      label: "Outputs / Artifacts",
      content: project.narrative.outputs,
    },
    {
      label: "Validation",
      content: project.narrative.validation,
    },
    ...(project.repositorySummary
      ? [
          {
            label: "Repository Snapshot",
            content: project.repositorySummary,
          },
        ]
      : []),
  ];

  return (
    <div className="px-6 pb-24 pt-20 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
        >
          <span className="font-mono text-xs uppercase tracking-[0.24em]">
            Back
          </span>
          <span>Projects</span>
        </Link>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.45fr)_280px]">
          <article>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
                {project.category}
              </span>
              <StatusBadge status={project.status} />
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
              {project.title}
            </h1>

            {meta.length > 0 && (
              <p className="mt-6 text-sm leading-7 text-[var(--muted)]">
                {meta.join(" / ")}
              </p>
            )}

            <div className="mt-12 border-t border-[var(--line)]">
              {sections.map((section) => (
                <section
                  key={section.label}
                  className="grid gap-4 border-b border-[var(--line)] py-8 lg:grid-cols-[190px_minmax(0,1fr)]"
                >
                  <p className="eyebrow">{section.label}</p>
                  <div className="max-w-3xl">
                    <p className="text-base leading-8 text-[var(--muted)]">
                      {section.content}
                    </p>
                  </div>
                </section>
              ))}
            </div>
          </article>

          <aside className="self-start border-t border-[var(--line)] pt-6 lg:sticky lg:top-24 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div className="space-y-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                  Links
                </p>
                <div className="mt-3 flex flex-col gap-3 text-sm">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-link button-link--accent"
                  >
                    View on GitHub
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-link"
                    >
                      Live demo
                    </a>
                  )}
                </div>
              </div>

              <div className="border-t border-[var(--line)] pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                  Stack
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  {project.stack.join(" / ")}
                </p>
              </div>

              {project.topics.length > 0 && (
                <div className="border-t border-[var(--line)] pt-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                    Topics
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    {project.topics.join(" / ")}
                  </p>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
