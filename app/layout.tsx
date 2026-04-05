import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ikbar Faiz — Data Workflows & Reproducible Systems",
    template: "%s — Ikbar Faiz",
  },
  description:
    "Technical portfolio of Ikbar Faiz, focused on data workflows, reproducible systems, and engineering-first case studies.",
  keywords: [
    "Ikbar Faiz",
    "data engineering",
    "data workflows",
    "reproducible systems",
    "backend",
    "portfolio",
  ],
  openGraph: {
    title: "Ikbar Faiz — Data Workflows & Reproducible Systems",
    description:
      "Engineering-first portfolio covering reproducible workflows, technical systems, and active data builds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
