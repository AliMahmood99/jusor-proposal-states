"use client";

import { useState, useEffect } from "react";

/* ── Inject keyframe animations ── */
function useJusorAnimations() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.querySelector("[data-ju-d]")) return;
    const s = document.createElement("style");
    s.setAttribute("data-ju-d", "1");
    s.textContent = `
@keyframes ju-up{0%{transform:translateY(100%)}100%{transform:translateY(0)}}
@keyframes ju-fade{0%{opacity:0}100%{opacity:1}}
@keyframes ju-pop{0%{transform:scale(.85);opacity:0}60%{transform:scale(1.04)}100%{transform:scale(1);opacity:1}}
@keyframes ju-check{0%{stroke-dashoffset:24}100%{stroke-dashoffset:0}}
@keyframes ju-ring{0%{transform:scale(.8);opacity:0}100%{transform:scale(1);opacity:1}}
@keyframes ju-float{0%{transform:translateY(8px);opacity:0}100%{transform:translateY(0);opacity:1}}
`;
    document.head.appendChild(s);
  }, []);
}

/* ── Design tokens ── */
const T = {
  primary: "#ff4f45",
  dark: "#060b35",
  purple: "#4446d2",
  gray50: "#fafafa",
  gray100: "#f3f4f6",
  gray200: "#e5e7eb",
  gray400: "#9ca3af",
  gray500: "#717171",
  gray600: "#555",
  gray800: "#3a3a3a",
  white: "#fff",
  red50: "#fef2f2",
  red100: "#fee2e2",
  red200: "#fecaca",
  red600: "#dc2626",
  orange600: "#e65100",
  amber50: "#fffbeb",
  amber800: "#92400e",
  radius: { sm: 10, md: 14, lg: 20, xl: 24, full: 100 },
  font: "'Urbanist','Inter',system-ui,sans-serif",
};

/* ── Status Bar ── */
const Bar = () => (
  <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 30px", fontSize: 16, fontWeight: 500 }}>
    <span>9:41</span>
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <svg width="18" height="12" viewBox="0 0 18 12"><rect x="0" y="4" width="3" height="8" rx="1" fill="#0b0b0b" /><rect x="5" y="2" width="3" height="10" rx="1" fill="#0b0b0b" /><rect x="10" y="0" width="3" height="12" rx="1" fill="#0b0b0b" /><rect x="15" y="0" width="3" height="12" rx="1" fill="#0b0b0b" opacity=".3" /></svg>
      <svg width="16" height="12" viewBox="0 0 16 12"><path d="M8 3.6C10.2 3.6 12.1 4.5 13.5 6L15 4.5C13.1 2.6 10.7 1.5 8 1.5S2.9 2.6 1 4.5L2.5 6C3.9 4.5 5.8 3.6 8 3.6z" fill="#0b0b0b" /><path d="M8 7.2C9.2 7.2 10.3 7.7 11 8.5L12.5 7C11.3 5.8 9.7 5.1 8 5.1S4.7 5.8 3.5 7L5 8.5C5.7 7.7 6.8 7.2 8 7.2z" fill="#0b0b0b" /><circle cx="8" cy="10.5" r="1.5" fill="#0b0b0b" /></svg>
      <svg width="27" height="13" viewBox="0 0 27 13"><rect x="0" y="1" width="22" height="11" rx="2" stroke="#0b0b0b" strokeWidth="1" fill="none" /><rect x="23" y="4" width="2" height="5" rx="1" fill="#0b0b0b" opacity=".4" /><rect x="2" y="3" width="18" height="7" rx="1" fill="#0b0b0b" /></svg>
    </div>
  </div>
);

/* ── Nav ── */
const Nav = () => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", background: T.gray50 }}>
    <div style={{ width: 44, height: 44, background: T.white, borderRadius: T.radius.full, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b0b0b" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
    </div>
    <span style={{ fontSize: 18, fontWeight: 600, color: "#0b0b0b" }}>Proposal Details</span>
    <div style={{ width: 44 }} />
  </div>
);

/* ── Profile ── */
const Profile = () => (
  <div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <div style={{ width: 50, height: 50, borderRadius: 14, background: "linear-gradient(135deg,#667eea,#764ba2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, color: "white", fontWeight: 700 }}>A</div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 16, fontWeight: 600, color: "#0b0b0b" }}>Ahmed Ali</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 3, background: "rgba(68,70,210,0.08)", color: T.purple, fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 50 }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              Invited
            </span>
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 5 }}>
            {[["X", "14k", "#0b0b0b"], ["IG", "14.6k", "#E1306C"], ["TT", "14.8k", "#0b0b0b"]].map(([p, v, c], i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 12, color: "#272c88", fontWeight: 500 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: c, opacity: .5 }}>{p}</span>{v}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ width: 34, height: 34, background: "rgba(68,70,210,0.08)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.purple} strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
      </div>
    </div>
    <div style={{ display: "flex", gap: 8 }}>
      {[["4.9", "Review"], ["16", "Campaign"]].map(([v, l], i) => (
        <div key={i} style={{ flex: 1, background: T.gray50, borderRadius: T.radius.md, padding: "8px 0", textAlign: "center" as const }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{v}</div>
          <div style={{ fontSize: 11, color: T.gray500, marginTop: 3 }}>{l}</div>
        </div>
      ))}
    </div>
  </div>
);

/* ── Negotiation Steps ── */
const Steps = () => (
  <div style={{ background: T.gray50, borderRadius: T.radius.md, padding: 12 }}>
    <div style={{ position: "relative" as const, paddingLeft: 22 }}>
      <div style={{ position: "absolute" as const, left: 7, top: 8, bottom: 8, width: 2, background: T.gray200 }} />
      {/* You offered */}
      <div style={{ position: "relative" as const, paddingBottom: 16, paddingLeft: 14 }}>
        <div style={{ position: "absolute" as const, left: -22, top: 3, width: 16, height: 16, borderRadius: "50%", background: T.purple, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
        </div>
        <div style={{ fontSize: 11, color: T.gray500, fontWeight: 500, marginBottom: 2 }}>You offered</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: T.dark }}>SAR 180</div>
      </div>
      {/* Counter */}
      <div style={{ position: "relative" as const, paddingLeft: 14 }}>
        <div style={{ position: "absolute" as const, left: -22, top: 3, width: 16, height: 16, borderRadius: "50%", background: T.orange600, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M7 17l9.2-9.2M17 17V7H7" transform="scale(.5) translate(12,12)" /></svg>
        </div>
        <div style={{ fontSize: 11, color: T.orange600, fontWeight: 600, marginBottom: 2 }}>Ahmed Ali counter-offered</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: T.orange600 }}>SAR 250 <span style={{ fontSize: 10, fontWeight: 500 }}>+SAR 70</span></div>
      </div>
    </div>
  </div>
);

/* ── Price Strip ── */
const PriceStrip = () => (
  <div style={{ background: T.orange600, borderRadius: T.radius.lg, padding: "12px 16px", color: "white" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
      <span style={{ fontSize: 16, fontWeight: 500 }}>Counter Offer</span>
      <span style={{ fontSize: 16, fontWeight: 600 }}>SAR 250</span>
    </div>
    <div style={{ background: "rgba(255,255,255,.15)", borderRadius: 50, padding: "5px 12px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "white", animation: "ju-fade 1.5s infinite alternate" }} />
      <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: .2 }}>Awaiting Your Decision</span>
    </div>
  </div>
);

/* ── Decline Reasons (Business-specific) ── */
const REASONS = [
  { id: "budget", label: "Price still too high" },
  { id: "found", label: "Found a better-fit influencer" },
  { id: "scope", label: "Deliverables don\u2019t match my needs" },
  { id: "timeline", label: "Timeline conflict" },
  { id: "cancelled", label: "Campaign paused or cancelled" },
  { id: "other", label: "Other reason" },
];

/* ── Reason Row (matches Figma pattern exactly) ── */
const ReasonRow = ({ r, active, onPick }: { r: { id: string; label: string }; active: boolean; onPick: (id: string) => void }) => (
  <button onClick={() => onPick(r.id)} style={{
    width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "16px 18px", borderRadius: 14,
    background: active ? T.red50 : T.gray50,
    border: active ? `1.5px solid ${T.primary}` : "1.5px solid transparent",
    cursor: "pointer", fontFamily: T.font, transition: "all .2s ease",
  }}>
    <span style={{
      fontSize: 15, fontWeight: active ? 600 : 500,
      color: active ? T.primary : T.dark,
      transition: "color .15s",
    }}>{r.label}</span>
    {active
      ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill={T.primary} />
          <path d="M8 12.5l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "ju-check .35s ease forwards" }} strokeDasharray="24" strokeDashoffset="0" />
        </svg>
      : <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" stroke={T.gray200} strokeWidth="1.5" />
        </svg>
    }
  </button>
);

/* ── Home Indicator ── */
const HomeInd = () => (
  <div style={{ height: 34, display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 8 }}>
    <div style={{ width: 134, height: 5, background: "#0b0b0b", borderRadius: 100 }} />
  </div>
);

/* ================================================================= */
/*   MAIN                                                             */
/* ================================================================= */
export default function DeclineCounterPage() {
  useJusorAnimations();

  const [view, setView] = useState<"base" | "sheet" | "done">("base");
  const [picked, setPicked] = useState<string | null>(null);
  const [txt, setTxt] = useState("");

  const open = () => setView("sheet");
  const close = () => { setView("base"); setPicked(null); setTxt(""); };
  const done = () => setView("done");
  const reset = () => { setView("base"); setPicked(null); setTxt(""); };

  const ok = picked && (picked !== "other" || txt.trim().length > 0);

  return (
    <div style={{ fontFamily: T.font, background: "#f0f1f3", minHeight: "100vh", display: "flex", flexDirection: "column" as const, alignItems: "center", padding: "30px 16px" }}>

      {/* ── Title ── */}
      <div style={{ textAlign: "center" as const, marginBottom: 18 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "rgba(68,70,210,.08)", color: T.purple, fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: 50, marginBottom: 8 }}>JUSOR — Business View</div>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: T.dark, margin: "0 0 3px" }}>Decline Counter Offer</h1>
        <p style={{ fontSize: 12, color: T.gray500, margin: 0 }}>
          {view === "base" && "Tap \u201CDecline\u201D to see business-specific reasons"}
          {view === "sheet" && "Select a reason, then confirm"}
          {view === "done" && "Done \u2014 the influencer will be notified"}
        </p>
      </div>

      {/* ══════════ PHONE ══════════ */}
      <div style={{ width: 375, height: 812, background: T.gray50, borderRadius: 40, overflow: "hidden" as const, boxShadow: "0 20px 60px rgba(0,0,0,.12), 0 0 0 1px rgba(0,0,0,.04)", display: "flex", flexDirection: "column" as const, position: "relative" as const }}>
        <Bar />
        <Nav />

        {/* ── Scrollable body ── */}
        <div style={{ flex: 1, overflowY: "auto" as const, padding: "0 16px 16px", display: "flex", flexDirection: "column" as const, gap: 8 }}>
          <div style={{ background: "white", border: "1px solid #e0e2e4", borderRadius: 16, padding: 14, boxShadow: "0 2px 10px rgba(0,0,0,.05)", display: "flex", flexDirection: "column" as const, gap: 10 }}>
            <Profile />
            <Steps />
            <PriceStrip />
          </div>
        </div>

        {/* ── Bottom CTA — base ── */}
        {view === "base" && (
          <div style={{ borderTop: "1px solid #ecf6ff", background: "white", padding: "12px 16px" }}>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={open} style={{ flex: 1, height: 52, background: T.red100, border: `1px solid #ee4141`, borderRadius: T.radius.full, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, color: "#ee4141", fontWeight: 600, fontSize: 16, fontFamily: T.font, cursor: "pointer" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ee4141" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" /></svg>
                Decline
              </button>
              <button style={{ flex: 1, height: 52, background: T.dark, border: "none", borderRadius: T.radius.full, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, color: "white", fontWeight: 600, fontSize: 16, fontFamily: T.font, cursor: "pointer" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
                Accept
              </button>
            </div>
            <HomeInd />
          </div>
        )}

        {/* ══════════ BOTTOM SHEET ══════════ */}
        {view === "sheet" && <>
          <div onClick={close} style={{ position: "absolute" as const, inset: 0, background: "rgba(6,11,53,.45)", zIndex: 10, animation: "ju-fade .25s ease" }} />

          <div style={{
            position: "absolute" as const, bottom: 0, left: 0, right: 0, zIndex: 20,
            background: "white", borderRadius: "28px 28px 0 0",
            animation: "ju-up .4s cubic-bezier(.32,.72,0,1)",
            maxHeight: "80%", display: "flex", flexDirection: "column" as const,
          }}>
            {/* Handle */}
            <div style={{ display: "flex", justifyContent: "center", padding: "10px 0 0" }}>
              <div style={{ width: 36, height: 4, background: "#c9ccd1", borderRadius: 100 }} />
            </div>

            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px 0" }}>
              <div>
                <div style={{ fontSize: 19, fontWeight: 700, color: T.dark }}>Decline Counter Offer</div>
                <div style={{ fontSize: 13, color: T.gray400, fontWeight: 400, marginTop: 3 }}>Help us improve by sharing your reason (optional)</div>
              </div>
              <button onClick={close} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="13" fill={T.red50} stroke={T.red200} strokeWidth="1" />
                  <path d="M10 10l8 8M18 10l-8 8" stroke={T.primary} strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "#eef0f2", margin: "14px 20px 0" }} />

            {/* Reasons list */}
            <div style={{ flex: 1, overflowY: "auto" as const, padding: "14px 20px 0", display: "flex", flexDirection: "column" as const, gap: 8 }}>
              {REASONS.map(r => <ReasonRow key={r.id} r={r} active={picked === r.id} onPick={setPicked} />)}

              {/* Other textarea */}
              {picked === "other" && (
                <div style={{ animation: "ju-float .3s ease forwards", padding: "2px 0 4px" }}>
                  <textarea
                    value={txt} onChange={e => setTxt(e.target.value.slice(0, 200))}
                    placeholder="Please share more details..."
                    rows={3}
                    style={{
                      width: "100%", border: `1.5px solid ${T.gray200}`, borderRadius: 14,
                      padding: "12px 14px", fontSize: 14, fontFamily: T.font,
                      color: T.dark, background: T.gray50, resize: "none" as const, outline: "none",
                      boxSizing: "border-box" as const, transition: "border-color .2s",
                    }}
                    onFocus={e => (e.target.style.borderColor = T.primary)}
                    onBlur={e => (e.target.style.borderColor = T.gray200)}
                  />
                  <div style={{ textAlign: "right" as const, fontSize: 10, color: T.gray400, marginTop: 3 }}>{txt.length}/200</div>
                </div>
              )}
            </div>

            {/* Warning */}
            <div style={{ margin: "10px 20px 0", display: "flex", alignItems: "center", gap: 8, background: T.amber50, borderRadius: 12, padding: "10px 14px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#FEF3C7" /><path d="M12 8v4M12 16h.01" stroke="#D97706" strokeWidth="2" strokeLinecap="round" /></svg>
              <span style={{ fontSize: 12, color: T.amber800, fontWeight: 500 }}>The influencer will be notified of your decline.</span>
            </div>

            {/* CTA row */}
            <div style={{ display: "flex", gap: 10, padding: "14px 20px 0" }}>
              <button onClick={close} style={{
                flex: 1, height: 52, background: T.gray100, border: "none", borderRadius: T.radius.full,
                fontSize: 16, fontWeight: 600, color: T.gray800, fontFamily: T.font, cursor: "pointer",
              }}>Cancel</button>
              <button onClick={ok ? done : undefined} style={{
                flex: 1, height: 52,
                background: ok ? T.primary : T.gray200,
                border: "none", borderRadius: T.radius.full,
                fontSize: 16, fontWeight: 600,
                color: ok ? "white" : T.gray400,
                fontFamily: T.font,
                cursor: ok ? "pointer" : "default",
                transition: "all .25s ease",
                boxShadow: ok ? "0 4px 16px rgba(255,79,69,.3)" : "none",
              }}>Confirm Decline</button>
            </div>

            <HomeInd />
          </div>
        </>}

        {/* ══════════ CONFIRMED ══════════ */}
        {view === "done" && <>
          <div style={{ position: "absolute" as const, inset: 0, background: "rgba(6,11,53,.45)", zIndex: 10, animation: "ju-fade .2s ease" }} />

          <div style={{
            position: "absolute" as const, bottom: 0, left: 0, right: 0, zIndex: 20,
            background: "white", borderRadius: "28px 28px 0 0",
            animation: "ju-up .4s cubic-bezier(.32,.72,0,1)",
            padding: "0 20px",
          }}>
            {/* Handle */}
            <div style={{ display: "flex", justifyContent: "center", padding: "10px 0 20px" }}>
              <div style={{ width: 36, height: 4, background: "#c9ccd1", borderRadius: 100 }} />
            </div>

            {/* Animated icon */}
            <div style={{ textAlign: "center" as const }}>
              <div style={{ animation: "ju-pop .5s cubic-bezier(.34,1.56,.64,1)", marginBottom: 16 }}>
                <div style={{ width: 68, height: 68, borderRadius: "50%", background: `linear-gradient(135deg,${T.red100},${T.red200})`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", boxShadow: "0 8px 28px rgba(255,79,69,.15)" }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={T.primary} strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
              </div>

              <div style={{ fontSize: 20, fontWeight: 700, color: T.dark, marginBottom: 6 }}>Counter Offer Declined</div>
              <div style={{ fontSize: 14, color: T.gray500, lineHeight: 1.5 }}>
                You&apos;ve declined <span style={{ fontWeight: 600, color: T.dark }}>Ahmed Ali&apos;s</span> counter offer of <span style={{ fontWeight: 700, color: T.orange600 }}>SAR 250</span>
              </div>
            </div>

            {/* Reason recap */}
            <div style={{ background: T.gray50, borderRadius: 14, padding: "12px 16px", margin: "18px 0 14px", border: "1px solid #eef0f2" }}>
              <div style={{ fontSize: 10, color: T.gray400, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: .4, marginBottom: 5 }}>Reason</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.primary} strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
                <span style={{ fontSize: 14, color: T.dark, fontWeight: 500, fontStyle: picked === "other" ? "italic" as const : "normal" as const }}>
                  {picked === "other" ? `"${txt}"` : REASONS.find(r => r.id === picked)?.label}
                </span>
              </div>
            </div>

            {/* What&apos;s next */}
            <div style={{ background: "rgba(68,70,210,.04)", borderRadius: 14, padding: "14px 16px", border: "1px solid rgba(68,70,210,.08)", marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.purple} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
                <span style={{ fontSize: 12, fontWeight: 700, color: T.dark }}>What&apos;s next?</span>
              </div>
              {([
                ["Send a **new offer** with adjusted terms", "M22 2L11 13M22 2l-7 20-4-9-9-4z"],
                ["Explore **similar influencers** in your niche", "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"]
              ] as const).map(([text, path], i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: i === 0 ? 8 : 0 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 7, background: "rgba(68,70,210,.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={T.purple} strokeWidth="2.5" strokeLinecap="round"><path d={path} />{i === 1 && <circle cx="12" cy="7" r="4" />}</svg>
                  </div>
                  <span style={{ fontSize: 12, color: T.gray600, lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, `<span style="font-weight:600;color:${T.dark}">$1</span>`) }} />
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={reset} style={{ flex: 1, height: 52, background: T.gray100, border: "none", borderRadius: T.radius.full, fontSize: 15, fontWeight: 600, color: T.gray800, fontFamily: T.font, cursor: "pointer" }}>
                Send New Offer
              </button>
              <button onClick={reset} style={{ flex: 1, height: 52, background: T.dark, border: "none", borderRadius: T.radius.full, fontSize: 15, fontWeight: 600, color: "white", fontFamily: T.font, cursor: "pointer" }}>
                Browse Influencers
              </button>
            </div>

            <HomeInd />
          </div>
        </>}
      </div>
    </div>
  );
}
