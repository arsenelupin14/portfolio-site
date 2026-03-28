import { ProjectSlice } from "@/components/ui/ProjectSlice";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { CompletedProject } from "@/types/project";

export function SelectedProjects({
  projects,
}: {
  projects: CompletedProject[];
}) {
  if (projects.length === 0) return null;

  const [featuredProject, ...otherProjects] = projects;

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="Validated Work"
        title="Selected Projects"
        subtitle="Completed systems presented as case-study slices: workflow design, outputs, validation, and repository context before raw tooling detail."
      />

      <ProjectSlice project={featuredProject} featured />

      <div>
        {otherProjects.map((project) => (
          <ProjectSlice key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
