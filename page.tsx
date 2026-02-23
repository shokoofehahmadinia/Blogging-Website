import WindowFrame from "@/components/WindowFrame";
import Image from "next/image";
import { Mail, Instagram, Twitter, Facebook, Phone, Youtube } from "lucide-react";

export default function Home() {
  return (
    <WindowFrame>

      {/* HERO SECTION */}
      <div className="about-hero">
        {/* ✅ FIX: next/image for optimization */}
        <div style={{ position: "relative", width: "55%", minHeight: "600px" }}>
          <Image
            src="https://picsum.photos/900/1100"
            alt="Author portrait"
            fill
            style={{ objectFit: "cover", borderRadius: "20px" }}
            priority
          />
        </div>

        <div className="author-info">
          <h1>About the Writer</h1>
          <div className="author-meta">
            <h2>John Doe</h2>
            <p>Age: 25</p>
            <p>Hyderabad, India</p>
            <p>Writer | Poet | Thinker</p>
          </div>
        </div>
      </div>

      <div className="section-divider" />

      {/* BOOK 1 */}
      <div className="book-section">
        <div className="book-image" style={{ position: "relative", width: "350px", height: "490px", flexShrink: 0 }}>
          <Image
            src="https://picsum.photos/500/700"
            alt="Book One cover"
            fill
            style={{ objectFit: "cover", borderRadius: "16px" }}
          />
        </div>

        <div className="book-content">
          <h2>Book One</h2>
          <p>
            Lorem ipsum description of first book. A reflective work exploring
            discipline, silence and creative persistence.
          </p>
        </div>
      </div>

      <div className="section-divider" />

      {/* BOOK 2 */}
      <div className="book-section reverse">
        <div className="book-image" style={{ position: "relative", width: "350px", height: "490px", flexShrink: 0 }}>
          <Image
            src="https://picsum.photos/501/701"
            alt="Book Two cover"
            fill
            style={{ objectFit: "cover", borderRadius: "16px" }}
          />
        </div>

        <div className="book-content">
          <h2>Book Two</h2>
          <p>
            Lorem ipsum description of second book. A deeper narrative on
            solitude, expression and personal philosophy.
          </p>
        </div>
      </div>

      <div className="section-divider" />

      {/* CONTACT SECTION */}
      <div id="contact" className="contact-grid">
        <div className="contact-item">
          <Mail size={18} strokeWidth={1.5} />
          writer@email.com
        </div>
        <div className="contact-item">
          <Instagram size={18} strokeWidth={1.5} />
          @writer
        </div>
        <div className="contact-item">
          <Twitter size={18} strokeWidth={1.5} />
          @writer
        </div>
        <div className="contact-item">
          <Facebook size={18} strokeWidth={1.5} />
          writer.page
        </div>
        <div className="contact-item">
          <Phone size={18} strokeWidth={1.5} />
          +91 9876543210
        </div>
        <div className="contact-item">
          <Youtube size={18} strokeWidth={1.5} />
          writer channel
        </div>
      </div>

    </WindowFrame>
  );
}