import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", display: "swap" });

export const metadata: Metadata = {
  title: "MARGA NANIME — Modern Anime Community",
  description:
    "MARGA NANIME is a modern anime community. Join members, explore the gallery, read the blog, and connect with fellow fans.",
  keywords: ["anime", "community", "marga nanime", "otaku", "anime indonesia"],
  openGraph: {
    title: "MARGA NANIME",
    description: "Modern anime community — join, explore, connect.",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "MARGA NANIME" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
