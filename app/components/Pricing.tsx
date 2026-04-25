"use client";
import { useState, useEffect } from "react";
import { FadeUp, ScaleIn, StaggerChildren, StaggerItem } from "./AnimatedSection";

const BLUE = "#3533C6";
const ORANGE = "#F26522";

const PRICING = {
  local: { monthly: 1000, annual: 10000, currency: "₦" },
  intl: { monthly: 4, annual: 40, currency: "$" },
};

const PRICING_FEATURES = [
  "Unlimited centres & branches",
  "Attendance tracking & QR check-in",
  "Safe pickup codes (7-digit, 2 hr expiry)",
  "Real-time parent notifications (push + WhatsApp)",
  "Fee management & Paystack payments",
  "Progress reports & grading",
  "Staff & permission management",
  "Public enrollment page with custom branding",
  "Business wallet & bank withdrawals",
  "Multi-child family accounts",
];

export function Pricing({ defaultRegion }: { defaultRegion?: "local" | "intl" }) {
  const [region, setRegion] = useState<"local" | "intl">(defaultRegion ?? "intl");
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [children, setChildren] = useState(25);

  // Client-side timezone fallback when header detection isn't available (non-Vercel)
  useEffect(() => {
    if (defaultRegion) return;
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz === "Africa/Lagos") setRegion("local");
  }, [defaultRegion]);

  const p = PRICING[region];
  const totalMonth =
    billing === "monthly"
      ? p.monthly * children
      : Math.round((p.annual * children) / 12);
  const totalAnnual =
    billing === "monthly"
      ? p.monthly * children * 12
      : p.annual * children;
  const saving =
    billing === "annual" ? p.monthly * children * 12 - p.annual * children : 0;

  const fmt = (n: number) =>
    region === "local" ? `₦${n.toLocaleString()}` : `$${n.toLocaleString()}`;

  return (
    <section id="pricing" style={{ padding: "100px 5vw", background: "#FAFAF8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeUp style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              color: ORANGE,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Simple, transparent pricing
          </div>
          <h2
            style={{
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px,3.5vw,44px)",
              color: "#1a1a2e",
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            Pay only for enrolled children
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#666",
              maxWidth: 520,
              margin: "0 auto 32px",
            }}
          >
            No platform fee, no tiers. One simple per-child price — all features
            included. The parent app is always free.
          </p>

          {/* Toggles */}
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                background: "#fff",
                borderRadius: 50,
                padding: 5,
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                gap: 4,
              }}
            >
              {[
                { id: "local" as const, label: "🇳🇬 Nigeria (₦)" },
                { id: "intl" as const, label: "🌍 International ($)" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setRegion(opt.id)}
                  style={{
                    background:
                      region === opt.id
                        ? `linear-gradient(135deg,${BLUE},#5552e0)`
                        : "transparent",
                    color: region === opt.id ? "#fff" : "#555",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: 50,
                    padding: "10px 24px",
                    fontSize: 14,
                    fontWeight: 700,
                    fontFamily: "var(--font-nunito), Nunito, sans-serif",
                    transition: "all 0.25s",
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div
              style={{
                display: "inline-flex",
                background: "#fff",
                borderRadius: 50,
                padding: 5,
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                gap: 4,
                position: "relative",
              }}
            >
              {[
                { id: "monthly" as const, label: "Monthly" },
                { id: "annual" as const, label: "Annual" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setBilling(opt.id)}
                  style={{
                    background:
                      billing === opt.id
                        ? `linear-gradient(135deg,${ORANGE},#e0541a)`
                        : "transparent",
                    color: billing === opt.id ? "#fff" : "#555",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: 50,
                    padding: "10px 24px",
                    fontSize: 14,
                    fontWeight: 700,
                    fontFamily: "var(--font-nunito), Nunito, sans-serif",
                    transition: "all 0.25s",
                  }}
                >
                  {opt.label}
                </button>
              ))}
              {billing === "annual" && (
                <div
                  style={{
                    position: "absolute",
                    top: -10,
                    right: -4,
                    background: "#22c55e",
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 800,
                    fontFamily: "var(--font-nunito), Nunito, sans-serif",
                    padding: "2px 8px",
                    borderRadius: 50,
                  }}
                >
                  2 months free
                </div>
              )}
            </div>
          </div>
        </FadeUp>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 28,
            alignItems: "start",
          }}
          className="pricing-grid"
        >
          {/* Price card */}
          <ScaleIn>
            <div
              style={{
                background: `linear-gradient(160deg,${BLUE},#4340d4)`,
                borderRadius: 28,
                padding: "40px 36px",
                boxShadow: `0 24px 64px ${BLUE}40`,
                color: "#fff",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  fontFamily: "var(--font-nunito), Nunito, sans-serif",
                  opacity: 0.75,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  marginBottom: 8,
                }}
              >
                Per child{" "}
                {billing === "annual" ? "(billed annually)" : "(billed monthly)"}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 6,
                  marginBottom: 4,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-nunito), Nunito, sans-serif",
                    fontWeight: 900,
                    fontSize: 64,
                  }}
                >
                  {fmt(p.monthly)}
                </span>
                <span style={{ fontSize: 18, opacity: 0.75 }}>
                  /child/month
                </span>
              </div>
              {billing === "annual" && (
                <div style={{ fontSize: 14, opacity: 0.8, marginBottom: 4 }}>
                  Billed as {fmt(p.annual)}/child/year
                </div>
              )}
              <div
                style={{
                  display: "inline-block",
                  background:
                    billing === "annual"
                      ? "rgba(34,197,94,0.25)"
                      : "rgba(255,255,255,0.15)",
                  borderRadius: 50,
                  padding: "5px 14px",
                  fontSize: 12,
                  fontWeight: 700,
                  marginBottom: 28,
                  border:
                    billing === "annual"
                      ? "1px solid rgba(34,197,94,0.5)"
                      : "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {billing === "annual"
                  ? `Save ${fmt(p.monthly * 2)} per child vs monthly`
                  : "Switch to annual to save 2 months"}
              </div>

              {/* Calculator */}
              <div
                style={{
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: 20,
                  padding: "20px 24px",
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    fontFamily: "var(--font-nunito), Nunito, sans-serif",
                    marginBottom: 14,
                    opacity: 0.9,
                  }}
                >
                  Cost Calculator
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  <input
                    type="range"
                    min={1}
                    max={300}
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    style={{ flex: 1, height: 4, cursor: "pointer" }}
                  />
                  <div
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      borderRadius: 10,
                      padding: "4px 12px",
                      fontFamily: "var(--font-nunito), Nunito, sans-serif",
                      fontWeight: 800,
                      fontSize: 15,
                      minWidth: 50,
                      textAlign: "center",
                    }}
                  >
                    {children}
                  </div>
                  <div style={{ fontSize: 13, opacity: 0.8, whiteSpace: "nowrap" }}>
                    children
                  </div>
                </div>
                <div
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
                >
                  <div
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      borderRadius: 14,
                      padding: "12px 16px",
                    }}
                  >
                    <div style={{ fontSize: 11, opacity: 0.7, marginBottom: 3 }}>
                      Per month
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-nunito), Nunito, sans-serif",
                        fontWeight: 900,
                        fontSize: 24,
                      }}
                    >
                      {fmt(totalMonth)}
                    </div>
                  </div>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      borderRadius: 14,
                      padding: "12px 16px",
                    }}
                  >
                    <div style={{ fontSize: 11, opacity: 0.7, marginBottom: 3 }}>
                      Per year
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-nunito), Nunito, sans-serif",
                        fontWeight: 900,
                        fontSize: 24,
                      }}
                    >
                      {fmt(billing === "annual" ? totalAnnual : totalMonth * 12)}
                    </div>
                  </div>
                </div>
                {billing === "annual" && saving > 0 && (
                  <div
                    style={{
                      marginTop: 10,
                      background: "rgba(34,197,94,0.2)",
                      borderRadius: 10,
                      padding: "8px 14px",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#86efac",
                      textAlign: "center",
                    }}
                  >
                    You save {fmt(saving)}/year on this plan
                  </div>
                )}
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: 16,
                  padding: "14px 18px",
                  marginBottom: 24,
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                <span
                  style={{
                    fontWeight: 800,
                    fontFamily: "var(--font-nunito), Nunito, sans-serif",
                  }}
                >
                  30-day free trial
                </span>{" "}
                — up to 10 enrolled children, no card required. 7-day grace
                period applies when each new child is registered.
              </div>

              <a
                href="#download"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "16px",
                  borderRadius: 50,
                  background: "#fff",
                  color: BLUE,
                  fontFamily: "var(--font-nunito), Nunito, sans-serif",
                  fontWeight: 800,
                  fontSize: 16,
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 8px 24px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "none";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 16px rgba(0,0,0,0.2)";
                }}
              >
                Start free trial
              </a>
            </div>
          </ScaleIn>

          {/* Features list */}
          <div>
            <FadeUp
              style={{
                background: "#fff",
                borderRadius: 28,
                padding: "36px 32px",
                boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-nunito), Nunito, sans-serif",
                  fontWeight: 800,
                  fontSize: 16,
                  color: "#1a1a2e",
                  marginBottom: 6,
                }}
              >
                Everything included — no add-ons
              </div>
              <div style={{ fontSize: 14, color: "#888", marginBottom: 22 }}>
                Every plan includes all features, for every child.
              </div>
              <StaggerChildren
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {PRICING_FEATURES.map((f, i) => (
                  <StaggerItem key={i}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        fontSize: 14.5,
                        color: "#333",
                      }}
                    >
                      <div
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: "50%",
                          flexShrink: 0,
                          background: `${BLUE}15`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg width="11" height="11" viewBox="0 0 11 11">
                          <path
                            d="M2 5.5l2.5 2.5L9 3"
                            stroke={BLUE}
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        </svg>
                      </div>
                      {f}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </FadeUp>

            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
            >
              {[
                { label: "30-day free trial", sub: "Up to 10 children", color: BLUE },
                { label: "7-day grace period", sub: "Per new child enrolled", color: ORANGE },
                { label: "Data retained 90 days", sub: "After subscription lapses", color: "#555" },
                { label: "Cancel anytime", sub: "Billing stops immediately", color: "#555" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    borderRadius: 18,
                    padding: "16px 18px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                    borderLeft: `4px solid ${item.color}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-nunito), Nunito, sans-serif",
                      fontWeight: 800,
                      fontSize: 14,
                      color: "#1a1a2e",
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ fontSize: 12.5, color: "#888", marginTop: 2 }}>
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
