"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "rgba(255,255,255,0.07)",
        padding: "28px clamp(20px,5vw,72px)",
        background: "rgba(6,8,18,0.6)",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between flex-wrap gap-4"
        style={{ maxWidth: 1180 }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/sentinel-lock.jpg"
            alt="Sentinel"
            width={22}
            height={22}
            className="rounded-[5px] object-cover"
          />
          <span
            className="font-bold uppercase"
            style={{
              fontSize: "0.8125rem",
              letterSpacing: "0.28em",
              color: "rgba(212,218,238,0.45)",
            }}
          >
            Sentinel
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-6 items-center">
          {[
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 no-underline"
              style={{ color: "rgba(212,218,238,0.36)", letterSpacing: "-0.01em" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(212,218,238,0.65)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(212,218,238,0.36)")
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="text-xs"
          style={{ color: "rgba(212,218,238,0.22)", letterSpacing: "0.01em" }}
        >
          © {new Date().getFullYear()} Sentinel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
