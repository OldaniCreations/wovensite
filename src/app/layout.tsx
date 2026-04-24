import type { Metadata } from "next";
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
  display: "swap",
});

export const metadata: Metadata = {
  title: "Woven Logic Studio",
  description:
    "A design studio for complex systems—product, research, and technology.",
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
      <body className="min-h-dvh bg-cream text-gray-900 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
