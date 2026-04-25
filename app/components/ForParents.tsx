"use client";
import { FadeIn, ScaleIn } from "./AnimatedSection";
import { AppStoreBtn } from "./AppStoreBtn";
import { PhoneMockup } from "./PhoneMockup";

const ORANGE = "#F26522";

const bullets = [
  {
    icon: "✅",
    title: "Check-in Alerts",
    desc: "Instant notification when your child arrives at school.",
  },
  {
    icon: "🚗",
    title: "Pickup Tracking",
    desc: "Announce you're on your way; staff prepare your child for collection.",
  },
  {
    icon: "👤",
    title: "Authorised Carers",
    desc: "Add grandparents, childminders — anyone authorised to collect.",
  },
  {
    icon: "📸",
    title: "Daily Moments",
    desc: "Photos and updates from the day shared securely by teachers.",
  },
];

export function ForParents() {
  return (
    <section
      id="for-parents"
      style={{ padding: "100px 5vw", background: "#fff" }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
        className="two-col-grid-parents"
      >
        <ScaleIn>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <PhoneMockup
              src="/screenshots/parent-home.png"
              shadow="0 30px 70px rgba(242,101,34,0.22), 0 8px 20px rgba(0,0,0,0.15)"
            />
            <PhoneMockup
              src="/screenshots/parent-grades.png"
              shadow="0 20px 50px rgba(0,0,0,0.15)"
              width={240}
            />
          </div>
        </ScaleIn>

        <FadeIn direction="right">
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
            For Parents &amp; Carers
          </div>
          <h2
            style={{
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(26px,3vw,40px)",
              color: "#1a1a2e",
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            Peace of mind in your pocket
          </h2>
          <p
            style={{
              fontSize: 15.5,
              color: "#555",
              lineHeight: 1.72,
              marginBottom: 32,
            }}
          >
            From first drop-off to safe collection, Classfun keeps you in the
            loop every step of the way. No more wondering — just knowing.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {bullets.map((item, i) => (
              <div
                key={i}
                style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
              >
                <div style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>
                  {item.icon}
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-nunito), Nunito, sans-serif",
                      fontWeight: 800,
                      fontSize: 15,
                      color: "#1a1a2e",
                    }}
                  >
                    {item.title} —{" "}
                  </span>
                  <span style={{ fontSize: 14.5, color: "#666" }}>
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              gap: 14,
              marginTop: 36,
              flexWrap: "wrap",
            }}
          >
            <AppStoreBtn store="apple" href="https://apps.apple.com" />
            <AppStoreBtn store="google" href="https://play.google.com/store/apps/details?id=com.useclassfun.app" />
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .two-col-grid-parents {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
