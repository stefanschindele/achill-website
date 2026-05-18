/* ============================================================
   APP.JSX — Main Application Shell
   Topbar · Hero · Contact · Footer · Theme/Language Toggle
   ============================================================ */

const { useState, useEffect, useCallback, createContext, useContext } = React;

/* — Context — */

const AppContext = createContext();

const useApp = () => useContext(AppContext);

/* — Content — */

const COPY = {
  de: {
    nav: {
      angebot: "Angebot",
      arbeiten: "Arbeiten",
      ueber: "Über mich",
      kontakt: "Kontakt",
    },
    hero: {
      manifest: "schwächen kennen. stärken erkennen.",
      tagline: "Strategie bis zur Form.",
      intro: "Unabhängiger Brand Advisor in Wien. Zwanzig Jahre Konzernerfahrung. Strategische Markenarbeit und AI-Automatisierung — von der Analyse bis zur operativen Umsetzung.",
    },
    contact: {
      label: "Kontakt",
      headline: "SPRECHEN WIR.",
      text: "Kein Formular. Kein Funnel. Ein Gespräch.",
      email: "stefan@stefan-schindele.com",
      linkedin: "LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/stefanschindele/",
      location: "Wien, Österreich",
    },
    footer: {
      copyright: "Stefan Schindele",
      tagline: "Strategie bis zur Form.",
      imprint: "Impressum",
      privacy: "Datenschutz",
    },
    themeToggle: { dark: "Dunkel", light: "Hell" },
  },
  en: {
    nav: {
      angebot: "Services",
      arbeiten: "Work",
      ueber: "About",
      kontakt: "Contact",
    },
    hero: {
      manifest: "know your weaknesses. recognize your strengths.",
      tagline: "Strategy through to form.",
      intro: "Independent Brand Advisor based in Vienna. Twenty years of corporate experience. Strategic brand work and AI automation — from analysis to operational execution.",
    },
    contact: {
      label: "Contact",
      headline: "LET'S TALK.",
      text: "No form. No funnel. A conversation.",
      email: "stefan@stefan-schindele.com",
      linkedin: "LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/stefanschindele/",
      location: "Vienna, Austria",
    },
    footer: {
      copyright: "Stefan Schindele",
      tagline: "Strategy through to form.",
      imprint: "Imprint",
      privacy: "Privacy",
    },
    themeToggle: { dark: "Dark", light: "Light" },
  },
};

/* — Shared Components — */

function SectionLabel({ children }) {
  return <div className="section-label">{children}</div>;
}

function MiniLabel({ children, style }) {
  return <span className="mini-label" style={style}>{children}</span>;
}

function Pillar({ title, children, style }) {
  return (
    <div className="card" style={style}>
      <div className="headline headline-s" style={{ marginBottom: "var(--space-m)" }}>
        {title}
      </div>
      <div className="body-text" style={{ color: "var(--fg-muted)" }}>
        {children}
      </div>
    </div>
  );
}

/* — Topbar — */

function Topbar({ lang, theme, onLangToggle, onThemeToggle }) {
  const t = COPY[lang];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="topbar" style={{ borderBottomColor: scrolled ? "var(--border)" : "transparent" }}>
      <div className="topbar-inner">
        <a href="#" className="topbar-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <img src="assets/logo-medium.png" alt="Stefan Schindele" />
        </a>

        <nav className="topbar-nav">
          <a href="#angebot" className="underline-grow">{t.nav.angebot}</a>
          <a href="#arbeiten" className="underline-grow">{t.nav.arbeiten}</a>
          <a href="#ueber" className="underline-grow">{t.nav.ueber}</a>
          <a href="#kontakt" className="underline-grow">{t.nav.kontakt}</a>
        </nav>

        <div className="topbar-controls">
          <button onClick={onLangToggle} aria-label="Toggle language">
            {lang === "de" ? "EN" : "DE"}
          </button>
          <button onClick={onThemeToggle} aria-label="Toggle theme">
            {theme === "dark" ? t.themeToggle.light : t.themeToggle.dark}
          </button>
        </div>
      </div>
    </header>
  );
}

/* — Hero — */

function Hero({ lang }) {
  const t = COPY[lang].hero;

  const heroStyles = {
    section: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingTop: "var(--space-5xl)",
    },
    manifest: {
      fontSize: "clamp(32px, 6vw, 72px)",
      marginBottom: "var(--space-3xl)",
      maxWidth: "900px",
    },
    tagline: {
      marginBottom: "var(--space-xl)",
    },
    intro: {
      maxWidth: "var(--prose-max)",
      color: "var(--fg-muted)",
      fontSize: "var(--text-l)",
      lineHeight: "var(--leading-body)",
    },
  };

  return (
    <section style={heroStyles.section}>
      <div className="container">
        <div className="manifest" style={heroStyles.manifest}>
          {t.manifest}
        </div>
        <h1 className="headline headline-l" style={heroStyles.tagline}>
          {t.tagline}
        </h1>
        <p style={heroStyles.intro}>{t.intro}</p>
      </div>
    </section>
  );
}

/* — Contact — */

function Contact({ lang }) {
  const t = COPY[lang].contact;

  const contactStyles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-3xl)",
      alignItems: "start",
    },
    emailLink: {
      fontSize: "var(--text-xl)",
      color: "var(--scarlet)",
      fontWeight: 500,
    },
    detail: {
      marginTop: "var(--space-l)",
      color: "var(--fg-muted)",
    },
  };

  return (
    <section id="kontakt">
      <div className="container">
        <SectionLabel>{t.label}</SectionLabel>
        <div style={contactStyles.grid}>
          <div>
            <h2 className="headline headline-l">{t.headline}</h2>
            <p className="body-text" style={{ marginTop: "var(--space-m)", color: "var(--fg-muted)" }}>
              {t.text}
            </p>
          </div>
          <div>
            <a href={`mailto:${t.email}`} className="underline-grow" style={contactStyles.emailLink}>
              {t.email}
            </a>
            <div style={contactStyles.detail}>
              <a href={t.linkedinUrl} target="_blank" rel="noopener noreferrer" className="underline-grow">
                {t.linkedin} →
              </a>
            </div>
            <div style={contactStyles.detail}>
              {t.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* — Closing Image — */

function ClosingImage() {
  return (
    <div style={{
      width: "100%",
      height: "480px",
      overflow: "hidden",
      position: "relative",
    }}>
      <img
        src="assets/closing-image.jpeg"
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 30%",
          display: "block",
        }}
      />
    </div>
  );
}

/* — Footer — */

function Footer({ lang }) {
  const t = COPY[lang].footer;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-text">
            © {year} {t.copyright}
          </div>
          <div className="footer-text" style={{ marginTop: "var(--space-xs)" }}>
            {t.tagline}
          </div>
        </div>
        <div style={{ display: "flex", gap: "var(--space-l)" }}>
          <a href="#" className="footer-text underline-grow">{t.imprint}</a>
          <a href="#" className="footer-text underline-grow">{t.privacy}</a>
        </div>
      </div>
    </footer>
  );
}

/* — App Shell — */

function App() {
  const [lang, setLang] = useState("de");
  const [theme, setTheme] = useState("dark");

  const toggleLang = useCallback(() => {
    setLang((l) => (l === "de" ? "en" : "de"));
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      return next;
    });
  }, []);

  return (
    <AppContext.Provider value={{ lang, theme }}>
      <Topbar
        lang={lang}
        theme={theme}
        onLangToggle={toggleLang}
        onThemeToggle={toggleTheme}
      />
      <main>
        <Hero lang={lang} />
        {typeof Offer !== "undefined" && <Offer lang={lang} />}
        {typeof Cases !== "undefined" && <Cases lang={lang} />}
        {typeof About !== "undefined" && <About lang={lang} />}
        <Contact lang={lang} />
        <ClosingImage />
      </main>
      <Footer lang={lang} />
    </AppContext.Provider>
  );
}

/* — Mount — */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
