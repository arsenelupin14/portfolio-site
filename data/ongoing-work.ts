import type { OngoingProject } from "@/types/project";

export const ongoingWork: OngoingProject[] = [
  {
    slug: "astrolyte",
    title: "Astrolyte",
    currentFocus:
      "I am building Astrolyte as the first development website in a broader astrophysical data-engineering direction, starting from real workflows for ingest, indexing, processing, validation, and serving.",
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
      "A lot of scientific work stops at analysis output. Astrolyte exists to push further into data engineering: preserve raw truth, structure metadata cleanly, surface processed artifacts, and keep validation visible enough that the workflow can scale into a real platform.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Astrophysics",
      "Data Engineering",
      "Observational Data",
    ],
    sections: [
      {
        title: "Current Build",
        paragraphs: [
          "The current Astrolyte surface is live and built from three active workflow lineages: IRIS solar UV data, Rubin Sampling, and the T CrB project.",
          "Those lineages are treated as the first source lanes, not the end state. The long-term direction is to use Astrolyte as a foundation that can hold many more workflows and data products over time.",
        ],
      },
      {
        title: "Engineering Direction",
        bullets: [
          "Keep ingest, metadata indexing, processed outputs, and validation legible as separate stages.",
          "Use the site as the visible surface of a real data workflow instead of a generic project gallery.",
          "Design the structure so more astrophysical projects can be added without rethinking the whole system.",
        ],
      },
      {
        title: "What Comes Next",
        bullets: [
          "Expand Astrolyte beyond the initial three source lanes.",
          "Polish documentation, provenance surfaces, and dataset inspection pages.",
          "Turn the site into a durable home for future engineering-heavy astrophysics work.",
        ],
      },
    ],
    status: "Ongoing",
  },
];
