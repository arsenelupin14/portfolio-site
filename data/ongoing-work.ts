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
  {
    slug: "reusable-fits-time-series-tooling",
    title: "Reusable FITS and Time-Series Workflow Tooling",
    currentFocus:
      "I am building reusable Python tooling for file handling, metadata extraction, structured outputs, and time-series processing on scientific datasets.",
    problemStatement:
      "Scientific data work often starts from specialized formats and one-off scripts, which makes reuse and validation inconsistent. This tooling exists to make repeated file handling and processing steps explicit, portable, and easier to rerun.",
    tags: [
      "Python",
      "Astropy",
      "FITS",
      "Time-Series",
      "Reusable Tooling",
      "Validation",
    ],
    sections: [
      {
        title: "Current Build",
        paragraphs: [
          "The current work is centered on reusable utilities that support FITS handling, metadata-aware transformations, and time-series packaging across multiple active projects.",
          "The goal is to reduce how much workflow logic stays trapped inside one notebook or one repository by moving repeated operations into cleaner tooling patterns.",
        ],
      },
      {
        title: "Workflow Goals",
        bullets: [
          "Validate inputs early instead of discovering format issues late in the workflow.",
          "Keep metadata close to derived outputs so later analysis stays traceable.",
          "Generate structured artifacts that can be reused across projects instead of hidden notebook state.",
        ],
      },
      {
        title: "Next Steps",
        bullets: [
          "Harden reusable modules around FITS handling and time-series outputs.",
          "Improve CLI ergonomics and project-to-project portability.",
          "Turn the strongest patterns into contribution-ready open-source work.",
        ],
      },
    ],
    status: "Ongoing",
  },
  {
    slug: "iris-archive-ingestion-metadata-pipeline",
    title: "IRIS Archive Ingestion and Metadata Pipeline",
    currentFocus:
      "I am building an ingestion and metadata pipeline for public IRIS observations, with archive querying, per-observation storage, lightweight indexing, and analysis-ready outputs.",
    problemStatement:
      "Archive-based datasets are useful only if downloads, file layout, metadata, and derived outputs stay coordinated. This workflow is designed to keep raw files intact while making it easier to inspect, compare, and reuse downstream products.",
    tags: [
      "Python",
      "IRIS",
      "Metadata Indexing",
      "Archive Ingest",
      "FITS",
      "Structured Outputs",
    ],
    sections: [
      {
        title: "Current Build",
        paragraphs: [
          "The current checkpoint has already been exercised on seven real observations, with archive query and download, metadata index generation, quicklook outputs, ROI time series, and merged event catalogs all running from the same workflow.",
          "Storage is obs_dir-aware rather than flat, so repeated observation identifiers do not overwrite one another and later comparison stays possible.",
        ],
      },
      {
        title: "Validation Layer",
        bullets: [
          "Track per-observation lineage explicitly in metadata tables and derived catalogs.",
          "Use duplicate-window audits and pairwise comparisons to expose cross-observation consistency problems.",
          "Keep filenames and outputs observation-specific so reruns do not silently overwrite prior artifacts.",
        ],
      },
      {
        title: "Next Steps",
        bullets: [
          "Expand archive coverage beyond the current exercised set.",
          "Harden cross-observation validation and ROI consistency checks.",
          "Carry the same metadata discipline into the later spectroscopy path.",
        ],
      },
    ],
    status: "Ongoing",
  },
  {
    slug: "iris-imaging-spectroscopy-workflow",
    title: "IRIS Imaging and Spectroscopy Workflow",
    currentFocus:
      "I am extending the IRIS workflow from imaging-first analysis toward a staged imaging-and-spectroscopy pipeline with synchronized, inspectable outputs.",
    problemStatement:
      "Imaging and spectroscopy are often processed separately, which makes alignment, provenance, and downstream comparison harder to maintain. This work focuses on building a staged workflow that can connect both without collapsing raw context.",
    tags: [
      "Python",
      "IRIS",
      "Imaging",
      "Spectroscopy",
      "Staged Processing",
      "Analysis-Ready Outputs",
    ],
    sections: [
      {
        title: "Current Build",
        paragraphs: [
          "The active repository is intentionally imaging-first, with spectroscopy kept as a planned expansion after the archive, metadata, and single-lane outputs are stable.",
          "That sequence is deliberate: stabilize ingestion and structured outputs first, then extend the workflow into synchronized multi-modal analysis.",
        ],
      },
      {
        title: "Engineering Direction",
        bullets: [
          "Keep raw files, metadata tables, and derived outputs separated instead of collapsing them into one analysis layer.",
          "Preserve observation-level lineage so imaging and spectroscopy can be aligned without losing source context.",
          "Design outputs that are reusable in later analysis rather than tied to one exploratory pass.",
        ],
      },
      {
        title: "Next Steps",
        bullets: [
          "Add raster-aware indexing alongside the stabilized imaging workflow.",
          "Create synchronized output surfaces for imaging and spectroscopy products.",
          "Carry the same validation discipline into cross-modal comparisons.",
        ],
      },
    ],
    status: "Ongoing",
  },
];
