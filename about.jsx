/* ============================================================
   ABOUT.JSX — „Über mich"
   Personal philosophy, approach, differentiators
   ============================================================ */

const ABOUT_DATA = {
  de: {
    label: "Über mich",
    headline: "STEFAN SCHINDELE",
    intro: "Unabhängiger Brand Advisor in Wien. Nach zwanzig Jahren in Konzernen — A1 Telekom Austria, Saffron Brand Consultants, Hutchison 3G — jetzt selbständig.",
    philosophy: {
      miniLabel: "Philosophie",
      quote: "Schwächen kennen. Stärken erkennen. Dann strategisch darauf aufbauen.",
      text: "Das ist nicht nur mein beruflicher Ansatz. Es ist, wie ich mit Menschen und Projekten umgehe. Nicht nur Fehler finden, sondern die beste Version erkennen und darauf aufbauen.",
    },
    whatSetsApart: {
      miniLabel: "Was mich unterscheidet",
      points: [
        {
          title: "OPERATIVE TIEFE",
          text: "Nicht nur Strategie und Deck — sondern Konzept, erster Entwurf, laufender Prozess.",
        },
        {
          title: "MARKE UND AI ZUSAMMEN",
          text: "Beide Disziplinen nicht isoliert, sondern als integriertes Angebot. AI als Beschleuniger, nicht als Ersatz.",
        },
        {
          title: "PRAGMATISMUS",
          text: "Hemdsärmlig und ergebnisorientiert. Nicht theoretisch, sondern praktisch. Hands-on, wenn es darauf ankommt.",
        },
      ],
    },
    personal: {
      miniLabel: "Persönlich",
      text: "Nachts am produktivsten. Intensive Sprints statt lange Meetings. Direkt und informell. Kein Hype ohne Substanz.",
    },
  },
  en: {
    label: "About",
    headline: "STEFAN SCHINDELE",
    intro: "Independent Brand Advisor based in Vienna. After twenty years in corporations — A1 Telekom Austria, Saffron Brand Consultants, Hutchison 3G — now independent.",
    philosophy: {
      miniLabel: "Philosophy",
      quote: "Know your weaknesses. Recognize your strengths. Then build on them strategically.",
      text: "This isn't just a professional approach. It's how I work with people and projects. Not just finding faults, but recognizing the best version and building on it.",
    },
    whatSetsApart: {
      miniLabel: "What sets me apart",
      points: [
        {
          title: "OPERATIONAL DEPTH",
          text: "Not just strategy and decks — but concept, first draft, ongoing process.",
        },
        {
          title: "BRAND AND AI TOGETHER",
          text: "Both disciplines not in isolation, but as an integrated offering. AI as accelerator, not replacement.",
        },
        {
          title: "PRAGMATISM",
          text: "Hands-on and results-oriented. Not theoretical, but practical. In the trenches when it matters.",
        },
      ],
    },
    personal: {
      miniLabel: "Personal",
      text: "Most productive at night. Intensive sprints over long meetings. Direct and informal. No hype without substance.",
    },
  },
};

const aboutStyles = {
  twoCol: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "var(--space-3xl)",
    alignItems: "start",
  },
  quoteBlock: {
    marginTop: "var(--space-3xl)",
  },
  pointsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "var(--space-xl)",
    marginTop: "var(--space-xl)",
  },
  point: {
    borderTop: "1px solid var(--border)",
    paddingTop: "var(--space-m)",
  },
  personalBlock: {
    marginTop: "var(--space-5xl)",
    maxWidth: "var(--prose-max)",
  },
  wordmarkRow: {
    display: "flex",
    gap: "var(--space-xl)",
    marginTop: "var(--space-3xl)",
    flexWrap: "wrap",
  },
};

function About({ lang }) {
  const t = ABOUT_DATA[lang];
  const wordmarks = ["advisory", "concept", "design", "execution", "web"];

  return (
    <section id="ueber" style={{ background: "var(--surface)" }}>
      <div className="container">
        <SectionLabel>{t.label}</SectionLabel>
        <h2 className="headline headline-l">{t.headline}</h2>

        <p className="body-text" style={{
          fontSize: "var(--text-l)",
          color: "var(--fg-muted)",
          marginTop: "var(--space-l)",
          maxWidth: "var(--prose-max)",
        }}>
          {t.intro}
        </p>

        {/* Philosophy */}
        <div style={aboutStyles.quoteBlock}>
          <MiniLabel>{t.philosophy.miniLabel}</MiniLabel>
          <div className="pull-quote" style={{ marginTop: "var(--space-m)" }}>
            {t.philosophy.quote}
          </div>
          <p className="body-text" style={{
            color: "var(--fg-muted)",
            marginTop: "var(--space-l)",
            maxWidth: "var(--prose-max)",
          }}>
            {t.philosophy.text}
          </p>
        </div>

        {/* What sets apart */}
        <div style={{ marginTop: "var(--space-5xl)" }}>
          <MiniLabel>{t.whatSetsApart.miniLabel}</MiniLabel>
          <div style={aboutStyles.pointsGrid}>
            {t.whatSetsApart.points.map((p, i) => (
              <div key={i} style={aboutStyles.point}>
                <div className="headline" style={{ fontSize: "var(--text-s)", marginBottom: "var(--space-s)" }}>
                  {p.title}
                </div>
                <p className="body-text" style={{ color: "var(--fg-muted)", fontSize: "var(--text-s)" }}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Wordmarks */}
        <div style={aboutStyles.wordmarkRow}>
          {wordmarks.map((w) => (
            <div
              key={w}
              className="wordmark"
              style={{
                WebkitMaskImage: `url(assets/${w}.svg)`,
                maskImage: `url(assets/${w}.svg)`,
                height: "28px",
                minWidth: "100px",
              }}
            />
          ))}
        </div>

        {/* Personal */}
        <div style={aboutStyles.personalBlock}>
          <MiniLabel>{t.personal.miniLabel}</MiniLabel>
          <p className="body-text" style={{ color: "var(--fg-muted)", marginTop: "var(--space-m)" }}>
            {t.personal.text}
          </p>
        </div>
      </div>
    </section>
  );
}
