import { siteIdentity } from "@/data/site";

export function Intro() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-6 sm:py-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_340px]">
        <div className="panel rounded-[30px] p-8 sm:p-10">
          <p className="eyebrow mb-5">What I Build</p>
          <div className="space-y-5 text-base leading-8 text-slate-300">
            {siteIdentity.introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="panel-soft rounded-[30px] p-8">
          <p className="eyebrow mb-5">Curation Model</p>
          <div className="space-y-5 text-sm leading-7 text-slate-300">
            <p>
              This site separates validated work from active build paths so the
              public signal stays clear.
            </p>
            <p>
              Completed projects are selected from GitHub and rewritten locally
              only when the workflow, artifacts, and outcomes are clear enough
              to stand on their own.
            </p>
            <p>
              Ongoing work stays manual so active systems, tooling, and
              unfinished directions remain visible without being overstated as
              finished. The result is a portfolio that feels curated, traceable,
              and product-minded instead of looking like a raw repository feed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
