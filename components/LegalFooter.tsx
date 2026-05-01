import Link from "next/link";

interface LegalFooterProps {
  activePage?: "privacy" | "terms";
}

export default function LegalFooter({ activePage }: LegalFooterProps) {
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
        <div className="flex items-center gap-2">
          <img
            src="/images/sentinel-lock.jpg"
            alt="Sentinel"
            width={20}
            height={20}
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

        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="text-sm font-medium no-underline transition-colors duration-200"
            style={{
              color:
                activePage === "privacy"
                  ? "rgba(169,112,255,0.8)"
                  : "rgba(212,218,238,0.36)",
              letterSpacing: "-0.01em",
            }}
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm font-medium no-underline transition-colors duration-200"
            style={{
              color:
                activePage === "terms"
                  ? "rgba(169,112,255,0.8)"
                  : "rgba(212,218,238,0.36)",
              letterSpacing: "-0.01em",
            }}
          >
            Terms
          </Link>
        </div>

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
