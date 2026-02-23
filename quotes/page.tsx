"use client";

import WindowFrame from "@/components/WindowFrame";

export default function Quotes() {
  const quotes = [
    { id: 1, img: "https://picsum.photos/500/400?1" },
    { id: 2, img: "https://picsum.photos/500/400?2" },
    { id: 3, img: "https://picsum.photos/500/400?3" },
    { id: 4, img: "https://picsum.photos/500/400?4" },
  ];

  return (
    <WindowFrame>
      <h1 className="page-title">Quotes</h1>
      <div className="section-divider"></div>

      <div className="quotes-grid">
        {quotes.map((quote) => (
          <div key={quote.id} className="quote-card">
            <img src={quote.img} />

            <div className="quote-actions">
              <a href={quote.img} download className="action-btn">
                Download
              </a>

              <button
                className="action-btn"
                onClick={() =>
                  navigator.share
                    ? navigator.share({ url: quote.img })
                    : alert("Sharing not supported on this browser")
                }
              >
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </WindowFrame>
  );
}
