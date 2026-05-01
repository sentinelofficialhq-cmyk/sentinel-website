"use client";

import Image from "next/image";

const PREVIEW_CARDS = [
  {
    title: "Today's Edge",
    desc: "Top model edges with confidence and context.",
    img: "/images/screenshots/todays-edge.png",
    accent: "#20F281",
  },
  {
    title: "Live Slate",
    desc: "Real-time value across the live market.",
    img: "/images/screenshots/games.png",
    accent: "#38FF9C",
  },
  {
    title: "In-Depth Analysis",
    desc: "AI-powered breakdowns behind every edge.",
    img: "/images/screenshots/in-depth-analysis.png",
    accent: "#A970FF",
  },
  {
    title: "Daily Picks",
    desc: "Curated picks with high confidence.",
    img: "/images/screenshots/picks-tab.png",
    accent: "#A970FF",
  },
  {
    title: "Profit Tracker",
    desc: "Track ROI, streaks, and long-term performance.",
    img: "/images/screenshots/profit.png",
    accent: "#20F281",
  },
];

export default function PreviewSection() {
  return (
    <section
      id="preview"
      style={{ padding: "clamp(72px,10vw,132px) clamp(20px,5vw,72px)" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1180 }}>
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="font-extrabold text-[#F6F7FB] mb-3.5"
            style={{
              fontSize: "clamp(2rem,3.5vw,3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.05em",
            }}
          >
            Everything you need.{" "}
            <span className="gradient-text">All in one place.</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(212,218,238,0.56)",
              letterSpacing: "-0.01em",
              lineHeight: 1.6,
            }}
          >
            Powerful insights. Real-time data. Smarter bets.
          </p>
        </div>

        {/* Cards */}
        <div className="flex gap-4 flex-wrap">
          {PREVIEW_CARDS.map((card) => (
            <div
              key={card.title}
              className="glass-card glass-card-hover transition-all duration-200 overflow-hidden flex flex-col cursor-default"
              style={{ flex: "1 1 180px" }}
            >
              {/* Screenshot */}
              <div className="overflow-hidden relative" style={{ borderBottom: "1px solid rgba(169,112,255,0.12)" }}>
                <Image
                  src={card.img}
                  alt={card.title}
                  width={400}
                  height={220}
                  className="w-full object-cover object-top"
                  style={{ maxHeight: 220 }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    height: 60,
                    background: "linear-gradient(transparent, rgba(10,14,28,0.72))",
                  }}
                />
              </div>
              {/* Text */}
              <div style={{ padding: "16px 20px" }}>
                <div className="flex items-center gap-1.5 mb-1">
                  <span
                    className="inline-block rounded-full flex-shrink-0"
                    style={{ width: 6, height: 6, background: card.accent }}
                  />
                  <span
                    className="font-bold text-[#F6F7FB]"
                    style={{ fontSize: "0.875rem", letterSpacing: "-0.02em" }}
                  >
                    {card.title}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.8rem",
                    lineHeight: 1.5,
                    color: "rgba(212,218,238,0.5)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
