import { useState, useEffect } from "react";
import styles from "./GrammyPage.module.css";
import grammyheader from "./assets/grammyheader.jpg";

const events = [
  {
    id: 1,
    date: "MAR 20, 2026",
    title: "Anuncio de Nominados",
    time: "TBA",
    type: "Anuncio",
  },
  {
    id: 2,
    date: "TBA",
    title: "Grammy Awards",
    time: "TBA",
    type: "Ceremonia Principal",
  },
];

const TARGET_DATE = new Date("2026-03-20T00:00:00");

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

  return (
    <div className={styles.root}>
      <div className={styles.bgGlow} />

      {/* NAV */}
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <img 
          src="https://www.grammy.com/wp-content/uploads/2026/02/2026_grammys_nominations_recording_academy_G68_Awards_Logo-1-150x51.avif" 
          alt="Grammy Logo" 
          className={styles.navLogoImg} 
          />
          <span className={styles.navDiamond}>♦</span>
          <span className={styles.navText}>GRAMMY AWARDS</span>
        </div>
        <span className={styles.navYears}>2026</span>
      </nav>

      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
        <p className={styles.eyebrow}>✦ &nbsp; Recording Academy &nbsp; ✦</p>
        <h1 className={styles.heroTitle}>
          Grammy<br />
          <span className={styles.heroTitleGold}>Awards</span>
        </h1>
        <div className={styles.goldLine} />
        <p className={styles.heroSub}>
          Fechas y eventos oficiales de la celebración<br />
          más importante de la música
        </p>
        <div className={styles.badges}>
          {["Ikonik's Pop"].map((b) => (
            <span key={b} className={styles.badge}>{b}</span>
          ))}
        </div>
        </div>
      </header>

      {/* COUNTDOWN */}
      <section className={styles.section}>
        <div className={styles.countCard}>
          <p className={styles.countTitle}>Cuenta Regresiva</p>
          <p className={styles.countSub}>Anuncio de Nominados· 20 Mar 2026</p>
          <div className={styles.countGoldLine} />
          <div className={styles.countRow}>
            {[
              { val: d, label: "Días" },
              { val: h, label: "Horas" },
              { val: m, label: "Min" },
              { val: s, label: "Seg" },
            ].map(({ val, label }, i) => (
              <div key={label} className={styles.countUnit}>
                {i > 0 && <span className={styles.colon}>:</span>}
                <div className={styles.countBox}>
                  <span className={styles.countNum}>
                    {String(val ?? 0).padStart(2, "0")}
                  </span>
                  <span className={styles.countLabel}>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className={`${styles.section} ${styles.sectionNoPaddingTop}`}>
        <div className={styles.secHead}>
          <span className={styles.secEye}>Calendario Oficial</span>
          <h2 className={styles.secTitle}>Fechas & Eventos</h2>
          <div className={styles.secGoldLine} />
        </div>

        <div className={styles.grid}>
          {events.map((ev) => (
            <div key={ev.id} className={styles.card}>
              <div className={styles.cardTopBar} />
              <span className={styles.cardType}>{ev.type}</span>
              <div className={styles.cardDate}>
                <span className={styles.cardDateMain}>{ev.date.split(",")[0]}</span>
                <span className={styles.cardDateYear}>,{ev.date.split(",")[1]}</span>
              </div>
              <h3 className={styles.cardTitle}>{ev.title}</h3>
              <div className={styles.cardMeta}>
                <span>🕐 {ev.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerGoldLine} />
        <p className={styles.footerMain}>♦ &nbsp; Grammy Awards · Recording Academy &nbsp; ♦</p>
        <p className={styles.footerSub}>Todos los derechos reservados</p>
      </footer>
    </div>
  );
}