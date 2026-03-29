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
  "iris-solar-uv-data": {
    title: "IRIS Archive Ingestion and Metadata Pipeline",
    summary:
      "A metadata-aware Python workflow for querying, downloading, indexing, and analyzing public IRIS observation files. The system keeps raw inputs, per-observation lineage, duplicate-obsid handling, and derived outputs coordinated inside one reproducible pipeline.",
    category: "Data Workflows",
    stack: [
      "Python",
      "Astropy",
      "SunPy",
      "NumPy",
      "Pandas",
      "PyArrow",
      "IRIS Level 2",
    ],
    featured: true,
    repositorySnapshot:
      "Archive query, obs_dir-aware storage, metadata indexing, per-observation outputs, and merged event artifacts for IRIS Level 2 data.",
    narrative: {
      problem:
        "Archive-based observation workflows become fragile once downloads, file layout, metadata, and derived outputs stop lining up. The core problem here was to make public IRIS data usable through one coherent path instead of scattering ingestion, indexing, and analysis across ad hoc scripts.",
      workflow:
        "The pipeline covers remote candidate discovery, observation download into obs_dir-specific storage, metadata indexing, quicklook generation, ROI time-series outputs, event-candidate export, and duplicate-window pair audits. It has been exercised on seven real observations, including repeated obsid families that needed explicit lineage handling.",
      outputs:
        "The repository produces a structured metadata index, per-observation summaries, quicklooks, ROI time series, event catalogs, merged event tables, and pairwise audit CSVs. Raw, metadata, derived, and report layers stay separated so the workflow remains inspectable and rerunnable.",
      validation:
        "Validation is built into the system rather than added later: duplicate obsid windows are tracked as distinct observation directories, audit workflows compare paired runs side by side, and the merged catalog currently records 9 event rows across 7 per-observation catalogs.",
    },
  },
  "rubin-sampling": {
    title: "Rubin Sampling: Gaia-to-ZTF Period Recovery Baseline",
    summary:
      "A reproducible Python pipeline for ingesting public survey light curves, standardizing them into parquet artifacts, and evaluating period recovery against Gaia DR3 truth data. The system keeps ingest behavior, failure modes, and baseline results visible instead of burying them behind final figures.",
    category: "Data Workflows",
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
      problem:
        "Baseline period-recovery work depends on public survey data with unstable availability, irregular cadence, and alias-prone signals. The workflow problem was to ingest those inputs reliably, standardize them, and evaluate recovery behavior in a way that stays inspectable.",
      workflow:
        "The pipeline stages Gaia truth-set download, live ZTF ingest with provider fallback and resumable execution, parquet standardization, Lomb-Scargle search, and evaluation tables that record ingest status and recovery results.",
      outputs:
        "Artifacts include truth tables, standardized light-curve batches, period estimates, fail-case tables, and figure bundles. Each step writes intermediate outputs so reruns and debugging do not depend on notebook state.",
      validation:
        "The workflow keeps failure modes visible instead of hiding them behind aggregate plots. Alias behavior, missing-source conditions, and recovery breakdowns stay exposed in the exported evaluation tables.",
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
      problem:
        "Photometry tables and raw-image support data were spread across heterogeneous files, notebooks, and archive lookups, which made reruns and cross-source checks hard to trust. The task was to keep cleaned products, provenance, and validation inside one workflow instead of letting them drift apart.",
      workflow:
        "I split the system into explicit lanes for modern V ingest, context-building, and raw-image support across PS1, Legacy Survey, and DASCH. The workflow exports 174,872 modern V observations, builds 1-day and 7-day bins plus rolling medians, and writes manifests for staged raw-image assets.",
      outputs:
        "The repository produces cleaned tables, binned products, figures, manifests, and provenance notes rather than a loose set of analysis files. Each stage leaves behind artifacts that can be inspected or reused independently.",
      validation:
        "Cross-source comparison against ASAS-SN stays inside the workflow, with 71 overlap bins, a median delta of -0.019 mag, and a Spearman correlation of 0.883 recorded as explicit checks rather than informal side analysis.",
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
      problem:
        "Open-cluster analysis often lives inside notebooks, which makes reruns, parameter tracing, and cross-dataset comparison fragile. The workflow problem was to turn exploratory clustering and quality inspection into a reusable execution path.",
      workflow:
        "The repository reorganizes the work into table standardization, Monte Carlo plus KMeans voting for membership inference, CMD generation, RUWE quality views, and radial KS testing. A small CLI handles repeated runs while archived notebooks preserve provenance.",
      outputs:
        "The system produces comparable outputs across clusters: membership tables, diagnostic plots, quality views, and summary artifacts that can be regenerated with shared commands.",
      validation:
        "Quality and comparison steps are part of the workflow itself rather than post hoc checks, so intermediate assumptions, diagnostic surfaces, and cross-cluster differences stay visible during reruns.",
    },
  },
};
