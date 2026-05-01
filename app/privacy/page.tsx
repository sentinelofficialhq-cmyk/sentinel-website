import type { Metadata } from "next";
import LegalNav from "@/components/LegalNav";
import LegalFooter from "@/components/LegalFooter";

export const metadata: Metadata = {
  title: "Privacy Policy — Sentinel",
  description: "How Sentinel collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: [
          "radial-gradient(circle at 72% 8%, rgba(109,45,255,0.18), transparent 36%)",
          "radial-gradient(circle at 20% 60%, rgba(59,130,246,0.07), transparent 36%)",
          "linear-gradient(180deg, #030407 0%, #060812 50%, #030407 100%)",
        ].join(", "),
      }}
    >
      <LegalNav activePage="privacy" />

      <main
        className="mx-auto"
        style={{
          maxWidth: 860,
          padding:
            "clamp(48px,8vw,88px) clamp(20px,5vw,48px) clamp(64px,10vw,120px)",
        }}
      >
        {/* Kicker */}
        <div
          className="inline-flex items-center gap-2 font-bold uppercase mb-4"
          style={{
            fontSize: "0.6875rem",
            letterSpacing: "0.12em",
            color: "rgba(212,218,238,0.5)",
          }}
        >
          <span
            className="rounded-full flex-shrink-0"
            style={{
              width: 6, height: 6,
              background: "rgba(169,112,255,0.7)",
            }}
          />
          Legal
        </div>

        <h1
          className="font-extrabold text-[#F6F7FB] mb-3"
          style={{
            fontSize: "clamp(2rem,4vw,3rem)",
            letterSpacing: "-0.05em",
            lineHeight: 1.05,
          }}
        >
          Privacy Policy
        </h1>
        <p
          className="mb-10"
          style={{
            fontSize: "0.8125rem",
            color: "rgba(212,218,238,0.4)",
            letterSpacing: "-0.01em",
          }}
        >
          Last updated: 2026
        </p>

        {/* Accent rule */}
        <div
          className="mb-10"
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, rgba(169,112,255,0.5), rgba(169,112,255,0.1) 60%, transparent)",
          }}
        />

        {/* Disclaimer */}
        <div
          className="mb-9 text-sm leading-relaxed"
          style={{
            background: "rgba(109,45,255,0.08)",
            border: "1px solid rgba(169,112,255,0.22)",
            borderRadius: 16,
            padding: "18px 22px",
            color: "rgba(239,242,255,0.75)",
            letterSpacing: "-0.01em",
          }}
        >
          <strong style={{ color: "#C6A0FF" }}>Summary:</strong> Sentinel
          collects data to operate the app and improve the service. We do not
          sell your personal information. All sports analysis content is for
          informational and entertainment purposes only.
        </div>

        {/* Content card */}
        <div className="legal-card" style={{ padding: "clamp(28px,5vw,52px)" }}>
          <LegalSection>
            <LegalP>
              Sentinel (&ldquo;Sentinel,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides sports analysis,
              statistical tools, pick-tracking features, market data displays,
              and related content for informational and entertainment purposes.
            </LegalP>
            <LegalP>
              This Privacy Policy explains how we collect, use, disclose, and
              protect information when you use the Sentinel mobile application,
              website, and related services (collectively, the
              &ldquo;Services&rdquo;).
            </LegalP>
            <LegalP>By using Sentinel, you agree to this Privacy Policy.</LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Information We Collect</LegalH2>
            <LegalP>
              We may collect information you provide directly to us, including:
            </LegalP>
            <LegalUL
              items={[
                "Name, username, email address, and login credentials",
                "Profile information, support requests, and feedback",
                "Saved picks, watchlists, preferences, notes, and alerts",
              ]}
            />
            <LegalP>
              We may also collect information automatically, including:
            </LegalP>
            <LegalUL
              items={[
                "Device type, operating system, app version, language, and time zone",
                "Log data, crash data, diagnostics, and performance data",
                "Usage information and approximate location derived from IP address where permitted by law",
              ]}
            />
            <LegalP>
              We may receive information from third parties such as analytics
              providers, authentication providers, payment processors, and sports
              data or odds providers.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>How We Use Information</LegalH2>
            <LegalP>We may use information to:</LegalP>
            <LegalUL
              items={[
                "Provide, operate, maintain, and improve Sentinel",
                "Create and manage accounts",
                "Deliver analytics and alerts",
                "Process subscriptions and respond to support requests",
                "Monitor performance and prevent fraud or abuse",
                "Send account and billing notices",
                "Enforce our Terms and comply with legal obligations",
              ]}
            />
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>How We Share Information</LegalH2>
            <LegalP>We may share information with:</LegalP>
            <LegalUL
              items={[
                "Service providers that help us operate Sentinel (hosting, analytics, authentication, customer support, payment vendors, infrastructure vendors)",
                "Professional advisors, regulators, law enforcement, or transaction-related parties where required by law",
              ]}
            />
            <LegalP>We do not sell personal information for money.</LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Sports Data, Odds, Picks &amp; Predictions</LegalH2>
            <LegalP>
              Sentinel may display odds, lines, historical results, projections,
              trends, model outputs, and pick-related content. This information
              may come from third-party providers or be generated by Sentinel
              systems.
            </LegalP>
            <LegalP>
              This information may be delayed, incomplete, or inaccurate and may
              change without notice.
            </LegalP>
            <LegalP>
              All such information is provided for informational and
              entertainment purposes only. Sentinel does not guarantee the
              accuracy, completeness, profitability, or outcome of any
              information, analysis, projection, or pick displayed in the app.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>No Gambling, Betting, or Financial Advice</LegalH2>
            <LegalUL
              items={[
                "Sentinel does not provide gambling advice, financial advice, legal advice, tax advice, or investment advice",
                "Sentinel does not guarantee winnings, profits, or success",
                "Any decision made based on Sentinel is made solely at the user's own risk",
                "Sentinel is not a sportsbook, bookmaker, casino, or gambling operator and does not accept or process wagers unless expressly stated otherwise",
              ]}
            />
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Age Restrictions</LegalH2>
            <LegalP>
              Sentinel is intended only for users who are at least 18 years old,
              and any higher age required by the laws of their jurisdiction. If
              you do not meet the minimum legal age, do not use Sentinel.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Data Retention</LegalH2>
            <LegalP>
              We retain information for as long as reasonably necessary to
              provide the Services, comply with legal obligations, resolve
              disputes, enforce agreements, and maintain business records.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Security</LegalH2>
            <LegalP>
              We use reasonable administrative, technical, and organizational
              safeguards designed to protect information. However, no method of
              transmission or storage is completely secure, and we cannot
              guarantee absolute security.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Your Rights &amp; Choices</LegalH2>
            <LegalP>
              Depending on your location, you may have rights to:
            </LegalP>
            <LegalUL
              items={[
                "Access, correct, delete, or restrict the processing of your personal information",
                "Withdraw consent where applicable",
              ]}
            />
            <LegalP>
              To make a request, contact us at{" "}
              <a
                href="mailto:privacy@sentinelprops.com"
                style={{ color: "#A970FF", textDecoration: "none" }}
              >
                privacy@sentinelprops.com
              </a>
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Third-Party Services &amp; Links</LegalH2>
            <LegalP>
              Sentinel may contain links to third-party websites, sportsbooks,
              affiliates, partners, or services. We are not responsible for the
              privacy, content, accuracy, legality, or practices of third
              parties. Your use of third-party services is governed by their own
              terms and privacy policies.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Children&apos;s Privacy</LegalH2>
            <LegalP>
              Sentinel is not directed to children and we do not knowingly
              collect personal information from children under the minimum legal
              age.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Changes to This Privacy Policy</LegalH2>
            <LegalP>
              We may update this Privacy Policy from time to time. We will post
              the updated version and update the &ldquo;Last updated&rdquo; date.
              Continued use of Sentinel after changes become effective means you
              accept the revised Policy to the extent permitted by law.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Contact Us</LegalH2>
            <LegalP>For privacy questions or requests, contact:</LegalP>
            <div
              style={{
                background: "rgba(109,45,255,0.06)",
                border: "1px solid rgba(169,112,255,0.18)",
                borderRadius: 14,
                padding: "18px 22px",
                marginTop: 12,
              }}
            >
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                  color: "rgba(212,218,238,0.65)",
                  letterSpacing: "-0.01em",
                }}
              >
                <strong style={{ color: "#F6F7FB" }}>Sentinel</strong>
                <br />
                Email &amp; Support:{" "}
                <a
                  href="mailto:privacy@sentinelprops.com"
                  style={{ color: "#A970FF", textDecoration: "none" }}
                >
                  privacy@sentinelprops.com
                </a>
              </p>
            </div>
          </LegalSection>
        </div>
      </main>

      <LegalFooter activePage="privacy" />
    </div>
  );
}

/* ── Shared legal primitives ── */

function LegalSection({ children }: { children: React.ReactNode }) {
  return <div style={{ marginBottom: 36 }}>{children}</div>;
}

function LegalH2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-bold text-[#F6F7FB] mb-3"
      style={{
        fontSize: "1.0625rem",
        letterSpacing: "-0.02em",
        paddingLeft: 14,
        borderLeft: "2px solid rgba(169,112,255,0.55)",
      }}
    >
      {children}
    </h2>
  );
}

function LegalP({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mb-3 last:mb-0"
      style={{
        fontSize: "0.9375rem",
        lineHeight: 1.72,
        color: "rgba(212,218,238,0.72)",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </p>
  );
}

function LegalUL({ items }: { items: string[] }) {
  return (
    <ul
      className="mb-3"
      style={{
        listStyle: "none",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: 7,
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-2.5 items-start"
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.65,
            color: "rgba(212,218,238,0.72)",
            letterSpacing: "-0.01em",
          }}
        >
          <span
            className="rounded-full flex-shrink-0"
            style={{
              width: 5, height: 5,
              background: "rgba(169,112,255,0.6)",
              marginTop: 8,
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function LegalDivider() {
  return (
    <div
      style={{
        height: 1,
        background: "rgba(255,255,255,0.05)",
        margin: "32px 0",
      }}
    />
  );
}
