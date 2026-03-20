import styles from "./styles/NominationPage.module.css";

const categories = [
  /*
  {
    
    id: 1,
    name: "Album Of The Year",
    nominees: [
      { artist: "Alice Sinclair", work: "Forever After All - EP", cover: "https://i.ibb.co/V0hRXj2s/Whats-App-Image-2026-03-17-at-18-08-37.jpg" },
      { artist: "Cano", work: "Uncharted Love", cover: "https://i.ibb.co/vv1wpyy0/Whats-App-Image-2026-03-17-at-18-07-59.jpg" },
      { artist: "Chanel", work: "Oberlin", cover: "https://i.ibb.co/tTYb5d87/Whats-App-Image-2026-03-17-at-18-07-40.jpg" },
      { artist: "David", work: "No One Dies From Love", cover: "https://i.ibb.co/Mx8dKH3y/Whats-App-Image-2026-03-17-at-18-07-04.jpg" },
      { artist: "Franco", work: "Breeze & Essence", cover: "https://i.ibb.co/pBzN2Qcf/Whats-App-Image-2026-03-17-at-18-09-43.jpg" },
      { artist: "Nathan", work: "Unfulfillment", cover: "https://i.ibb.co/nM8Mq6Q1/Whats-App-Image-2026-03-17-at-18-08-21-1.jpg" },
      { artist: "Newmoon", work: "Temporary", cover: "https://i.ibb.co/G35BJHvY/Whats-App-Image-2026-03-17-at-18-09-15.jpg" },
      { artist: "Valentín", work: "Night Bride", cover: "https://i.ibb.co/bjFJ1fz8/Whats-App-Image-2026-03-17-at-18-12-14.jpg" },
    ],
  },
  {
    id: 2,
    name: "Record Of The Year",
    nominees: [
      { artist: "Cano, Yovanny", work: "Cold Heart", cover: "https://i.ibb.co/vv1wpyy0/Whats-App-Image-2026-03-17-at-18-07-59.jpg" },
      { artist: "Chanel", work: "I Will Always Love You", cover: "https://i.ibb.co/tTYb5d87/Whats-App-Image-2026-03-17-at-18-07-40.jpg" },
      { artist: "Alexis", work: "Padam Padam", cover: "https://i.ibb.co/HDjZSBWM/Whats-App-Image-2026-03-17-at-18-16-53-1.jpg" },
      { artist: "David", work: "No One Dies From Love", cover: "https://i.ibb.co/VWwyHBmy/Whats-App-Image-2026-03-17-at-18-25-16.jpg" },
      { artist: "Nathan", work: "Same Ol' Mistakes", cover: "https://i.ibb.co/nM8Mq6Q1/Whats-App-Image-2026-03-17-at-18-08-21-1.jpg" },
      { artist: "Franco", work: "That's the Way Love Goes", cover: "https://i.ibb.co/Jwz21Xvp/Whats-App-Image-2026-03-17-at-18-09-44-1.jpg" },
      { artist: "Valentín, José", work: "Bring Me to Life", cover: "https://i.ibb.co/bjFJ1fz8/Whats-App-Image-2026-03-17-at-18-12-14.jpg" },
      { artist: "Newmoon", work: "The Greatest", cover: "https://i.ibb.co/G35BJHvY/Whats-App-Image-2026-03-17-at-18-09-15.jpg" },
    ],
  },
  {
    id: 3,
    name: "Song Of The Year",
    nominees: [
      { artist: "Chanel", work: "I Will Always Love You", cover: "https://i.ibb.co/tTYb5d87/Whats-App-Image-2026-03-17-at-18-07-40.jpg" },
      { artist: "Nathan", work: "Special", cover: "https://i.ibb.co/nM8Mq6Q1/Whats-App-Image-2026-03-17-at-18-08-21-1.jpg" },
      { artist: "Alice Sinclair", work: "the lakes", cover: "https://i.ibb.co/V0hRXj2s/Whats-App-Image-2026-03-17-at-18-08-37.jpg" },
      { artist: "Franco", work: "Always Be My Baby", cover: "https://i.ibb.co/pBzN2Qcf/Whats-App-Image-2026-03-17-at-18-09-43.jpg" },
      { artist: "Valentín", work: "Fighter", cover: "https://i.ibb.co/bjFJ1fz8/Whats-App-Image-2026-03-17-at-18-12-14.jpg" },
      { artist: "Newmoon", work: "this is me trying", cover: "https://i.ibb.co/G35BJHvY/Whats-App-Image-2026-03-17-at-18-09-15.jpg" },
      { artist: "Alexis", work: "Did you know that there's a tunnel under Ocean Blvd", cover: "https://i.ibb.co/TqDVSx7N/Whats-App-Image-2026-03-17-at-18-16-53.jpg" },
      { artist: "David", work: "You're On Your Own, Kid", cover: "https://i.ibb.co/RGDMxvBG/Whats-App-Image-2026-03-17-at-18-13-38.jpg" },
    ],
  },
  {
    id: 4,
    name: "Best Pop Solo Performance",
    nominees: [
      { artist: "David", work: " You're On Your Own, Kid", cover: "https://i.ibb.co/RGDMxvBG/Whats-App-Image-2026-03-17-at-18-13-38.jpg" },
      { artist: "Alexis", work: "Padam Padam", cover: "https://i.ibb.co/HDjZSBWM/Whats-App-Image-2026-03-17-at-18-16-53-1.jpg" },
      { artist: "Valentín", work: "Diet Pepsi", cover: "https://xtinapictures.com/albums/Photoshoots/2005/Matthias%20Clamer%20%5BPepsi%5D/01.jpg" },
      { artist: "Chanel", work: "I'm Alive", cover: "https://i.ibb.co/tTYb5d87/Whats-App-Image-2026-03-17-at-18-07-40.jpg" },
      { artist: "Franco", work: "Always Be My Baby", cover: "https://i.ibb.co/pBzN2Qcf/Whats-App-Image-2026-03-17-at-18-09-43.jpg" },
    ],
  },
    {
    id: 5,
    name: "Best Pop Duo/Group Performance ",
    nominees: [
      { artist: "Cano, Yovanny", work: "Cold Heart", cover: "https://i.ibb.co/vv1wpyy0/Whats-App-Image-2026-03-17-at-18-07-59.jpg" },
      { artist: "Isaí, Chanel", work: "Upgrade U", cover: "https://www.rollingstone.com/wp-content/uploads/2022/07/beyonce-upgrade-u-1800.jpg?w=1000" },
      { artist: "Nathan, Isaí", work: "Ghost In the Machine", cover: "https://i.ibb.co/nM8Mq6Q1/Whats-App-Image-2026-03-17-at-18-08-21-1.jpg" },
      { artist: "Valentín, José ", work: "Bring Me to Life", cover: "https://i.ibb.co/bjFJ1fz8/Whats-App-Image-2026-03-17-at-18-12-14.jpg" },
      { artist: "Newmoon, Santy", work: "Nothing New", cover: "https://i.ibb.co/G35BJHvY/Whats-App-Image-2026-03-17-at-18-09-15.jpg" },
    ],
  },
  {
    id: 6,
    name: "Best Pop Vocal Album",
    nominees: [
      { artist: "Cano", work: "Uncharted Love", cover: "https://i.ibb.co/vv1wpyy0/Whats-App-Image-2026-03-17-at-18-07-59.jpg" },
      { artist: "Chanel", work: "Oberlin", cover: "https://i.ibb.co/tTYb5d87/Whats-App-Image-2026-03-17-at-18-07-40.jpg" },
      { artist: "Santy", work: "Feels Like...", cover: "https://i.ibb.co/zhhBfg4x/Whats-App-Image-2026-03-17-at-18-12-13.jpg" },
      { artist: "David", work: "No One Dies From Love", cover: "https://i.ibb.co/Mx8dKH3y/Whats-App-Image-2026-03-17-at-18-07-04.jpg" },
      { artist: "Alexis", work: "Edge of Midnight", cover: "https://i.ibb.co/gLY0b8h8/Whats-App-Image-2026-03-17-at-18-10-14.jpg" },
    ],
  },
    {
    id: 7,
    name: "Best R&B/Rap/Alternative Album ",
    nominees: [
      { artist: "Nathan", work: "Unfulfillment", cover: "https://i.ibb.co/nM8Mq6Q1/Whats-App-Image-2026-03-17-at-18-08-21-1.jpg" },
      { artist: "Alice Sinclair", work: "Forever After All - EP", cover: "https://i.ibb.co/V0hRXj2s/Whats-App-Image-2026-03-17-at-18-08-37.jpg" },
      { artist: "Franco", work: "Breeze & Essence", cover: "https://i.ibb.co/pBzN2Qcf/Whats-App-Image-2026-03-17-at-18-09-43.jpg" },
      { artist: "Valentín", work: "Night Bride", cover: "https://i.ibb.co/bjFJ1fz8/Whats-App-Image-2026-03-17-at-18-12-14.jpg" },
      { artist: "Newmoon", work: "Temporary", cover: "https://i.ibb.co/G35BJHvY/Whats-App-Image-2026-03-17-at-18-09-15.jpg" },
    ],
  },
   {
    id: 8,
    name: "Best R&B/Rap/Alternative Song",
    nominees: [
      { artist: "Alice Sinclair", work: "the lakes", cover: "https://i.ibb.co/V0hRXj2s/Whats-App-Image-2026-03-17-at-18-08-37.jpg" },
      { artist: "Alexis", work: "Did you know that there's a tunnel under Ocean Blvd", cover: "https://i.ibb.co/TqDVSx7N/Whats-App-Image-2026-03-17-at-18-16-53.jpg" },
      { artist: "Franco", work: "That's the Way Love Goes", cover: "https://i.ibb.co/Jwz21Xvp/Whats-App-Image-2026-03-17-at-18-09-44-1.jpg" },
      { artist: "Valentín", work: "Fighter", cover: "https://i.ibb.co/bjFJ1fz8/Whats-App-Image-2026-03-17-at-18-12-14.jpg" },
      { artist: "Newmoon", work: "The Greatest", cover: "https://i.ibb.co/G35BJHvY/Whats-App-Image-2026-03-17-at-18-09-15.jpg" },
    ],
  },
   {
    id: 9,
    name: "Best Album Cover",
    nominees: [
      { artist: "Chanel", work: "Oberlin", cover: "https://i.ibb.co/tTYb5d87/Whats-App-Image-2026-03-17-at-18-07-40.jpg" },
      { artist: "Nathan", work: "Unfulfillment", cover: "https://i.ibb.co/nM8Mq6Q1/Whats-App-Image-2026-03-17-at-18-08-21-1.jpg" },
      { artist: "Franco", work: "Breeze & Essence", cover: "https://i.ibb.co/pBzN2Qcf/Whats-App-Image-2026-03-17-at-18-09-43.jpg" },
      { artist: "Valentín", work: "Night Bride", cover: "https://i.ibb.co/bjFJ1fz8/Whats-App-Image-2026-03-17-at-18-12-14.jpg" },
      { artist: "Newmoon", work: "Temporary", cover: "https://i.ibb.co/G35BJHvY/Whats-App-Image-2026-03-17-at-18-09-15.jpg" },
    ],
  },
     {
    id: 10,
    name: "Best Single Cover",
    nominees: [
      { artist: "Cano, Valentín", work: "Lottery", cover: "https://i.ibb.co/PsJ6n2yb/Whats-App-Image-2026-03-17-at-18-07-59-1.jpg" },
      { artist: "David", work: "You're On Your Own, Kid", cover: "https://i.ibb.co/RGDMxvBG/Whats-App-Image-2026-03-17-at-18-13-38.jpg" },
      { artist: "Nathan", work: "Seek & Destroy", cover: "https://i.ibb.co/hx3bRKJL/Whats-App-Image-2026-03-17-at-18-15-55.jpg" },
      { artist: "Alexis", work: "Did you know that there's a tunnel under Ocean Blvd", cover: "https://i.ibb.co/TqDVSx7N/Whats-App-Image-2026-03-17-at-18-16-53.jpg" },
    ],
    
  },
  */
    {
    id: 11,
    name: "Best Enginereed Album",
    nominees: [
      { artist: "Cano", work: "Uncharted Love", cover: "https://i.ibb.co/vv1wpyy0/Whats-App-Image-2026-03-17-at-18-07-59.jpg" },
      { artist: "David", work: "No One Dies From Love", cover: "https://i.ibb.co/Mx8dKH3y/Whats-App-Image-2026-03-17-at-18-07-04.jpg" },
      { artist: "Franco", work: "Breeze & Essence", cover: "https://i.ibb.co/pBzN2Qcf/Whats-App-Image-2026-03-17-at-18-09-43.jpg" },
      { artist: "Valentín", work: "Night Bride", cover: "https://i.ibb.co/bjFJ1fz8/Whats-App-Image-2026-03-17-at-18-12-14.jpg" },
      { artist: "Newmoon", work: "Temporary", cover: "https://i.ibb.co/G35BJHvY/Whats-App-Image-2026-03-17-at-18-09-15.jpg" },
    ],
    
  },

    {
    id: 12,
    name: "Best Music Video",
    nominees: [
      { artist: "Cano, José, Jorge Kordei", work: "Born Again", cover: "https://preview.redd.it/250125-lisa-doja-cat-raye-born-again-teaser-image-2-6-7pm-v0-vg7jc0ql61fe1.jpeg?width=1080&crop=smart&auto=webp&s=00365b212bdcf49538cca655a141b070d6fc7708" },
      { artist: "Chanel", work: "I Will Always Love You", cover: "https://i.ytimg.com/vi/_1g6qjb-HL4/maxresdefault.jpg" },
      { artist: "Franco", work: "Honey", cover: "https://i.redd.it/happy-56th-birthday-to-mariah-carey-definition-of-a-diva-v0-wxcalioas7re1.jpg?width=500&format=pjpg&auto=webp&s=06ba4f46a995365aad863a616dead39ba72ef657" },
      { artist: "Valentín", work: "Fighter", cover: "https://m.media-amazon.com/images/M/MV5BNWQxMzdiYjktN2Q4NC00ODE4LWFmZjQtOTYyNmYyZjA5ZGZkXkEyXkFqcGc@._V1_.jpg" },
      { artist: "Alexis", work: "Tension", cover: "https://www.kissfm.es/wp-content/uploads/2023/09/KYLIE-TENSION.jpg" },
    ],
  },
  
];

export default function NominationPage() {
  return (
    <div className={styles.root}>
      <div className={styles.bgGlow} />

      {/* NAV */}
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <span className={styles.navDiamond}>◆</span>
          <span className={styles.navText}>GRAMMY</span>
        </div>
        <a href="/" className={styles.navBack}>&#8592; Volver</a>
      </nav>

      {/* HEADER */}
      <header className={styles.hero}>
        <p className={styles.eyebrow}>&#10022;&#xFE0E; &nbsp; Grammy Awards &nbsp; &#10022;&#xFE0E;</p>
        <h1 className={styles.title}>
          Nominaciones<br />
          <span className={styles.titleGold}>2026</span>
        </h1>
        <div className={styles.goldLine} />
        <p className={styles.heroSub}>Conoce todos los nominados de esta edición</p>
      </header>

      {/* CATEGORIES */}
      <main className={styles.main}>
        {categories.map((cat) => (
          <section key={cat.id} className={styles.categorySection}>
            <div className={styles.categoryHeader}>
              <span className={styles.categoryEye}>Categoría</span>
              <h2 className={styles.categoryName}>{cat.name}</h2>
              <div className={styles.categoryLine} />
            </div>

            <div className={styles.nomineesGrid}>
              {cat.nominees.map((nom, i) => (
                <div key={i} className={styles.nomineeCard}>
                  <div className={styles.coverWrapper}>
                    <img
                      src={nom.cover}
                      alt={nom.work}
                      className={styles.cover}
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  </div>
                  <div className={styles.nomineeInfo}>
                    <p className={styles.nomineeWork}>{nom.work}</p>
                    <p className={styles.nomineeArtist}>{nom.artist}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerGoldLine} />
        <p className={styles.footerMain}>◆ &nbsp; Grammy Awards · Recording Academy &nbsp; ◆</p>
        <p className={styles.footerSub}>Todos los derechos reservados</p>
      </footer>
    </div>
  );
}