export function WorkflowDiagram({ stages }: { stages: string[] }) {
  return (
    <ol className="overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--surface)] sm:grid sm:grid-cols-5">
      {stages.map((stage, index) => (
        <li
          key={stage}
          className="relative border-b border-[var(--line)] px-4 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
            {String(index + 1).padStart(2, "0")}
          </p>
          <p className="mt-2 text-sm font-medium text-[var(--foreground)]">
            {stage}
          </p>
        </li>
      ))}
    </ol>
  );
}
