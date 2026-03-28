import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { CompletedProject } from "@/types/project";

export function SelectedProjects({
  projects,
}: {
  projects: CompletedProject[];
}) {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="Validated Work"
        title="Selected Projects"
        subtitle="Completed systems and pipelines with reusable artifacts, validation surfaces, and local copy that explains the engineering value instead of mirroring raw repository metadata."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
