import type { OngoingProject } from "@/types/project";

export const ongoingWork: OngoingProject[] = [
  {
    slug: "iris-solar-data-pipeline",
    title: "IRIS Solar UV Data Pipeline for Imaging and Spectroscopy",
    currentFocus:
      "I am building a clean data-and-analysis pipeline around IRIS Level 2 observations, starting from Slit-Jaw Image time series and expanding toward synchronized spectroscopy products for event catalogs, line fitting, and solar atmosphere diagnostics.",
    problemStatement:
      "IRIS data are scientifically rich but operationally easy to mishandle: FITS products are multi-extension, spectroscopy volumes grow quickly, and the project becomes messy fast unless raw files, metadata tables, and derived analysis products are separated from the start.",
    tags: [
      "IRIS",
      "Solar Physics",
      "UV Spectroscopy",
      "Slit-Jaw Imaging",
      "Astropy",
      "SunPy",
      "FITS Pipelines",
    ],
    sections: [
      {
        title: "Scientific Focus",
        paragraphs: [
          "IRIS observes the chromosphere and transition region, which makes it a strong instrument for projects that sit at the boundary between astrophysics, scientific computing, and data-intensive workflow design.",
          "The two main data families are Slit-Jaw Images for time-resolved UV imaging and spectrograph products for raster or sit-and-stare spectroscopy, so the pipeline has to support both image-first and spectroscopy-first analysis paths.",
        ],
      },
      {
        title: "Initial Project Direction",
        bullets: [
          "Use Level 2 calibrated IRIS products as the default starting point rather than lower-level mission data.",
          "Start with an SJI-first workflow because it is the most practical entry point for a clean astro-computing project.",
          "Use one channel first, with SJI 1400 as the likely starting lane for transition-region activity.",
          "Keep the architecture ready for a later synchronized SJI plus spectroscopy workflow once the first ingest path is stable.",
        ],
      },
      {
        title: "Data Products I Need to Manage",
        bullets: [
          "Raw IRIS Level 2 FITS files stored by OBS ID or observing date.",
          "A metadata table per file with time range, product type, channel or line content, cadence, exposure, field of view, and pointing or WCS summary.",
          "Optional derived cubes for image sequences, ideally stored in a format such as zarr or another large-array-friendly layout.",
          "Optional spectroscopy sub-windows around physically important lines such as Si IV, C II, or Mg II instead of flattening the entire spectral volume too early.",
        ],
      },
      {
        title: "Planned Retrieval and Tooling",
        bullets: [
          "Use direct IRIS Level 2 portal access when OBS IDs or observing windows are already known.",
          "Use SunPy Fido and the Virtual Solar Observatory when search and download automation are reliable in the execution environment.",
          "Use Astropy for FITS, WCS, and time handling, and keep the workflow compatible with IRIS-specific tooling such as irispy.",
          "Preserve the original FITS files as raw truth and build lightweight derived products separately for analysis and ML-friendly workflows.",
        ],
      },
      {
        title: "Planned Output Modes",
        paragraphs: [
          "The first likely use case is SJI-based event detection, where the inputs are short observational segments and the outputs are event catalogs, region-of-interest intensity tracks, and overlay figures.",
          "A second expansion path is spectroscopy plus imaging, where the outputs become fitted line-parameter maps, Doppler proxies, and synchronized time evolution for selected regions.",
        ],
      },
      {
        title: "Immediate Starter Checklist",
        bullets: [
          "Choose one concrete use case first: SJI-only or synchronized SJI plus spectroscopy.",
          "Download one short OBS ID as a sanity dataset rather than scaling immediately.",
          "Verify that the pipeline can open the FITS files, plot a single frame, and extract one ROI intensity series cleanly.",
          "Only after that, scale to a small multi-OBS archive with a reproducible metadata table and a consistent raw-to-derived file layout.",
        ],
      },
    ],
    status: "Ongoing",
  },
];
