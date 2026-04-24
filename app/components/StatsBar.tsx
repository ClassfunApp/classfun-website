"use client";
import { motion } from "framer-motion";

const BLUE = "#3533C6";

const stats = [
  { value: "500+", label: "Schools & Centres" },
  { value: "50K+", label: "Families connected" },
  { value: "2M+", label: "Safe pickups tracked" },
  { value: "4.9★", label: "App Store Rating" },
];

export function StatsBar() {
  return (
    <section
      style={{
        background: `linear-gradient(135deg,${BLUE},#5552e0)`,
        padding: "40px 5vw",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ textAlign: "center", padding: "8px 16px" }}
          >
            <div
              style={{
                fontFamily: "var(--font-nunito), Nunito, sans-serif",
                fontWeight: 900,
                fontSize: 38,
                color: "#fff",
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontSize: 13.5,
                color: "rgba(255,255,255,0.75)",
                marginTop: 2,
              }}
            >
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
