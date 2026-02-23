"use client";

import WindowFrame from "@/components/WindowFrame";
import { useTheme } from "@/app/context/ThemeContext";
import { useRouter } from "next/navigation";

export default function Settings() {
  const { dark, toggleTheme } = useTheme();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("theme");
    document.body.classList.remove("dark");
    router.push("/");
  };

  const handleContactRedirect = () => {
    // Direct anchor navigation (no hacky timeout)
    router.push("/#contact");
  };

  return (
    <WindowFrame>
      <div className="page-header">
        <h1>Settings</h1>
        <div className="section-divider" />
      </div>

      <div className="settings-container">

        <button className="settings-btn" onClick={toggleTheme}>
          {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>

        <button className="settings-btn" onClick={handleContactRedirect}>
          Contact Information
        </button>

        <button className="settings-btn" onClick={handleLogout}>
          Logout
        </button>

      </div>
    </WindowFrame>
  );
}
