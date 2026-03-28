import type { OngoingProject } from "@/types/project";

export const ongoingWork: OngoingProject[] = [
  {
    slug: "astrolyte",
    title: "Astrolyte",
    currentFocus:
      "I am building Astrolyte as a public data platform for structured observational datasets, with explicit stages for ingest, index, process, validate, and serve.",
    links: [
      {
        label: "Live site",
        href: "https://astrolyte.vercel.app",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/newtonraphson14/astrolyte",
      },
    ],
    problemStatement:
      "A lot of technical work stops at analysis output. Astrolyte exists to keep raw records, metadata, processed artifacts, and validation surfaces legible enough that the workflow can grow into a real platform instead of remaining a collection of isolated repositories.",
    tags: [
      "Next.js",
      "TypeScript",
      "Data Platform",
      "Data Engineering",
      "Workflow Systems",
      "Observational Data",
    ],
    sections: [
      {
        title: "Current Build",
        paragraphs: [
          "The current Astrolyte surface is live and organized around three existing workflow lineages: IRIS, Rubin Sampling, and the T CrB project.",
          "Those lineages act as the first source lanes, not the end state. The direction is to use Astrolyte as a durable surface for dataset views, workflow stages, and validation-aware outputs as more systems are added.",
        ],
      },
      {
        title: "System Design",
        bullets: [
          "Keep ingest, metadata indexing, processed outputs, and validation visible as separate stages.",
          "Treat the site as the public surface of real workflow systems, not as a generic project gallery.",
          "Design the structure so new data lanes can be added without rethinking the whole platform.",
        ],
      },
      {
        title: "What Comes Next",
        bullets: [
          "Expand beyond the initial three source lanes.",
          "Strengthen provenance views, dataset inspection pages, and output surfacing.",
          "Turn the site into a durable home for future workflow-heavy data systems.",
        ],
      },
    ],
    status: "Ongoing",
  },
];
