"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppStoreBtn } from "./AppStoreBtn";
import { PhoneMockup } from "./PhoneMockup";
import { SmileyIcon } from "./Logo";

const BLUE = "#3533C6";
const ORANGE = "#F26522";

const heroScreens = [
  { label: "Parent View", src: "/screenshots/parent-home.png" },
  { label: "Fees & Payments", src: "/screenshots/parent-fees.png" },
  { label: "School Dashboard", src: "/screenshots/school-dash.png" },
];

export function Hero() {
  const [activePhone, setActivePhone] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActivePhone((p) => (p + 1) % heroScreens.length),
      3800
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: `linear-gradient(160deg, #f0f1ff 0%, #fff8f4 50%, #fafaf8 100%)`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "100px 5vw 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blobs */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: -120,
          right: -80,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `${BLUE}10`,
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          position: "absolute",
          bottom: -80,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `${ORANGE}10`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
          width: "100%",
        }}
        className="hero-grid"
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: `${BLUE}12`,
              color: BLUE,
              borderRadius: 50,
              padding: "8px 16px",
              fontSize: 13,
              fontWeight: 700,
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              marginBottom: 24,
            }}
          >
            <SmileyIcon size={20} />
            The App Schools &amp; Parents Love
          </motion.div>

          <h1
            style={{
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px,4.5vw,58px)",
              lineHeight: 1.12,
              color: "#1a1a2e",
              marginBottom: 22,
              whiteSpace: "pre-line",
            }}
          >
            {"Where Every Child's\nDay Becomes a Story"}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              fontSize: "clamp(15px,1.5vw,18px)",
              color: "#555",
              lineHeight: 1.72,
              maxWidth: 460,
              marginBottom: 36,
            }}
          >
            Classfun connects schools, activity centres, and parents with
            real-time updates, safe pickup &amp; drop-off tracking, and instant
            notifications — all in one delightful app.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 40 }}
          >
            <AppStoreBtn store="apple" href="https://apps.apple.com" />
            <AppStoreBtn store="google" href="https://play.google.com" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            style={{ display: "flex", gap: 28, flexWrap: "wrap" }}
          >
            {[
              { icon: "🏫", label: "Trusted by 500+ schools" },
              { icon: "👨‍👩‍👧", label: "50,000+ parents" },
              { icon: "⭐", label: "4.9 star rating" },
            ].map((tr, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  fontSize: 13.5,
                  color: "#555",
                  fontWeight: 600,
                }}
              >
                <span style={{ fontSize: 18 }}>{tr.icon}</span>
                {tr.label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Phone */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 8,
              background: "rgba(255,255,255,0.8)",
              borderRadius: 50,
              padding: "6px 8px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            }}
          >
            {heroScreens.map((s, i) => (
              <button
                key={i}
                onClick={() => setActivePhone(i)}
                style={{
                  background:
                    activePhone === i
                      ? `linear-gradient(135deg,${BLUE},${ORANGE})`
                      : "transparent",
                  color: activePhone === i ? "#fff" : "#555",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: 50,
                  padding: "8px 18px",
                  fontSize: 13,
                  fontWeight: 700,
                  fontFamily: "var(--font-nunito), Nunito, sans-serif",
                  transition: "all 0.25s",
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePhone}
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.35 }}
            >
              <PhoneMockup src={heroScreens[activePhone].src} />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
