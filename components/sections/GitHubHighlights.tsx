import { SectionTitle } from "@/components/ui/SectionTitle";
import { formatDate } from "@/lib/utils";
import type { GitHubHighlight } from "@/types/project";

export function GitHubHighlights({ items }: { items: GitHubHighlight[] }) {
  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="Supporting Signal"
        title="GitHub Activity"
        subtitle="Recent public repository movement, kept secondary to the curated case-study set but useful as a consistency check."
      />

      <div className="border-t border-[var(--line)]">
        {items.map((repo) => (
          <a
            key={repo.name + repo.updatedAt}
            href={repo.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-4 border-b border-[var(--line)] py-5 transition-colors hover:text-[var(--accent)] lg:grid-cols-[minmax(0,1fr)_220px]"
          >
            <div>
              <p className="text-lg font-medium text-[var(--foreground)]">
                {repo.name}
              </p>
              {repo.description && (
                <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                  {repo.description}
                </p>
              )}
            </div>

            <div className="text-sm leading-7 text-[var(--muted)] lg:text-right">
              <p>Updated {formatDate(repo.updatedAt)}</p>
              <p>
                {[repo.language, repo.stars > 0 ? `${repo.stars} stars` : null]
                  .filter(Boolean)
                  .join(" / ")}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em]">
                {repo.topics.slice(0, 3).join(" / ")}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
