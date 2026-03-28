import { ProjectSlice } from "@/components/ui/ProjectSlice";
import type { CompletedProject } from "@/types/project";

export function ProjectCard({ project }: { project: CompletedProject }) {
  return <ProjectSlice project={project} />;
}
