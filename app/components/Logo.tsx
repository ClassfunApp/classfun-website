"use client";

export function LogoSVG({ height = 36 }: { height?: number }) {
  return (
    <svg
      height={height}
      viewBox="0 0 220 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <text
        x="0"
        y="46"
        fontFamily="var(--font-nunito), Nunito, sans-serif"
        fontWeight="800"
        fontSize="52"
        fill="#3533C6"
      >
        class
      </text>
      <text
        x="116"
        y="46"
        fontFamily="var(--font-nunito), Nunito, sans-serif"
        fontWeight="800"
        fontSize="52"
        fill="#F26522"
      >
        fun
      </text>
      <path
        d="M60 54 Q110 66 175 54"
        stroke="#F26522"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function SmileyIcon({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="36" cy="38" r="14" fill="#3533C6" />
      <circle cx="64" cy="38" r="14" fill="#F26522" />
      <path
        d="M22 64 Q50 84 78 64"
        stroke="#F26522"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
