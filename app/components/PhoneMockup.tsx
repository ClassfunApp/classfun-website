"use client";
import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt?: string;
  shadow?: string;
  width?: number;
}

export function PhoneMockup({
  src,
  alt = "App screenshot",
  shadow = "0 30px 80px rgba(53,51,198,0.30), 0 8px 24px rgba(0,0,0,0.18)",
  width = 270,
}: PhoneMockupProps) {
  return (
    <div
      style={{
        width,
        background: "#101010",
        borderRadius: 50,
        padding: "14px 10px",
        boxShadow: shadow,
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* Dynamic island */}
      <div
        style={{
          position: "absolute",
          top: 14,
          left: "50%",
          transform: "translateX(-50%)",
          width: 90,
          height: 26,
          background: "#000",
          borderRadius: 20,
          zIndex: 10,
        }}
      />
      {/* Screen */}
      <div style={{ borderRadius: 40, overflow: "hidden", lineHeight: 0 }}>
        <Image
          src={src}
          alt={alt}
          width={250}
          height={540}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
      {/* Home indicator */}
      <div
        style={{
          height: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 4,
        }}
      >
        <div
          style={{
            width: 80,
            height: 3,
            background: "rgba(255,255,255,0.25)",
            borderRadius: 2,
          }}
        />
      </div>
    </div>
  );
}
