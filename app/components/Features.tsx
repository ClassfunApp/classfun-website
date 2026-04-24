"use client";
import { useState } from "react";
import { StaggerChildren, StaggerItem, FadeUp } from "./AnimatedSection";
import { motion } from "framer-motion";

const BLUE = "#3533C6";
const ORANGE = "#F26522";

function FeatureCard({
  icon,
  title,
  desc,
  accent,
}: {
  icon: string;
  title: string;
  desc: string;
  accent: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      style={{
        background: "#fff",
        borderRadius: 24,
        padding: "32px 28px",
        boxShadow: hover
          ? `0 16px 48px ${accent}25`
          : "0 2px 16px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.3s ease",
        borderTop: `4px solid ${accent}`,
        cursor: "default",
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          background: `${accent}15`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 18,
          fontSize: 26,
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontFamily: "var(--font-nunito), Nunito, sans-serif",
          fontWeight: 800,
          fontSize: 18,
          color: "#1a1a2e",
          marginBottom: 8,
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: 14.5, color: "#555", lineHeight: 1.65 }}>
        {desc}
      </div>
    </motion.div>
  );
}

const features = [
  {
    accent: BLUE,
    icon: "🛡️",
    title: "Safe Pickup & Drop-off",
    desc: "Authorised pickup lists, QR code verification, and real-time GPS tracking so children are always collected by the right person.",
  },
  {
    accent: ORANGE,
    icon: "🔔",
    title: "Instant Notifications",
    desc: "Parents receive live alerts the moment their child checks in, checks out, or any important update is shared by the school.",
  },
  {
    accent: BLUE,
    icon: "📋",
    title: "Attendance Tracking",
    desc: "Digital register for every class and activity. Staff mark attendance in seconds; schools have accurate records instantly.",
  },
  {
    accent: ORANGE,
    icon: "💬",
    title: "Two-way Messaging",
    desc: "Direct, secure messaging between teachers and parents. Share photos, updates, and announcements without leaving the app.",
  },
  {
    accent: BLUE,
    icon: "📅",
    title: "Events & Scheduling",
    desc: "Activity calendars, event reminders, and permission slips — all managed digitally to eliminate paper trails.",
  },
  {
    accent: ORANGE,
    icon: "🏆",
    title: "Activity Centres Too",
    desc: "Not just schools — sports clubs, swim schools, after-school programmes, and children's activity centres all supported.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      style={{ padding: "100px 5vw", background: "#FAFAF8" }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <FadeUp style={{ textAlign: "center", marginBottom: 64 }}>
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
            Everything in one app
          </div>
          <h2
            style={{
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px,3.5vw,44px)",
              color: "#1a1a2e",
              lineHeight: 1.2,
            }}
          >
            Built for safety. Designed for joy.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#666",
              marginTop: 14,
              maxWidth: 520,
              margin: "14px auto 0",
            }}
          >
            From the moment a child arrives to the moment they&apos;re safely
            home, Classfun keeps everyone informed.
          </p>
        </FadeUp>

        <StaggerChildren
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {features.map((f, i) => (
            <StaggerItem key={i}>
              <FeatureCard {...f} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
