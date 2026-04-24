"use client";
import { useState } from "react";

interface AppStoreBtnProps {
  store: "apple" | "google";
  href?: string;
}

export function AppStoreBtn({ store, href = "#" }: AppStoreBtnProps) {
  const [hover, setHover] = useState(false);
  const isApple = store === "apple";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        background: hover ? "#111" : "#1a1a2e",
        color: "#fff",
        textDecoration: "none",
        padding: "12px 22px",
        borderRadius: 14,
        transition: "all 0.2s",
        transform: hover ? "translateY(-2px)" : "none",
        boxShadow: hover
          ? "0 8px 24px rgba(0,0,0,0.25)"
          : "0 2px 8px rgba(0,0,0,0.15)",
        minWidth: 160,
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        {isApple ? (
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        ) : (
          <>
            <path
              d="M3.18 23.76c.28.15.6.22.96.2l12.64-7.3-2.82-2.82-10.78 9.92z"
              fill="#EA4335"
            />
            <path
              d="M21.26 10.22 18.2 8.44l-3.12 2.78 3.12 3.12 3.08-1.78c.88-.51.88-1.83-.02-2.34z"
              fill="#FBBC05"
            />
            <path
              d="M3.18.24C2.86.42 2.64.78 2.64 1.28v21.44c0 .5.22.86.54 1.04l12-11.02L3.18.24z"
              fill="#4285F4"
            />
            <path
              d="M15.08 12 3.18.24l-.02-.01 12.64 7.3 3.12 2.78L15.08 12z"
              fill="#34A853"
            />
          </>
        )}
      </svg>
      <div>
        <div style={{ fontSize: 10, opacity: 0.75, lineHeight: 1 }}>
          {isApple ? "Download on the" : "Get it on"}
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 700,
            fontFamily: "var(--font-nunito), Nunito, sans-serif",
            lineHeight: 1.2,
          }}
        >
          {isApple ? "App Store" : "Google Play"}
        </div>
      </div>
    </a>
  );
}
