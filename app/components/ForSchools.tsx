"use client";
import { FadeIn, ScaleIn } from "./AnimatedSection";
import { PhoneMockup } from "./PhoneMockup";

const BLUE = "#3533C6";

const bullets = [
  {
    title: "Digital Registers",
    desc: "Mark attendance for every class in seconds, not minutes.",
  },
  {
    title: "Pickup Coordination",
    desc: "Staff see live pickup queue, verify authorised carers on-screen.",
  },
  {
    title: "Bulk Notifications",
    desc: "Send class, year group, or whole-school alerts in one tap.",
  },
  {
    title: "Reporting Dashboard",
    desc: "Attendance trends, incident logs, and parent engagement reports.",
  },
];

export function ForSchools() {
  return (
    <section
      id="for-schools"
      style={{
        padding: "100px 5vw",
        background: `linear-gradient(160deg, #f0f1ff 0%, #fafaf8 100%)`,
      }}
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
        className="two-col-grid"
      >
        <FadeIn direction="left">
          <div
            style={{
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              color: BLUE,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            For Schools &amp; Centres
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
            The one tool your staff can&apos;t work without
          </h2>
          <p
            style={{
              fontSize: 15.5,
              color: "#555",
              lineHeight: 1.72,
              marginBottom: 32,
            }}
          >
            Classfun gives schools and activity centres a powerful admin
            dashboard to manage attendance, communicate with families, and
            coordinate pickups — replacing messy paper forms and phone calls.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {bullets.map((item, i) => (
              <div
                key={i}
                style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: `${BLUE}15`,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: BLUE,
                    }}
                  />
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
          <a
            href="#download"
            style={{
              display: "inline-block",
              marginTop: 36,
              background: `linear-gradient(135deg,${BLUE},#5552e0)`,
              color: "#fff",
              textDecoration: "none",
              padding: "14px 32px",
              borderRadius: 50,
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontWeight: 800,
              fontSize: 15,
              boxShadow: `0 6px 20px ${BLUE}40`,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 28px ${BLUE}50`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "none";
              (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 20px ${BLUE}40`;
            }}
          >
            Request a School Demo
          </a>
        </FadeIn>

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
              src="/screenshots/school-dash.png"
              shadow="0 30px 70px rgba(53,51,198,0.30), 0 8px 20px rgba(0,0,0,0.2)"
            />
            <PhoneMockup
              src="/screenshots/school-settings.png"
              shadow="0 20px 50px rgba(0,0,0,0.25)"
              width={240}
            />
          </div>
        </ScaleIn>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .two-col-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
