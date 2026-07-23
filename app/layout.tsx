import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gunal K — AI Systems Architect",
  description:
    "I design AI systems that capture leads, automate operations, and create leverage. Voice agents, CRM automation, outreach systems, and intelligent workflows for serious businesses.",
  keywords: [
    "AI Architect",
    "AI Automation",
    "Voice Agent",
    "Lead Recovery System",
    "CRM Automation",
    "n8n",
    "Workflow Automation",
    "AI Systems",
    "Gunal K",
    "AI Consultant",
  ],
  authors: [{ name: "Gunal K" }],
  creator: "Gunal K",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gunalk.com",
    title: "Gunal K — AI Systems Architect",
    description:
      "I design AI systems that capture leads, automate operations, and create leverage.",
    siteName: "Gunal K",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gunal K — AI Systems Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gunal K — AI Systems Architect",
    description:
      "I design AI systems that capture leads, automate operations, and create leverage.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${bricolage.variable}`}>
      <body className="antialiased bg-[#050507] text-[#f0f0f5] font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
