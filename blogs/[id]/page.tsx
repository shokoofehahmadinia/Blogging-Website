import type { Metadata } from "next";
import WindowFrame from "@/components/WindowFrame";
import Image from "next/image";
import { notFound } from "next/navigation";

const blogs = [
  { id: 1, title: "First Blog", content: "Full content of first blog...", img: "https://picsum.photos/1000/600" },
  { id: 2, title: "Second Blog", content: "Full content of second blog...", img: "https://picsum.photos/1001/601" },
  { id: 3, title: "Third Blog", content: "Full content of third blog...", img: "https://picsum.photos/1002/602" },
  { id: 4, title: "Fourth Blog", content: "Full content of fourth blog...", img: "https://picsum.photos/1003/603" },
];

// ✅ SEO: Dynamic metadata per blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) return { title: "Post Not Found" };

  return {
    title: blog.title,
    description: blog.content.slice(0, 150),
    openGraph: {
      title: blog.title,
      description: blog.content.slice(0, 150),
      images: [{ url: blog.img, width: 1000, height: 600, alt: blog.title }],
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) return notFound();

  return (
    <WindowFrame>
      <div className="page-header">
        <h1>{blog.title}</h1>
        <div className="section-divider" />
      </div>

      <div className="blog-detail">
        <div style={{ position: "relative", width: "100%", height: "500px", marginBottom: "40px" }}>
          <Image
            src={blog.img}
            alt={blog.title}
            fill
            style={{ objectFit: "cover", borderRadius: "20px" }}
            priority
          />
        </div>
        <p>{blog.content}</p>
      </div>
    </WindowFrame>
  );
}