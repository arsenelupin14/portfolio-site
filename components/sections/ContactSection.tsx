import { siteIdentity } from "@/data/site";

const contactItems = [
  {
    label: "Phone",
    value: siteIdentity.phone,
    href: `tel:${siteIdentity.phone}`,
  },
  {
    label: "Email",
    value: siteIdentity.email,
    href: `mailto:${siteIdentity.email}`,
  },
  {
    label: "GitHub",
    value: "newtonraphson14",
    href: siteIdentity.github,
  },
  {
    label: "LinkedIn",
    value: "ikbarfaiz",
    href: siteIdentity.linkedin,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 max-w-3xl">
        <p className="eyebrow mb-3">Contact</p>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
          Reach out directly.
        </h2>
        <p className="mt-4 text-base leading-8 text-[var(--muted)]">
          If you want to talk about data workflows, backend-oriented builds,
          internships, or collaboration, this is the fastest way to reach me.
        </p>
      </div>

      <div className="grid gap-10 border-t border-[var(--line)] pt-8 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div>
          <p className="eyebrow mb-4">Quick Actions</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${siteIdentity.email}`}
              className="button-link button-link--accent"
            >
              Email me
            </a>
            <a href={siteIdentity.resumeUrl} download className="button-link">
              Download CV
            </a>
          </div>
        </div>

        <div className="border-t border-[var(--line)] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div className="space-y-5">
            {contactItems.map((item) => (
              <div key={item.label} className="border-b border-[var(--line)] pb-5 last:border-b-0 last:pb-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                  {item.label}
                </p>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-2 inline-flex text-base font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
