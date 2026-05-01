"use client";

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: "clamp(72px,10vw,132px) clamp(20px,5vw,72px)" }}
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 800, height: 400,
          background:
            "radial-gradient(ellipse, rgba(109,45,255,0.28), transparent 65%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto relative z-10" style={{ maxWidth: 1180 }}>
        <div
          className="text-center flex flex-col items-center gap-6"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.02)), rgba(10,14,28,0.82)",
            border: "1px solid rgba(169,112,255,0.28)",
            borderRadius: 32,
            boxShadow:
              "0 40px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
            backdropFilter: "blur(24px)",
            padding: "clamp(48px,7vw,80px) clamp(32px,5vw,72px)",
          }}
        >
          <h2
            className="font-black text-[#F6F7FB]"
            style={{
              fontSize: "clamp(2.5rem,5vw,4.5rem)",
              lineHeight: 0.96,
              letterSpacing: "-0.06em",
            }}
          >
            Bet smarter.
            <br />
            <span className="gradient-text">Win more.</span>
          </h2>

          <p
            style={{
              fontSize: "clamp(0.9375rem,1.5vw,1.0625rem)",
              color: "rgba(239,242,255,0.65)",
              letterSpacing: "-0.01em",
              lineHeight: 1.6,
              maxWidth: 480,
            }}
          >
            Join thousands using Sentinel to find edges others miss.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2.5 font-bold text-white no-underline transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg,#7C3BFF 0%,#2563FF 100%)",
              borderRadius: 18,
              padding: "17px 34px",
              fontSize: "clamp(0.9375rem,1.5vw,1.0625rem)",
              letterSpacing: "-0.01em",
              border: "1px solid rgba(255,255,255,0.20)",
              boxShadow:
                "0 20px 50px rgba(79,70,229,0.4), inset 0 1px 0 rgba(255,255,255,0.24)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>

          <p
            style={{
              fontSize: "0.75rem",
              color: "rgba(212,218,238,0.35)",
              letterSpacing: "0.02em",
            }}
          >
            No sign-up. Just download and go.
          </p>
        </div>
      </div>
    </section>
  );
}
