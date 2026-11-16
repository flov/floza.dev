import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Software engineer in Leipzig. Next.js, React Native, Rails, and TypeScript. CV, selected work, and links for recruiters.";

export const metadata: Metadata = {
  metadataBase: new URL("https://floza.dev"),
  title: "Florian Vallen · Software Engineer",
  description,
  openGraph: {
    title: "Florian Vallen · Software Engineer",
    description,
    images: [
      {
        url: "/profile.jpg",
        width: 1024,
        height: 1024,
        alt: "Florian Vallen",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Florian Vallen · Software Engineer",
    description,
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
