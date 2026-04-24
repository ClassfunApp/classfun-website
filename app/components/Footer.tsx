"use client";
import Link from "next/link";
import { LogoSVG } from "./Logo";
import { AppStoreBtn } from "./AppStoreBtn";

const ORANGE = "#F26522";

const footerCols = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "For Schools", href: "/#for-schools" },
      { label: "For Parents", href: "/#for-parents" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Download", href: "/#download" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "mailto:hello@classfun.app" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" },
      { label: "Delete My Account", href: "/delete-account" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "#1a1a2e",
        color: "rgba(255,255,255,0.6)",
        padding: "60px 5vw 32px",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          <div>
            <LogoSVG height={32} />
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                marginTop: 16,
                maxWidth: 260,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Connecting schools, activity centres, and families through safe,
              joyful, real-time communication.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 20, flexWrap: "wrap" }}>
              <AppStoreBtn store="apple" href="https://apps.apple.com" />
              <AppStoreBtn store="google" href="https://play.google.com" />
            </div>
          </div>
          {footerCols.map((col) => (
            <div key={col.heading}>
              <div
                style={{
                  fontFamily: "var(--font-nunito), Nunito, sans-serif",
                  fontWeight: 800,
                  fontSize: 14,
                  color: "#fff",
                  marginBottom: 16,
                }}
              >
                {col.heading}
              </div>
              {col.links.map((link) => (
                <div key={link.label} style={{ marginBottom: 9 }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      fontSize: 14,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "rgba(255,255,255,0.9)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "rgba(255,255,255,0.5)")
                    }
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 13 }}>© 2026 Classfun. All rights reserved.</div>
          <div style={{ fontSize: 13 }}>
            Made with <span style={{ color: ORANGE }}>♥</span> for schools
            everywhere.
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
