import { sanityClient } from "@/lib/sanity";

export interface Blog {
  _id: string;
  title: string;
  description: string;
  image: any;           // Sanity image object
  content: string;
  slug: { current: string };
}

export async function getBlogs(): Promise<Blog[]> {
  return sanityClient.fetch(
    `*[_type == "blog"] | order(_createdAt desc) {
      _id,
      title,
      description,
      image,
      content,
      slug
    }`
  );
}

export async function getBlogById(id: string): Promise<Blog | null> {
  return sanityClient.fetch(
    `*[_type == "blog" && slug.current == $id][0] {
      _id,
      title,
      description,
      image,
      content,
      slug
    }`,
    { id }
  );
}