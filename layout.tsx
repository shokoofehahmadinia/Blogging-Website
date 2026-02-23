import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthProvider";
import { Yesteryear } from "next/font/google";

const yesteryear = Yesteryear({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-brand",
});

export const metadata: Metadata = {
  title: {
    default: "John Doe — Writer, Poet & Thinker",
    template: "%s | John Doe",
  },
  description:
    "The personal website of John Doe — writer, poet, and thinker based in Hyderabad, India.",
  keywords: ["writer", "poet", "blog", "poetry", "John Doe", "Hyderabad"],
  authors: [{ name: "John Doe" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yourwebsite.com",       // 🔁 Replace with your domain
    siteName: "John Doe",
    title: "John Doe — Writer, Poet & Thinker",
    description: "Explore the writings, poetry, and reflections of John Doe.",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // 🔁 Add to /public
        width: 1200,
        height: 630,
        alt: "John Doe — Writer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@writer",                   // 🔁 Your Twitter handle
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={yesteryear.variable}>
        {/* ✅ AuthProvider wraps ThemeProvider for session access everywhere */}
        <AuthProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}