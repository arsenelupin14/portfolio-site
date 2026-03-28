import { siteIdentity } from "@/data/site";

export function Footer() {
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&to=${siteIdentity.email}`;

  return (
    <footer className="border-t border-[var(--line)] bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1fr_auto]">
          <div className="space-y-4">
            <p className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
              {siteIdentity.name}
            </p>
            <p className="max-w-lg text-sm leading-7 text-[var(--muted)]">
              Data workflows, reproducible systems, and technical case studies
              built around messy datasets and visible engineering decisions.
            </p>
            <p className="text-sm leading-7 text-[var(--muted)]">
              {siteIdentity.availability}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm md:items-end md:justify-end">
            <div className="flex items-center gap-6">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                Email
              </a>
              <a
                href={siteIdentity.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                GitHub
              </a>
              <a
                href={siteIdentity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
