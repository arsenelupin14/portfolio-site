import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-6 pb-24 pt-24">
      <div className="mx-auto max-w-3xl border border-[var(--line)] bg-[var(--surface)] p-10 text-center">
        <p className="eyebrow mb-4">Not Found</p>
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)]">
          That project page does not exist.
        </h1>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
          Return to the project archive to browse the completed work currently
          surfaced in the portfolio.
        </p>
        <Link
          href="/projects"
          className="mt-8 inline-flex h-11 items-center border border-[var(--foreground)] bg-[var(--foreground)] px-6 text-sm font-medium text-[var(--background)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)]"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
