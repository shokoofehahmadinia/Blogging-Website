import WindowFrame from "@/components/WindowFrame";

export default async function PoetryDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <WindowFrame>
      <h1>{slug.replace(/-/g, " ")}</h1>
      <p>
        This is the full poem content. Later it will come from CMS.
      </p>
    </WindowFrame>
  );
}
