/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useEffect } from "react";

/* Inject keyframes via useEffect */
function useKeyframeStyles() {
  useEffect(() => {
    if (!document.querySelector("[data-jusor-anim]")) {
      const styleTag = document.createElement("style");
      styleTag.textContent = `
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
@keyframes pulse-ring { 0% { transform: scale(1); opacity: 0.4; } 100% { transform: scale(1.8); opacity: 0; } }
@keyframes float-up { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(-6px); opacity: 0.6; } }
`;
      styleTag.setAttribute("data-jusor-anim", "1");
      document.head.appendChild(styleTag);
    }
  }, []);
}

/* ===== Types ===== */
interface ClockIconProps {
  size?: number;
  color?: string;
}

interface ChevronDownProps {
  open: boolean;
}

interface ShieldIconProps {
  size?: number;
  color?: string;
}

interface PaymentBreakdownProps {
  baseAmount?: number;
}

interface CircularTimerProps {
  hoursLeft?: number;
  totalHours?: number;
}

interface BottomBarProps {
  buttons: React.ReactNode;
}

interface BtnRejectProps {
  label?: string;
}

interface BtnAcceptProps {
  label?: string;
}

interface ProfileCardProps {
  badge: React.ReactNode;
  dimmed?: boolean;
}

interface TimelineInfoProps {
  rows?: [string, string, string?][];
}

interface PhoneFrameProps {
  children: React.ReactNode;
  bottomButtons: React.ReactNode;
}

interface DeliverableChange {
  type: "swap" | "qty" | "removed" | "added" | "same";
  from?: string;
  to?: string;
  item?: string;
}

interface DeliverablesDiffProps {
  changes: DeliverableChange[] | null;
}

interface CounterVariantProps {
  changes: DeliverableChange[];
  label?: string;
}

interface ViewConfig {
  label: string;
  icon: React.ReactNode;
  desc: string;
  color: string;
  bg: string;
  component: React.ReactNode;
}

/* ===== Icons ===== */
const ChevronLeft = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b0b0b" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>;
const CloseCircle = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ee4141" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>;
const CheckSvg = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>;
const ChatIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4446d2" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>;
const ClockIcon = ({ size = 12, color = "#717171" }: ClockIconProps) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>;
const PersonIcon = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const GlobeIcon = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>;
const ChevronDown = ({ open }: ChevronDownProps) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8f8f8f" strokeWidth="2" strokeLinecap="round" style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0)" }}><path d="M6 9l6 6 6-6"/></svg>;
const WalletIcon = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/><circle cx="17" cy="14" r="1"/></svg>;
const CheckCircle = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>;
const XCircle = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>;
const NegotiateIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e65100" strokeWidth="2" strokeLinecap="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>;
const ShieldIcon = ({ size = 12, color = "#4446d2" }: ShieldIconProps) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const ArrowLeftIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>;
const UsersIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4446d2" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>;
const SendIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg>;
const HourglassIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 2v6l4 4-4 4v6h12v-6l-4-4 4-4V2H6z"/></svg>;
const AlertTriangleIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
const RefreshIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>;

/* ===== Payment Breakdown (Collapsible) — with Payment Protected ===== */
const PaymentBreakdown = ({ baseAmount = 250 }: PaymentBreakdownProps) => {
  const [open, setOpen] = useState(false);
  const fee = Math.min(baseAmount * 0.03, 10000);
  const vat = fee * 0.15;
  const gateway = baseAmount * 0.01 + 1;
  const total = baseAmount + fee + vat + gateway;
  const fmt = (n: number) => n.toFixed(2);

  return (
    <div style={{ background: "#f8f9fb", borderRadius: 12, overflow: "hidden" as const, border: "1px solid #eef0f2" }}>
      <div onClick={() => setOpen(!open)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px", cursor: "pointer", userSelect: "none" as const }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <WalletIcon />
          <span style={{ fontSize: 11, fontWeight: 600, color: "#3a3a3a" }}>You&apos;ll pay</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#060b35" }}>SAR {fmt(total)}</span>
          <ChevronDown open={open} />
        </div>
      </div>
      {open && (
        <div style={{ padding: "0 12px 10px" }}>
          <div style={{ height: 1, background: "#e5e7eb", marginBottom: 8 }} />
          {[
            ["Base Amount", `SAR ${fmt(baseAmount)}`],
            ["Platform Fee (3%)", `SAR ${fmt(fee)}`],
            ["VAT (15% on fee)", `SAR ${fmt(vat)}`],
            ["Payment Service Fee (~1%+1)", `SAR ${fmt(gateway)}`],
          ].map(([l, v], i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "3px 0", fontSize: 11 }}>
              <span style={{ color: "#8f8f8f", fontWeight: 500 }}>{l}</span>
              <span style={{ color: "#3a3a3a", fontWeight: 500 }}>{v}</span>
            </div>
          ))}
          <div style={{ height: 1, background: "#e5e7eb", margin: "6px 0" }} />
          <div style={{ display: "flex", justifyContent: "space-between", padding: "2px 0", fontSize: 11 }}>
            <span style={{ color: "#060b35", fontWeight: 600 }}>Total You Pay</span>
            <span style={{ color: "#060b35", fontWeight: 700, fontSize: 12 }}>SAR {fmt(total)}</span>
          </div>
          {/* Payment Protected trust signal */}
          <div style={{ marginTop: 6, borderTop: "1px solid #e5e7eb", paddingTop: 8, display: "flex", alignItems: "center", gap: 6 }}>
            <ShieldIcon size={12} color="#4446d2" />
            <span style={{ fontSize: 10, fontWeight: 600, color: "#4446d2" }}>Payment Protected</span>
            <span style={{ fontSize: 10, color: "#8f8f8f", fontWeight: 400 }}>·</span>
            <span style={{ fontSize: 10, color: "#8f8f8f", fontWeight: 400 }}>Your money is held safely until you approve the content</span>
          </div>
        </div>
      )}
    </div>
  );
};

/* ===== Circular Timer Component ===== */
const CircularTimer = ({ hoursLeft = 58, totalHours = 72 }: CircularTimerProps) => {
  const pct = hoursLeft / totalHours;
  const r = 22;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct);
  const isUrgent = hoursLeft <= 12;
  const color = isUrgent ? "#ee4141" : "#4446d2";
  return (
    <div style={{ position: "relative" as const, width: 56, height: 56, flexShrink: 0 }}>
      <svg width="56" height="56" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r={r} fill="none" stroke="#eef0f2" strokeWidth="4" />
        <circle cx="28" cy="28" r={r} fill="none" stroke={color} strokeWidth="4"
          strokeLinecap="round" strokeDasharray={c} strokeDashoffset={offset}
          style={{ transform: "rotate(-90deg)", transformOrigin: "center" as const, transition: "stroke-dashoffset 0.5s" }} />
      </svg>
      <div style={{ position: "absolute" as const, inset: 0, display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: 14, fontWeight: 700, color, lineHeight: 1 }}>{hoursLeft}h</span>
        <span style={{ fontSize: 8, color: "#8f8f8f", fontWeight: 500 }}>left</span>
      </div>
    </div>
  );
};

/* ===== Shared UI ===== */
const StatusBar = () => (
  <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 30px", fontSize: 16, fontWeight: 500 }}>
    <span>9:41</span>
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <svg width="18" height="12" viewBox="0 0 18 12"><rect x="0" y="4" width="3" height="8" rx="1" fill="#0b0b0b"/><rect x="5" y="2" width="3" height="10" rx="1" fill="#0b0b0b"/><rect x="10" y="0" width="3" height="12" rx="1" fill="#0b0b0b"/><rect x="15" y="0" width="3" height="12" rx="1" fill="#0b0b0b" opacity="0.3"/></svg>
      <svg width="16" height="12" viewBox="0 0 16 12"><path d="M8 3.6C10.2 3.6 12.1 4.5 13.5 6L15 4.5C13.1 2.6 10.7 1.5 8 1.5S2.9 2.6 1 4.5L2.5 6C3.9 4.5 5.8 3.6 8 3.6z" fill="#0b0b0b"/><path d="M8 7.2C9.2 7.2 10.3 7.7 11 8.5L12.5 7C11.3 5.8 9.7 5.1 8 5.1S4.7 5.8 3.5 7L5 8.5C5.7 7.7 6.8 7.2 8 7.2z" fill="#0b0b0b"/><circle cx="8" cy="10.5" r="1.5" fill="#0b0b0b"/></svg>
      <svg width="27" height="13" viewBox="0 0 27 13"><rect x="0" y="1" width="22" height="11" rx="2" stroke="#0b0b0b" strokeWidth="1" fill="none"/><rect x="23" y="4" width="2" height="5" rx="1" fill="#0b0b0b" opacity="0.4"/><rect x="2" y="3" width="18" height="7" rx="1" fill="#0b0b0b"/></svg>
    </div>
  </div>
);

const TopBar = () => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", background: "#fafafa" }}>
    <div style={{ width: 56, height: 56, background: "white", borderRadius: 40, display: "flex", alignItems: "center", justifyContent: "center" }}><ChevronLeft /></div>
    <span style={{ fontSize: 18, fontWeight: 600, color: "#0b0b0b" }}>Proposal Details</span>
    <div style={{ width: 56 }} />
  </div>
);

const BottomBar = ({ buttons }: BottomBarProps) => (
  <div style={{ borderTop: "1px solid #ecf6ff", background: "white", padding: "12px 16px", borderRadius: "16px 16px 0 0" }}>
    <div style={{ display: "flex", gap: 8 }}>
      {buttons}
    </div>
    <div style={{ height: 34, display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 8 }}>
      <div style={{ width: 148, height: 5, background: "#0b0b0b", borderRadius: 100 }} />
    </div>
  </div>
);

const BtnReject = ({ label = "Reject" }: BtnRejectProps) => (
  <button style={{ flex: 1, height: 52, background: "#fee2e2", border: "1px solid #ee4141", borderRadius: 100, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, color: "#ee4141", fontWeight: 500, fontSize: 16, fontFamily: "Urbanist, sans-serif", cursor: "pointer" }}>
    <CloseCircle /> {label}
  </button>
);
const BtnAccept = ({ label = "Accept" }: BtnAcceptProps) => (
  <button style={{ flex: 1, height: 52, background: "#060b35", border: "none", borderRadius: 100, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, color: "white", fontWeight: 500, fontSize: 16, fontFamily: "Urbanist, sans-serif", cursor: "pointer" }}>
    <CheckSvg /> {label}
  </button>
);
const BtnBackToCampaign = () => (
  <button style={{ flex: 1, height: 52, background: "#060b35", border: "none", borderRadius: 100, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, color: "white", fontWeight: 500, fontSize: 16, fontFamily: "Urbanist, sans-serif", cursor: "pointer" }}>
    <ArrowLeftIcon /> Back to Campaign
  </button>
);
const BtnResend = () => (
  <button style={{ flex: 1, height: 52, background: "#060b35", border: "none", borderRadius: 100, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, color: "white", fontWeight: 500, fontSize: 16, fontFamily: "Urbanist, sans-serif", cursor: "pointer" }}>
    <RefreshIcon /> Resend Invitation
  </button>
);

const InvitedBadge = () => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "rgba(68,70,210,0.08)", color: "#4446d2", fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 50 }}><PersonIcon /> Invited</span>
);
const PublicBadge = () => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "rgba(22,163,74,0.08)", color: "#16a34a", fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 50 }}><GlobeIcon /> Public</span>
);

const ProfileCard = ({ badge, dimmed = false }: ProfileCardProps) => (
  <div style={{ opacity: dimmed ? 0.5 : 1, transition: "opacity 0.3s" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <div style={{ width: 53, height: 53, borderRadius: 12, background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: "white", fontWeight: 600 }}>A</div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 16, fontWeight: 600, color: "#0b0b0b" }}>Ahmed Ali</span>
            {badge}
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 6 }}>
            {[["X", "14k"], ["IG", "14.6k"], ["TT", "14.8k"]].map(([icon, val], i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, color: "#272c88", fontWeight: 500 }}>
                <span style={{ fontSize: 11, fontWeight: 700, opacity: 0.6 }}>{icon}</span> {val}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ width: 32, height: 32, background: "rgba(68,70,210,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><ChatIcon /></div>
    </div>
    <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
      {[["4.9", "Review"], ["16", "Campaign"]].map(([v, l], i) => (
        <div key={i} style={{ flex: 1, background: "#fafafa", borderRadius: 14, padding: 8, textAlign: "center" as const }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{v}</div>
          <div style={{ fontSize: 12, color: "#717171", marginTop: 4 }}>{l}</div>
        </div>
      ))}
    </div>
  </div>
);

const TabRow = () => (
  <div style={{ background: "white", border: "1px solid #ecf6ff", borderRadius: 50, padding: 4, display: "flex", gap: 6 }}>
    {["Proposal", "Analytics"].map((t, i) => (
      <div key={i} style={{ flex: 1, height: 36, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 50, fontSize: 14, fontWeight: 500, background: i === 0 ? "rgba(68,70,210,0.06)" : "transparent", color: i === 0 ? "#4446d2" : "#3a3a3a" }}>{t}</div>
    ))}
  </div>
);

const ContentDetails = () => (
  <div style={{ background: "white", border: "1px solid #ecf6ff", borderRadius: 16, padding: 12, display: "flex", flexDirection: "column" as const, gap: 8 }}>
    <div style={{ fontSize: 12, color: "#8f8f8f" }}>Content Details</div>
    <div style={{ height: 1, background: "#ecf6ff" }} />
    <div style={{ display: "flex", gap: 9 }}>
      {["Instagram Story x3", "TikTok Post x3"].map((t, i) => (
        <div key={i} style={{ background: "#f6f7f8", borderRadius: 50, padding: "4px 10px", fontSize: 11, fontWeight: 500, color: "#3a3a3a" }}>{t}</div>
      ))}
    </div>
  </div>
);

const TimelineInfo = ({ rows }: TimelineInfoProps) => {
  const defaultRows: [string, string, string?][] = [
    ["Offer Submitted:", "November 28, 2025 · 10:30 AM"],
    ["Proposed Delivery Time:", "7 days from acceptance"],
  ];
  const data = rows || defaultRows;
  return (
    <div style={{ background: "white", border: "1px solid #ecf6ff", borderRadius: 16, padding: 12, display: "flex", flexDirection: "column" as const, gap: 8 }}>
      <div style={{ fontSize: 12, color: "#8f8f8f" }}>Timeline</div>
      <div style={{ height: 1, background: "#ecf6ff" }} />
      {data.map(([l, v, highlight], i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 11, color: "#8f8f8f" }}>{l}</span>
          <span style={{ fontSize: 12, fontWeight: 500, color: highlight || "#3a3a3a" }}>{v}</span>
        </div>
      ))}
    </div>
  );
};

const PhoneFrame = ({ children, bottomButtons }: PhoneFrameProps) => (
  <div style={{ width: 375, background: "#fafafa", borderRadius: 32, overflow: "hidden" as const, boxShadow: "0 20px 60px rgba(0,0,0,0.12)", display: "flex", flexDirection: "column" as const, height: 812 }}>
    <StatusBar />
    <TopBar />
    <div style={{ flex: 1, overflowY: "auto" as const, padding: "0 16px 16px", display: "flex", flexDirection: "column" as const, gap: 8 }}>
      {children}
    </div>
    <BottomBar buttons={bottomButtons} />
  </div>
);

/* =================================================================
   0) INVITED — Pending (Invitation sent, awaiting response — 72h)
   ================================================================= */
const InvitedPending = () => (
  <PhoneFrame bottomButtons={<BtnBackToCampaign />}>
    <div style={{ background: "white", border: "1px solid #d5d7d8", borderRadius: 14, padding: 12, boxShadow: "0 2px 8.6px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" as const, gap: 10 }}>
      <ProfileCard badge={<InvitedBadge />} />
      <div style={{ background: "#ff4f45", borderRadius: 20, padding: "12px 16px", color: "white" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 16, fontWeight: 500 }}>Proposed Price</span>
          <span style={{ fontSize: 16, fontWeight: 600 }}>SAR 180</span>
        </div>
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 50, padding: "5px 12px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, backdropFilter: "blur(4px)" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "white", animation: "blink 1.5s infinite" }} />
          <span style={{ fontSize: 11, fontWeight: 600, color: "white", letterSpacing: 0.2 }}>Invitation Sent</span>
        </div>
      </div>
      <div style={{ background: "white", border: "1px solid #ecf6ff", borderRadius: 14, padding: 12, display: "flex", alignItems: "center", gap: 12 }}>
        <CircularTimer hoursLeft={58} totalHours={72} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#060b35", marginBottom: 3 }}>Awaiting Response</div>
          <div style={{ fontSize: 11, color: "#717171", lineHeight: 1.4 }}>
            Ahmed Ali has 72 hours to accept, counter-offer, or decline.
          </div>
        </div>
      </div>
      <PaymentBreakdown baseAmount={180} />
    </div>
    <TabRow />
    <ContentDetails />
    <TimelineInfo rows={[
      ["Invitation Sent:", "November 28, 2025 · 10:30 AM"],
      ["Response Deadline:", "December 1, 2025 · 10:30 AM", "#4446d2"],
      ["Proposed Delivery Time:", "7 days from acceptance"],
    ]} />
  </PhoneFrame>
);

/* =================================================================
   1) INVITED — Accepted
   ================================================================= */
const InvitedAccepted = () => (
  <PhoneFrame bottomButtons={<BtnBackToCampaign />}>
    <div style={{ background: "white", border: "1px solid #d5d7d8", borderRadius: 14, padding: 12, boxShadow: "0 2px 8.6px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" as const, gap: 10 }}>
      <ProfileCard badge={<InvitedBadge />} />
      <div style={{ background: "#ff4f45", borderRadius: 20, padding: "12px 16px", color: "white" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 16, fontWeight: 500 }}>Proposed Price</span>
          <span style={{ fontSize: 16, fontWeight: 600 }}>SAR 180</span>
        </div>
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 50, padding: "5px 12px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, backdropFilter: "blur(4px)" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
          <span style={{ fontSize: 11, fontWeight: 600, color: "white", letterSpacing: 0.2 }}>Accepted by Influencer</span>
        </div>
      </div>
      <div style={{ background: "rgba(68,70,210,0.06)", borderRadius: 12, padding: "10px 12px", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 10, background: "rgba(68,70,210,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <UsersIcon />
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#060b35", lineHeight: 1.3 }}>Added to your team</div>
          <div style={{ fontSize: 11, color: "#717171", lineHeight: 1.4, marginTop: 2 }}>Payment will be processed for all influencers together when you start the campaign.</div>
        </div>
      </div>
      <PaymentBreakdown baseAmount={180} />
    </div>
    <TabRow />
    <ContentDetails />
    <TimelineInfo />
  </PhoneFrame>
);

/* =================================================================
   1b) INVITED — Accepted After Counter Offer
   Business accepted the influencer's counter offer — negotiated price
   ================================================================= */
const AcceptedAfterCounter = () => (
  <PhoneFrame bottomButtons={<BtnBackToCampaign />}>
    <div style={{ background: "white", border: "1px solid #d5d7d8", borderRadius: 14, padding: 12, boxShadow: "0 2px 8.6px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" as const, gap: 10 }}>
      <ProfileCard badge={<InvitedBadge />} />

      {/* Negotiation Timeline — completed successfully */}
      <div style={{ background: "#fafafa", borderRadius: 14, padding: 12 }}>
        <div style={{ position: "relative" as const, paddingLeft: 20 }}>
          <div style={{ position: "absolute" as const, left: 7, top: 8, bottom: 8, width: 2, background: "#d1fae5" }} />

          {/* Step 1: You offered */}
          <div style={{ position: "relative" as const, paddingBottom: 14, paddingLeft: 16 }}>
            <div style={{ position: "absolute" as const, left: -20, top: 4, width: 16, height: 16, borderRadius: "50%", background: "#9ca3af", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            <div style={{ fontSize: 11, color: "#8f8f8f", fontWeight: 500, marginBottom: 2 }}>You offered</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#9ca3af", textDecoration: "line-through" as const }}>SAR 180</div>
          </div>

          {/* Step 2: Counter offer */}
          <div style={{ position: "relative" as const, paddingBottom: 14, paddingLeft: 16 }}>
            <div style={{ position: "absolute" as const, left: -20, top: 4, width: 16, height: 16, borderRadius: "50%", background: "#9ca3af", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16l-6.4 5.2L8 14l-6-4.8h7.6z" transform="scale(0.5) translate(12,12)"/></svg>
            </div>
            <div style={{ fontSize: 11, color: "#8f8f8f", fontWeight: 500, marginBottom: 2 }}>Ahmed Ali counter-offered</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#9ca3af" }}>SAR 250</div>
          </div>

          {/* Step 3: You accepted — final step (green) */}
          <div style={{ position: "relative" as const, paddingLeft: 16 }}>
            <div style={{ position: "absolute" as const, left: -20, top: 4, width: 16, height: 16, borderRadius: "50%", background: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            <div style={{ fontSize: 11, color: "#16a34a", fontWeight: 600 }}>You accepted the counter offer</div>
            <div style={{ fontSize: 10, color: "#8f8f8f", fontWeight: 500, marginTop: 2 }}>Nov 29, 2025 · 2:00 PM</div>
          </div>
        </div>
      </div>

      {/* Agreed price bar — green */}
      <div style={{ background: "#16a34a", borderRadius: 20, padding: "12px 16px", color: "white" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 16, fontWeight: 500 }}>Agreed Price</span>
          <span style={{ fontSize: 16, fontWeight: 600 }}>SAR 250</span>
        </div>
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 50, padding: "5px 12px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, backdropFilter: "blur(4px)" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
          <span style={{ fontSize: 11, fontWeight: 600, color: "white", letterSpacing: 0.2 }}>Deal Agreed</span>
        </div>
      </div>

      {/* Added to team */}
      <div style={{ background: "rgba(68,70,210,0.06)", borderRadius: 12, padding: "10px 12px", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 10, background: "rgba(68,70,210,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <UsersIcon />
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#060b35", lineHeight: 1.3 }}>Added to your team</div>
          <div style={{ fontSize: 11, color: "#717171", lineHeight: 1.4, marginTop: 2 }}>Payment will be processed for all influencers together when you start the campaign.</div>
        </div>
      </div>

      <PaymentBreakdown baseAmount={250} />
    </div>
    <TabRow />
    <ContentDetails />
    <TimelineInfo rows={[
      ["Offer Sent:", "Nov 28, 2025 · 10:30 AM"],
      ["Counter Received:", "Nov 29, 2025 · 11:00 AM"],
      ["You Accepted:", "Nov 29, 2025 · 2:00 PM", "#16a34a"],
    ]} />
  </PhoneFrame>
);

/* =================================================================
   DeliverablesDiff — handles ALL scenarios:
   - "swap"    : Influencer replaced a deliverable with something else
   - "removed" : Influencer removed a deliverable (reduced scope)
   - "added"   : Influencer added an extra deliverable
   - "qty"     : Same type but different quantity
   - "same"    : No change

   If changes is null/empty → component returns nothing (price-only counter)
   ================================================================= */
const DeliverablesDiff = ({ changes }: DeliverablesDiffProps) => {
  if (!changes || changes.length === 0) return null;

  return (
    <div style={{ marginTop: 8, background: "white", borderRadius: 10, border: "1px solid #eef0f2", padding: "10px 10px 8px" }}>
      <div style={{ fontSize: 10, color: "#8f8f8f", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: 0.3, marginBottom: 8 }}>Influencer changed the deliverables</div>
      <div style={{ display: "flex", flexDirection: "column" as const, gap: 5 }}>
        {changes.map((c, i) => {
          if (c.type === "swap") return (
            <div key={i} style={{ background: "#fafafa", borderRadius: 8, padding: "8px 10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                <span style={{ fontSize: 10, color: "#8f8f8f", fontWeight: 600, minWidth: 58 }}>You asked</span>
                <span style={{ fontSize: 11, color: "#9ca3af", fontWeight: 500, textDecoration: "line-through" as const }}>{c.from}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 10, color: "#e65100", fontWeight: 600, minWidth: 58 }}>Instead</span>
                <span style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 50, padding: "2px 8px", fontSize: 11, fontWeight: 600, color: "#c2410c" }}>{c.to}</span>
              </div>
            </div>
          );
          if (c.type === "qty") return (
            <div key={i} style={{ background: "#fafafa", borderRadius: 8, padding: "8px 10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                <span style={{ fontSize: 10, color: "#8f8f8f", fontWeight: 600, minWidth: 58 }}>You asked</span>
                <span style={{ fontSize: 11, color: "#9ca3af", fontWeight: 500, textDecoration: "line-through" as const }}>{c.from}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 10, color: "#4446d2", fontWeight: 600, minWidth: 58 }}>Changed to</span>
                <span style={{ background: "rgba(68,70,210,0.06)", border: "1px solid rgba(68,70,210,0.15)", borderRadius: 50, padding: "2px 8px", fontSize: 11, fontWeight: 600, color: "#4446d2" }}>{c.to}</span>
              </div>
            </div>
          );
          if (c.type === "removed") return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 6px", background: "#fef2f2", borderRadius: 6 }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
              <span style={{ fontSize: 11, color: "#dc2626", fontWeight: 500 }}>Removed</span>
              <span style={{ fontSize: 11, color: "#9ca3af", fontWeight: 500, textDecoration: "line-through" as const }}>{c.item}</span>
            </div>
          );
          if (c.type === "added") return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 6px", background: "#f0fdf4", borderRadius: 6 }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
              <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 500 }}>Added</span>
              <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 600 }}>{c.item}</span>
            </div>
          );
          if (c.type === "same") return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "2px 0" }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
              <span style={{ fontSize: 11, color: "#6b7280", fontWeight: 500 }}>{c.item}</span>
              <span style={{ fontSize: 9, color: "#9ca3af" }}>— no change</span>
            </div>
          );
          return null;
        })}
      </div>
    </div>
  );
};

/* Sample scenario data — swap + unchanged */
const deliverableChanges: DeliverableChange[] = [
  { type: "swap", from: "Instagram Story x3", to: "Instagram Reel x2" },
  { type: "same", item: "TikTok Post x3" },
];

/* =================================================================
   2) INVITED — Counter Offer (with Deliverables Diff)
   ================================================================= */
const InvitedCounter = () => (
  <PhoneFrame bottomButtons={<><BtnReject /><BtnAccept label="Accept SAR 250" /></>}>
    <div style={{ background: "white", border: "1px solid #d5d7d8", borderRadius: 14, padding: 12, boxShadow: "0 2px 8.6px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" as const, gap: 10 }}>
      <ProfileCard badge={<InvitedBadge />} />
      <div style={{ background: "#fafafa", borderRadius: 14, padding: 12 }}>
        <div style={{ position: "relative" as const, paddingLeft: 20 }}>
          <div style={{ position: "absolute" as const, left: 7, top: 8, bottom: 8, width: 2, background: "#e5e7eb" }} />

          {/* You offered */}
          <div style={{ position: "relative" as const, paddingBottom: 14, paddingLeft: 16 }}>
            <div style={{ position: "absolute" as const, left: -20, top: 4, width: 16, height: 16, borderRadius: "50%", background: "#060b35", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            <div style={{ fontSize: 11, color: "#8f8f8f", fontWeight: 500, marginBottom: 2 }}>You offered</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#8f8f8f", textDecoration: "line-through" as const }}>SAR 180</div>
          </div>

          {/* Counter */}
          <div style={{ position: "relative" as const, paddingBottom: 14, paddingLeft: 16 }}>
            <div style={{ position: "absolute" as const, left: -20, top: 4, width: 16, height: 16, borderRadius: "50%", background: "#ff4f45", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16l-6.4 5.2L8 14l-6-4.8h7.6z" transform="scale(0.5) translate(12,12)"/></svg>
            </div>
            <div style={{ fontSize: 11, color: "#8f8f8f", fontWeight: 500, marginBottom: 2 }}>Ahmed Ali counter-offered</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#0b0b0b" }}>
              SAR 250 <span style={{ fontSize: 11, color: "#dc2626", fontWeight: 600, background: "#fef2f2", padding: "2px 6px", borderRadius: 20, marginLeft: 4 }}>+SAR 70</span>
            </div>
            <div style={{ fontSize: 11, color: "#555", fontStyle: "italic" as const, marginTop: 5, lineHeight: 1.4, background: "white", padding: "5px 8px", borderRadius: 8, borderLeft: "2px solid #ff4f45" }}>
              &quot;I believe this better reflects the quality and reach I can deliver for your brand.&quot;
            </div>

            {/* Deliverables Diff — data-driven, handles all cases */}
            <DeliverablesDiff changes={deliverableChanges} />
          </div>

          {/* Awaiting */}
          <div style={{ position: "relative" as const, paddingLeft: 16 }}>
            <div style={{ position: "absolute" as const, left: -20, top: 4, width: 16, height: 16, borderRadius: "50%", background: "white", border: "2px solid #4446d2", boxShadow: "0 0 0 4px rgba(68,70,210,0.1)" }}>
              <span style={{ position: "absolute" as const, top: 2, left: 2, width: 8, height: 8, borderRadius: "50%", background: "#4446d2", animation: "blink 1.5s infinite" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 11, color: "#4446d2", fontWeight: 600 }}>Awaiting your response</span>
              <span style={{ fontSize: 10, color: "#717171", fontWeight: 500, background: "white", padding: "2px 6px", borderRadius: 50, display: "inline-flex", alignItems: "center", gap: 3 }}>
                <ClockIcon size={9} /> 46h left
              </span>
            </div>
          </div>
        </div>
      </div>
      <PaymentBreakdown baseAmount={250} />
    </div>
    <TabRow />
    <ContentDetails />
    <TimelineInfo />
  </PhoneFrame>
);

/* === Counter Offer variants for different deliverable scenarios === */

/* Scenario A: Price only — no deliverable changes */
const changesA: DeliverableChange[] | null = null;
const CounterPriceOnly = () => (
  <PhoneFrame bottomButtons={<><BtnReject /><BtnAccept label="Accept SAR 250" /></>}>
    <div style={{ background: "white", border: "1px solid #d5d7d8", borderRadius: 14, padding: 12, boxShadow: "0 2px 8.6px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" as const, gap: 10 }}>
      <ProfileCard badge={<InvitedBadge />} />
      <div style={{ background: "#fafafa", borderRadius: 14, padding: 12 }}>
        <div style={{ position: "relative" as const, paddingLeft: 20 }}>
          <div style={{ position: "absolute" as const, left: 7, top: 8, bottom: 8, width: 2, background: "#e5e7eb" }} />
          <div style={{ position: "relative" as const, paddingBottom: 14, paddingLeft: 16 }}>
            <div style={{ position: "absolute" as const, left: -20, top: 4, width: 16, height: 16, borderRadius: "50%", background: "#060b35", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            <div style={{ fontSize: 11, color: "#8f8f8f", fontWeight: 500, marginBottom: 2 }}>You offered</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#8f8f8f", textDecoration: "line-through" as const }}>SAR 180</div>
          </div>
          <div style={{ position: "relative" as const, paddingBottom: 14, paddingLeft: 16 }}>
            <div style={{ position: "absolute" as const, left: -20, top: 4, width: 16, height: 16, borderRadius: "50%", background: "#ff4f45", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16l-6.4 5.2L8 14l-6-4.8h7.6z" transform="scale(0.5) translate(12,12)"/></svg>
            </div>
            <div style={{ fontSize: 11, color: "#8f8f8f", fontWeight: 500, marginBottom: 2 }}>Ahmed Ali counter-offered</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#0b0b0b" }}>
              SAR 250 <span style={{ fontSize: 11, color: "#dc2626", fontWeight: 600, background: "#fef2f2", padding: "2px 6px", borderRadius: 20, marginLeft: 4 }}>+SAR 70</span>
            </div>
            <div style={{ fontSize: 11, color: "#555", fontStyle: "italic" as const, marginTop: 5, lineHeight: 1.4, background: "white", padding: "5px 8px", borderRadius: 8, borderLeft: "2px solid #ff4f45" }}>
              &quot;I believe my rates reflect my audience quality.&quot;
            </div>
            <DeliverablesDiff changes={changesA} />
          </div>
          <div style={{ position: "relative" as const, paddingLeft: 16 }}>
            <div style={{ position: "absolute" as const, left: -20, top: 4, width: 16, height: 16, borderRadius: "50%", background: "white", border: "2px solid #4446d2", boxShadow: "0 0 0 4px rgba(68,70,210,0.1)" }}>
              <span style={{ position: "absolute" as const, top: 2, left: 2, width: 8, height: 8, borderRadius: "50%", background: "#4446d2", animation: "blink 1.5s infinite" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 11, color: "#4446d2", fontWeight: 600 }}>Awaiting your response</span>
            </div>
          </div>
        </div>
      </div>
      <PaymentBreakdown baseAmount={250} />
    </div>
    <TabRow />
    <ContentDetails />
    <TimelineInfo />
  </PhoneFrame>
);

/* Scenario B: Removed + Added (not a swap — separate) */
const changesB: DeliverableChange[] = [
  { type: "removed", item: "Instagram Story x3" },
  { type: "added", item: "YouTube Short x1" },
  { type: "same", item: "TikTok Post x3" },
];

/* Scenario C: Quantity change only */
const changesC: DeliverableChange[] = [
  { type: "qty", from: "Instagram Story x3", to: "Instagram Story x2" },
  { type: "same", item: "TikTok Post x3" },
];

/* Scenario D: Mixed — swap + added + unchanged */
const changesD: DeliverableChange[] = [
  { type: "swap", from: "Instagram Story x3", to: "Instagram Reel x2" },
  { type: "added", item: "YouTube Short x1" },
  { type: "same", item: "TikTok Post x3" },
];

/* Generic counter screen that takes changes prop */
const CounterVariant = ({ changes }: CounterVariantProps) => (
  <PhoneFrame bottomButtons={<><BtnReject /><BtnAccept label="Accept SAR 250" /></>}>
    <div style={{ background: "white", border: "1px solid #d5d7d8", borderRadius: 14, padding: 12, boxShadow: "0 2px 8.6px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" as const, gap: 10 }}>
      <ProfileCard badge={<InvitedBadge />} />
      <div style={{ background: "#fafafa", borderRadius: 14, padding: 12 }}>
        <div style={{ position: "relative" as const, paddingLeft: 20 }}>
          <div style={{ position: "absolute" as const, left: 7, top: 8, bottom: 8, width: 2, background: "#e5e7eb" }} />
          <div style={{ position: "relative" as const, paddingBottom: 14, paddingLeft: 16 }}>
            <div style={{ position: "absolute" as const, left: -20, top: 4, width: 16, height: 16, borderRadius: "50%", background: "#060b35", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            <div style={{ fontSize: 11, color: "#8f8f8f", fontWeight: 500, marginBottom: 2 }}>You offered</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#8f8f8f", textDecoration: "line-through" as const }}>SAR 180</div>
          </div>
          <div style={{ position: "relative" as const, paddingBottom: 14, paddingLeft: 16 }}>
            <div style={{ position: "absolute" as const, left: -20, top: 4, width: 16, height: 16, borderRadius: "50%", background: "#ff4f45", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16l-6.4 5.2L8 14l-6-4.8h7.6z" transform="scale(0.5) translate(12,12)"/></svg>
            </div>
            <div style={{ fontSize: 11, color: "#8f8f8f", fontWeight: 500, marginBottom: 2 }}>Ahmed Ali counter-offered</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#0b0b0b" }}>
              SAR 250 <span style={{ fontSize: 11, color: "#dc2626", fontWeight: 600, background: "#fef2f2", padding: "2px 6px", borderRadius: 20, marginLeft: 4 }}>+SAR 70</span>
            </div>
            <div style={{ fontSize: 11, color: "#555", fontStyle: "italic" as const, marginTop: 5, lineHeight: 1.4, background: "white", padding: "5px 8px", borderRadius: 8, borderLeft: "2px solid #ff4f45" }}>
              &quot;I believe this better reflects the quality and reach I can deliver.&quot;
            </div>
            <DeliverablesDiff changes={changes} />
          </div>
          <div style={{ position: "relative" as const, paddingLeft: 16 }}>
            <div style={{ position: "absolute" as const, left: -20, top: 4, width: 16, height: 16, borderRadius: "50%", background: "white", border: "2px solid #4446d2", boxShadow: "0 0 0 4px rgba(68,70,210,0.1)" }}>
              <span style={{ position: "absolute" as const, top: 2, left: 2, width: 8, height: 8, borderRadius: "50%", background: "#4446d2", animation: "blink 1.5s infinite" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 11, color: "#4446d2", fontWeight: 600 }}>Awaiting your response</span>
            </div>
          </div>
        </div>
      </div>
      <PaymentBreakdown baseAmount={250} />
    </div>
    <TabRow />
    <ContentDetails />
    <TimelineInfo />
  </PhoneFrame>
);

/* =================================================================
   3a) INVITED — Declined by Influencer
   ================================================================= */
const InvitedRejected = () => (
  <PhoneFrame bottomButtons={<BtnAccept label="Send New Offer" />}>
    <div style={{ background: "white", border: "1px solid #d5d7d8", borderRadius: 14, padding: 12, boxShadow: "0 2px 8.6px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" as const, gap: 10 }}>
      <ProfileCard badge={<InvitedBadge />} />
      <div style={{ background: "#ff4f45", borderRadius: 20, padding: "12px 16px", color: "white", opacity: 0.6 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 16, fontWeight: 500, textDecoration: "line-through" as const, textDecorationColor: "rgba(255,255,255,0.6)" }}>Proposed Price</span>
          <span style={{ fontSize: 16, fontWeight: 600, textDecoration: "line-through" as const, textDecorationColor: "rgba(255,255,255,0.6)" }}>SAR 180</span>
        </div>
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 50, padding: "5px 12px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
          <span style={{ fontSize: 11, fontWeight: 600, color: "white", letterSpacing: 0.2 }}>Declined by Influencer</span>
        </div>
      </div>
      <div style={{ background: "#fafafa", borderRadius: 12, padding: "10px 12px", border: "1px solid #eef0f2" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 5 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8f8f8f" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          <span style={{ fontSize: 10, color: "#8f8f8f", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: 0.3 }}>Reason</span>
        </div>
        <div style={{ fontSize: 12, color: "#555", lineHeight: 1.4, fontStyle: "italic" as const }}>
          &quot;The budget doesn&apos;t align with the scope of deliverables required.&quot;
        </div>
      </div>
    </div>
    <TabRow />
    <ContentDetails />
    <TimelineInfo />
  </PhoneFrame>
);

/* =================================================================
   3b) YOU DECLINED — Business rejected the counter offer
   ================================================================= */
const YouDeclinedCounter = () => (
  <PhoneFrame bottomButtons={<BtnAccept label="Send New Offer" />}>
    <div style={{ background: "white", border: "1px solid #d5d7d8", borderRadius: 14, padding: 12, boxShadow: "0 2px 8.6px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" as const, gap: 10 }}>
      <ProfileCard badge={<InvitedBadge />} />

      {/* Negotiation Timeline — full story */}
      <div style={{ background: "#fafafa", borderRadius: 14, padding: 12 }}>
        <div style={{ position: "relative" as const, paddingLeft: 20 }}>
          <div style={{ position: "absolute" as const, left: 7, top: 8, bottom: 8, width: 2, background: "#e5e7eb" }} />

          {/* Step 1: You offered */}
          <div style={{ position: "relative" as const, paddingBottom: 14, paddingLeft: 16 }}>
            <div style={{ position: "absolute" as const, left: -20, top: 4, width: 16, height: 16, borderRadius: "50%", background: "#9ca3af", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            <div style={{ fontSize: 11, color: "#8f8f8f", fontWeight: 500, marginBottom: 2 }}>You offered</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#9ca3af", textDecoration: "line-through" as const }}>SAR 180</div>
          </div>

          {/* Step 2: Counter offer received */}
          <div style={{ position: "relative" as const, paddingBottom: 14, paddingLeft: 16 }}>
            <div style={{ position: "absolute" as const, left: -20, top: 4, width: 16, height: 16, borderRadius: "50%", background: "#9ca3af", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16l-6.4 5.2L8 14l-6-4.8h7.6z" transform="scale(0.5) translate(12,12)"/></svg>
            </div>
            <div style={{ fontSize: 11, color: "#8f8f8f", fontWeight: 500, marginBottom: 2 }}>Ahmed Ali counter-offered</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#9ca3af", textDecoration: "line-through" as const }}>
              SAR 250 <span style={{ fontSize: 10, color: "#9ca3af", fontWeight: 500, textDecoration: "none" as const }}>+SAR 70</span>
            </div>

            {/* Deliverables Diff — show what they wanted to change */}
            <DeliverablesDiff changes={deliverableChanges} />
          </div>

          {/* Step 3: You declined — the final step (highlighted) */}
          <div style={{ position: "relative" as const, paddingLeft: 16 }}>
            <div style={{ position: "absolute" as const, left: -20, top: 4, width: 16, height: 16, borderRadius: "50%", background: "#dc2626", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </div>
            <div style={{ fontSize: 11, color: "#dc2626", fontWeight: 600 }}>You declined the counter offer</div>
            <div style={{ fontSize: 10, color: "#8f8f8f", fontWeight: 500, marginTop: 2 }}>Nov 29, 2025 · 3:15 PM</div>
          </div>
        </div>
      </div>

      {/* What's next — guidance card */}
      <div style={{ background: "white", borderRadius: 12, padding: "10px 14px", border: "1px solid #eef0f2" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4446d2" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#060b35" }}>What&apos;s next?</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 20, height: 20, borderRadius: 6, background: "rgba(68,70,210,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4446d2" strokeWidth="2.5" strokeLinecap="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg>
            </div>
            <span style={{ fontSize: 11, color: "#555", lineHeight: 1.4 }}>Send a <span style={{ fontWeight: 600, color: "#060b35" }}>new offer</span> with different terms</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 20, height: 20, borderRadius: 6, background: "rgba(68,70,210,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4446d2" strokeWidth="2.5" strokeLinecap="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <span style={{ fontSize: 11, color: "#555", lineHeight: 1.4 }}>Or explore <span style={{ fontWeight: 600, color: "#060b35" }}>other influencers</span> for your campaign</span>
          </div>
        </div>
      </div>
    </div>
    <TabRow />
    <ContentDetails />
    <TimelineInfo rows={[
      ["Offer Sent:", "Nov 28, 2025 · 10:30 AM"],
      ["Counter Received:", "Nov 29, 2025 · 11:00 AM"],
      ["You Declined:", "Nov 29, 2025 · 3:15 PM", "#dc2626"],
    ]} />
  </PhoneFrame>
);

/* =================================================================
   4) INVITED — Expired
   ================================================================= */
const InvitedExpired = () =>    (
  <PhoneFrame bottomButtons={<BtnResend />}>
    <div style={{ background: "white", border: "1px solid #d5d7d8", borderRadius: 14, padding: 12, boxShadow: "0 2px 8.6px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" as const, gap: 10 }}>
      <ProfileCard badge={<InvitedBadge />} dimmed />
      <div style={{ background: "#9ca3af", borderRadius: 20, padding: "12px 16px", color: "white" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 16, fontWeight: 500, opacity: 0.7 }}>Proposed Price</span>
          <span style={{ fontSize: 16, fontWeight: 600, opacity: 0.7 }}>SAR 180</span>
        </div>
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 50, padding: "5px 12px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <ClockIcon size={13} color="white" />
          <span style={{ fontSize: 11, fontWeight: 600, color: "white", letterSpacing: 0.2 }}>Invitation Expired</span>
        </div>
      </div>
      <div style={{ background: "#fffbeb", borderRadius: 12, padding: "10px 12px", border: "1px solid #fde68a" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
          <div style={{ marginTop: 1, color: "#d97706" }}><AlertTriangleIcon /></div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#92400e", marginBottom: 3 }}>No Response Received</div>
            <div style={{ fontSize: 11, color: "#78716c", lineHeight: 1.4 }}>
              Ahmed Ali didn&apos;t respond within the 72-hour window. The invitation has been automatically closed.
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "#fafafa", borderRadius: 12, padding: "10px 12px", border: "1px solid #eef0f2" }}>
        {[
          { label: "Invitation Sent", value: "Nov 28, 2025 · 10:30 AM", done: true, warn: false },
          { label: "Expired", value: "Dec 1, 2025 · 10:30 AM", done: true, warn: true },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 0" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.warn ? "#d97706" : "#9ca3af", flexShrink: 0 }} />
            <div style={{ flex: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 11, color: item.warn ? "#92400e" : "#8f8f8f", fontWeight: item.warn ? 600 : 500 }}>{item.label}</span>
              <span style={{ fontSize: 10, color: "#8f8f8f", fontWeight: 500 }}>{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <TabRow />
    <ContentDetails />
    <TimelineInfo />
  </PhoneFrame>
);

/* =================================================================
   5) PUBLIC — Fixed Price
   ================================================================= */
const PublicScreen = () => (
  <PhoneFrame bottomButtons={<><BtnReject /><BtnAccept label="Accept" /></>}>
    <div style={{ background: "white", border: "1px solid #d5d7d8", borderRadius: 14, padding: 12, boxShadow: "0 2px 8.6px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" as const, gap: 10 }}>
      <ProfileCard badge={<PublicBadge />} />
      <div style={{ background: "#ff4f45", borderRadius: 20, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", color: "white" }}>
        <span style={{ fontSize: 16, fontWeight: 500 }}>Proposed Price</span>
        <span style={{ fontSize: 16, fontWeight: 600 }}>SAR 180</span>
      </div>
      <PaymentBreakdown baseAmount={180} />
    </div>
    <TabRow />
    <ContentDetails />
    <TimelineInfo />
  </PhoneFrame>
);

/* =================================================================
   Main App — 6 States
   ================================================================= */
export default function Home() {
  useKeyframeStyles();
  const [view, setView] = useState(0);

  const views: ViewConfig[] = [
    {
      label: "Pending",
      icon: <SendIcon />,
      desc: "Invitation sent — awaiting influencer response (72h window)",
      color: "#4446d2",
      bg: "rgba(68,70,210,0.06)",
      component: <InvitedPending />
    },
    {
      label: "Accepted",
      icon: <CheckCircle />,
      desc: "Influencer accepted your original proposal — SAR 180",
      color: "#16a34a",
      bg: "rgba(22,163,74,0.06)",
      component: <InvitedAccepted />
    },
    {
      label: "Accepted Counter",
      icon: <CheckCircle />,
      desc: "You accepted the counter offer — negotiated to SAR 250",
      color: "#16a34a",
      bg: "rgba(22,163,74,0.06)",
      component: <AcceptedAfterCounter />
    },
    {
      label: "Counter: Swap",
      icon: <NegotiateIcon />,
      desc: "Swapped deliverable — replaced Story x3 with Reel x2",
      color: "#e65100",
      bg: "rgba(230,81,0,0.06)",
      component: <InvitedCounter />
    },
    {
      label: "Counter: Price Only",
      icon: <NegotiateIcon />,
      desc: "Price change only — same deliverables, no diff shown",
      color: "#e65100",
      bg: "rgba(230,81,0,0.06)",
      component: <CounterPriceOnly />
    },
    {
      label: "Counter: Remove + Add",
      icon: <NegotiateIcon />,
      desc: "Removed Story x3, added YouTube Short x1 separately",
      color: "#e65100",
      bg: "rgba(230,81,0,0.06)",
      component: <CounterVariant changes={changesB} />
    },
    {
      label: "Counter: Qty Change",
      icon: <NegotiateIcon />,
      desc: "Same type, different quantity — Story x3 → Story x2",
      color: "#e65100",
      bg: "rgba(230,81,0,0.06)",
      component: <CounterVariant changes={changesC} />
    },
    {
      label: "Counter: Mixed",
      icon: <NegotiateIcon />,
      desc: "Multiple changes — swap + new deliverable + unchanged",
      color: "#e65100",
      bg: "rgba(230,81,0,0.06)",
      component: <CounterVariant changes={changesD} />
    },
    {
      label: "Declined by Influencer",
      icon: <XCircle />,
      desc: "Influencer declined your original proposal",
      color: "#dc2626",
      bg: "rgba(220,38,38,0.06)",
      component: <InvitedRejected />
    },
    {
      label: "You Declined Counter",
      icon: <XCircle />,
      desc: "You rejected the influencer's counter offer — negotiation ended",
      color: "#991b1b",
      bg: "rgba(153,27,27,0.06)",
      component: <YouDeclinedCounter />
    },
    {
      label: "Expired",
      icon: <HourglassIcon />,
      desc: "No response within 72h — auto-closed, can resend",
      color: "#d97706",
      bg: "rgba(217,119,6,0.06)",
      component: <InvitedExpired />
    },
    {
      label: "Public",
      icon: <GlobeIcon />,
      desc: "Public campaign — fixed price, no negotiation",
      color: "#4446d2",
      bg: "rgba(68,70,210,0.06)",
      component: <PublicScreen />
    },
  ];

  return (
    <div style={{ fontFamily: "'Urbanist', 'Inter', system-ui, sans-serif", background: "#f5f5f7", minHeight: "100vh", display: "flex", flexDirection: "column" as const, alignItems: "center", padding: "32px 16px" }}>
      {/* Header */}
      <div style={{ textAlign: "center" as const, marginBottom: 20 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(68,70,210,0.08)", color: "#4446d2", fontSize: 12, fontWeight: 600, padding: "5px 14px", borderRadius: 50, marginBottom: 10 }}>
          JUSOR — Business View
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "#0b0b0b", margin: "0 0 4px" }}>Proposal Details — All States</h1>
        <p style={{ fontSize: 13, color: "#717171", margin: 0 }}>Complete lifecycle: Pending → Accepted / Counter / Declined / Expired + Public</p>
      </div>

      {/* State Cards */}
      <div style={{ display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap" as const, justifyContent: "center", maxWidth: 500 }}>
        {views.map((v, i) => (
          <button key={i} onClick={() => setView(i)} style={{
            padding: "8px 14px", borderRadius: 12, border: view === i ? `1.5px solid ${v.color}` : "1.5px solid transparent",
            fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "Urbanist, sans-serif",
            transition: "all 0.2s ease", display: "flex", alignItems: "center", gap: 5,
            background: view === i ? v.bg : "white", color: view === i ? v.color : "#3a3a3a",
          }}>
            {v.icon} {v.label}
          </button>
        ))}
      </div>

      {/* Description */}
      <div style={{ textAlign: "center" as const, marginBottom: 16, fontSize: 12, color: "#717171" }}>{views[view].desc}</div>

      {/* Phone */}
      {views[view].component}
    </div>
  );
}
