"use client";
import { FadeUp, StaggerChildren, StaggerItem } from "./AnimatedSection";

const BLUE = "#3533C6";
const ORANGE = "#F26522";

function Step({
  num,
  title,
  desc,
}: {
  num: number;
  title: string;
  desc: string;
}) {
  return (
    <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          flexShrink: 0,
          background: `linear-gradient(135deg, ${BLUE}, ${ORANGE})`,
          color: "#fff",
          fontFamily: "var(--font-nunito), Nunito, sans-serif",
          fontWeight: 900,
          fontSize: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 4px 14px ${BLUE}40`,
        }}
      >
        {num}
      </div>
      <div>
        <div
          style={{
            fontFamily: "var(--font-nunito), Nunito, sans-serif",
            fontWeight: 800,
            fontSize: 17,
            color: "#1a1a2e",
            marginBottom: 5,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 14.5, color: "#555", lineHeight: 1.6 }}>
          {desc}
        </div>
      </div>
    </div>
  );
}

const schoolSteps = [
  {
    title: "Register your school",
    desc: "Sign up in minutes. Add your classes, staff, and student roster.",
  },
  {
    title: "Invite parents",
    desc: "Parents receive a secure invite link to download the app and connect to their child.",
  },
  {
    title: "Go live",
    desc: "Start tracking attendance, pickups and sending updates from day one.",
  },
];

const parentSteps = [
  {
    title: "Download the app",
    desc: "Available free on iOS and Android from your school's invite link.",
  },
  {
    title: "Link your child",
    desc: "Connect to your child's school profile. Add authorised pickup contacts.",
  },
  {
    title: "Stay connected",
    desc: "Receive real-time notifications and manage pickups from anywhere.",
  },
];

export function HowItWorks() {
  return (
    <section style={{ padding: "100px 5vw", background: "#FAFAF8" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <FadeUp style={{ textAlign: "center", marginBottom: 64 }}>
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
            Simple to set up
          </div>
          <h2
            style={{
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px,3.5vw,42px)",
              color: "#1a1a2e",
              lineHeight: 1.2,
            }}
          >
            Up and running in minutes
          </h2>
        </FadeUp>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 36,
          }}
          className="hiw-grid"
        >
          <StaggerChildren
            style={{ display: "flex", flexDirection: "column", gap: 28 }}
          >
            <StaggerItem>
              <div
                style={{
                  fontFamily: "var(--font-nunito), Nunito, sans-serif",
                  fontWeight: 800,
                  fontSize: 16,
                  color: BLUE,
                  marginBottom: 4,
                }}
              >
                For Schools
              </div>
            </StaggerItem>
            {schoolSteps.map((s, i) => (
              <StaggerItem key={i}>
                <Step num={i + 1} {...s} />
              </StaggerItem>
            ))}
          </StaggerChildren>

          <StaggerChildren
            style={{ display: "flex", flexDirection: "column", gap: 28 }}
          >
            <StaggerItem>
              <div
                style={{
                  fontFamily: "var(--font-nunito), Nunito, sans-serif",
                  fontWeight: 800,
                  fontSize: 16,
                  color: ORANGE,
                  marginBottom: 4,
                }}
              >
                For Parents
              </div>
            </StaggerItem>
            {parentSteps.map((s, i) => (
              <StaggerItem key={i}>
                <Step num={i + 1} {...s} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hiw-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
