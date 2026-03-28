import type { OngoingProject } from "@/types/project";

export const ongoingWork: OngoingProject[] = [
  {
    slug: "astrolyte",
    title: "Astrolyte",
    currentFocus:
      "Building Astrolyte as a public-facing data platform where ingest, indexing, processing, validation, and dataset surfacing are treated as explicit stages rather than hidden implementation detail.",
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
      "A lot of technical work stops at final analysis output. Astrolyte exists to keep source records, metadata, processed artifacts, and validation surfaces legible enough that the workflow can grow into a real platform instead of remaining a collection of isolated repositories.",
    tags: [
      "Next.js",
      "TypeScript",
      "Data Platform",
      "Data Workflows",
      "Workflow Systems",
      "Observational Data",
    ],
    sections: [
      {
        title: "Current Build",
        paragraphs: [
          "The current surface is live and organized around three existing workflow lineages: IRIS, Rubin Sampling, and the T CrB project.",
          "Those lineages are the first source lanes, not the final shape. The direction is to make Astrolyte a durable surface for dataset views, workflow stages, and validation-aware outputs as more systems are added.",
        ],
      },
      {
        title: "Architecture",
        bullets: [
          "Keep ingest, metadata indexing, processed outputs, and validation visible as separate stages.",
          "Treat the site as the public surface of real workflow systems, not as a generic project gallery.",
          "Design the structure so new data lanes can be added without rethinking the whole platform.",
        ],
      },
      {
        title: "Next",
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
