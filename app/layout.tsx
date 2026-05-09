import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Karoliya Agin Doli R G | AI & Data Science Portfolio — Python · ML · Power BI",
  description:
    "Futurist AI & Data Science engineer. Python, SQL, Power BI, machine learning, and intelligent product experiences built for clarity and scale.",
  openGraph: {
    title:
      "Karoliya Agin Doli R G | AI & Data Science Graduate",
    description:
      "Building intelligent, data-driven, and future-ready digital solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable}`}
    >
      <body className="font-sans">
        <AnimatedBackground />
        <PageIntro>
          <Navbar />
          {children}
        </PageIntro>
      </body>
    </html>
  );
}
