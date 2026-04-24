import Link from "next/link";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Classfun",
  description: "How Classfun collects, uses, and protects your data.",
};

const BLUE = "#3533C6";
const ORANGE = "#F26522";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2
        style={{
          fontFamily: "var(--font-nunito), Nunito, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(20px,2.5vw,26px)",
          color: "#1a1a2e",
          marginBottom: 16,
          paddingBottom: 10,
          borderBottom: `2px solid ${BLUE}20`,
        }}
      >
        {title}
      </h2>
      <div style={{ fontSize: 15.5, color: "#444", lineHeight: 1.8 }}>
        {children}
      </div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ marginBottom: 14 }}>{children}</p>;
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: 24, marginBottom: 14 }}>
      {items.map((item, i) => (
        <li key={i} style={{ marginBottom: 8 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <div
          style={{
            background: `linear-gradient(160deg, #f0f1ff 0%, #fff8f4 100%)`,
            padding: "120px 5vw 60px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: `${BLUE}12`,
              color: BLUE,
              borderRadius: 50,
              padding: "6px 18px",
              fontSize: 13,
              fontWeight: 700,
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              marginBottom: 20,
            }}
          >
            Last updated: April 24, 2026
          </div>
          <h1
            style={{
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(32px,4vw,52px)",
              color: "#1a1a2e",
              marginBottom: 18,
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "#555",
              maxWidth: 580,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            We take your privacy seriously — especially when it comes to children.
            Here&apos;s exactly how we handle your data.
          </p>
        </div>

        {/* Content */}
        <div
          style={{
            maxWidth: 820,
            margin: "0 auto",
            padding: "64px 5vw 80px",
          }}
        >
          <Section title="1. Who We Are">
            <P>
              Classfun (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates
              the Classfun mobile and web application — a platform that connects
              schools, activity centres, and parents with real-time communication,
              attendance tracking, and safe pickup coordination.
            </P>
            <P>
              Data controller: Classfun Ltd. Contact:{" "}
              <a
                href="mailto:privacy@classfun.app"
                style={{ color: BLUE, textDecoration: "underline" }}
              >
                privacy@classfun.app
              </a>
            </P>
          </Section>

          <Section title="2. Information We Collect">
            <P>We collect the following categories of information:</P>
            <P>
              <strong>Account information:</strong>
            </P>
            <Ul
              items={[
                "Name, email address, and phone number",
                "School or centre affiliation",
                "Profile photo (optional)",
                "Role: parent, school administrator, or staff member",
              ]}
            />
            <P>
              <strong>Child data (collected by schools, shared with parents):</strong>
            </P>
            <Ul
              items={[
                "Child's first name and year/class group",
                "Attendance records",
                "Pickup authorisation lists",
                "Progress reports and grades (if enabled by the school)",
                "Photos shared by teachers (with school consent)",
              ]}
            />
            <P>
              <strong>Usage data:</strong>
            </P>
            <Ul
              items={[
                "Device type, operating system, and app version",
                "IP address and approximate location (for pickup tracking features only)",
                "In-app actions and feature usage",
                "Push notification delivery status",
              ]}
            />
          </Section>

          <Section title="3. How We Use Your Information">
            <P>We use collected data to:</P>
            <Ul
              items={[
                "Provide safe pickup coordination and attendance tracking",
                "Send real-time notifications to parents and staff",
                "Process subscription payments via Paystack",
                "Improve and debug the Classfun platform",
                "Comply with legal obligations",
                "Respond to support requests",
              ]}
            />
            <P>
              We do <strong>not</strong> sell your data to third parties. We do
              not use child data for advertising purposes.
            </P>
          </Section>

          <Section title="4. Children's Privacy (COPPA & GDPR-K)">
            <P>
              Classfun is designed for use by schools and parents — not directly
              by children. We take special precautions with all child-related data:
            </P>
            <Ul
              items={[
                "Children do not create accounts on Classfun",
                "Child data is entered by verified school administrators",
                "Parents must be invited by the school to access their child's profile",
                "We collect only the minimum data necessary to provide the service",
                "Child data is never shared with advertisers or third-party analytics platforms",
                "All child records are deleted within 30 days of a school ending their subscription",
              ]}
            />
          </Section>

          <Section title="5. Data Sharing">
            <P>We share data only with:</P>
            <Ul
              items={[
                "Paystack — payment processing (your card data is never stored by Classfun)",
                "Firebase / Google Cloud — secure hosting and push notifications",
                "WhatsApp Business API — optional notification delivery if enabled",
                "Our team — for support and maintenance, under strict confidentiality",
              ]}
            />
            <P>
              We may disclose data if required by law, court order, or to protect
              the safety of children using our platform.
            </P>
          </Section>

          <Section title="6. Data Retention">
            <Ul
              items={[
                "Active accounts: data retained while the subscription is active",
                "Expired subscriptions: data retained for 90 days then deleted",
                "Deleted accounts: all personal data erased within 30 days of deletion request",
                "Payment records: retained for 7 years per financial regulations",
              ]}
            />
          </Section>

          <Section title="7. Your Rights">
            <P>
              Depending on your location, you may have the right to:
            </P>
            <Ul
              items={[
                "Access the personal data we hold about you",
                "Correct inaccurate data",
                "Request deletion of your account and all associated data",
                "Object to or restrict certain processing",
                "Data portability — receive your data in a machine-readable format",
                "Withdraw consent at any time",
              ]}
            />
            <P>
              To exercise any of these rights, email{" "}
              <a
                href="mailto:privacy@classfun.app"
                style={{ color: BLUE, textDecoration: "underline" }}
              >
                privacy@classfun.app
              </a>{" "}
              or use our{" "}
              <Link
                href="/delete-account"
                style={{ color: ORANGE, textDecoration: "underline" }}
              >
                account deletion request form
              </Link>
              .
            </P>
          </Section>

          <Section title="8. Security">
            <P>
              We protect your data using industry-standard measures including:
            </P>
            <Ul
              items={[
                "TLS encryption for all data in transit",
                "AES-256 encryption for sensitive data at rest",
                "Role-based access controls — staff only see what they need",
                "Regular security audits and penetration testing",
                "Secure, time-limited pickup codes (7-digit, 2-hour expiry)",
              ]}
            />
          </Section>

          <Section title="9. Cookies">
            <P>
              The Classfun web app uses essential cookies only — for session
              management and authentication. We do not use tracking or advertising
              cookies. You can disable cookies in your browser settings, but some
              features may not function correctly.
            </P>
          </Section>

          <Section title="10. Changes to This Policy">
            <P>
              We may update this Privacy Policy from time to time. We will notify
              all users of material changes via in-app notification and email at
              least 14 days before changes take effect.
            </P>
          </Section>

          <Section title="11. Contact Us">
            <P>
              Questions about privacy? We&apos;re here to help:
            </P>
            <Ul
              items={[
                "Email: privacy@classfun.app",
                "General: hello@classfun.app",
              ]}
            />
          </Section>

          {/* CTA */}
          <div
            style={{
              background: `${BLUE}08`,
              borderRadius: 20,
              padding: "28px 32px",
              border: `1px solid ${BLUE}20`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-nunito), Nunito, sans-serif",
                  fontWeight: 800,
                  fontSize: 16,
                  color: "#1a1a2e",
                  marginBottom: 4,
                }}
              >
                Want to delete your account?
              </div>
              <div style={{ fontSize: 14, color: "#666" }}>
                Submit a deletion request and we&apos;ll erase your data within 30 days.
              </div>
            </div>
            <Link
              href="/delete-account"
              style={{
                background: `linear-gradient(135deg, ${BLUE}, #5552e0)`,
                color: "#fff",
                textDecoration: "none",
                padding: "12px 28px",
                borderRadius: 50,
                fontFamily: "var(--font-nunito), Nunito, sans-serif",
                fontWeight: 700,
                fontSize: 14,
                whiteSpace: "nowrap",
              }}
            >
              Request Deletion →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
