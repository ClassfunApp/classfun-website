"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { LogoSVG } from "./Logo";

const BLUE = "#3533C6";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "For Schools", href: "/#for-schools" },
  { label: "For Parents", href: "/#for-parents" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Download", href: "/#download" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        transition: "all 0.3s ease",
        padding: "0 5vw",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <LogoSVG height={34} />
        </Link>

        {/* Desktop links */}
        <div
          className="desktop-nav"
          style={{ display: "flex", gap: 32, alignItems: "center" }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                color: "#1a1a2e",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 600,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = BLUE)
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#1a1a2e")
              }
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#download"
            style={{
              background: `linear-gradient(135deg, ${BLUE}, #5552e0)`,
              color: "#fff",
              textDecoration: "none",
              padding: "10px 22px",
              borderRadius: 50,
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              boxShadow: `0 4px 14px ${BLUE}40`,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 20px ${BLUE}50`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "none";
              (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 14px ${BLUE}40`;
            }}
          >
            Get the App
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
          }}
          aria-label="Toggle menu"
        >
          <div
            style={{
              width: 24,
              height: 2,
              background: "#1a1a2e",
              marginBottom: 5,
              borderRadius: 2,
              transition: "all 0.2s",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <div
            style={{
              width: 24,
              height: 2,
              background: "#1a1a2e",
              marginBottom: 5,
              borderRadius: 2,
              opacity: menuOpen ? 0 : 1,
              transition: "all 0.2s",
            }}
          />
          <div
            style={{
              width: 24,
              height: 2,
              background: "#1a1a2e",
              borderRadius: 2,
              transition: "all 0.2s",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(16px)",
            padding: "16px 5vw 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            borderTop: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#1a1a2e",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 600,
                padding: "8px 0",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#download"
            onClick={() => setMenuOpen(false)}
            style={{
              background: `linear-gradient(135deg, ${BLUE}, #5552e0)`,
              color: "#fff",
              textDecoration: "none",
              padding: "12px 24px",
              borderRadius: 50,
              fontSize: 15,
              fontWeight: 700,
              textAlign: "center",
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
            }}
          >
            Get the App
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
