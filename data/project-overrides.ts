import type { ProjectCategory, ProjectNarrative } from "@/types/project";

type ProjectOverride = {
  title: string;
  summary: string;
  category: ProjectCategory;
  stack: string[];
  featured: boolean;
  demoUrl?: string;
  narrative: ProjectNarrative;
};

export const projectOverrides: Record<string, ProjectOverride> = {
  "rubin-sampling": {
    title: "Rubin Sampling: Gaia-to-ZTF Period Recovery Baseline",
    summary:
      "A public astrophysics pipeline that links Gaia DR3 truth sets to real ZTF light curves, runs baseline period recovery on RR Lyrae, and publishes evaluation artifacts, fail-case tables, and figure bundles directly in the repository.",
    category: "Astrophysics",
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
    narrative: {
      challenge:
        "Rubin-style period finding is easy to describe but hard to defend in practice once cadence irregularity, harmonics, and survey-service instability start to distort what looks like the best period candidate.",
      build:
        "This repository turns that problem into a clean public workflow: Gaia truth-set download, live ZTF ingest with resumable batch behavior and provider fallback, standardized parquet outputs, baseline Lomb-Scargle search, and evaluation tables that surface both recovery metrics and manual-review failure cases.",
      outcome:
        "The result is a portfolio-ready research repository with real data products, reproducible commands, and a first public RR Lyrae baseline batch that already shows both strong recovery performance and the first scientifically meaningful alias failures.",
    },
  },
  "t-crb-project": {
    title: "T CrB Photometry and Raw-Image Pipeline",
    summary:
      "A reproducible research pipeline for T Coronae Borealis that combines AAVSO cleaning, binning and smoothing products, ASAS-SN overlap validation, and a growing raw-image lane spanning PS1, Legacy Survey, and DASCH.",
    category: "Astrophysics",
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter",
      "Astronomy Archives",
    ],
    featured: true,
    narrative: {
      challenge:
        "Recurrent nova work often fragments across notebooks, raw CSVs, and archive checks, which makes it hard to keep the photometry pipeline, validation artifacts, and image-lane experiments aligned.",
      build:
        "This repository organizes T CrB analysis into a reproducible pipeline with modern-V and cross-cycle-Vis lanes, notebook wrappers, QC exports, overlap checks against ASAS-SN, and a raw-image workflow that now includes live DASCH ingestion plus staged PS1 and Legacy assets.",
      outcome:
        "The result is a portfolio-quality research repo that exposes final artifacts, methods, and provenance clearly enough to function as both an analysis workspace and a public technical showcase.",
    },
  },
  "ruwe-radial-ks-clustering": {
    title: "RUWE Radial KS Clustering",
    summary:
      "A reproducible open-cluster analysis workflow that combines Monte Carlo KMeans voting, Gaia color-magnitude diagrams, RUWE inspection, and radial Kolmogorov-Smirnov testing.",
    category: "Astrophysics",
    stack: [
      "Python",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "Matplotlib",
      "Jupyter",
    ],
    featured: true,
    narrative: {
      challenge:
        "Cluster analysis workflows often stay trapped in notebooks, which makes reruns, comparisons, and public sharing harder than they should be.",
      build:
        "This repository cleans the original notebooks into a public research workflow with a CLI entry point, Monte Carlo membership inference, Gaia CMD views, RUWE-colored inspection, and radial KS testing.",
      outcome:
        "The result is a reusable analysis pipeline that can compare multiple clusters in one summarized output while keeping the research steps transparent.",
    },
  },
};
