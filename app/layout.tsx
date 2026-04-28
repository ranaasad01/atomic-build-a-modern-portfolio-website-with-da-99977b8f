import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Alex Morgan — Full-Stack Engineer",
  description:
    "Full-stack engineer specializing in React, Next.js, and scalable web applications. Building fast, beautiful, and accessible digital experiences.",
  keywords: ["full-stack engineer", "React", "Next.js", "TypeScript", "web developer", "portfolio"],
  authors: [{ name: "Alex Morgan" }],
  creator: "Alex Morgan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexmorgan.dev",
    title: "Alex Morgan — Full-Stack Engineer",
    description:
      "Full-stack engineer specializing in React, Next.js, and scalable web applications.",
    siteName: "Alex Morgan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan — Full-Stack Engineer",
    description:
      "Full-stack engineer specializing in React, Next.js, and scalable web applications.",
    creator: "@alexmorgan",
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
    <html lang="en" suppressHydrationWarning>
      <body className="noise antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
