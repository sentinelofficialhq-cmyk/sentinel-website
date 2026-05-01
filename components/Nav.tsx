"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(6,8,18,0.90)" : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        padding: "0 clamp(20px,5vw,72px)",
      }}
    >
      <div
        className="flex items-center justify-between mx-auto"
        style={{ maxWidth: 1180, height: 64 }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Image
            src="/images/sentinel-lock.jpg"
            alt="Sentinel"
            width={28}
            height={28}
            className="rounded-[7px] object-cover"
          />
          <span
            className="text-[#F6F7FB] font-bold uppercase"
            style={{ fontSize: "1rem", letterSpacing: "0.34em" }}
          >
            Sentinel
          </span>
        </Link>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Features", href: "/#features" },
            { label: "Preview", href: "/#preview" },
            { label: "FAQ", href: "/#faq" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold transition-colors duration-200"
              style={{
                color: "rgba(212,218,238,0.6)",
                letterSpacing: "-0.01em",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#F6F7FB")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(212,218,238,0.6)")
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          className="flex items-center gap-1.5 font-bold text-white no-underline transition-all duration-200 hover:brightness-110 hover:-translate-y-px"
          style={{
            background: "linear-gradient(135deg, #7C3BFF 0%, #2563FF 100%)",
            borderRadius: 12,
            padding: "9px 18px",
            fontSize: "0.8125rem",
            letterSpacing: "-0.01em",
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow:
              "0 8px 24px rgba(79,70,229,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        >
          <AppleIcon />
          App Store
        </a>
      </div>
    </nav>
  );
}

function AppleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
