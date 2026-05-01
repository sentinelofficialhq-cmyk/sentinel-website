import type { Metadata } from "next";
import LegalNav from "@/components/LegalNav";
import LegalFooter from "@/components/LegalFooter";

export const metadata: Metadata = {
  title: "Terms of Use — Sentinel",
  description:
    "Terms governing your access to and use of Sentinel's app, website, and services.",
};

export default function TermsPage() {
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
      <LegalNav activePage="terms" />

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
            style={{ width: 6, height: 6, background: "rgba(169,112,255,0.7)" }}
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
          Terms of Use
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
          <strong style={{ color: "#C6A0FF" }}>Important:</strong> These Terms
          govern your access to and use of Sentinel&apos;s app, website,
          content, data tools, alerts, and related services. By using Sentinel,
          you agree to these Terms. Sentinel is an analytics platform — not a
          sportsbook, casino, or wagering service.
        </div>

        <div className="legal-card" style={{ padding: "clamp(28px,5vw,52px)" }}>
          <LegalSection>
            <LegalP>
              These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and
              use of Sentinel&apos;s app, website, content, data tools, alerts,
              and related services (collectively, the &ldquo;Services&rdquo;).
            </LegalP>
            <LegalP>
              By creating an account, downloading, subscribing to, accessing, or
              using the Services, you agree to these Terms. If you do not agree,
              do not use Sentinel.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Eligibility</LegalH2>
            <LegalUL
              items={[
                "You must be at least 18 years old, and any higher age required by your local laws for sports betting-related informational services, to use Sentinel.",
                "You represent that your use of Sentinel is lawful in your jurisdiction.",
              ]}
            />
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Service Description</LegalH2>
            <LegalP>
              Sentinel provides sports-related information, historical data,
              model outputs, odds displays, performance tracking, pick analysis,
              and informational content.
            </LegalP>
            <LegalP>
              Sentinel is an analytics and information platform. It is not a
              sportsbook, casino, bookmaker, broker, financial institution,
              gambling operator, or wagering platform.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>No Guarantee; Use at Your Own Risk</LegalH2>
            <LegalP>
              Sentinel&apos;s content, predictions, trends, probabilities,
              ratings, simulations, and picks are estimates and opinions based on
              available data and assumptions.
            </LegalP>
            <LegalP>
              We do not guarantee that any content is accurate, complete,
              current, profitable, legal for your use, or fit for any specific
              purpose.
            </LegalP>
            <LegalP>
              You alone are responsible for any decisions or actions you take
              based on the Services.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>No Professional Advice</LegalH2>
            <LegalP>
              Content provided through Sentinel is for informational and
              entertainment purposes only and does not constitute gambling
              advice, legal advice, financial advice, tax advice, or investment
              advice.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>User Accounts</LegalH2>
            <LegalUL
              items={[
                "You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.",
                "You agree to provide accurate information and keep it updated.",
                "We may suspend or terminate accounts that violate these Terms or present risk, abuse, fraud, or unlawful conduct.",
              ]}
            />
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Subscriptions, Billing, and Auto-Renewal</LegalH2>
            <LegalP>
              If Sentinel offers paid subscriptions, prices, billing periods,
              features, and renewal terms will be disclosed before purchase.
              Subscriptions automatically renew unless canceled before renewal.
            </LegalP>
            <LegalP>
              Billing may be handled by Apple or another authorized payment
              provider. Refunds are handled according to applicable law and the
              rules of the platform through which the purchase was made. For App
              Store purchases, Apple&apos;s billing and refund systems may
              control certain aspects of the transaction.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Acceptable Use</LegalH2>
            <LegalP>You may not:</LegalP>
            <LegalUL
              items={[
                "Use Sentinel for unlawful, fraudulent, deceptive, or abusive purposes.",
                "Scrape, copy, reverse engineer, reproduce, or resell the Services except as permitted by law.",
                "Interfere with the security, integrity, or performance of the Services, upload harmful code, use harmful automation, or misrepresent Sentinel content as guaranteed outcomes or official betting advice.",
              ]}
            />
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Compliance With Laws</LegalH2>
            <LegalP>
              You are solely responsible for ensuring your use of Sentinel
              complies with all applicable laws, including laws relating to
              sports wagering, gaming, online conduct, advertising, consumer
              protection, and age restrictions in your jurisdiction.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Third-Party Data and Services</LegalH2>
            <LegalP>
              The Services may rely on third-party feeds, APIs, licensed data,
              app stores, and other vendors. We are not responsible for
              interruptions, errors, delays, or inaccuracies caused by
              third-party providers.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Intellectual Property</LegalH2>
            <LegalP>
              Sentinel and its branding, software, design, models, text,
              graphics, logos, data compilations, and content are owned by
              Sentinel or its licensors and are protected by intellectual
              property laws.
            </LegalP>
            <LegalP>
              Except for limited personal, non-exclusive, revocable use of the
              Services, no rights are granted to you.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>User Content</LegalH2>
            <LegalP>
              If you submit content, feedback, suggestions, or other materials,
              you grant Sentinel a non-exclusive, worldwide, royalty-free license
              to use, host, store, reproduce, modify, and display that content as
              needed to operate and improve the Services, subject to applicable
              law.
            </LegalP>
            <LegalP>
              You represent that you have the rights necessary to submit such
              content.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Disclaimers</LegalH2>
            <LegalP>
              To the maximum extent permitted by law, the Services are provided
              &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
              warranties of any kind, express or implied.
            </LegalP>
            <LegalP>
              Sentinel does not guarantee that the Services will be uninterrupted
              or error-free, that any data, odds, scores, picks, or analysis will
              be accurate or current, or that any result, winning, or profit will
              occur.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Limitation of Liability</LegalH2>
            <LegalP>
              To the maximum extent permitted by law, Sentinel and its
              affiliates, officers, employees, contractors, licensors, and
              partners will not be liable for any indirect, incidental, special,
              consequential, exemplary, or punitive damages, or any loss of
              profits, revenue, data, goodwill, business opportunity, or other
              intangible losses, arising out of or related to your use of or
              inability to use the Services.
            </LegalP>
            <LegalP>
              To the maximum extent permitted by law, Sentinel&apos;s total
              liability for all claims relating to the Services will not exceed
              the greater of: (a) the amount you paid to Sentinel in the 12
              months before the event giving rise to the claim, or (b) USD $100.
            </LegalP>
            <LegalP>
              Some jurisdictions do not allow certain limitations, so parts of
              this section may not apply to you.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Indemnification</LegalH2>
            <LegalP>
              To the maximum extent permitted by law, you agree to defend,
              indemnify, and hold harmless Sentinel and its affiliates, officers,
              employees, contractors, licensors, and partners from claims,
              damages, liabilities, losses, and expenses arising from your use of
              the Services, your violation of these Terms, your content, or your
              violation of any law or third-party rights.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Suspension and Termination</LegalH2>
            <LegalP>
              We may suspend or terminate your access at any time, with or
              without notice, if we believe you violated these Terms, created
              risk, or if we discontinue all or part of the Services.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Governing Law</LegalH2>
            <LegalP>
              These Terms are governed by the laws of the applicable
              province/state and country, without regard to conflict of law
              principles, except where consumer law requires otherwise.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Dispute Resolution</LegalH2>
            <LegalP>
              Any dispute arising from these Terms or the Services will be
              resolved in the courts of applicable jurisdiction, unless
              applicable law requires otherwise.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Changes to the Services or Terms</LegalH2>
            <LegalP>
              We may modify the Services or these Terms from time to time. If
              changes are material, we will provide notice as required by law.
              Continued use after the effective date means you accept the updated
              Terms.
            </LegalP>
          </LegalSection>

          <LegalDivider />

          <LegalSection>
            <LegalH2>Contact</LegalH2>
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
                Email:{" "}
                <a
                  href="mailto:legal@sentinelprops.com"
                  style={{ color: "#A970FF", textDecoration: "none" }}
                >
                  legal@sentinelprops.com
                </a>
                <br />
                Support:{" "}
                <a
                  href="mailto:support@sentinelprops.com"
                  style={{ color: "#A970FF", textDecoration: "none" }}
                >
                  support@sentinelprops.com
                </a>
              </p>
            </div>
          </LegalSection>
        </div>
      </main>

      <LegalFooter activePage="terms" />
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
