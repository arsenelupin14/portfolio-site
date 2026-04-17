"use client";

import { ongoingWork } from "@/data/ongoing-work";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Project = {
  number: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  href: string;
};

type RepoCard = {
  name: string;
  language: string;
  description: string;
  updated: string;
  href: string;
};

const navItems = [
  { id: "about", label: "about" },
  { id: "projects", label: "projects" },
  { id: "systems", label: "systems" },
  { id: "focus", label: "focus" },
  { id: "contact", label: "contact" },
];

const projects: Project[] = [
  {
    number: "02",
    name: "Rubin Sampling: Gaia-to-ZTF Period Recovery",
    tagline:
      "A reproducible Python pipeline for ingesting public survey light curves, standardizing them into parquet artifacts, and evaluating period recovery against Gaia DR3 truth data.",
    description:
      "Public baseline pipeline for live ingest, standardized time-series outputs, and evaluation under Rubin-like cadence constraints. The system keeps ingest behavior, failure modes, and baseline results visible instead of burying them behind final figures.",
    stack: ["Python", "Astropy", "Pandas", "Gaia DR3", "ZTF"],
    href: "https://github.com/arsenelupin14/rubin-sampling",
  },
  {
    number: "03",
    name: "T CrB Photometry & Raw-Image Pipeline",
    tagline:
      "A reproducible Python workflow for ingesting, cleaning, binning, validating, and packaging multi-source photometry plus supporting raw-image assets.",
    description:
      "Reproducible photometry and raw-image workflow with standardized outputs, overlap validation, and archive-aware provenance. The project keeps analysis products, cross-source checks, and provenance records aligned inside one explicit pipeline.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
    href: "https://github.com/arsenelupin14/t-crb-project",
  },
  {
    number: "04",
    name: "RUWE Radial KS Clustering",
    tagline:
      "A reusable Python workflow for clustering, membership inference, quality inspection, and cross-dataset comparison on Gaia-based tables.",
    description:
      "CLI-backed clustering and data-quality workflow for Gaia-derived tables, with preserved notebook provenance and multi-cluster outputs. It turns notebook-heavy analysis into a pipeline with clearer reruns and public workflow structure.",
    stack: ["Python", "NumPy", "Pandas", "scikit-learn", "Matplotlib"],
    href: "https://github.com/arsenelupin14/ruwe-radial-ks-clustering",
  },
];

const repoCards: RepoCard[] = [
  {
    name: "astrolyte",
    language: "TypeScript",
    description:
      "Astrolyte website and public surface for workflow-oriented scientific data systems.",
    updated: "Updated Apr 4, 2026",
    href: "https://github.com/arsenelupin14/astrolyte",
  },
  {
    name: "portfolio-site",
    language: "TypeScript",
    description:
      "Personal portfolio for workflow-heavy data engineering and scientific data systems.",
    updated: "Updated Apr 5, 2026",
    href: "https://github.com/arsenelupin14/portfolio-site",
  },
  {
    name: "iris-solar-uv-data",
    language: "Python",
    description:
      "Reproducible IRIS Level 2 workflow for archive discovery, metadata indexing, per-observation quicklooks, and duplicate-window ROI audits.",
    updated: "Updated Apr 3, 2026",
    href: "https://github.com/arsenelupin14/iris-solar-uv-data",
  },
  {
    name: "t-crb-project",
    language: "Python",
    description:
      "Reproducible T CrB observational workflow with clean products, overlap validation, and archive-aware support assets.",
    updated: "Updated Apr 3, 2026",
    href: "https://github.com/arsenelupin14/t-crb-project",
  },
];

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [useHeroVideo, setUseHeroVideo] = useState(false);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const heroOverlayRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroFooterRef = useRef<HTMLDivElement>(null);
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const systems = useMemo(
    () =>
      ongoingWork.map((system) => {
        const currentBuild = system.sections?.find((section) => section.title === "Current Build");
        const architecture = system.sections?.find((section) => section.title === "Architecture");

        return {
          name: system.title,
          description: system.currentFocus,
          why: system.problemStatement ?? "",
          build: [...(currentBuild?.paragraphs ?? []), ...(currentBuild?.bullets ?? [])].join(" "),
          architecture: [
            ...(architecture?.paragraphs ?? []),
            ...(architecture?.bullets ?? []),
          ].join(" "),
          tags: system.tags ?? [],
          liveHref: system.links?.find((link) => /live/i.test(link.label))?.href,
          repoHref: system.links?.find((link) => /github|repo/i.test(link.label))?.href,
        };
      }),
    [],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 769px)");
    const updateHeroMedia = () => setUseHeroVideo(mediaQuery.matches);

    updateHeroMedia();
    mediaQuery.addEventListener("change", updateHeroMedia);

    return () => {
      mediaQuery.removeEventListener("change", updateHeroMedia);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const heroHeight = window.innerHeight;
      const progress = Math.min(scrollY / (heroHeight * 0.6), 1);

      if (heroBgRef.current) {
        const opacity = 1 - progress * 1.3;
        heroBgRef.current.style.opacity = String(Math.max(opacity, 0));
      }

      if (heroVideoRef.current) {
        const parallaxOffset = scrollY * 0.3;
        heroVideoRef.current.style.transform = `translate(-50%, calc(-50% + ${parallaxOffset}px)) scale(1.05)`;
      }

      if (heroOverlayRef.current) {
        const overlayDarkness = 0.1 + progress * 0.9;
        heroOverlayRef.current.style.background = `linear-gradient(
          to bottom,
          rgba(0,0,0,${overlayDarkness * 0.5}) 0%,
          rgba(0,0,0,${Math.min(overlayDarkness * 0.8, 1)}) 25%,
          rgba(0,0,0,${Math.min(overlayDarkness, 1)}) 50%,
          rgba(0,0,0,${Math.min(overlayDarkness + 0.15, 1)}) 70%,
          rgba(0,0,0,${Math.min(overlayDarkness + 0.3, 1)}) 85%,
          rgba(0,0,0,${Math.min(overlayDarkness + 0.5, 1)}) 95%,
          rgba(0,0,0,1) 100%
        )`;
      }

      if (heroContentRef.current) {
        const contentOpacity = 1 - progress * 1.5;
        const contentTranslate = progress * -80;
        heroContentRef.current.style.opacity = String(Math.max(contentOpacity, 0));
        heroContentRef.current.style.transform = `translateY(${contentTranslate}px)`;
      }

      if (heroFooterRef.current) {
        const footerOpacity = 1 - progress * 1.8;
        heroFooterRef.current.style.opacity = String(Math.max(footerOpacity, 0));
      }

      const scrollPos = window.pageYOffset + 120;
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
          break;
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return (
    <>
      <header className="site-nav" id="nav">
        <div className="nav-inner">
          <a
            href="#hero"
            className="nav-brand"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("hero");
              setMobileOpen(false);
            }}
          >
            <span className="nav-brand-name mono">IKBAR FAIZ</span>
          </a>

          <nav className="nav-links">
            {navItems.map((item, index) => (
              <span className="nav-item-wrap" key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link mono ${activeSection === item.id ? "is-active" : ""}`}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
                {index < navItems.length - 1 && <span className="nav-divider">/</span>}
              </span>
            ))}
          </nav>

          <button
            className={`nav-hamburger ${mobileOpen ? "active" : ""}`}
            id="navHamburger"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${mobileOpen ? "active" : ""}`} id="mobileMenu">
        <div className="mobile-menu-inner">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="mobile-link mono"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(item.id);
                setMobileOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <main>
        <section className="hero" id="hero">
          <div className="hero-bg" ref={heroBgRef}>
            <img
              className="hero-image-bg"
              src="/artemis-earthset.jpg"
              alt="Earthset from Artemis II"
              loading="eager"
            />
            {useHeroVideo ? (
              <video
                ref={heroVideoRef}
                className="hero-video-bg"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/artemis-earthset.jpg"
                aria-hidden="true"
              >
                <source src="/earth-rotation.mp4" type="video/mp4" />
              </video>
            ) : null}
            <div className="hero-overlay" ref={heroOverlayRef} />
          </div>

          <div className="hero-header">
            <div className="hero-section-label mono">IDENTIFICATION</div>
            <div className="hero-affiliation mono">
              <span className="accent-label mono">BINUS University</span>
              <span>— Computer Science</span>
            </div>
          </div>

          <div className="hero-content" ref={heroContentRef}>
            <div className="masthead">
              <div className="masthead-line">
                <span className="masthead-text">IKBAR</span>
              </div>
              <div className="masthead-line">
                <span className="masthead-text">FAIZ</span>
              </div>
            </div>
            <p className="hero-subtitle serif-italic">
              Data Engineer // Astrophysics Pipeline // Reproducible Systems
            </p>
            <p className="hero-tagline mono">// Messy data in. Structured artifacts out.</p>
          </div>

          <div className="hero-footer" ref={heroFooterRef}>
            <div className="hero-meta mono">
              <span>
                STATUS: <span className="status-available">AVAILABLE</span>
              </span>
              <span>FOCUS: DATA ENGINEERING / WORKFLOWS / BACKEND</span>
              <span>REPOS: 7 PUBLIC</span>
              <span>LOCATION: Jakarta, Indonesia</span>
            </div>
          </div>
        </section>

        <section className="section section-white" id="about">
          <div className="section-header">
            <span className="section-label mono">ABOUT</span>
          </div>

          <div className="about-layout reveal">
            <div className="about-text">
              <h2 className="section-headline display">
                Engineering Signal First,
                <br />
                Context Second.
              </h2>
            </div>
            <div className="about-photo-circle">
              <Image
                src="/ikbarfaiz.jpeg"
                alt="Ikbar Faiz"
                width={180}
                height={180}
                loading="lazy"
              />
            </div>
          </div>

          <div className="about-grid">
            <div className="about-column reveal">
              <h3 className="about-column-title mono">What I Build</h3>
              <p>
                I build systems that take raw public data through explicit ingest, metadata
                handling, validation, and analysis-ready outputs.
              </p>
              <p>
                Across projects, the recurring pattern is staged processing, rerunnable
                artifacts, and enough provenance to inspect what changed between raw inputs and
                derived results.
              </p>
              <p>
                The operating domain here is scientific data, but the transferable value is
                workflow design, validation discipline, and technical ownership over messy
                datasets.
              </p>
            </div>

            <div className="about-column reveal">
              <h3 className="about-column-title mono">How This Site Is Structured</h3>
              <p>
                Completed work is separated from active systems so finished case studies stay
                legible and ongoing builds stay honest.
              </p>
              <p>
                Repositories only move into the curated project set when the workflow, artifacts,
                and validation story are clear enough to stand on their own.
              </p>
              <p>
                Active systems stay in a lighter log format so platform direction, tooling, and
                unfinished work can remain visible without pretending to be complete.
              </p>
            </div>
          </div>

          <div className="section-footer mono">
            <span>STRUCTURE: COMPLETED SEPARATED FROM ACTIVE</span>
            <span>STANDARD: WORKFLOW + ARTIFACTS + VALIDATION</span>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-header">
            <span className="section-label mono">VALIDATED WORK</span>
          </div>

          <div className="projects-intro reveal">
            <h2 className="section-headline display">Data Workflows</h2>
            <p className="section-lead serif-italic">
              I build Python-centered workflows that take messy records through ingest,
              metadata shaping, validation, and structured outputs. The datasets are scientific,
              but the signal is engineering discipline, reproducibility, and traceable execution.
            </p>
          </div>

          <article className="project-featured reveal">
            <div className="project-featured-header">
              <span className="project-badge mono">completed</span>
              <span className="project-category mono">data workflows</span>
            </div>
            <h3 className="project-name display">IRIS Archive Ingestion &amp; Metadata Pipeline</h3>
            <p className="project-lead serif-italic">
              A metadata-aware Python workflow for querying, downloading, indexing, and
              analyzing public IRIS observation files.
            </p>
            <p className="project-desc">
              The system keeps raw inputs, per-observation lineage, duplicate-obsid handling,
              and derived outputs coordinated inside one reproducible pipeline. Archive query,
              obs_dir-aware storage, metadata indexing, per-observation outputs, and merged
              event artifacts for IRIS Level 2 data.
            </p>
            <div className="project-meta-grid">
              <div className="meta-item">
                <span className="meta-label mono">Repository</span>
                <span className="meta-value mono">iris-solar-uv-data</span>
              </div>
              <div className="meta-item">
                <span className="meta-label mono">Stack</span>
                <span className="meta-value mono">
                  Python / Astropy / SunPy / NumPy / Pandas / PyArrow
                </span>
              </div>
              <div className="meta-item">
                <span className="meta-label mono">Workflow</span>
                <span className="meta-value mono">Query → Download → Index → Analyze → Output</span>
              </div>
              <div className="meta-item">
                <span className="meta-label mono">Validation</span>
                <span className="meta-value mono">
                  Duplicate obsid handling, per-observation lineage, merged artifacts
                </span>
              </div>
            </div>
            <div className="project-actions">
              <a
                href="https://github.com/arsenelupin14/iris-solar-uv-data"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline mono"
              >
                View Repository
              </a>
            </div>
          </article>

          <div className="project-rows">
            {projects.map((project, index) => (
              <div
                className="project-row reveal"
                key={project.name}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div className="project-row-number mono">{project.number}</div>
                <div className="project-row-info">
                  <div className="project-row-header">
                    <span className="project-row-name mono">{project.name}</span>
                    <span className="status-badge status-completed mono">completed</span>
                  </div>
                  <p className="project-row-tagline serif-italic">{project.tagline}</p>
                  <p className="project-row-desc">{project.description}</p>
                  <div className="project-row-meta">
                    <span className="meta-label mono">Stack:</span>
                    {project.stack.map((tech) => (
                      <span className="tech-tag mono" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-row-action">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-ghost mono"
                    >
                      View repo →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-footer mono">
            <span>COUNT: 4 COMPLETED SYSTEMS</span>
            <span>DOMAIN: ASTRONOMY / SCIENTIFIC DATA</span>
            <span>LANGUAGE: PYTHON</span>
          </div>
        </section>

        <section className="section section-white" id="systems">
          <div className="section-header">
            <span className="section-label mono">ACTIVE BUILD PATH</span>
          </div>

          <div className="systems-intro reveal">
            <h2 className="section-headline display">Current Systems</h2>
            <p className="section-lead serif-italic">
              Active builds are logged separately from finished case studies so iteration,
              architecture decisions, and public-facing system work stay visible without being
              overstated.
            </p>
          </div>

          <div className="systems-list">
            {systems.map((system, index) => (
              <div key={system.name}>
                <div className="system-item reveal" style={{ transitionDelay: `${index * 0.08}s` }}>
                  <div className="system-item-header">
                    <div>
                      <h3 className="system-name display">{system.name}</h3>
                      <span className="status-badge status-active mono">active system</span>
                    </div>
                    <div className="system-links">
                      {system.liveHref && (
                        <a
                          href={system.liveHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline mono"
                        >
                          Live Site
                        </a>
                      )}
                      {system.repoHref && (
                        <a
                          href={system.repoHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-ghost mono"
                        >
                          GitHub →
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="system-desc">{system.description}</p>
                  <div className="system-details">
                    <div className="system-detail">
                      <span className="detail-label mono">Why It Exists</span>
                      <span className="detail-value">{system.why}</span>
                    </div>
                    <div className="system-detail">
                      <span className="detail-label mono">Current Build</span>
                      <span className="detail-value">{system.build}</span>
                    </div>
                    <div className="system-detail">
                      <span className="detail-label mono">Architecture</span>
                      <span className="detail-value">{system.architecture}</span>
                    </div>
                  </div>
                  <div className="system-tags">
                    {system.tags.map((tag) => (
                      <span className="tech-tag mono" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {index < systems.length - 1 && <div className="system-divider" />}
              </div>
            ))}
          </div>

          <div className="section-footer mono">
            <span>COUNT: {String(systems.length).padStart(2, "0")} ACTIVE SYSTEMS</span>
            <span>STATUS: ONGOING BUILD</span>
          </div>
        </section>

        <section className="section" id="focus">
          <div className="section-header">
            <span className="section-label mono">CORE AREAS</span>
          </div>

          <div className="focus-intro reveal">
            <h2 className="section-headline display">Technical Focus</h2>
            <p className="section-lead serif-italic">
              The grouping is engineering-first: workflow handling, structured execution, and
              reproducibility come before the domain context.
            </p>
          </div>

          <div className="focus-grid">
            {[
              {
                number: "01",
                title: "Data Workflows",
                description:
                  "Ingest, standardize, validate, and package messy public data into structured artifacts that can be rerun and inspected.",
              },
              {
                number: "02",
                title: "Workflow Systems",
                description:
                  "Design multi-stage paths from raw records to derived outputs, with explicit checkpoints, provenance, and visible validation surfaces.",
              },
              {
                number: "03",
                title: "Research Software",
                description:
                  "Build domain-specific tools where the scientific context is the operating domain and engineering discipline stays in the foreground.",
              },
            ].map((area, index) => (
              <div
                className="focus-column reveal"
                key={area.title}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <span className="focus-number mono">{area.number}</span>
                <h3 className="focus-title">{area.title}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>

          <div className="section-footer mono">
            <span>AREAS: 3 CORE DOMAINS</span>
            <span>APPROACH: ENGINEERING-FIRST</span>
          </div>
        </section>

        <section className="section section-white" id="github">
          <div className="section-header">
            <span className="section-label mono">SUPPORTING SIGNAL</span>
          </div>

          <div className="github-intro reveal">
            <h2 className="section-headline display">GitHub Activity</h2>
            <p className="section-lead serif-italic">
              Recent public repository movement, kept secondary to the curated case-study set but
              useful as a consistency check.
            </p>
          </div>

          <div className="github-repos">
            {repoCards.map((repo, index) => (
              <a
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-card reveal"
                key={repo.name}
                style={{ transitionDelay: `${index * 0.06}s` }}
              >
                <div className="repo-card-header">
                  <span className="repo-name mono">{repo.name}</span>
                  <span className="repo-lang mono">{repo.language}</span>
                </div>
                <p className="repo-desc">{repo.description}</p>
                <div className="repo-card-meta mono">
                  <span>{repo.updated}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="section-footer mono">
            <span>REPOS: 7 PUBLIC</span>
            <span>PRIMARY: PYTHON / TYPESCRIPT</span>
          </div>
        </section>

        <section className="section section-dark" id="contact">
          <div className="section-header">
            <span className="section-label mono mono-inverse">CONTACT</span>
          </div>

          <div className="contact-content reveal">
            <div className="contact-header-meta mono mono-inverse">
              <span>
                STATUS: <span className="status-available">AVAILABLE</span>
              </span>
              <span>LOCATION: Jakarta, Indonesia</span>
              <span>FOCUS: DATA ENGINEERING / BACKEND</span>
            </div>

            <h2 className="contact-headline display mono-inverse">
              Reach out
              <br />
              directly.
            </h2>

            <div className="red-rule" />

            <p className="contact-subtitle serif-italic">
              If you want to talk about data workflows, backend-oriented builds, internships, or
              collaboration, this is the fastest way to reach me.
            </p>

            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-item-label mono mono-inverse">Phone</span>
                  <a href="tel:+6282134099169" className="contact-item-value">
                    +62 821 3409 9169
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-item-label mono mono-inverse">Email</span>
                  <a href="mailto:ikbarfaiz14@gmail.com" className="contact-item-value">
                    ikbarfaiz14@gmail.com
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-item-label mono mono-inverse">GitHub</span>
                  <a
                    href="https://github.com/arsenelupin14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item-value"
                  >
                    github.com/arsenelupin14
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-item-label mono mono-inverse">LinkedIn</span>
                  <a
                    href="https://linkedin.com/in/ikbarfaiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item-value"
                  >
                    linkedin.com/in/ikbarfaiz
                  </a>
                </div>
              </div>
              <div className="contact-actions">
                <a href="mailto:ikbarfaiz14@gmail.com" className="btn btn-inverse mono">
                  Email Me
                </a>
                <a href="/ikbar-faiz-cv.pdf" className="btn btn-outline-inv mono">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="mono">Ikbar Faiz</span>
            <span className="footer-tagline mono">
              Data workflows, reproducible systems, and technical case studies built around
              messy datasets and visible engineering decisions.
            </span>
          </div>
          <div className="footer-links">
            <a href="mailto:ikbarfaiz14@gmail.com" className="footer-link mono">
              Email
            </a>
            <a
              href="https://github.com/arsenelupin14"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link mono"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ikbarfaiz"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link mono"
            >
              LinkedIn
            </a>
          </div>
          <div className="footer-copy mono">
            <span>Based in Indonesia. Focused on data engineering and workflow-oriented backend roles.</span>
            <span>© 2026 Ikbar Faiz</span>
          </div>
        </div>
      </footer>
    </>
  );
}
