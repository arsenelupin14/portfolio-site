import localFont from "next/font/local";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const urwGothic = localFont({
  src: [
    {
      path: "./fonts/URWGothic-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/URWGothic-Demi.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-urw-gothic",
});

const adwaitaMono = localFont({
  src: [
    {
      path: "./fonts/AdwaitaMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AdwaitaMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-adwaita-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Ikbar Faiz | Data Workflows and Reproducible Systems",
    template: "%s | Ikbar Faiz",
  },
  description:
    "Editorial portfolio of Ikbar Faiz, focused on data workflows, validation-heavy systems, and recruiter-readable technical case studies.",
  keywords: [
    "Ikbar Faiz",
    "data engineering",
    "workflow systems",
    "reproducible pipelines",
    "research software",
    "scientific data systems",
    "portfolio",
  ],
  openGraph: {
    title: "Ikbar Faiz | Data Workflows and Reproducible Systems",
    description:
      "Curated workflow systems, data pipelines, and reproducible software built on real datasets.",
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
      <body
        className={`${urwGothic.variable} ${adwaitaMono.variable} bg-background font-sans text-foreground antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
