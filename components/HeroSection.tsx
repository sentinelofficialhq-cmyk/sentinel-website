"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden flex items-center min-h-screen"
      style={{
        padding:
          "clamp(100px,12vh,140px) clamp(20px,5vw,72px) clamp(72px,8vh,100px)",
        background: [
          "radial-gradient(circle at 72% 18%, rgba(109,45,255,0.28), transparent 34%)",
          "radial-gradient(circle at 35% 42%, rgba(59,130,246,0.10), transparent 34%)",
          "radial-gradient(circle at 52% 78%, rgba(138,63,252,0.20), transparent 38%)",
          "linear-gradient(180deg, #030407 0%, #060812 48%, #030407 100%)",
        ].join(", "),
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none bg-orbit"
        aria-hidden="true"
      />
      {/* Glow beam */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "8%", right: "8%",
          width: 760, height: 220,
          background: "radial-gradient(ellipse, rgba(109,45,255,0.42), transparent 70%)",
          filter: "blur(42px)",
          transform: "rotate(-8deg)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto w-full" style={{ maxWidth: 1180 }}>
        <div
          className="grid items-center"
          style={{
            gridTemplateColumns: "minmax(0,0.95fr) minmax(0,1.05fr)",
            gap: "clamp(40px,6vw,88px)",
          }}
        >
          {/* ── Left: Copy ── */}
          <div className="flex flex-col gap-7">
            {/* Kicker */}
            <div
              className="inline-flex items-center gap-2 font-bold uppercase"
              style={{
                fontSize: "0.6875rem",
                letterSpacing: "0.12em",
                color: "rgba(212,218,238,0.56)",
              }}
            >
              <span
                className="rounded-full flex-shrink-0"
                style={{ width: 6, height: 6, background: "#20F281" }}
              />
              AI-Powered Sports Analysis
            </div>

            {/* Headline */}
            <h1
              className="font-extrabold text-[#F6F7FB]"
              style={{
                fontSize: "clamp(3.25rem,6.5vw,5.75rem)",
                lineHeight: 0.94,
                letterSpacing: "-0.06em",
              }}
            >
              Wake up to
              <br />
              <span className="gradient-text">your edge.</span>
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: "clamp(1rem,1.5vw,1.125rem)",
                lineHeight: 1.65,
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "rgba(239,242,255,0.72)",
                maxWidth: 460,
              }}
            >
              Sentinel delivers AI-powered analysis, today&apos;s top edges,
              live market movement, and profit tracking — so you can bet smarter
              and win more.
            </p>

            {/* CTA row */}
            <div className="flex gap-3 flex-wrap items-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 font-bold text-white no-underline transition-all duration-200 hover:brightness-110 hover:-translate-y-px"
                style={{
                  background: "linear-gradient(135deg,#7C3BFF 0%,#2563FF 100%)",
                  borderRadius: 16,
                  padding: "15px 26px",
                  fontSize: "0.9375rem",
                  letterSpacing: "-0.01em",
                  border: "1px solid rgba(255,255,255,0.20)",
                  boxShadow:
                    "0 18px 44px rgba(79,70,229,0.34), inset 0 1px 0 rgba(255,255,255,0.24)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on the App Store
              </a>
              <a
                href="#preview"
                className="inline-flex items-center gap-2 font-bold no-underline transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.045)",
                  color: "#F6F7FB",
                  borderRadius: 16,
                  padding: "15px 26px",
                  fontSize: "0.9375rem",
                  letterSpacing: "-0.01em",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(14px)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.045)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.12)";
                }}
              >
                See Preview
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex">
                {["#8A3FFC", "#20F281", "#2563FF", "#A970FF"].map((c, i) => (
                  <div
                    key={i}
                    className="rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{
                      width: 28, height: 28,
                      background: `radial-gradient(circle at 35% 35%, ${c}, rgba(3,4,7,0.8))`,
                      border: "2px solid #030407",
                      marginLeft: i === 0 ? 0 : -8,
                    }}
                  >
                    {["A", "B", "C", "D"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="11" height="11" viewBox="0 0 24 24" fill="#A970FF">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p
                  className="font-semibold"
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(212,218,238,0.56)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  4.9/5 from 10K+ users
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Phone mockup ── */}
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div
      className="relative flex justify-center items-center"
      style={{ height: 580 }}
    >
      {/* Glow behind phone */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 340, height: 500,
          background:
            "radial-gradient(ellipse, rgba(109,45,255,0.32), transparent 65%)",
          filter: "blur(48px)",
        }}
        aria-hidden="true"
      />

      {/* Phone frame */}
      <div
        className="relative overflow-hidden"
        style={{
          zIndex: 2, width: 260,
          background: "#0A0E1C",
          borderRadius: 44,
          border: "2px solid rgba(169,112,255,0.28)",
          boxShadow:
            "0 40px 100px rgba(0,0,0,0.65), 0 0 60px rgba(109,45,255,0.22)",
        }}
      >
        {/* Notch */}
        <div
          className="absolute"
          style={{
            top: 0, left: "50%", transform: "translateX(-50%)",
            width: 100, height: 28,
            background: "#0A0E1C",
            borderBottomLeftRadius: 16, borderBottomRightRadius: 16,
            zIndex: 10,
          }}
          aria-hidden="true"
        />
        <Image
          src="/images/screenshots/todays-edge.png"
          alt="Sentinel Today's Edge screen"
          width={260}
          height={520}
          className="w-full block"
        />
      </div>

      {/* Floating card: AI Analysis */}
      <div
        className="absolute"
        style={{
          left: -20, top: "18%", zIndex: 4,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03)), rgba(10,14,28,0.88)",
          border: "1px solid rgba(169,112,255,0.28)",
          borderRadius: 16,
          backdropFilter: "blur(18px)",
          boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
          padding: "12px 16px", width: 160,
          transform: "rotate(-3deg)",
        }}
      >
        <p
          className="font-bold uppercase mb-1"
          style={{ fontSize: 9, letterSpacing: "0.1em", color: "#A970FF" }}
        >
          AI Analysis
        </p>
        <p
          className="font-extrabold"
          style={{ fontSize: 22, letterSpacing: "-0.04em", color: "#20F281" }}
        >
          82%
        </p>
        <p
          className="font-bold uppercase mt-0.5"
          style={{
            fontSize: 9, letterSpacing: "0.08em",
            color: "rgba(212,218,238,0.45)",
          }}
        >
          Confidence
        </p>
      </div>

      {/* Floating card: Profit */}
      <div
        className="absolute"
        style={{
          right: -10, top: "28%", zIndex: 4,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03)), rgba(10,14,28,0.88)",
          border: "1px solid rgba(32,242,129,0.28)",
          borderRadius: 16,
          backdropFilter: "blur(18px)",
          boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
          padding: "12px 16px", width: 150,
          transform: "rotate(2.5deg)",
        }}
      >
        <p
          className="font-bold uppercase mb-1"
          style={{ fontSize: 9, letterSpacing: "0.1em", color: "#20F281" }}
        >
          ● In Profit
        </p>
        <p
          className="font-extrabold text-[#F6F7FB]"
          style={{ fontSize: 20, letterSpacing: "-0.04em" }}
        >
          $3,639
        </p>
        <p
          className="font-bold uppercase mt-0.5"
          style={{
            fontSize: 9, letterSpacing: "0.08em",
            color: "rgba(212,218,238,0.45)",
          }}
        >
          +363% ROI
        </p>
      </div>

      {/* Floating card: Daily Picks */}
      <div
        className="absolute"
        style={{
          left: 0, bottom: "12%", zIndex: 4,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03)), rgba(10,14,28,0.88)",
          border: "1px solid rgba(169,112,255,0.22)",
          borderRadius: 16,
          backdropFilter: "blur(18px)",
          boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
          padding: "10px 14px", width: 170,
          transform: "rotate(1.5deg)",
        }}
      >
        <p
          className="font-bold uppercase mb-1"
          style={{
            fontSize: 9, letterSpacing: "0.1em",
            color: "rgba(212,218,238,0.45)",
          }}
        >
          Daily Picks
        </p>
        {[
          { name: "Owen Tippett", conf: "84%" },
          { name: "Bryan Rust", conf: "81%" },
        ].map((p, i) => (
          <div
            key={i}
            className="flex justify-between items-center"
            style={{
              paddingBlock: 3,
              borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <span
              className="font-semibold text-[#F6F7FB]"
              style={{ fontSize: 10 }}
            >
              {p.name}
            </span>
            <span className="font-bold" style={{ fontSize: 10, color: "#20F281" }}>
              {p.conf}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
