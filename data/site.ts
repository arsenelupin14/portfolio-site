import type { FocusArea, SiteIdentity } from "@/types/project";

export const siteIdentity: SiteIdentity = {
  name: "Ikbar Faiz",
  role: "Data workflows / reproducible software",
  headline: "Data Workflows",
  heroSummary:
    "I build Python-centered workflows that take messy records through ingest, metadata shaping, validation, and structured outputs. The datasets here are scientific, but the signal is engineering discipline, reproducibility, and traceable execution.",
  introParagraphs: [
    "I build systems that take raw public data through explicit ingest, metadata handling, validation, and analysis-ready outputs.",
    "Across projects, the recurring pattern is staged processing, rerunnable artifacts, and enough provenance to inspect what changed between raw inputs and derived results.",
    "The operating domain here is scientific data, but the transferable value is workflow design, validation discipline, and technical ownership over messy datasets.",
  ],
  workingModelParagraphs: [
    "Completed work is separated from active systems so finished case studies stay legible and ongoing builds stay honest.",
    "Repositories only move into the curated project set when the workflow, artifacts, and validation story are clear enough to stand on their own.",
    "Active systems stay in a lighter log format so platform direction, tooling, and unfinished work can remain visible without pretending to be complete.",
  ],
  proofPoints: [
    {
      value: "174,872",
      label: "records processed",
      detail: "Modern V observations exported, cleaned, and structured inside a repeatable workflow.",
    },
    {
      value: "71",
      label: "validation bins",
      detail: "Cross-source overlap checks kept visible as explicit workflow outputs instead of side analysis.",
    },
    {
      value: "03",
      label: "completed systems",
      detail: "Curated case studies with inspectable artifacts, reruns, and technical writeups.",
    },
    {
      value: "Python",
      label: "core build language",
      detail: "Data workflows, validation-heavy execution, and backend-leaning technical systems.",
    },
  ],
  workflowStages: [
    "Raw sources",
    "Metadata / index",
    "Processing",
    "Validation",
    "Outputs",
  ],
  availability:
    "Based in Indonesia. Focused on data engineering and workflow-oriented backend roles.",
  phone: "+6282134099169",
  email: "ikbarfaiz14@gmail.com",
  resumeUrl: "/ikbar-faiz-cv.pdf",
  github: "https://github.com/arsenelupin14",
  githubUsername: "arsenelupin14",
  linkedin: "https://linkedin.com/in/ikbarfaiz",
};

export const technicalFocusAreas: FocusArea[] = [
  {
    title: "Data Workflows",
    description:
      "Ingest, standardize, validate, and package messy public data into structured artifacts that can be rerun and inspected.",
  },
  {
    title: "Workflow Systems",
    description:
      "Design multi-stage paths from raw records to derived outputs, with explicit checkpoints, provenance, and visible validation surfaces.",
  },
  {
    title: "Research Software",
    description:
      "Build domain-specific tools where the scientific context is the operating domain and engineering discipline stays in the foreground.",
  },
];

export const currentDirection: string[] = [
  "Python pipelines for ingest, schema shaping, and validation on messy public data",
  "Workflow-heavy systems with visible provenance, checkpoints, and rerunnable outputs",
  "Data-intensive backend directions that reward structured execution over demo-first polish",
];
