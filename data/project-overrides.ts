import type { ProjectCategory, ProjectNarrative } from "@/types/project";

type ProjectOverride = {
  title: string;
  summary: string;
  category: ProjectCategory;
  stack: string[];
  featured: boolean;
  demoUrl?: string;
  repositorySnapshot?: string;
  narrative: ProjectNarrative;
};

export const projectOverrides: Record<string, ProjectOverride> = {
  "rubin-sampling": {
    title: "Rubin Sampling: Gaia-to-ZTF Period Recovery Baseline",
    summary:
      "A reproducible Python pipeline for ingesting public survey light curves, standardizing them into parquet-based artifacts, and evaluating period recovery against Gaia DR3 truth data. The workflow keeps ingest behavior, failure modes, and baseline results visible instead of burying them behind final figures.",
    category: "Data Engineering",
    stack: [
      "Python",
      "Astropy",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Gaia DR3",
      "ZTF",
    ],
    featured: true,
    repositorySnapshot:
      "Public baseline pipeline for live ingest, standardized time-series outputs, and evaluation under Rubin-like cadence constraints.",
    narrative: {
      challenge:
        "Public time-series workflows are easy to prototype and hard to trust once live providers, irregular cadence, and aliasing start to break assumptions. The core problem here was building a pipeline that could ingest unstable external data, standardize it cleanly, and expose evaluation results in a defensible way.",
      build:
        "The repository turns that problem into explicit stages: Gaia truth-set download, live ZTF ingest with provider fallback and resumable execution, schema-standardized parquet outputs, baseline Lomb-Scargle search, and evaluation tables that surface recovery, ingest status, and known alias failures.",
      outcome:
        "The result is a rerunnable baseline workflow with tracked artifacts at each stage: truth tables, ingest summaries, standardized light-curve batches, period results, evaluation tables, and figure bundles. It reads like a workflow system rather than a one-off notebook experiment.",
    },
  },
  "t-crb-project": {
    title: "T CrB Photometry and Raw-Image Pipeline",
    summary:
      "A reproducible Python workflow for ingesting, cleaning, binning, validating, and packaging multi-source photometry plus supporting raw-image assets. The project keeps analysis products, cross-source checks, and provenance records aligned inside one explicit pipeline.",
    category: "Workflow Systems",
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter",
      "Astronomy Archives",
    ],
    featured: true,
    repositorySnapshot:
      "Reproducible photometry and raw-image workflow with standardized outputs, overlap validation, and archive-aware provenance.",
    narrative: {
      challenge:
        "Historical and modern observational data tends to fragment across CSVs, notebooks, figures, and archive lookups, which makes reruns and validation hard to trust. The challenge was to keep cleaned products, overlap checks, and raw-image context connected inside a single workflow.",
      build:
        "I split the project into explicit lanes for modern V analysis, cross-cycle Vis context, and raw-image support. The pipeline produces cleaned parquet outputs, smoothing and binned products, ASAS-SN overlap validation, notebook wrappers, manifests, and archive-aware image staging across PS1, Legacy Survey, and DASCH.",
      outcome:
        "The result is a reusable data workflow with traceable outputs instead of scattered analysis files: standardized tables, exported metrics, figures, and provenance notes all live in one structure. The repository can be rerun, inspected, and extended without losing the context behind each artifact.",
    },
  },
  "ruwe-radial-ks-clustering": {
    title: "RUWE Radial KS Clustering",
    summary:
      "A reusable Python workflow for clustering, membership inference, quality inspection, and cross-dataset comparison on Gaia-based tables. It turns notebook-heavy analysis into a CLI-backed pipeline with clearer reruns and public workflow structure.",
    category: "Research Software",
    stack: [
      "Python",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "Matplotlib",
      "Jupyter",
    ],
    featured: true,
    repositorySnapshot:
      "CLI-backed clustering and data-quality workflow for Gaia-derived tables, with preserved notebook provenance and multi-cluster outputs.",
    narrative: {
      challenge:
        "Exploratory clustering analysis often stays trapped in notebooks, making reruns, cross-dataset comparison, and public reuse harder than they should be. The workflow problem was to make intermediate assumptions and quality checks visible without losing flexibility.",
      build:
        "The repository reorganizes the original analysis into explicit stages: table standardization, Monte Carlo plus KMeans voting for membership inference, CMD generation, RUWE-based quality views, and radial KS testing. A small CLI handles the main paths while archived notebooks preserve provenance.",
      outcome:
        "The result is a cleaner research software workflow that can be rerun across multiple clusters with shared commands, generated figures, and summarized outputs. It preserves transparency while reducing the fragility of manual notebook execution.",
    },
  },
};
