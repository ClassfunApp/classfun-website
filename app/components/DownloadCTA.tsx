"use client";
import { motion } from "framer-motion";
import { AppStoreBtn } from "./AppStoreBtn";
import { SmileyIcon } from "./Logo";
import { FadeUp } from "./AnimatedSection";

const BLUE = "#3533C6";
const ORANGE = "#F26522";

export function DownloadCTA() {
  return (
    <section
      id="download"
      style={{
        padding: "100px 5vw",
        background: `linear-gradient(135deg, ${BLUE} 0%, #5552e0 40%, ${ORANGE} 100%)`,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: -60,
          left: "10%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        style={{
          position: "absolute",
          bottom: -80,
          right: "5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          pointerEvents: "none",
        }}
      />

      <FadeUp style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}>
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ display: "inline-block" }}
        >
          <SmileyIcon size={64} />
        </motion.div>
        <h2
          style={{
            fontFamily: "var(--font-nunito), Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(28px,4vw,50px)",
            color: "#fff",
            lineHeight: 1.2,
            margin: "20px 0 16px",
          }}
        >
          Ready to make every school day safer and more fun?
        </h2>
        <p
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.85)",
            marginBottom: 40,
            lineHeight: 1.65,
          }}
        >
          Join thousands of schools, activity centres, and families already
          using Classfun. Free to download.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 32,
          }}
        >
          <AppStoreBtn store="apple" href="https://apps.apple.com" />
          <AppStoreBtn store="google" href="https://play.google.com/store/apps/details?id=com.useclassfun.app" />
        </div>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
          Schools:{" "}
          <a
            href="mailto:hello@classfun.app"
            style={{
              color: "rgba(255,255,255,0.9)",
              textDecoration: "underline",
            }}
          >
            contact us for a free setup walkthrough →
          </a>
        </p>
      </FadeUp>
    </section>
  );
}
