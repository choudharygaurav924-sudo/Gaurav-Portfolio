import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import { BRAND } from "@/lib/data";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: `${BRAND.name} — ${BRAND.headlineTop} / ${BRAND.headlineBottom}`,
  description: "Marketing / Creative / Digital — Toronto, Canada.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: BRAND.name,
    description: "Marketing / Creative / Digital — Toronto, Canada.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
