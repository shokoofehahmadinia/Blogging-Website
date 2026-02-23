"use client";

import WindowFrame from "@/components/WindowFrame";
import Link from "next/link";

const poems = [
  { id: 1, title: "Silent Night", preview: "A calm night whispers softly..." },
  { id: 2, title: "Lost Soul", preview: "Searching through endless thoughts..." },
  { id: 3, title: "Burning Sky", preview: "Crimson clouds bleed into dusk..." },
  { id: 4, title: "Deep Ocean", preview: "Beneath the silent tides..." },
];

export default function Poetry() {
  return (
    <WindowFrame>
      <div className="page-header">
        <h1>Poetry</h1>
        <div className="section-divider" />
      </div>

      <div className="poetry-grid">
        {poems.map((poem) => (
          <div key={poem.id} className="poetry-card">
            <h2>{poem.title}</h2>
            <p>{poem.preview}</p>
            <Link href={`/poetry/${poem.id}`} className="read-more">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </WindowFrame>
  );
}
