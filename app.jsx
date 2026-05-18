/* ============================================================
   APP.JSX — Main Application Shell
   Topbar · Hero · Contact · Footer · Theme/Language Toggle
   ============================================================ */

const { useState, useEffect, useCallback, createContext, useContext } = React;

const AppContext = createContext();
const useApp = () => useContext(AppContext);

/* — Content — */

const COPY = {
  de: {
    topLabel: "Stefan Schindele · Wien",
    nav: { angebot: "Angebot", arbeiten: "Arbeiten", ueber: "Über mich", kontakt: "Kontakt" },
    comingSoon: "Demnächst · Juli 2026",
    hero: {
      subline: "Brand Advisory mit operativer Tiefe.",
      manifestHeadline: "Strategische Markenarbeit hört nicht beim Konzept auf.",
      manifestBody: [
        "Was die meisten Berater liefern, ist eine Strategie und ein Deck. Was danach kommt, ist nicht ihr Problem. Bei mir schon. Ich denke die Marke und mache das, was daraus folgt: das Konzept, den ersten Entwurf, den laufenden Prozess.",
        "AI nutze ich als Beschleuniger, nicht als Ersatz. Sie nimmt mir die Wiederholung ab, ich kuratiere die Substanz. Zwanzig Jahre Markenarbeit kann sie nicht.",
      ],
      manifestClose: "Substanz, wo sie nötig ist.",
      manifestCloseBold: "Hands on",
      manifestCloseTail: ", wenn es darauf ankommt.",
    },
    contact: {
      label: "Kontakt",
      lede: "Wien-basiert. Verfügbar für Projekte in DACH und CEE.",
      leadPre: "reden wir über Ihre ",
      leadAccent: "Situation",
      leadPost: " — nicht Ihr Briefing.",
      directory: [
        { label: "E-Mail", value: "stefan.schindele@gmail.com", href: "mailto:stefan.schindele@gmail.com" },
        { label: "Telefon", value: "+43 664 1616164", href: "tel:+436641616164" },
        { label: "LinkedIn", value: "linkedin.com / stefan-schindele-wien", href: "https://www.linkedin.com/in/stefan-schindele-wien/" },
        { label: "Standort", value: "Wien — München" },
      ],
      networkLabel: "Netzwerk",
      network: [
        { name: "Frontira", note: "AI & Intelligent Systems", url: "https://frontira.com" },
        { name: "Zündel Branding", note: "Design & Identity", url: "https://zuendel.com" },
      ],
    },
    footer: { left: "© 2026 Stefan Schindele · Wien", center: "Impressum", right: "strategie bis zur form." },
  },
  en: {
    topLabel: "Stefan Schindele · Vienna",
    nav: { angebot: "Offer", arbeiten: "Work", ueber: "About", kontakt: "Contact" },
    comingSoon: "Coming soon · July 2026",
    hero: {
      subline: "Brand advisory with operational depth.",
      manifestHeadline: "Strategic brand work doesn't stop at the concept.",
      manifestBody: [
        "What most advisors deliver is a strategy and a deck. What comes after isn't their problem. With me, it is. I think the brand — and make what follows from it: the concept, the first draft, the ongoing work.",
        "AI I use as accelerator, not replacement. It handles the repetition, I curate the substance. Twenty years of brand work it can't replicate.",
      ],
      manifestClose: "Depth where it's needed.",
      manifestCloseBold: "Hands-on",
      manifestCloseTail: " when it counts.",
    },
    contact: {
      label: "Get in touch",
      lede: "Based in Vienna. Available for projects in DACH and CEE.",
      leadPre: "let's talk about your ",
      leadAccent: "situation",
      leadPost: " — not your brief.",
      directory: [
        { label: "Email", value: "stefan.schindele@gmail.com", href: "mailto:stefan.schindele@gmail.com" },
        { label: "Phone", value: "+43 664 1616164", href: "tel:+436641616164" },
        { label: "LinkedIn", value: "linkedin.com / stefan-schindele-wien", href: "https://www.linkedin.com/in/stefan-schindele-wien/" },
        { label: "Based", value: "Vienna — Munich" },
      ],
      networkLabel: "Network",
      network: [
        { name: "Frontira", note: "AI & Intelligent Systems", url: "https://frontira.com" },
        { name: "Zündel Branding", note: "Design & Identity", url: "https://zuendel.com" },
      ],
    },
    footer: { left: "© 2026 Stefan Schindele · Vienna", center: "Imprint", right: "strategy through to form." },
  },
};

/* — Shared Components — */

function SectionLabel({ children }) {
  return React.createElement("div", { className: "section-label" }, children);
}

function MiniLabel({ children, style }) {
  return React.createElement("span", { className: "mini-label", style: style }, children);
}

function SectionDivider({ label }) {
  return React.createElement("div", {
    style: { display: "flex", alignItems: "center", gap: "var(--space-l)", margin: "var(--space-5xl) auto var(--space-3xl)", maxWidth: "var(--prose-max)" }
  },
    React.createElement("div", { style: { flex: 1, height: "1px", background: "var(--border)" } }),
    React.createElement("span", { className: "manifest", style: { fontSize: "var(--text-l)", color: "var(--fg-muted)" } }, label),
    React.createElement("div", { style: { flex: 1, height: "1px", background: "var(--border)" } })
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
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-m)" }}>
          <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "999px", background: "var(--scarlet)", flexShrink: 0 }} />
          <a href="#" className="label" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ color: "var(--fg)", letterSpacing: "var(--tracking-wide)", textDecoration: "none" }}>
            {t.topLabel}
          </a>
        </div>
        <nav className="topbar-nav">
          <a href="#angebot" className="underline-grow">{t.nav.angebot}</a>
          <a href="#arbeiten" className="underline-grow">{t.nav.arbeiten}</a>
          <a href="#ueber" className="underline-grow">{t.nav.ueber}</a>
          <a href="#kontakt" className="underline-grow">{t.nav.kontakt}</a>
        </nav>
        <div className="topbar-controls">
          <button onClick={onLangToggle} aria-label="Toggle language">{lang === "de" ? "EN" : "DE"}</button>
          <button onClick={onThemeToggle} aria-label="Toggle theme">{theme === "dark" ? "LIGHT" : "DARK"}</button>
        </div>
      </div>
    </header>
  );
}

/* — Coming Soon Pulse — */

function ComingSoonPulse({ lang }) {
  return (
    <div style={{
      position: "fixed", top: "var(--space-3xl)", right: "var(--space-l)", zIndex: 99,
      display: "flex", alignItems: "center", gap: "var(--space-s)",
      padding: "var(--space-xs) var(--space-m)", border: "1px solid var(--border)", background: "var(--surface)",
    }}>
      <span style={{
        display: "inline-block", width: "6px", height: "6px", borderRadius: "999px",
        background: "var(--scarlet)", animation: "pulse 2s ease-in-out infinite",
      }} />
      <span className="mini-label">{COPY[lang].comingSoon}</span>
      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }`}</style>
    </div>
  );
}

/* — Hero — */

function Hero({ lang }) {
  const t = COPY[lang].hero;
  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "var(--space-5xl)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "var(--space-3xl)" }}>
          <img src="assets/logo-medium.png" alt="Stefan Schindele" style={{ maxWidth: "600px", width: "100%", height: "auto" }} />
        </div>
        <div className="headline headline-s" style={{ textAlign: "center", marginBottom: "var(--space-5xl)", letterSpacing: "var(--tracking-wide)" }}>
          {t.subline}
        </div>
        <div style={{ maxWidth: "var(--prose-max)", margin: "0 auto" }}>
          <h2 className="body-text" style={{ fontSize: "var(--text-xl)", fontWeight: 400, lineHeight: "var(--leading-body)", marginBottom: "var(--space-l)" }}>
            {t.manifestHeadline}
          </h2>
          {t.manifestBody.map((p, i) => (
            <p key={i} className="body-text" style={{ color: "var(--fg-muted)", marginBottom: "var(--space-l)" }}>{p}</p>
          ))}
          <p className="body-text" style={{ marginBottom: "var(--space-l)" }}>
            {t.manifestClose} <strong>{t.manifestCloseBold}</strong>{t.manifestCloseTail}
          </p>
        </div>
      </div>
    </section>
  );
}

/* — Contact — */

function Contact({ lang }) {
  const t = COPY[lang].contact;
  return (
    <section id="kontakt">
      <div className="container">
        <SectionDivider label={lang === "de" ? "kontakt" : "contact"} />
        <h2 className="manifest" style={{ fontSize: "clamp(32px, 5vw, 56px)", textAlign: "center", marginBottom: "var(--space-m)" }}>
          {lang === "de" ? "kontakt" : "contact"}
        </h2>
        <p className="body-text" style={{ textAlign: "center", color: "var(--fg-muted)", marginBottom: "var(--space-3xl)" }}>{t.lede}</p>
        <div className="manifest" style={{ fontSize: "clamp(24px, 4vw, 40px)", textAlign: "center", marginBottom: "var(--space-3xl)" }}>
          {t.leadPre}<span className="accent">{t.leadAccent}</span>{t.leadPost}
        </div>
        <div style={{ maxWidth: "var(--prose-max)", margin: "0 auto" }}>
          {t.directory.map((item, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "var(--space-l) 0", borderBottom: "1px solid var(--border)" }}>
              <span className="mini-label">{item.label}</span>
              {item.href ? (
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="underline-grow" style={{ color: "var(--scarlet)" }}>
                  {item.value} →
                </a>
              ) : (
                <span>{item.value}</span>
              )}
            </div>
          ))}
        </div>
        <SectionDivider label={t.networkLabel.toLowerCase()} />
        <div style={{ maxWidth: "var(--prose-max)", margin: "0 auto" }}>
          {t.network.map((n, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "var(--space-l) 0", borderBottom: "1px solid var(--border)" }}>
              <span style={{ fontWeight: 500 }}>{n.name}</span>
              <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-l)" }}>
                <span className="body-text" style={{ color: "var(--fg-muted)", fontSize: "var(--text-s)" }}>{n.note}</span>
                <a href={n.url} target="_blank" rel="noopener noreferrer" className="underline-grow" style={{ color: "var(--scarlet)" }}>↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* — Closing Image — */

function ClosingImage() {
  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "var(--space-5xl) auto", paddingLeft: "var(--gutter)", paddingRight: "var(--gutter)" }}>
      <img src="assets/closing-image.jpeg" alt="" style={{ width: "100%", height: "auto", display: "block" }} />
    </div>
  );
}

/* — Footer — */

function Footer({ lang }) {
  const t = COPY[lang].footer;
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-text" style={{ textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", fontSize: "var(--text-xs)" }}>{t.left}</div>
        <a href="#" className="footer-text underline-grow" style={{ textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", fontSize: "var(--text-xs)" }}>{t.center}</a>
        <span className="manifest" style={{ fontSize: "var(--text-s)", color: "var(--fg-muted)" }}>{t.right}</span>
      </div>
    </footer>
  );
}

/* — App Shell — */

function App() {
  const [lang, setLang] = useState("de");
  const [theme, setTheme] = useState("dark");
  const toggleLang = useCallback(() => setLang((l) => (l === "de" ? "en" : "de")), []);
  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      return next;
    });
  }, []);

  return (
    <AppContext.Provider value={{ lang, theme }}>
      <Topbar lang={lang} theme={theme} onLangToggle={toggleLang} onThemeToggle={toggleTheme} />
      <ComingSoonPulse lang={lang} />
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
