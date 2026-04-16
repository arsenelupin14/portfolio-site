import type { OngoingProject } from "@/types/project";

export const ongoingWork: OngoingProject[] = [
  {
    slug: "for-artemis-ii",
    title: "For Artemis II",
    currentFocus:
      "Building a technical-editorial mission website that reorganizes Artemis II into one legible surface for crew, mission phases, physics context, systems, and official NASA updates.",
    links: [
      {
        label: "Live site",
        href: "https://forartemisii.vercel.app",
      },
    ],
    problemStatement:
      "Public mission coverage is usually fragmented across standalone updates, imagery, and domain-heavy explanations. This build turns Artemis II into a clearer information system where chronology, crew context, vehicle systems, and orbital mechanics can be read together instead of as disconnected fragments.",
    tags: [
      "Next.js",
      "TypeScript",
      "Content Systems",
      "Editorial Web",
      "Mission Archive",
    ],
    sections: [
      {
        title: "Current Build",
        paragraphs: [
          "The live site already covers the mission arc from launch to splashdown, with mission phases, physics explanations, crew sections, systems context, and grouped NASA updates on one surface.",
          "The current shape is less about posting standalone articles and more about building a readable archive where mission state, human roles, and source-backed milestones stay connected.",
        ],
      },
      {
        title: "Architecture",
        bullets: [
          "Keep mission timeline, source links, crew context, systems sections, and physics explanations as separate but connected layers.",
          "Use official NASA updates as source anchors, then reorganize them into a cleaner phase-based narrative surface.",
          "Treat the site as a mission record that can keep expanding without losing readability.",
        ],
      },
      {
        title: "Next",
        bullets: [
          "Strengthen source traceability and update cadence as new Artemis material becomes available.",
          "Expand mission-reference depth without turning the site into a cluttered archive.",
          "Keep the surface useful for both quick orientation and deeper technical reading.",
        ],
      },
    ],
    status: "Ongoing",
  },
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
        href: "https://github.com/arsenelupin14/astrolyte",
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
  {
    slug: "hlsp-mast-metadata-pipeline",
    title: "HLSP / MAST Metadata Pipeline",
    currentFocus:
      "Building a metadata-first multi-archive ingestion pipeline for HLSP collections in MAST, with observation discovery, product-manifest expansion, snapshot versioning, and stable normalized tables as the first target rather than bulk file download.",
    links: [
      {
        label: "GitHub repo",
        href: "https://github.com/arsenelupin14/hlsp-mast-metadata-pipeline",
      },
    ],
    problemStatement:
      "Programmatic access to HLSP data is strong, but production-style ingestion still needs explicit contracts around observation metadata, product manifests, rerun safety, snapshot history, and queryable downstream storage. The point of this build is to turn that workflow into a stable DE system instead of a one-off fetch script.",
    tags: [
      "Python",
      "astroquery.mast",
      "DuckDB",
      "Parquet",
      "Metadata Ingestion",
      "Observational Archives",
    ],
    sections: [
      {
        title: "Current Build",
        paragraphs: [
          "The repo is currently structured around three core entities: collections, observations, and products, with bronze raw snapshots, silver normalized parquet, and gold latest views.",
          "The first implementation is metadata-first by design: observation discovery comes first, then product expansion by obsid, with full asset materialization intentionally deferred.",
        ],
      },
      {
        title: "Architecture",
        bullets: [
          "Keep obsid and obs_id separate so product expansion and mission-facing identifiers do not get conflated.",
          "Persist raw API payloads alongside normalized tables so schema evolution and rerun debugging stay possible.",
          "Publish snapshot-aware history with record hashes, latest views, and run-level DQ summaries.",
        ],
      },
      {
        title: "Next",
        bullets: [
          "Validate starter HLSP collection filters against live MAST responses.",
          "Run the first end-to-end ingestion pass for one collection and inspect product manifest coverage.",
          "Add orchestration, config-driven scaling, and stronger observability around request failures and schema drift.",
        ],
      },
    ],
    status: "Ongoing",
  },
];
