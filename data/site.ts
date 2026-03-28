import type { FocusArea, SiteIdentity } from "@/types/project";

export const siteIdentity: SiteIdentity = {
  name: "Ikbar Faiz",
  role: "Data workflows and reproducible systems",
  headline: "Data Workflows",
  heroSummary:
    "My work is Python-centered and reproducibility-first: ingestion, metadata handling, validation, and traceable technical artifacts. Most examples here use scientific datasets, but the core value is workflow design, data engineering discipline, and technical ownership.",
  introParagraphs: [
    "I build data workflows and technical systems that start with messy public datasets and end with structured, inspectable outputs.",
    "Across projects, the recurring pattern is explicit ingestion, metadata-aware processing, validation, and reproducible artifacts that can be rerun instead of rebuilt by hand.",
    "The examples here use scientific data because it forces discipline around formats, provenance, and uncertainty, but the transferable value is engineering rigor, workflow design, and technical ownership.",
  ],
  availability:
    "Based in Indonesia. Focused on data engineering and workflow-oriented backend roles.",
  email: "ikbarfaiz14@gmail.com",
  github: "https://github.com/newtonraphson14",
  githubUsername: "newtonraphson14",
  linkedin: "https://linkedin.com/in/ikbarfaiz",
};

export const technicalFocusAreas: FocusArea[] = [
  {
    title: "Data Engineering",
    description:
      "Pipelines for ingestion, schema shaping, metadata handling, validation, and structured outputs built from messy public datasets.",
  },
  {
    title: "Workflow Systems",
    description:
      "Raw-to-derived pipeline design, provenance-aware outputs, reproducible reruns, and staged processing that stays inspectable as projects grow.",
  },
  {
    title: "Research Software",
    description:
      "Domain-specific tools and analysis systems built with engineering discipline, where the scientific context supports the workflow instead of replacing it.",
  },
];

export const currentDirection: string[] = [
  "Python pipelines for ingesting, cleaning, and validating messy public data",
  "Metadata-aware workflows with traceable raw-to-derived outputs",
  "Small data-intensive systems built for reruns, structured artifacts, and transparency",
];
