"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import WindowFrame from "@/components/WindowFrame";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Invalid email or password. Please try again.");
    } else {
      router.push("/");
    }
  };

  return (
    <WindowFrame>
      <div className="login-wrapper">
        <div className="login-card">
          <h1>Welcome Back</h1>
          <p>Login to continue your journey.</p>

          {error && (
            <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>
              {error}
            </p>
          )}

          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Google OAuth login */}
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            style={{
              marginTop: "16px",
              padding: "12px",
              borderRadius: "40px",
              border: "1.5px solid var(--border-soft)",
              background: "transparent",
              color: "var(--text-main)",
              cursor: "pointer",
              width: "100%",
              fontSize: "14px",
              transition: "0.3s",
            }}
          >
            Continue with Google
          </button>

          <div className="login-footer">
            Don&apos;t have an account?{" "}
            <Link href="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}