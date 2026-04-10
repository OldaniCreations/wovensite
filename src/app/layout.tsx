import type { Metadata } from "next";
import { Syne, Lora } from "next/font/google";
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
  title: "Elizabeth Oldani — Product Designer",
  description: "Design that handles complexity. High-stakes product design for regulated environments.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
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
      <body className="min-h-full flex flex-col bg-cream text-gray-900 antialiased">
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}
