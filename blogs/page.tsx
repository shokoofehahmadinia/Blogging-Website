"use client";
// NOTE: Metadata can't be exported from "use client" pages.
// For SEO on this page, create a separate layout.tsx inside app/blogs/
// OR convert to a Server Component and paginate differently.
// See the metadata-guide for options.

import { useState } from "react";
import WindowFrame from "@/components/WindowFrame";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  { id: 1, title: "First Blog", desc: "Intro text for first blog.", img: "https://picsum.photos/800/500" },
  { id: 2, title: "Second Blog", desc: "Intro text for second blog.", img: "https://picsum.photos/801/501" },
  { id: 3, title: "Third Blog", desc: "Intro text for third blog.", img: "https://picsum.photos/802/502" },
  { id: 4, title: "Fourth Blog", desc: "Intro text for fourth blog.", img: "https://picsum.photos/803/503" },
];

const BLOGS_PER_PAGE = 2;

export default function Blogs() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);
  const start = (page - 1) * BLOGS_PER_PAGE;
  const currentBlogs = blogs.slice(start, start + BLOGS_PER_PAGE);

  return (
    <WindowFrame>
      <div className="page-header">
        <h1>Blogs</h1>
        <div className="section-divider" />
      </div>

      <div className="blog-list">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <div style={{ position: "relative", width: "420px", height: "280px", flexShrink: 0 }}>
              <Image
                src={blog.img}
                alt={blog.title}
                fill
                style={{ objectFit: "cover", borderRadius: "16px", marginLeft: "20px" }}
              />
            </div>
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p>{blog.desc}</p>
              <Link href={`/blogs/${blog.id}`} className="read-more">Read More →</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button key={i} onClick={() => setPage(i + 1)} className={page === i + 1 ? "active-page" : ""}>
            {i + 1}
          </button>
        ))}
      </div>
    </WindowFrame>
  );
}