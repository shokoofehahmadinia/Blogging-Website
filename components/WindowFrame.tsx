"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PenLine,
  FileText,
  Quote,
  Video,
  LogIn,
  Settings,
} from "lucide-react";
import PageTransition from "./PageTransition";

export default function WindowFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname.startsWith(path);
  };

  return (
    <div className="window">
      <div className="window-top">

        {/* BRAND SECTION */}
        <Link href="/" className="logo">
          <img
            src="/logo.png"
            alt="Logo"
            className="logo-image"
          />

          <span className="brand-name">
            Drashti's Kalpvruksh
          </span>
        </Link>

        {/* NAVIGATION */}
        <div className="nav-buttons">

          <Link
            href="/blogs"
            data-label="Blogs"
            className={`circle ${isActive("/blogs") ? "active" : ""}`}
          >
            <PenLine size={18} strokeWidth={1.8} />
          </Link>

          <Link
            href="/poetry"
            data-label="Poetry"
            className={`circle ${isActive("/poetry") ? "active" : ""}`}
          >
            <FileText size={18} strokeWidth={1.8} />
          </Link>

          <Link
            href="/quotes"
            data-label="Quotes"
            className={`circle ${isActive("/quotes") ? "active" : ""}`}
          >
            <Quote size={18} strokeWidth={1.8} />
          </Link>

          <Link
            href="/videos"
            data-label="Videos"
            className={`circle ${isActive("/videos") ? "active" : ""}`}
          >
            <Video size={18} strokeWidth={1.8} />
          </Link>

          <Link
            href="/settings"
            data-label="Settings"
            className={`circle ${isActive("/settings") ? "active" : ""}`}
          >
            <Settings size={18} strokeWidth={1.8} />
          </Link>

        </div>

        {/* LOGIN */}
        <Link
          href="/login"
          className="login"
          data-label="Login"
        >
          <LogIn size={18} strokeWidth={1.8} />
        </Link>

      </div>

      <div className="window-content">
        <PageTransition>
          {children}
        </PageTransition>
      </div>
    </div>
  );
}
