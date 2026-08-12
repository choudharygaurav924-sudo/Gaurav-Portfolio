import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import { BRAND } from "@/lib/data";
import "./globals.css";

/** Anton — the condensed poster face for all display headlines. */
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

/** Inter stands in for Geist — same grotesque proportions, on Google Fonts. */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: `${BRAND.name} — Design Studio`,
  description: BRAND.headlineTop + " " + BRAND.headlineBottom,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: `${BRAND.name} — Design Studio`,
    description: BRAND.headlineTop + " " + BRAND.headlineBottom,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
