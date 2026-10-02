import type { Metadata } from "next";
import { Outfit, Lora } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ICIG_SITE_INFO } from "@/data/icig-content";
import "./globals.css";

const sans = Outfit({
  variable: "--font-sans-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const serif = Lora({
  variable: "--font-serif-body",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: `${ICIG_SITE_INFO.name} — ${ICIG_SITE_INFO.tagline}`,
    template: `%s — ${ICIG_SITE_INFO.acronym}`,
  },
  description:
    "Internal Control Institute Ghana (ICIG) advances knowledge, competence and professional practice in internal control across business, public and non-profit sectors in Ghana.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-canvas text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}