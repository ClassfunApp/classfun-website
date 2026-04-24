"use client";
import { FadeUp, StaggerChildren, StaggerItem } from "./AnimatedSection";

const BLUE = "#3533C6";
const ORANGE = "#F26522";

function Testimonial({
  quote,
  name,
  role,
  accent,
}: {
  quote: string;
  name: string;
  role: string;
  accent: string;
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 24,
        padding: "28px 24px",
        boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
        borderLeft: `5px solid ${accent}`,
      }}
    >
      <div
        style={{
          fontSize: 32,
          color: accent,
          lineHeight: 1,
          marginBottom: 8,
          fontFamily: "serif",
        }}
      >
        &ldquo;
      </div>
      <div
        style={{
          fontSize: 15,
          color: "#333",
          lineHeight: 1.7,
          marginBottom: 16,
        }}
      >
        {quote}
      </div>
      <div
        style={{
          fontFamily: "var(--font-nunito), Nunito, sans-serif",
          fontWeight: 800,
          fontSize: 14,
          color: "#1a1a2e",
        }}
      >
        {name}
      </div>
      <div style={{ fontSize: 12.5, color: "#888" }}>{role}</div>
    </div>
  );
}

const testimonials = [
  {
    accent: BLUE,
    name: "Mrs. Adebayo",
    role: "Head Teacher, Sunrise Primary School",
    quote:
      "Classfun has transformed our dismissal process. What used to take 45 chaotic minutes now runs smoothly in 15. Parents love the updates too.",
  },
  {
    accent: ORANGE,
    name: "James & Priya M.",
    role: "Parents of two",
    quote:
      "Finally! An app that tells me the moment my kids arrive and when they're being collected. The pickup tracking is brilliant — total peace of mind.",
  },
  {
    accent: BLUE,
    name: "Coach Tunde",
    role: "Director, Elite Football Academy",
    quote:
      "We run sessions for 200+ kids across multiple venues. Classfun handles check-ins, parent comms, and pickup coordination flawlessly.",
  },
];

export function Testimonials() {
  return (
    <section
      style={{
        padding: "100px 5vw",
        background: `linear-gradient(160deg,#fff8f4,#f0f1ff)`,
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <FadeUp style={{ textAlign: "center", marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(26px,3vw,40px)",
              color: "#1a1a2e",
            }}
          >
            Loved by schools &amp; families
          </h2>
        </FadeUp>
        <StaggerChildren
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 24,
          }}
        >
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <Testimonial {...t} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
