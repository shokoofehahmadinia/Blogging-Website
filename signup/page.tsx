"use client";

import WindowFrame from "@/components/WindowFrame";
import Link from "next/link";

export default function Signup() {
  return (
    <WindowFrame>
      <div className="auth-container">
        <h1>Sign Up</h1>

        <form className="auth-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button type="submit" className="auth-btn">
            Create Account
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <Link href="/login">Login</Link>
        </p>
      </div>
    </WindowFrame>
  );
}
