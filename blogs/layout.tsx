import type { Metadata } from "next";

// ✅ This layout wraps /blogs and /blogs/[id]
// Metadata here acts as the default for the whole /blogs section
export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Read the latest blog posts by John Doe on creativity, discipline, and the writing life.",
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}