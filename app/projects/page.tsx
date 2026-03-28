import type { Metadata } from "next";
import { ProjectSlice } from "@/components/ui/ProjectSlice";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getCompletedProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Curated completed projects across data workflows, workflow systems, and research software.",
};

export default async function ProjectsPage() {
  const projects = await getCompletedProjects();

  return (
    <div className="px-6 pb-24 pt-20 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-8 border-b border-[var(--line)] pb-10 lg:grid-cols-[minmax(0,1.35fr)_220px] lg:items-end">
          <SectionTitle
            eyebrow="Validated Work"
            title="Projects"
            subtitle="Completed systems curated from GitHub, then rewritten locally so the site reflects workflow design, outputs, and validation instead of raw repository metadata."
          />
          <div className="lg:text-right">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
              Curated Set
            </p>
            <p className="mt-3 text-4xl font-semibold text-[var(--foreground)]">
              {projects.length.toString().padStart(2, "0")}
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
              completed projects currently surfaced as validated work.
            </p>
          </div>
        </div>

        {projects.length === 0 ? (
          <div className="border border-[var(--line)] bg-[var(--surface)] p-8">
            <p className="text-sm leading-7 text-[var(--muted)]">
              No completed projects are available yet. Add a curated repository
              to `data/featured-repos.ts` and define its portfolio copy in
              `data/project-overrides.ts`.
            </p>
          </div>
        ) : (
          <div>
            {projects.map((project) => (
              <ProjectSlice key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
