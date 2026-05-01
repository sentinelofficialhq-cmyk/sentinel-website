"use client";

import Image from "next/image";

const FEATURES = [
  {
    title: "Today's Edge",
    desc: "See the strongest AI-identified edges updated all day.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Live Movement",
    desc: "Real-time line and odds movement across every major sport.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "AI Analysis",
    desc: "Model-backed confidence, hit rates, and key matchup insights.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
      </svg>
    ),
  },
  {
    title: "Daily Picks",
    desc: "Curated daily picks with high confidence and clear reasoning.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "Track Performance",
    desc: "Monitor profit, ROI, and long-term results in real time.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      style={{
        padding: "clamp(72px,10vw,132px) clamp(20px,5vw,72px)",
        background:
          "linear-gradient(180deg, transparent 0%, rgba(8,11,24,0.6) 50%, transparent 100%)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1180 }}>
        <div className="flex gap-5 flex-wrap">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="glass-card glass-card-hover transition-all duration-200 cursor-default"
              style={{ flex: "1 1 160px", padding: "24px 22px" }}
            >
              <div
                className="flex items-center justify-center mb-3.5"
                style={{
                  width: 40, height: 40, borderRadius: 12,
                  background: "rgba(109,45,255,0.16)",
                  border: "1px solid rgba(169,112,255,0.22)",
                  color: "#A970FF",
                }}
              >
                {f.icon}
              </div>
              <h3
                className="font-bold text-[#F6F7FB] mb-1.5"
                style={{ fontSize: "0.9375rem", letterSpacing: "-0.02em" }}
              >
                {f.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(212,218,238,0.56)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.55,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
