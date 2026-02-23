import { useState, useEffect } from "react";

const events = [
  {
    id: 1,
    date: "ENE 10, 2025",
    day: "Viernes",
    title: "Nominaciones Anunciadas",
    venue: "Grammy HQ",
    city: "Santa Monica, CA",
    time: "8:30 AM ET",
    type: "Anuncio",
  },
  {
    id: 2,
    date: "FEB 01, 2025",
    day: "Sábado",
    title: "Grammy Premiere Ceremony",
    venue: "Peacock Theater",
    city: "Los Ángeles, CA",
    time: "3:30 PM ET",
    type: "Premiere",
  },
  {
    id: 3,
    date: "FEB 02, 2025",
    day: "Domingo",
    title: "67th Grammy Awards",
    venue: "Crypto.com Arena",
    city: "Los Ángeles, CA",
    time: "8:00 PM ET",
    type: "Ceremonia Principal",
  },
  {
    id: 4,
    date: "FEB 02, 2026",
    day: "Lunes",
    title: "68th Grammy Awards",
    venue: "Por confirmar",
    city: "Los Ángeles, CA",
    time: "TBA",
    type: "Próximo",
  },
];

const TARGET_DATE = new Date("2026-02-02T20:00:00");

function useCountdown(target) {
  const [timeLeft, setTimeLeft] = useState({});
  useEffect(() => {
    const calc = () => {
      const diff = target - new Date();
      if (diff <= 0) return setTimeLeft({ d: 0, h: 0, m: 0, s: 0 });
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [target]);
  return timeLeft;
}

export default function GrammyPage() {
  const { d, h, m, s } = useCountdown(TARGET_DATE);
  const [hovered, setHovered] = useState(null);

  return (
    <div style={st.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700;800&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0d1624; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-1 { animation: fadeUp 0.8s ease both; }
        .anim-2 { animation: fadeUp 0.8s 0.15s ease both; }
        .anim-3 { animation: fadeUp 0.8s 0.3s ease both; }
        .gram-card {
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }
        .gram-card:hover {
          transform: translateY(-5px);
          border-color: rgba(212,175,55,0.4) !important;
          background: rgba(47,70,115,0.35) !important;
        }
        .gold-line {
          width: 64px; height: 1px;
          background: linear-gradient(90deg, transparent, #D4AF37, transparent);
          margin: 0 auto;
        }
      `}</style>

      <div style={st.bgGlow} />

      {/* NAV */}
      <nav style={st.nav}>
        <div style={st.navLogo}>
          <span style={st.navDiamond}>♦</span>
          <span style={st.navText}>GRAMMY</span>
        </div>
        <span style={st.navYears}>2025 · 2026</span>
      </nav>

      {/* HERO */}
      <header style={st.hero}>
        <p style={st.eyebrow} className="anim-1">✦ &nbsp; Recording Academy &nbsp; ✦</p>
        <h1 style={st.title} className="anim-2">
          Grammy<br />
          <span style={st.titleGold}>Awards</span>
        </h1>
        <div className="gold-line" style={{ margin: "32px auto" }} />
        <p style={st.heroSub} className="anim-3">
          Fechas y eventos oficiales de la celebración<br />más importante de la música
        </p>
        <div style={st.badges} className="anim-3">
          {["67ª Edición", "Los Ángeles, CA", "Crypto.com Arena"].map((b) => (
            <span key={b} style={st.badge}>{b}</span>
          ))}
        </div>
      </header>

      {/* COUNTDOWN */}
      <section style={st.section}>
        <div style={st.countCard}>
          <p style={st.countTitle}>Cuenta Regresiva</p>
          <p style={st.countSub}>68th Grammy Awards · 2 Feb 2026</p>
          <div className="gold-line" style={{ margin: "18px auto 36px" }} />
          <div style={st.countRow}>
            {[
              { val: d, label: "Días" },
              { val: h, label: "Horas" },
              { val: m, label: "Min" },
              { val: s, label: "Seg" },
            ].map(({ val, label }, i) => (
              <div key={label} style={st.countUnit}>
                {i > 0 && <span style={st.colon}>:</span>}
                <div style={st.countBox}>
                  <span style={st.countNum}>
                    {String(val ?? 0).padStart(2, "0")}
                  </span>
                  <span style={st.countLabel}>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section style={{ ...st.section, paddingTop: 0 }}>
        <div style={st.secHead}>
          <span style={st.secEye}>Calendario Oficial</span>
          <h2 style={st.secTitle}>Fechas & Eventos</h2>
          <div className="gold-line" style={{ marginTop: 16 }} />
        </div>

        <div style={st.grid}>
          {events.map((ev) => (
            <div
              key={ev.id}
              className="gram-card"
              style={st.card}
              onMouseEnter={() => setHovered(ev.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={st.cardTopBar} />
              <span style={st.cardType}>{ev.type}</span>
              <div style={st.cardDate}>
                <span style={st.cardDateMain}>{ev.date.split(",")[0]}</span>
                <span style={st.cardDateYear}>,{ev.date.split(",")[1]}</span>
              </div>
              <h3 style={st.cardTitle}>{ev.title}</h3>
              <div style={st.cardMeta}>
                <span>📍 {ev.venue}</span>
                <span>🌆 {ev.city}</span>
                <span>🕐 {ev.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={st.footer}>
        <div className="gold-line" style={{ marginBottom: 24 }} />
        <p style={st.footerMain}>♦ &nbsp; Grammy Awards · Recording Academy &nbsp; ♦</p>
        <p style={st.footerSub}>Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

const BLUE  = "#2F4673";
const GOLD  = "#D4AF37";
const GOLDF = "#F0D080";
const DARK  = "#0d1624";

const st = {
  root: {
    minHeight: "100vh",
    background: DARK,
    fontFamily: "'Jost', sans-serif",
    color: "#fff",
    position: "relative",
    overflowX: "hidden",
  },
  bgGlow: {
    position: "fixed",
    inset: 0,
    background: `
      radial-gradient(ellipse 80% 50% at 50% -5%, rgba(47,70,115,0.6) 0%, transparent 65%),
      radial-gradient(ellipse 40% 25% at 85% 85%, rgba(212,175,55,0.06) 0%, transparent 60%)
    `,
    pointerEvents: "none",
    zIndex: 0,
  },
  nav: {
    position: "sticky", top: 0, zIndex: 100,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "18px 48px",
    background: "rgba(13,22,36,0.88)",
    backdropFilter: "blur(18px)",
    borderBottom: "1px solid rgba(212,175,55,0.12)",
  },
  navLogo: { display: "flex", alignItems: "center", gap: 10 },
  navDiamond: { color: GOLD, fontSize: 16 },
  navText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 20, fontWeight: 700, letterSpacing: 8, color: "#fff",
  },
  navYears: { fontSize: 11, letterSpacing: 4, color: "rgba(212,175,55,0.45)", textTransform: "uppercase" },
  hero: {
    position: "relative", zIndex: 1,
    textAlign: "center",
    padding: "100px 24px 60px",
    maxWidth: 820, margin: "0 auto",
  },
  eyebrow: { fontSize: 11, letterSpacing: 6, color: GOLD, opacity: 0.75, marginBottom: 28, textTransform: "uppercase" },
  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(72px, 12vw, 140px)",
    fontWeight: 800, lineHeight: 0.93, letterSpacing: -2, color: "#fff",
  },
  titleGold: {
    background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLDF} 50%, ${GOLD} 100%)`,
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
  },
  heroSub: {
    fontSize: 15, fontWeight: 300, lineHeight: 1.9,
    color: "rgba(255,255,255,0.4)", letterSpacing: 0.5, marginBottom: 36,
  },
  badges: { display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 10 },
  badge: {
    padding: "7px 20px", borderRadius: 999,
    border: "1px solid rgba(212,175,55,0.22)",
    fontSize: 10, letterSpacing: 3,
    color: "rgba(212,175,55,0.65)",
    background: "rgba(47,70,115,0.18)",
    textTransform: "uppercase",
  },
  section: {
    position: "relative", zIndex: 1,
    maxWidth: 1100, margin: "0 auto", padding: "60px 32px",
  },
  countCard: {
    background: "linear-gradient(135deg, rgba(47,70,115,0.38) 0%, rgba(18,30,54,0.65) 100%)",
    border: "1px solid rgba(212,175,55,0.18)",
    borderRadius: 20, padding: "52px 40px", textAlign: "center",
    backdropFilter: "blur(24px)",
    boxShadow: "0 0 80px rgba(47,70,115,0.2), inset 0 1px 0 rgba(212,175,55,0.08)",
  },
  countTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 30, fontWeight: 700, letterSpacing: 2, color: "#fff", marginBottom: 6,
  },
  countSub: { fontSize: 10, letterSpacing: 4, color: "rgba(212,175,55,0.5)", textTransform: "uppercase" },
  countRow: { display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" },
  countUnit: { display: "flex", alignItems: "center" },
  colon: { fontSize: 40, color: "rgba(212,175,55,0.25)", margin: "0 10px", marginBottom: 20, fontWeight: 300 },
  countBox: { display: "flex", flexDirection: "column", alignItems: "center", minWidth: 88 },
  countNum: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(52px, 8vw, 82px)", fontWeight: 700, lineHeight: 1,
    background: `linear-gradient(180deg, ${GOLDF} 0%, ${GOLD} 100%)`,
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    fontVariantNumeric: "tabular-nums",
  },
  countLabel: { fontSize: 9, letterSpacing: 4, textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginTop: 6 },
  secHead: { textAlign: "center", marginBottom: 48 },
  secEye: { fontSize: 10, letterSpacing: 6, textTransform: "uppercase", color: GOLD, opacity: 0.65 },
  secTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 700, color: "#fff", marginTop: 10, letterSpacing: 1,
  },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 },
  card: {
    background: "rgba(47,70,115,0.16)",
    border: "1px solid rgba(212,175,55,0.1)",
    borderRadius: 16, padding: 28,
    position: "relative", overflow: "hidden", cursor: "default",
  },
  cardTopBar: {
    position: "absolute", top: 0, left: 0, right: 0, height: 2,
    background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
    opacity: 0.5,
  },
  cardType: {
    display: "block", fontSize: 9, letterSpacing: 4, textTransform: "uppercase",
    color: GOLD, opacity: 0.65, marginTop: 8, marginBottom: 16,
  },
  cardDate: { display: "flex", alignItems: "baseline", gap: 2, marginBottom: 10 },
  cardDateMain: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 26, fontWeight: 700, color: "#fff", letterSpacing: 1,
  },
  cardDateYear: { fontSize: 14, color: "rgba(255,255,255,0.3)" },
  cardTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 18, fontWeight: 600, color: "rgba(255,255,255,0.82)", marginBottom: 18, lineHeight: 1.35,
  },
  cardMeta: {
    display: "flex", flexDirection: "column", gap: 5,
    fontSize: 11, color: "rgba(255,255,255,0.3)", lineHeight: 1.7,
  },
  footer: {
    position: "relative", zIndex: 1,
    textAlign: "center", padding: "40px 24px 52px",
    borderTop: "1px solid rgba(212,175,55,0.07)",
  },
  footerMain: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 13, letterSpacing: 4, color: "rgba(212,175,55,0.35)", marginBottom: 8,
  },
  footerSub: { fontSize: 9, letterSpacing: 3, color: "rgba(255,255,255,0.12)", textTransform: "uppercase" },
};
