"use client";
import { useState } from "react";
import Link from "next/link";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const BLUE = "#3533C6";
const ORANGE = "#F26522";

type Step = "form" | "confirm" | "submitted";

export default function DeleteAccount() {
  const [step, setStep] = useState<Step>("form");
  const [form, setForm] = useState({
    email: "",
    name: "",
    role: "",
    reason: "",
    confirm: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      e.email = "Please enter a valid email address.";
    if (!form.name.trim()) e.name = "Please enter your full name.";
    if (!form.role) e.role = "Please select your account type.";
    if (!form.confirm)
      e.confirm = "You must confirm you understand this action is irreversible.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) setStep("confirm");
  }

  function handleConfirm() {
    setStep("submitted");
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 12,
    border: "1.5px solid #e0e0e0",
    fontSize: 15,
    color: "#1a1a2e",
    background: "#fff",
    outline: "none",
    fontFamily: "var(--font-nunito-sans), Nunito Sans, sans-serif",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-nunito), Nunito, sans-serif",
    fontWeight: 700,
    fontSize: 14,
    color: "#1a1a2e",
    marginBottom: 8,
  };

  const errorStyle: React.CSSProperties = {
    fontSize: 12.5,
    color: "#ef4444",
    marginTop: 5,
  };

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <div
          style={{
            background: `linear-gradient(160deg, #fff5f5 0%, #fff8f4 100%)`,
            padding: "120px 5vw 60px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#fee2e2",
              color: "#dc2626",
              borderRadius: 50,
              padding: "6px 18px",
              fontSize: 13,
              fontWeight: 700,
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              marginBottom: 20,
            }}
          >
            Irreversible action
          </div>
          <h1
            style={{
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(30px,4vw,48px)",
              color: "#1a1a2e",
              marginBottom: 18,
            }}
          >
            Delete My Account
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "#555",
              maxWidth: 540,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            We&apos;re sorry to see you go. Submit this form and we&apos;ll
            permanently erase your account and all associated data within{" "}
            <strong>30 days</strong>.
          </p>
        </div>

        <div
          style={{
            maxWidth: 600,
            margin: "0 auto",
            padding: "64px 5vw 80px",
          }}
        >
          <AnimatePresence mode="wait">
            {step === "form" && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                {/* Warning box */}
                <div
                  style={{
                    background: "#fff7ed",
                    border: "1.5px solid #fed7aa",
                    borderRadius: 16,
                    padding: "20px 24px",
                    marginBottom: 36,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-nunito), Nunito, sans-serif",
                      fontWeight: 800,
                      fontSize: 15,
                      color: "#92400e",
                      marginBottom: 10,
                    }}
                  >
                    ⚠️ Before you proceed, please read:
                  </div>
                  <ul
                    style={{
                      paddingLeft: 20,
                      fontSize: 14,
                      color: "#78350f",
                      lineHeight: 1.75,
                    }}
                  >
                    <li>
                      All your personal data will be permanently deleted within 30
                      days.
                    </li>
                    <li>
                      If you are a school admin, your school&apos;s data will also
                      be scheduled for deletion.
                    </li>
                    <li>
                      Children&apos;s records linked to your account will be
                      removed.
                    </li>
                    <li>This action cannot be undone.</li>
                    <li>
                      Payment records may be retained for up to 7 years per
                      financial regulations.
                    </li>
                  </ul>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ marginBottom: 24 }}>
                    <label style={labelStyle} htmlFor="name">
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      style={{
                        ...inputStyle,
                        borderColor: errors.name ? "#ef4444" : "#e0e0e0",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = BLUE)
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = errors.name
                          ? "#ef4444"
                          : "#e0e0e0")
                      }
                    />
                    {errors.name && <p style={errorStyle}>{errors.name}</p>}
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <label style={labelStyle} htmlFor="email">
                      Email address linked to your account
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      style={{
                        ...inputStyle,
                        borderColor: errors.email ? "#ef4444" : "#e0e0e0",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = BLUE)
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = errors.email
                          ? "#ef4444"
                          : "#e0e0e0")
                      }
                    />
                    {errors.email && <p style={errorStyle}>{errors.email}</p>}
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <label style={labelStyle} htmlFor="role">
                      Account type
                    </label>
                    <select
                      id="role"
                      value={form.role}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, role: e.target.value }))
                      }
                      style={{
                        ...inputStyle,
                        borderColor: errors.role ? "#ef4444" : "#e0e0e0",
                        cursor: "pointer",
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%23666' strokeWidth='1.5' fill='none' strokeLinecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                        paddingRight: 40,
                      }}
                    >
                      <option value="">Select your role…</option>
                      <option value="parent">Parent / Carer</option>
                      <option value="school_admin">School Administrator</option>
                      <option value="staff">School Staff</option>
                      <option value="centre_admin">Activity Centre Admin</option>
                    </select>
                    {errors.role && <p style={errorStyle}>{errors.role}</p>}
                  </div>

                  <div style={{ marginBottom: 32 }}>
                    <label style={labelStyle} htmlFor="reason">
                      Reason for leaving{" "}
                      <span style={{ fontWeight: 400, color: "#888" }}>
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="reason"
                      placeholder="Help us improve — what could we have done better?"
                      value={form.reason}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, reason: e.target.value }))
                      }
                      rows={4}
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                        minHeight: 100,
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = BLUE)
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "#e0e0e0")
                      }
                    />
                  </div>

                  <div style={{ marginBottom: 32 }}>
                    <label
                      style={{
                        display: "flex",
                        gap: 12,
                        alignItems: "flex-start",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={form.confirm}
                        onChange={(e) =>
                          setForm((f) => ({
                            ...f,
                            confirm: e.target.checked,
                          }))
                        }
                        style={{ marginTop: 3, accentColor: BLUE, width: 16, height: 16, flexShrink: 0 }}
                      />
                      <span style={{ fontSize: 14.5, color: "#444", lineHeight: 1.6 }}>
                        I understand that deleting my account is{" "}
                        <strong>permanent and irreversible</strong>. All my data
                        will be erased and I will lose access to Classfun.
                      </span>
                    </label>
                    {errors.confirm && (
                      <p style={errorStyle}>{errors.confirm}</p>
                    )}
                  </div>

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <button
                      type="submit"
                      style={{
                        flex: 1,
                        background: "#dc2626",
                        color: "#fff",
                        border: "none",
                        padding: "14px 24px",
                        borderRadius: 50,
                        fontFamily: "var(--font-nunito), Nunito, sans-serif",
                        fontWeight: 800,
                        fontSize: 15,
                        cursor: "pointer",
                        transition: "all 0.2s",
                        minWidth: 180,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "#b91c1c";
                        (e.currentTarget as HTMLElement).style.transform =
                          "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "#dc2626";
                        (e.currentTarget as HTMLElement).style.transform =
                          "none";
                      }}
                    >
                      Continue to Confirm →
                    </button>
                    <Link
                      href="/"
                      style={{
                        flex: 1,
                        background: "#f4f4f4",
                        color: "#1a1a2e",
                        textDecoration: "none",
                        padding: "14px 24px",
                        borderRadius: 50,
                        fontFamily: "var(--font-nunito), Nunito, sans-serif",
                        fontWeight: 700,
                        fontSize: 15,
                        textAlign: "center",
                        display: "block",
                        minWidth: 120,
                        transition: "background 0.2s",
                      }}
                    >
                      Cancel
                    </Link>
                  </div>
                </form>
              </motion.div>
            )}

            {step === "confirm" && (
              <motion.div
                key="confirm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 24,
                    padding: "36px 32px",
                    boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
                    marginBottom: 24,
                    border: "2px solid #fee2e2",
                  }}
                >
                  <div style={{ fontSize: 40, marginBottom: 16 }}>⚠️</div>
                  <h2
                    style={{
                      fontFamily: "var(--font-nunito), Nunito, sans-serif",
                      fontWeight: 900,
                      fontSize: 22,
                      color: "#1a1a2e",
                      marginBottom: 12,
                    }}
                  >
                    Are you absolutely sure?
                  </h2>
                  <p style={{ fontSize: 15, color: "#555", lineHeight: 1.7, marginBottom: 24 }}>
                    You are requesting deletion of the account associated with:
                  </p>
                  <div
                    style={{
                      background: "#fafafa",
                      borderRadius: 12,
                      padding: "16px 20px",
                      marginBottom: 28,
                      fontSize: 14.5,
                      color: "#333",
                    }}
                  >
                    <div style={{ marginBottom: 6 }}>
                      <strong>Name:</strong> {form.name}
                    </div>
                    <div style={{ marginBottom: 6 }}>
                      <strong>Email:</strong> {form.email}
                    </div>
                    <div>
                      <strong>Role:</strong>{" "}
                      {{
                        parent: "Parent / Carer",
                        school_admin: "School Administrator",
                        staff: "School Staff",
                        centre_admin: "Activity Centre Admin",
                      }[form.role] ?? form.role}
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#666",
                      lineHeight: 1.7,
                      marginBottom: 28,
                    }}
                  >
                    After confirmation, our team will process this request
                    within <strong>30 days</strong>. You will receive a
                    confirmation email at <strong>{form.email}</strong>.
                  </p>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <button
                      onClick={handleConfirm}
                      style={{
                        flex: 1,
                        background: "#dc2626",
                        color: "#fff",
                        border: "none",
                        padding: "14px 24px",
                        borderRadius: 50,
                        fontFamily: "var(--font-nunito), Nunito, sans-serif",
                        fontWeight: 800,
                        fontSize: 15,
                        cursor: "pointer",
                        minWidth: 180,
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.background =
                          "#b91c1c")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.background =
                          "#dc2626")
                      }
                    >
                      Yes, delete my account
                    </button>
                    <button
                      onClick={() => setStep("form")}
                      style={{
                        flex: 1,
                        background: "#f4f4f4",
                        color: "#1a1a2e",
                        border: "none",
                        padding: "14px 24px",
                        borderRadius: 50,
                        fontFamily: "var(--font-nunito), Nunito, sans-serif",
                        fontWeight: 700,
                        fontSize: 15,
                        cursor: "pointer",
                        minWidth: 120,
                      }}
                    >
                      Go back
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === "submitted" && (
              <motion.div
                key="submitted"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                style={{ textAlign: "center" }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "#dcfce7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 28px",
                    fontSize: 36,
                  }}
                >
                  ✓
                </motion.div>
                <h2
                  style={{
                    fontFamily: "var(--font-nunito), Nunito, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(22px,3vw,30px)",
                    color: "#1a1a2e",
                    marginBottom: 16,
                  }}
                >
                  Request received
                </h2>
                <p
                  style={{
                    fontSize: 16,
                    color: "#555",
                    lineHeight: 1.7,
                    maxWidth: 440,
                    margin: "0 auto 36px",
                  }}
                >
                  We&apos;ve received your account deletion request for{" "}
                  <strong>{form.email}</strong>. You&apos;ll receive a
                  confirmation email shortly, and your data will be fully
                  erased within <strong>30 days</strong>.
                </p>
                <div
                  style={{
                    background: `${BLUE}08`,
                    borderRadius: 16,
                    padding: "20px 24px",
                    fontSize: 14,
                    color: "#555",
                    lineHeight: 1.7,
                    marginBottom: 36,
                    textAlign: "left",
                  }}
                >
                  <strong style={{ color: "#1a1a2e" }}>What happens next:</strong>
                  <ul style={{ paddingLeft: 20, marginTop: 8 }}>
                    <li>A confirmation email will be sent to {form.email}</li>
                    <li>Our team will verify and process the request</li>
                    <li>All personal data will be deleted within 30 days</li>
                    <li>You will receive a final confirmation once complete</li>
                  </ul>
                </div>
                <Link
                  href="/"
                  style={{
                    display: "inline-block",
                    background: `linear-gradient(135deg, ${BLUE}, #5552e0)`,
                    color: "#fff",
                    textDecoration: "none",
                    padding: "14px 36px",
                    borderRadius: 50,
                    fontFamily: "var(--font-nunito), Nunito, sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                  }}
                >
                  Return to home
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  );
}
