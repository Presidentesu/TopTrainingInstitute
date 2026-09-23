import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Top Training Institute | Languages, Technology & Professional Skills",
    template: "%s | Top Training Institute",
  },
  description:
    "Develop practical skills in languages, computers, programming, web development, graphic design, video production, digital marketing, accounting software, engineering software and more at Top Training Institute.",
  keywords: [
    "Top Training Institute",
    "practical skills training",
    "web development course",
    "Python programming",
    "AutoCAD training",
    "graphic design course",
    "video editing classes",
    "QuickBooks accounting",
    "English communication skills",
    "engineering software courses",
  ],
  authors: [{ name: "Top Training Institute" }],
  creator: "Top Training Institute",
  publisher: "Top Training Institute",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://toptraininget.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://toptraininget.com",
    title: "Top Training Institute | Languages, Technology & Professional Skills",
    description:
      "Develop practical skills in languages, computers, programming, web development, graphic design, video production, digital marketing, accounting software, engineering software and more.",
    siteName: "Top Training Institute",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Training Institute | Practical Career Skills",
    description:
      "Develop practical skills in languages, computers, programming, web development, design, and engineering software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
