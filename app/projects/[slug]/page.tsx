import { redirect } from "next/navigation";

export function generateStaticParams() {
  return [];
}

export default function ProjectDetailPage() {
  redirect("/#projects");
}
