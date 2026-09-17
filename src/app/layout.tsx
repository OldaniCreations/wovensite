import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Syne, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Woven Logic Studio",
    template: "%s | Woven Logic Studio",
  },
  description:
    "An independent problem-solving practice working across research, strategy, design, technology, experimentation, and storytelling.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${lora.variable} scroll-smooth`}
    >
      <body className="min-h-dvh bg-cream text-ink antialiased">
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-ZKHVQS4JLY" />
      </body>
    </html>
  );
}
