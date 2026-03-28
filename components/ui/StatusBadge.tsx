import { cn } from "@/lib/utils";

export function StatusBadge({ status }: { status: "Completed" | "Ongoing" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.18em]",
        status === "Completed"
          ? "border-[var(--line)] bg-[var(--surface)] text-[var(--foreground)]"
          : "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
      )}
    >
      {status}
    </span>
  );
}
