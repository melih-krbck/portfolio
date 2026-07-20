import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile, content } from "@/data/content";
import { LanguageProvider } from "@/i18n/language";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${content.tr.role}`,
  description: content.tr.tagline,
  openGraph: {
    title: `${profile.name} — ${content.tr.role}`,
    description: content.tr.tagline,
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
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-atmosphere">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
