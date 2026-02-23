"use client";

import WindowFrame from "@/components/WindowFrame";

const videos = [
  {
    id: 1,
    title: "Creative Discipline",
    desc: "A reflection on consistency and focus in creative work.",
    url: "https://www.youtube.com/embed/jNQXAC9IVRw",
  },
  {
    id: 2,
    title: "Deep Focus",
    desc: "Why modern creators struggle with attention.",
    url: "https://www.youtube.com/embed/jNQXAC9IVRw",
  },
];

export default function Videos() {
  return (
    <WindowFrame>
      <div className="page-header">
        <h1>Videos</h1>
        <div className="section-divider" />
      </div>

      <div className="video-list">
        {videos.map((video) => (
          <div key={video.id} className="video-row">
            <div className="video-desc">
              <h2>{video.title}</h2>
              <p>{video.desc}</p>
            </div>

            {/* ✅ FIX: Added title attribute for accessibility */}
            <iframe
              src={video.url}
              title={video.title}
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </WindowFrame>
  );
}