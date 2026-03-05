import { useState } from "react";
import "./App.css";

// Brand Colors
const c = {
  bg: "#fafafa",
  card: "#ffffff",
  border: "#e5e7eb",
  dark: "#111827",
  text: "#1f2937",
  muted: "#6b7280",
  dim: "#9ca3af",
  // Pillar colors from logo
  strategy: "#FF9903",   // Orange - square
  content: "#FF3132",    // Red - circle
  advertising: "#043047", // Dark blue - rounded rect
  management: "#CDE6F4", // Light blue - hexagon
  green: "#16a34a",
  amber: "#d97706",
};

// SVG Logo shapes matching the 4 logo elements
function LogoSquare({ size = 24, color = c.strategy }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="2" fill={color} />
    </svg>
  );
}

function LogoCircle({ size = 24, color = c.content }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill={color} />
    </svg>
  );
}

function LogoRoundedRect({ size = 24, color = c.advertising }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="10" ry="10" fill={color} />
    </svg>
  );
}

function LogoHexagon({ size = 24, color = c.management }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" fill={color} />
    </svg>
  );
}

// Icon components (clean, consulting-style)
function IconTarget({ size = 28, color = c.strategy }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconLayers({ size = 28, color = c.content }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12,2 2,7 12,12 22,7" />
      <polyline points="2,17 12,22 22,17" />
      <polyline points="2,12 12,17 22,12" />
    </svg>
  );
}

function IconTrendUp({ size = 28, color = c.advertising }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
      <polyline points="17,6 23,6 23,12" />
    </svg>
  );
}

function IconSettings({ size = 28, color = "#6BA3C7" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function IconArrowRight({ size = 16, color = c.dim }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12,5 19,12 12,19" />
    </svg>
  );
}

// Flywheel arrow icon
function FlywheelArrow({ direction = "right", color = c.advertising }) {
  const rotate = direction === "right" ? 0 : direction === "down" ? 90 : direction === "left" ? 180 : 270;
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `rotate(${rotate}deg)` }}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12,5 19,12 12,19" />
    </svg>
  );
}

// Full logo mark
function LogoMark({ size = 40 }) {
  const s = size / 2;
  const gap = 2;
  return (
    <div style={{ display: "grid", gridTemplateColumns: `${s}px ${s}px`, gap: gap, width: size + gap, height: size + gap }}>
      <svg width={s} height={s} viewBox="0 0 24 24"><rect x="1" y="1" width="22" height="22" rx="2" fill={c.strategy} /></svg>
      <svg width={s} height={s} viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill={c.content} /></svg>
      <svg width={s} height={s} viewBox="0 0 24 24"><rect x="1" y="1" width="22" height="22" rx="11" fill={c.advertising} /></svg>
      <svg width={s} height={s} viewBox="0 0 24 24"><polygon points="12,1 23,6.5 23,17.5 12,23 1,17.5 1,6.5" fill={c.management} /></svg>
    </div>
  );
}

// Small pillar badge used repeatedly
function PillarBadge({ icon, label, color, small }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: small ? 4 : 6 }}>
      {icon}
      <span style={{ fontSize: small ? 9 : 10, fontWeight: 700, color, letterSpacing: 0.5, textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}

/* ========================================================================
   SLIDE 1 – Cover
   ======================================================================== */
function S1() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", padding: 40, minHeight: 500 }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: c.strategy, marginBottom: 32, textTransform: "uppercase" }}>
        Dein Amazon Growth Partner
      </div>
      <div style={{ fontSize: 42, fontWeight: 800, color: c.dark, lineHeight: 1.1, marginBottom: 40 }}>
        [Name]
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 40, marginTop: 20 }}>
        <div style={{ width: 80, height: 80, background: "#f3f4f6", border: "1px solid " + c.border, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: c.dim }}>
          [Kunden-Logo]
        </div>
        <div style={{ fontSize: 18, color: c.dim, fontWeight: 300 }}>&times;</div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <LogoMark size={44} />
          <div style={{ fontSize: 13, fontWeight: 700, color: c.dark }}>[Agenturname]</div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================
   SLIDE 2 – Statement
   ======================================================================== */
function S2() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", padding: 48, minHeight: 500 }}>
      <div style={{ fontSize: 36, fontWeight: 800, color: c.dark, lineHeight: 1.25, maxWidth: 600 }}>
        {"Amazon hat sich verändert."}
        <br />
        <span style={{ color: c.muted }}>{"Die meisten Seller noch nicht."}</span>
      </div>
      <div style={{ width: 40, height: 3, background: c.strategy, borderRadius: 2, marginTop: 32 }} />
    </div>
  );
}

/* ========================================================================
   SLIDE 3 – Market Reality (stats only)
   ======================================================================== */
function S3() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: 40, minHeight: 500 }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: c.muted, marginBottom: 32, textTransform: "uppercase" }}>
        Die Realität auf Amazon in 2026
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18, width: "100%" }}>
        {[
          { stat: "73%", desc: "der Klicks gehen an die Top-3 Suchergebnisse. Der Rest teilt sich die Krümel.", src: "Jungle Scout" },
          { stat: "300M+", desc: "Nutzer verwenden Rufus, Amazons KI-Assistent. Er entscheidet, wer empfohlen wird.", src: "Amazon" },
          { stat: "70%+", desc: "aller Seller schalten Ads. Ohne optimierte Listings verbrennt das Budget.", src: "Marketplace Pulse" },
        ].map(function (item, i) {
          return (
            <div key={i} style={{ textAlign: "center", padding: 24, background: c.card, border: "1px solid " + c.border, borderRadius: 14 }}>
              <div style={{ fontSize: 38, fontWeight: 800, color: c.advertising }}>{item.stat}</div>
              <div style={{ fontSize: 12, color: c.text, marginTop: 10, lineHeight: 1.6 }}>{item.desc}</div>
              <div style={{ fontSize: 10, color: c.dim, marginTop: 10, fontStyle: "italic" }}>{item.src}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ========================================================================
   SLIDE 4 – Statement (new placeholder)
   ======================================================================== */
function S4() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", padding: 48, minHeight: 500 }}>
      <div style={{ fontSize: 36, fontWeight: 800, color: c.dark, lineHeight: 1.25, maxWidth: 600 }}>
        [Statement-Platzhalter]
      </div>
      <div style={{ width: 40, height: 3, background: c.content, borderRadius: 2, marginTop: 32 }} />
    </div>
  );
}

/* ========================================================================
   SLIDE 5 – Audit Score (individuell)
   ======================================================================== */
function S5() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ fontSize: 28, fontWeight: 800, color: c.dark, marginBottom: 24 }}>
        Wo ihr heute steht – und wo die Top-Seller sind
      </div>
      <div style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap", justifyContent: "center" }}>
        {[
          { label: "Euer Score", val: "[X/10]", sub: "Retail Readiness", bg: c.advertising + "0a", bc: c.advertising },
          { label: "Top-Seller in eurer Kategorie", val: "8-9/10", sub: "Benchmark", bg: "#f0fdf4", bc: c.green },
          { label: "Die Lücke", val: "[X] Punkte", sub: "ungenutztes Potenzial", bg: c.strategy + "12", bc: c.strategy },
        ].map(function (k, i) {
          return (
            <div key={i} style={{ flex: 1, minWidth: 160, textAlign: "center", padding: 22, background: k.bg, borderRadius: 14, border: "1px solid " + k.bc + "22" }}>
              <div style={{ fontSize: 11, color: c.muted, fontWeight: 600 }}>{k.label}</div>
              <div style={{ fontSize: 36, fontWeight: 800, color: k.bc, margin: "10px 0" }}>{k.val}</div>
              <div style={{ fontSize: 12, color: c.muted }}>{k.sub}</div>
            </div>
          );
        })}
      </div>
      {["Content und SEO-Texte", "Main Image und Gallery", "A+ Content und Brand Story", "Brandstore", "Reviews und Trust Signals", "Advertising-Struktur", "Backend-Attribute (COSMO)"].map(function (area, i) {
        return (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: "1px solid " + c.border }}>
            <div style={{ flex: 1, fontSize: 13, fontWeight: 600, color: c.text }}>{area}</div>
            <div style={{ display: "flex", gap: 3 }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (n) {
                return <div key={n} style={{ width: 22, height: 7, borderRadius: 3, background: "#e5e7eb" }} />;
              })}
            </div>
            <div style={{ width: 40, textAlign: "right", fontSize: 12, fontWeight: 700, color: c.muted }}>{"[X]"}</div>
          </div>
        );
      })}
    </div>
  );
}

/* ========================================================================
   SLIDE 6 – Detailed Findings (individuell)
   ======================================================================== */
function S6() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ fontSize: 28, fontWeight: 800, color: c.dark, marginBottom: 24 }}>
        Was wir konkret gefunden haben
      </div>
      {[1, 2, 3].map(function (n) {
        return (
          <div key={n} style={{ background: c.card, border: "1px solid " + c.border, borderRadius: 12, padding: 16, marginBottom: 12 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: c.dark, marginBottom: 8 }}>
              {"[Finding " + n + ": z.B. Titel nicht Rufus-optimiert]"}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ padding: 10, background: "#fef2f2", borderRadius: 8 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: c.content, letterSpacing: 1 }}>WAS WIR SEHEN</div>
                <div style={{ fontSize: 12, color: c.muted, marginTop: 4 }}>{"[Konkrete Schwäche beschreiben]"}</div>
              </div>
              <div style={{ padding: 10, background: "#f0fdf4", borderRadius: 8 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: c.green, letterSpacing: 1 }}>WAS TOP-SELLER MACHEN</div>
                <div style={{ fontSize: 12, color: c.muted, marginTop: 4 }}>{"[Best Practice als Referenz]"}</div>
              </div>
            </div>
          </div>
        );
      })}
      <div style={{
        padding: 16,
        background: "linear-gradient(135deg, " + c.strategy + "18, " + c.strategy + "08)",
        border: "2px solid " + c.strategy + "33",
        borderRadius: 12,
        textAlign: "center",
        marginTop: 4
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: c.strategy, letterSpacing: 1, marginBottom: 4, textTransform: "uppercase" }}>Fazit</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: c.dark }}>
          {"Jede dieser Lücken kostet euch täglich Klicks, Conversions und Umsatz."}
        </div>
      </div>
    </div>
  );
}

/* ========================================================================
   SLIDE 7 – Kostprobe: Vorher / Nachher Main Image (individuell)
   ======================================================================== */
function S7() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ fontSize: 28, fontWeight: 800, color: c.dark, marginBottom: 24 }}>
        Eure Kostprobe – Vorher und Nachher
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 44px 1.25fr", gap: 0, alignItems: "center" }}>
        <div style={{ background: "#fef2f2", border: "1px solid #fca5a533", borderRadius: 14, padding: 16, textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: c.content, marginBottom: 10, letterSpacing: 1 }}>AKTUELL</div>
          <div style={{
            width: "100%", height: 200, background: "#fee2e2", borderRadius: 8,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: c.content, fontSize: 11, border: "1px dashed #fca5a555"
          }}>{"[Screenshot aktuelles Bild]"}</div>
        </div>
        <div style={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IconArrowRight size={24} color={c.advertising} />
        </div>
        <div style={{
          background: "linear-gradient(135deg, #f0fdf4, #ecfdf5)",
          border: "2px solid " + c.green + "33",
          borderRadius: 14, padding: 16, textAlign: "center",
          boxShadow: "0 4px 24px " + c.green + "15",
          transform: "scale(1.02)",
          position: "relative"
        }}>
          <div style={{
            position: "absolute", top: -8, right: 16,
            background: c.green, color: "#fff",
            fontSize: 9, fontWeight: 700, padding: "3px 10px",
            borderRadius: 6, letterSpacing: 0.5
          }}>OPTIMIERT</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: c.green, marginBottom: 10, letterSpacing: 1 }}>UNSERE VERSION</div>
          <div style={{
            width: "100%", height: 220, background: "#dcfce7", borderRadius: 8,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: c.green, fontSize: 11, border: "1px dashed #4ade8044"
          }}>{"[Fertig designtes Listing-Bild]"}</div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================
   SLIDE 8 – Galerie-Bilder + Flywheel (individuell)
   ======================================================================== */
function S8() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ fontSize: 28, fontWeight: 800, color: c.dark, marginBottom: 24 }}>
        Eure Galerie-Bilder – optimiert
      </div>
      {/* Gallery images with blur teaser */}
      <div style={{ display: "flex", gap: 14, marginBottom: 24, overflow: "hidden", position: "relative" }}>
        <div style={{
          flex: "0 0 220px", height: 200, background: "#f0fdf4",
          borderRadius: 12, border: "2px solid " + c.green + "22",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: c.green, fontSize: 11
        }}>{"[Galeriebild 1]"}</div>
        <div style={{
          flex: "0 0 220px", height: 200, background: "#f0fdf4",
          borderRadius: 12, border: "2px solid " + c.green + "22",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: c.green, fontSize: 11
        }}>{"[Galeriebild 2]"}</div>
        {/* Blurry teaser images */}
        <div style={{
          flex: "0 0 180px", height: 200, background: "#f0fdf4",
          borderRadius: 12, border: "1px solid " + c.green + "15",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: c.green, fontSize: 10, filter: "blur(4px)", opacity: 0.6
        }}>{"[Galeriebild 3]"}</div>
        <div style={{
          flex: "0 0 160px", height: 200, background: "#f0fdf4",
          borderRadius: 12, border: "1px solid " + c.green + "10",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: c.green, fontSize: 10, filter: "blur(6px)", opacity: 0.35
        }}>{"[Galeriebild 4]"}</div>
        {/* Gradient overlay on right edge */}
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 100,
          background: "linear-gradient(to right, transparent, " + c.card + ")",
          pointerEvents: "none"
        }} />
      </div>
      {/* Flywheel visualization */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, position: "relative" }}>
        {[
          { label: "CTR", val: "steigt", desc: "durch differenzierte Bilder", color: c.strategy },
          null,
          { label: "Absatz", val: "steigt", desc: "mehr Klicks = mehr Sales", color: c.green },
          null,
          { label: "Organic Rank", val: "steigt", desc: "Amazon belohnt Performance", color: c.advertising },
        ].map(function (item, i) {
          if (!item) {
            return (
              <div key={i} style={{ padding: "0 6px", display: "flex", alignItems: "center" }}>
                <FlywheelArrow direction="right" color={c.dim} />
              </div>
            );
          }
          return (
            <div key={i} style={{
              textAlign: "center", padding: 16, background: c.card,
              border: "2px solid " + item.color + "22", borderRadius: 12,
              minWidth: 150, flex: 1
            }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: item.color }}>{item.val}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: c.dark, marginTop: 4 }}>{item.label}</div>
              <div style={{ fontSize: 11, color: c.muted, marginTop: 3 }}>{item.desc}</div>
            </div>
          );
        })}
        {/* Return arrow (flywheel loop) */}
        <div style={{
          position: "absolute", bottom: -20, left: "50%", transform: "translateX(-50%)",
          display: "flex", alignItems: "center", gap: 6
        }}>
          <svg width="280" height="24" viewBox="0 0 280 24" fill="none">
            <path d="M270 4 C270 18, 140 22, 10 18" stroke={c.advertising} strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
            <polygon points="10,14 4,18 10,22" fill={c.advertising} />
          </svg>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: 28, fontSize: 11, fontWeight: 600, color: c.advertising }}>
        Flywheel: Jeder Baustein verstärkt den nächsten
      </div>
    </div>
  );
}

/* ========================================================================
   SLIDE 9 – Durchschnitt vs. Top-Seller (unchanged)
   ======================================================================== */
function S9() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: c.muted, marginBottom: 8, textTransform: "uppercase" }}>Der Unterschied</div>
      <div style={{ fontSize: 28, fontWeight: 800, color: c.dark, marginBottom: 24 }}>
        Durchschnittlicher Seller vs. optimierte Brand
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div style={{ border: "2px solid #fca5a533", borderRadius: 14, padding: 20, background: "#fef2f2" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: c.content, letterSpacing: 1, marginBottom: 14 }}>DURCHSCHNITT</div>
          {["Titel: Keyword-Stuffing, nicht lesbar", "Bilder: Handy-Fotos, kein Konzept", "Kein A+ Content, keine Brand Story", "Ads auf schwache Listings geschaltet", "Kein System, kein Reporting", "Backend-Attribute: leer"].map(function (t, i) {
            return <div key={i} style={{ fontSize: 13, color: "#991b1b", padding: "5px 0" }}>{"✗ " + t}</div>;
          })}
          <div style={{ marginTop: 14, padding: 10, background: "#fee2e2", borderRadius: 8, textAlign: "center" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#991b1b" }}>{"CTR 0,2% · CVR 5% · ACoS 45%+"}</div>
          </div>
        </div>
        <div style={{ border: "2px solid #4ade8033", borderRadius: 14, padding: 20, background: "#f0fdf4" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: c.green, letterSpacing: 1, marginBottom: 14 }}>TOP-SELLER / UNSERE KUNDEN</div>
          {["Titel: Intent-optimiert, Rufus-lesbar", "Bilder: A/B-getestet, strategisch aufgebaut", "Premium A+ mit Video und Hotspots", "Ads auf Retail-Ready Listings", "Weekly Monitoring, Monthly Reports", "750+ Attribute für COSMO optimiert"].map(function (t, i) {
            return <div key={i} style={{ fontSize: 13, color: "#166534", padding: "5px 0" }}>{"✓ " + t}</div>;
          })}
          <div style={{ marginTop: 14, padding: 10, background: "#dcfce7", borderRadius: 8, textAlign: "center" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#166534" }}>{"CTR 0,5%+ · CVR 15%+ · ACoS <20%"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================
   SLIDE 10 – CTR / CVR Hebel (individuell)
   ======================================================================== */
function S10() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ fontSize: 28, fontWeight: 800, color: c.dark, marginBottom: 24 }}>
        3 Hebel, die sofort wirken würden
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {[
          {
            category: "CTR",
            desc: "Click-Through-Rate",
            color: c.strategy,
            bullets: ["[Bullet Point 1]", "[Bullet Point 2]"]
          },
          {
            category: "CVR",
            desc: "Conversion Rate",
            color: c.green,
            bullets: ["[Bullet Point 1]", "[Bullet Point 2]"]
          },
        ].map(function (col, i) {
          return (
            <div key={i} style={{ background: c.card, border: "1px solid " + c.border, borderRadius: 14, padding: 20 }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: col.color, marginBottom: 2 }}>{col.category}</div>
              <div style={{ fontSize: 11, color: c.muted, marginBottom: 14 }}>{col.desc}</div>
              <div style={{
                width: "100%", height: 160, background: col.color + "08",
                border: "1px dashed " + col.color + "33", borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, color: col.color, marginBottom: 14
              }}>{"[Bild-Platzhalter]"}</div>
              {col.bullets.map(function (b, j) {
                return (
                  <div key={j} style={{ fontSize: 13, color: c.text, padding: "5px 0", display: "flex", gap: 6, alignItems: "flex-start" }}>
                    <span style={{ color: col.color, fontWeight: 700, fontSize: 14 }}>·</span>
                    <span>{b}</span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ========================================================================
   SLIDE 11 – Pain Points (unchanged)
   ======================================================================== */
function S11() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: c.muted, marginBottom: 8, textTransform: "uppercase" }}>Das kennt ihr vielleicht</div>
      <div style={{ fontSize: 28, fontWeight: 800, color: c.dark, marginBottom: 24 }}>
        Warum intern optimieren selten funktioniert
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {[
          { icon: "\u23F0", title: "Keine Bandwidth", desc: "Amazon ist ein Fulltime-Job. Euer Team hat andere Prioritäten – eigener Shop, Einzelhandel, Tagesgeschäft." },
          { icon: "\uD83E\uDD16", title: "KI-Tools ohne Workflow", desc: "ChatGPT, Midjourney, DALL-E – alle ausprobiert, aber kein System dahinter. Ergebnis: mittelmäßig." },
          { icon: "\uD83D\uDCC9", title: "Agentur-Enttäuschung", desc: "Die letzte Agentur hat den ACoS hochgetrieben und am Ende war weniger Profit da. Verständlich, dass ihr skeptisch seid." },
          { icon: "\uD83E\uDDE9", title: "Fehlende Tiefe", desc: "Euer Team kann Amazon bedienen – aber nicht auf dem Niveau optimieren, das nötig wäre. 750+ Datenpunkte sind kein Hobby-Projekt." },
        ].map(function (item, i) {
          return (
            <div key={i} style={{ padding: 18, background: c.card, border: "1px solid " + c.border, borderRadius: 12 }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: c.dark, marginBottom: 4 }}>{item.title}</div>
              <div style={{ fontSize: 12, color: c.muted, lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ========================================================================
   SLIDE 12 – COSMO/Rufus KI Slide (moved from original S4)
   ======================================================================== */
function S12() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ fontSize: 28, fontWeight: 800, color: c.dark, marginBottom: 6 }}>
        {"Amazons KI sieht alles."}
        <br />
        {"Nicht nur eure Keywords."}
      </div>
      <div style={{ fontSize: 13, color: c.muted, marginBottom: 24 }}>
        {"Die meisten Seller optimieren 10–20 sichtbare Felder. Amazons COSMO und Rufus analysieren 750+ Datenpunkte."}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
        <div style={{ padding: 18, background: "#fef2f2", border: "1px solid #fca5a533", borderRadius: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: c.content, marginBottom: 10 }}>WAS DIE MEISTEN OPTIMIEREN</div>
          {["Titel mit Keywords füllen", "Ein paar Bullet Points schreiben", "Bilder hochladen", "Ads einschalten und hoffen"].map(function (t, i) {
            return <div key={i} style={{ fontSize: 13, color: "#991b1b", padding: "4px 0" }}>{"✗ " + t}</div>;
          })}
        </div>
        <div style={{ padding: 18, background: "#f0fdf4", border: "1px solid #4ade8033", borderRadius: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: c.green, marginBottom: 10 }}>WAS COSMO & RUFUS ANALYSIEREN</div>
          {["Texte, Bilder, A+ Content, Videos", "Alle Produkt-Attribute im Backend", "Review-Sentiment und Fragen", "Kaufintent und Use-Case-Matching"].map(function (t, i) {
            return <div key={i} style={{ fontSize: 13, color: "#166534", padding: "4px 0" }}>{"✓ " + t}</div>;
          })}
        </div>
      </div>
      <div style={{ padding: 14, background: c.advertising + "0d", borderRadius: 10, textAlign: "center" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: c.advertising }}>
          {"Rufus-Nutzer kaufen 60% wahrscheinlicher. Wer von Rufus empfohlen wird, gewinnt."}
        </div>
      </div>
    </div>
  );
}

/* ========================================================================
   SLIDE 13 – Framework: Erst Fundament, dann Skalierung
   ======================================================================== */
function S13() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ fontSize: 28, fontWeight: 800, color: c.dark, marginBottom: 6, lineHeight: 1.2 }}>
        Erst Fundament.<br />Dann Skalierung.
      </div>
      <div style={{ fontSize: 13, color: c.muted, marginBottom: 24 }}>
        Die meisten Agenturen starten mit Ads. Wir starten mit dem, was Ads erst profitabel macht.
      </div>
      {/* 4 Pillars – large, prominent */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10, marginBottom: 18 }}>
        {[
          { Icon: IconTarget, name: "Strategie", color: c.strategy, Shape: LogoSquare },
          { Icon: IconLayers, name: "Content", color: c.content, Shape: LogoCircle },
          { Icon: IconTrendUp, name: "Ads", color: c.advertising, Shape: LogoRoundedRect },
          { Icon: IconSettings, name: "Management", color: "#6BA3C7", Shape: LogoHexagon },
        ].map(function (p, i) {
          return (
            <div key={i} style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              padding: "20px 10px", border: "2px solid " + p.color + "25",
              borderRadius: 14, background: p.color + "06", position: "relative"
            }}>
              <div style={{ marginBottom: 8 }}>
                <p.Icon size={32} color={p.color} />
              </div>
              <div style={{ fontSize: 14, fontWeight: 800, color: p.color }}>{p.name}</div>
              {i < 3 && (
                <div style={{ position: "absolute", right: -14, top: "50%", transform: "translateY(-50%)", zIndex: 1 }}>
                  <IconArrowRight size={14} color={c.dim} />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* Organic First callout */}
      <div style={{ padding: 12, background: c.advertising + "08", borderRadius: 10, textAlign: "center", marginBottom: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: c.dark, marginBottom: 2 }}>Organic First. PPC Second.</div>
        <div style={{ fontSize: 11, color: c.muted }}>Wir positionieren eure Marke unter den besten organischen Ergebnissen – nicht nur unter den Sponsored.</div>
      </div>
      {/* 3 Phases – compact */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        <div style={{ padding: 10, background: "#f0fdf4", borderRadius: 8, textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: c.green }}>Phase 1</div>
          <div style={{ fontSize: 10, color: c.muted, marginTop: 3 }}>Listing überlebt ohne Werbung</div>
        </div>
        <div style={{ padding: 10, background: c.advertising + "08", borderRadius: 8, textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: c.advertising }}>Phase 2</div>
          <div style={{ fontSize: 10, color: c.muted, marginTop: 3 }}>PPC pushed Rankings, Organik wächst</div>
        </div>
        <div style={{ padding: 10, background: c.strategy + "10", borderRadius: 8, textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: c.strategy }}>Phase 3</div>
          <div style={{ fontSize: 10, color: c.muted, marginTop: 3 }}>Flywheel dreht, höhere Profitabilität</div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================
   SLIDE 14 – Case Studies
   ======================================================================== */
function S14() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ fontSize: 28, fontWeight: 800, color: c.dark, marginBottom: 24 }}>
        Das passiert, wenn wir unser Framework an eure Brand anschließen
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {[
          {
            brand: "[Brand A]", cat: "[Kategorie]",
            res: [
              { l: "Umsatz", b: "[XX]k", a: "[XX]k", d: "+[XXX]%" },
              { l: "TACoS", b: "[XX]%", a: "[X]%", d: "-[XX]pp" },
              { l: "Organic", b: "[XX]%", a: "[XX]%", d: "+[XX]pp" },
            ]
          },
          {
            brand: "[Brand B]", cat: "[Kategorie]",
            res: [
              { l: "Umsatz", b: "[XX]k", a: "[XX]k", d: "+[XXX]%" },
              { l: "ACoS", b: "[XX]%", a: "[X]%", d: "-[XX]pp" },
              { l: "CVR", b: "[X]%", a: "[XX]%", d: "+[XX]pp" },
            ]
          },
        ].map(function (cs, i) {
          return (
            <div key={i} style={{ background: c.card, border: "1px solid " + c.border, borderRadius: 14, padding: 20 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: c.advertising, letterSpacing: 1 }}>{cs.cat}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: c.dark, marginBottom: 14 }}>{cs.brand}</div>
              {cs.res.map(function (r, j) {
                return (
                  <div key={j} style={{ display: "flex", alignItems: "center", padding: "8px 0", borderBottom: "1px solid " + c.border }}>
                    <div style={{ flex: 1, fontSize: 13, fontWeight: 600 }}>{r.l}</div>
                    <div style={{ fontSize: 12, color: c.dim, textDecoration: "line-through", marginRight: 10 }}>{r.b}</div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: c.green, marginRight: 8 }}>{r.a}</div>
                    <div style={{ padding: "2px 8px", background: "#dcfce7", borderRadius: 4, fontSize: 11, fontWeight: 700, color: c.green }}>{r.d}</div>
                  </div>
                );
              })}
              {/* Face / Quote placeholder */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 14, paddingTop: 12, borderTop: "1px solid " + c.border }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%", background: "#f3f4f6",
                  border: "1px solid " + c.border, display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 9, color: c.dim, flexShrink: 0
                }}>[Foto]</div>
                <div>
                  <div style={{ fontSize: 11, fontStyle: "italic", color: c.muted }}>"[Zitat des Brand Owners]"</div>
                  <div style={{ fontSize: 10, color: c.dim, marginTop: 2 }}>[Name, Position]</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ========================================================================
   SLIDE 15 – A/B Test Case Study (individuell)
   ======================================================================== */
function S15() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ fontSize: 28, fontWeight: 800, color: c.dark, marginBottom: 24 }}>
        Kürzliche A/B-Tests für unsere Kunden
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div style={{
          height: 180, background: "#f3f4f6", borderRadius: 12,
          display: "flex", alignItems: "center", justifyContent: "center",
          border: "1px solid " + c.border, fontSize: 12, color: c.dim
        }}>{"[Vorher]"}</div>
        <div style={{
          height: 180, background: "#f0fdf4", borderRadius: 12,
          display: "flex", alignItems: "center", justifyContent: "center",
          border: "1px solid #4ade8022", fontSize: 12, color: c.dim
        }}>{"[Nachher]"}</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
        {[
          { v: "[+XX%]", l: "Umsatz" },
          { v: "[-XX%]", l: "ACoS" },
          { v: "[+XX%]", l: "Umsatz" },
          { v: "[-XX%]", l: "ACoS" },
        ].map(function (k, i) {
          return (
            <div key={i} style={{ textAlign: "center", padding: 14, background: c.card, border: "1px solid " + c.border, borderRadius: 10 }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: c.advertising }}>{k.v}</div>
              <div style={{ fontSize: 11, color: c.muted, marginTop: 2 }}>{k.l}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ========================================================================
   SLIDE 16 – 4 Bausteine, ein System
   ======================================================================== */
function S16() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ fontSize: 28, fontWeight: 800, color: c.dark, marginBottom: 24 }}>
        Vier Bausteine. Ein System.
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {[
          {
            Icon: IconTarget, Shape: LogoSquare, name: "Strategy", color: c.strategy,
            items: ["Wettbewerbsanalyse", "Margenkalkulation", "Positionierung", "COSMO/Rufus Audit"]
          },
          {
            Icon: IconLayers, Shape: LogoCircle, name: "Content", color: c.content,
            items: ["SEO-Texte und Keywords", "Listing-Bilder und Video", "A+ Premium und Brand Story", "Brandstore"]
          },
          {
            Icon: IconTrendUp, Shape: LogoRoundedRect, name: "Advertising", color: c.advertising,
            items: ["Full-Funnel SP/SB/SD/DSP", "AMC Analytics", "Budget-Optimierung", "Keyword-Management"]
          },
          {
            Icon: IconSettings, Shape: LogoHexagon, name: "Management", color: "#6BA3C7",
            items: ["Weekly Ad Monitoring", "A/B Testing", "Monthly Reporting", "Review-Management"]
          },
        ].map(function (b, i) {
          return (
            <div key={i} style={{
              padding: 20, background: c.card, border: "1px solid " + c.border,
              borderRadius: 14, borderTop: "3px solid " + b.color
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <b.Icon size={26} color={b.color} />
                <span style={{ fontSize: 16, fontWeight: 800, color: b.color }}>{b.name}</span>
              </div>
              {b.items.map(function (item, j) {
                return <div key={j} style={{ fontSize: 12, color: c.muted, padding: "3px 0" }}>{"· " + item}</div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ========================================================================
   SLIDE 17 – Brands / Logos (edge-to-edge scrolling)
   ======================================================================== */
function S17() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "40px 0", textAlign: "center", minHeight: 500, overflow: "hidden" }}>
      <div style={{ fontSize: 28, fontWeight: 800, color: c.dark, marginBottom: 36 }}>
        Brands die mit uns wachsen
      </div>
      {/* Scrolling logo rows with edge fade */}
      <div style={{ width: "100%", position: "relative", marginBottom: 16 }}>
        {/* Fade left */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to right, #fff, transparent)", zIndex: 2, pointerEvents: "none" }} />
        {/* Fade right */}
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to left, #fff, transparent)", zIndex: 2, pointerEvents: "none" }} />
        {/* Row 1 */}
        <div style={{ overflow: "hidden", marginBottom: 10 }}>
          <div style={{
            display: "flex", gap: 14, animation: "scrollLogos 30s linear infinite",
            width: "max-content"
          }}>
            {Array.from({ length: 20 }, function (_, n) {
              return (
                <div key={n} style={{
                  height: 60, minWidth: 120, background: "#f9fafb",
                  border: "1px solid " + c.border, borderRadius: 10,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 10, color: c.dim, flexShrink: 0
                }}>{"[Logo " + ((n % 10) + 1) + "]"}</div>
              );
            })}
          </div>
        </div>
        {/* Row 2 */}
        <div style={{ overflow: "hidden" }}>
          <div style={{
            display: "flex", gap: 14, animation: "scrollLogos 35s linear infinite reverse",
            width: "max-content"
          }}>
            {Array.from({ length: 20 }, function (_, n) {
              return (
                <div key={n} style={{
                  height: 60, minWidth: 120, background: "#f9fafb",
                  border: "1px solid " + c.border, borderRadius: 10,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 10, color: c.dim, flexShrink: 0
                }}>{"[Logo " + ((n % 10) + 11) + "]"}</div>
              );
            })}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 24, fontSize: 14, color: c.muted, fontStyle: "italic", padding: "0 40px" }}>
        {"[Testimonial-Quote – 1 Satz]"}
      </div>
      <div style={{ fontSize: 12, color: c.dim, marginTop: 4 }}>
        {"[Name, Position] – [Brand]"}
      </div>
    </div>
  );
}

/* ========================================================================
   SLIDE 18 – Warum [Agenturname]: Framework + AI = Superpower
   ======================================================================== */
function S18() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ fontSize: 28, fontWeight: 800, color: c.dark, marginBottom: 8 }}>
        Warum [Agenturname]
      </div>
      <div style={{ fontSize: 13, color: c.muted, marginBottom: 28 }}>
        Unser Framework trifft auf AI-first Execution. Das Ergebnis: Euer unfairer Vorteil auf Amazon in 2026.
      </div>
      {/* Visual fusion: Framework + AI = Agency */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 28 }}>
        {/* Framework */}
        <div style={{
          flex: "0 0 200px", height: 180, borderRadius: 14,
          background: "linear-gradient(135deg, #f3f4f6, #e5e7eb)",
          border: "1px solid " + c.border,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          padding: 16, position: "relative", overflow: "hidden"
        }}>
          <div style={{ filter: "blur(2px)", opacity: 0.4, position: "absolute", inset: 10 }}>
            <div style={{ width: "100%", height: "100%", background: "repeating-linear-gradient(0deg, #e5e7eb, #e5e7eb 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, #e5e7eb, #e5e7eb 1px, transparent 1px, transparent 20px)" }} />
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: c.muted, letterSpacing: 1, marginBottom: 8, zIndex: 1 }}>FRAMEWORK</div>
          <div style={{ fontSize: 10, color: c.dim, textAlign: "center", zIndex: 1 }}>[Framework-Ausschnitt]</div>
        </div>
        {/* Plus */}
        <div style={{ fontSize: 28, fontWeight: 300, color: c.dim }}>+</div>
        {/* AI */}
        <div style={{
          flex: "0 0 160px", height: 180, borderRadius: 14,
          background: "linear-gradient(135deg, " + c.advertising + "12, " + c.advertising + "06)",
          border: "2px solid " + c.advertising + "22",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          padding: 16
        }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={c.advertising} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
            <path d="M6 10v1a6 6 0 0 0 12 0v-1" />
            <line x1="12" y1="17" x2="12" y2="22" />
            <circle cx="8" cy="22" r="1" />
            <circle cx="16" cy="22" r="1" />
            <circle cx="12" cy="22" r="1" />
          </svg>
          <div style={{ fontSize: 11, fontWeight: 700, color: c.advertising, letterSpacing: 1, marginTop: 10 }}>AI-FIRST</div>
          <div style={{ fontSize: 10, color: c.dim, marginTop: 4, textAlign: "center" }}>COSMO · Rufus · Automation</div>
        </div>
        {/* Equals */}
        <div style={{ fontSize: 28, fontWeight: 300, color: c.dim }}>=</div>
        {/* Agency result */}
        <div style={{
          flex: "0 0 200px", height: 180, borderRadius: 14,
          background: "linear-gradient(135deg, " + c.strategy + "15, " + c.content + "10)",
          border: "2px solid " + c.strategy + "33",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          padding: 16, boxShadow: "0 4px 20px " + c.strategy + "18"
        }}>
          <LogoMark size={44} />
          <div style={{ fontSize: 13, fontWeight: 800, color: c.dark, marginTop: 10 }}>[Agenturname]</div>
          <div style={{ fontSize: 10, color: c.muted, marginTop: 4, textAlign: "center" }}>AI-first Amazon<br />Growth Agency</div>
        </div>
      </div>
      <div style={{ textAlign: "center", padding: 14, background: c.strategy + "0a", borderRadius: 10 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: c.dark }}>
          In 2026 gewinnt, wer Daten-Frameworks mit AI-Execution verbindet.
        </div>
        <div style={{ fontSize: 11, color: c.muted, marginTop: 3 }}>
          Das ist der Grund, warum Brands mit uns zusammenarbeiten.
        </div>
      </div>
    </div>
  );
}

/* ========================================================================
   SLIDE 19 – Team + Kundenlogo
   ======================================================================== */
function S19() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ fontSize: 28, fontWeight: 800, color: c.dark, marginBottom: 6 }}>
        [Agenturname]
      </div>
      <div style={{ fontSize: 14, color: c.text, lineHeight: 1.8, marginBottom: 24 }}>
        Wenn ihr mit uns startet, bekommt ihr nicht einen Ansprechpartner – ihr bekommt ein komplettes Team.
      </div>
      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 24 }}>
        {[
          { v: "[X]+", l: "Brands betreut" },
          { v: "[X]M", l: "Ad Budget verwaltet" },
          { v: "[X]+", l: "Jahre Erfahrung" },
          { v: "[X]", l: "Marketplaces" },
        ].map(function (s, i) {
          return (
            <div key={i} style={{ textAlign: "center", padding: 12, background: "#f9fafb", borderRadius: 8 }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: c.advertising }}>{s.v}</div>
              <div style={{ fontSize: 10, color: c.muted }}>{s.l}</div>
            </div>
          );
        })}
      </div>
      {/* Team members (7) + Client logo (1) */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
        {[
          { r: "Gründer", cl: c.strategy },
          { r: "Co-Founder", cl: c.strategy },
          { r: "Head of Content", cl: c.content },
          { r: "Content Manager", cl: c.content },
          { r: "Head of Ads", cl: c.advertising },
          { r: "Ad Manager", cl: c.advertising },
          { r: "Client Success", cl: "#6BA3C7" },
        ].map(function (p, i) {
          return (
            <div key={i} style={{ textAlign: "center", padding: 12, background: c.card, border: "1px solid " + c.border, borderRadius: 10 }}>
              <div style={{
                width: 40, height: 40, borderRadius: "50%", background: p.cl + "10",
                border: "2px solid " + p.cl, margin: "0 auto 6px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 9, color: c.dim
              }}>[Foto]</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: c.dark }}>[Name]</div>
              <div style={{ fontSize: 10, color: p.cl }}>{p.r}</div>
            </div>
          );
        })}
        {/* Client logo placeholder */}
        <div style={{
          textAlign: "center", padding: 12, background: c.strategy + "08",
          border: "2px dashed " + c.strategy + "33", borderRadius: 10,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: 8, background: "#f9fafb",
            border: "1px solid " + c.border, margin: "0 auto 6px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 8, color: c.dim
          }}>[Logo]</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: c.strategy }}>Eure Brand</div>
          <div style={{ fontSize: 9, color: c.muted }}>Euer Platz im Team</div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================
   SLIDE 20 – Soft CTA + Reviews
   ======================================================================== */
function S20() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ fontSize: 28, fontWeight: 800, color: c.dark, marginBottom: 4, lineHeight: 1.2 }}>
        Ein 30-Minuten-Gespräch.
      </div>
      <div style={{ fontSize: 20, fontWeight: 600, color: c.strategy, fontStyle: "italic", marginBottom: 28 }}>
        Kein Pitch. Keine Verpflichtung.
      </div>
      {/* Outcomes */}
      <div style={{ background: c.card, border: "1px solid " + c.border, borderRadius: 14, padding: 20, marginBottom: 24 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: c.dark, marginBottom: 12 }}>Was ihr aus diesem Gespräch mitnehmt:</div>
        {[
          "Ein klares Bild eures ungenutzten Potenzials auf Amazon",
          "Eine priorisierte Liste konkreter Maßnahmen für eure Brand",
          "Verständnis, wie COSMO und Rufus eure Rankings beeinflussen",
          "Das fertige Listing-Bild – das gehört euch, egal was passiert",
        ].map(function (t, i) {
          return (
            <div key={i} style={{ fontSize: 13, color: c.text, padding: "5px 0", display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ color: c.green, fontWeight: 700, fontSize: 15, lineHeight: 1 }}>✓</span>
              <span>{t}</span>
            </div>
          );
        })}
      </div>
      {/* Reviews */}
      <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 4 }}>
        {/* Google Reviews */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", background: "#f9fafb", borderRadius: 10, border: "1px solid " + c.border }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: c.dark }}>Google</div>
          <div style={{ display: "flex", gap: 1 }}>
            {[1, 2, 3, 4, 5].map(function (s) {
              return <span key={s} style={{ color: "#facc15", fontSize: 14 }}>★</span>;
            })}
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: c.dark }}>[X.X]</div>
        </div>
        {/* Trustpilot */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", background: "#f9fafb", borderRadius: 10, border: "1px solid " + c.border }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#00b67a" }}>Trustpilot</div>
          <div style={{ display: "flex", gap: 1 }}>
            {[1, 2, 3, 4, 5].map(function (s) {
              return <span key={s} style={{ color: "#00b67a", fontSize: 14 }}>★</span>;
            })}
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: c.dark }}>[X.X]</div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================
   SLIDE 21 – Hard CTA (Final)
   ======================================================================== */
function S21() {
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      height: "100%", padding: 40, textAlign: "center", minHeight: 500
    }}>
      <div style={{ fontSize: 32, fontWeight: 800, color: c.dark, lineHeight: 1.25, marginBottom: 8 }}>
        {"Euer Listing wartet."}
        <br />
        {"Euer Markt wartet nicht."}
      </div>
      <div style={{ fontSize: 15, color: c.muted, marginBottom: 40 }}>
        {"Das beste Timing ist jetzt – das zweitbeste war gestern."}
      </div>
      <div style={{
        padding: "20px 48px", background: c.advertising, borderRadius: 12,
        cursor: "pointer", transition: "transform 0.2s",
      }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>Termin buchen</div>
        <div style={{ fontSize: 12, color: "#ffffffaa", marginTop: 4 }}>{"[Calendly-Link / E-Mail / Telefon]"}</div>
      </div>
    </div>
  );
}

/* ========================================================================
   MAIN APP
   ======================================================================== */
var SC = [S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S14, S15, S16, S17, S18, S19, S20, S21];
var ST = ["T", "T", "T", "T", "I", "I", "I", "I", "T", "I", "T", "T", "T", "I", "I", "T", "T", "T", "T", "T", "T"];
var SN = [
  "Cover – Kundenname einsetzen. Kein Preis, kein Scope – nur Neugier wecken.",
  "Statement-Slide. Emotional, direkt. Erzeugt sofort Aufmerksamkeit.",
  "Markt-Realität: Harte Zahlen. Erzeugt Dringlichkeit ohne Vorwurf.",
  "Statement-Platzhalter. Wird individuell angepasst.",
  "INDIVIDUELL – Audit-Scores eintragen. Gap zu Top-Sellern sichtbar machen.",
  "INDIVIDUELL – Konkrete Findings aus dem Audit. Ist vs. Best Practice. Fazit-Box betonen.",
  "INDIVIDUELL – Kostprobe! DER emotionale Höhepunkt. Vorher/Nachher Hauptbild.",
  "INDIVIDUELL – Galeriebilder + Flywheel-Logik. Blurry Teaser für mehr Content.",
  "Durchschnitt vs. Top-Seller mit konkreten KPIs. Stärkste Vergleichs-Slide.",
  "INDIVIDUELL – CTR und CVR Hebel mit Bild und Bullet Points.",
  "Empathie-Slide. Spricht Pain Points an die der ICP wirklich hat. Baut Vertrauen.",
  "COSMO/Rufus erklären. 750+ Datenpunkte Messaging. Positioniert euch als Experten.",
  "Framework: Erst Fundament, dann Skalierung. Organic First. 3-Phasen-Logik.",
  "Case Studies: Framework an Brand anschließen. Ergebnisse + Zitat/Foto.",
  "INDIVIDUELL – A/B-Test Vorher/Nachher mit Umsatz und ACoS pro Seite.",
  "4 Bausteine als Übersicht. Scannbar, klar, kein Textwand.",
  "Logos-Slide. Scrolling logos edge-to-edge. Social Proof durch Masse.",
  "Framework + AI = Agentur-Superpower. Differenzierung visuell dargestellt.",
  "Team-Slide: 7 Team-Mitglieder + Kundenlogo. Zeigt: Ihr bekommt ein ganzes Team.",
  "Soft CTA: Outcomes des Calls + Google/Trustpilot Reviews.",
  "Hard CTA: Pattern-Interrupt, leichter Witz, professionell. Termin-Button.",
];

export default function App() {
  const [cur, setCur] = useState(0);
  const [notes, setNotes] = useState(false);
  var Comp = SC[cur];
  var tp = ST[cur];
  var total = SC.length;
  return (
    <div style={{ background: c.bg, minHeight: "100vh", fontFamily: "Inter,Segoe UI,system-ui,sans-serif" }}>
      {/* Top nav bar */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "8px 16px", borderBottom: "1px solid " + c.border, background: "#fff"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <LogoMark size={22} />
          <span style={{ fontSize: 12, fontWeight: 700, color: c.dark }}>{(cur + 1) + "/" + total}</span>
          <span style={{
            padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700,
            background: tp === "I" ? c.strategy + "18" : c.advertising + "10",
            color: tp === "I" ? c.strategy : c.advertising
          }}>{tp === "I" ? "INDIVIDUELL" : "TEMPLATE"}</span>
        </div>
        <div style={{ display: "flex", gap: 2 }}>
          {SC.map(function (_, i) {
            var isCurrent = i === cur;
            var isIndividuell = ST[i] === "I";
            return (
              <div key={i} onClick={function () { setCur(i); }}
                style={{
                  width: isCurrent ? 18 : 7, height: 7, borderRadius: 4, cursor: "pointer",
                  background: isCurrent ? (isIndividuell ? c.strategy : c.advertising) : "#e5e7eb",
                  transition: "all 0.2s"
                }} />
            );
          })}
        </div>
        <button onClick={function () { setNotes(!notes); }}
          style={{
            fontSize: 11, padding: "4px 10px", border: "1px solid " + c.border,
            borderRadius: 6, background: notes ? c.strategy + "15" : "#fff",
            color: c.text, cursor: "pointer"
          }}>{"Notes " + (notes ? "\u2713" : "")}</button>
      </div>
      {/* Content */}
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "12px 16px" }}>
        <div style={{
          background: "#fff", border: "1px solid " + c.border, borderRadius: 16,
          minHeight: 500, overflow: "hidden",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
        }}>
          <Comp />
        </div>
        {notes && (
          <div style={{ marginTop: 8, padding: "10px 14px", background: c.strategy + "0a", border: "1px solid " + c.strategy + "33", borderRadius: 10 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: c.strategy, letterSpacing: 1 }}>SPEAKER NOTES</div>
            <div style={{ fontSize: 12, color: c.text, marginTop: 4, lineHeight: 1.6 }}>{SN[cur]}</div>
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, paddingBottom: 20 }}>
          <button onClick={function () { setCur(Math.max(0, cur - 1)); }} disabled={cur === 0}
            style={{
              padding: "8px 20px", borderRadius: 8, border: "1px solid " + c.border,
              background: "#fff", color: cur === 0 ? c.dim : c.dark,
              cursor: cur === 0 ? "default" : "pointer", fontSize: 13
            }}>{"← Zurück"}</button>
          <button onClick={function () { setCur(Math.min(total - 1, cur + 1)); }} disabled={cur === total - 1}
            style={{
              padding: "8px 20px", borderRadius: 8,
              border: "1px solid " + c.advertising,
              background: cur === total - 1 ? "#fff" : c.advertising,
              color: cur === total - 1 ? c.dim : "#fff",
              cursor: cur === total - 1 ? "default" : "pointer",
              fontSize: 13, fontWeight: 700
            }}>{"Weiter →"}</button>
        </div>
      </div>
    </div>
  );
}
