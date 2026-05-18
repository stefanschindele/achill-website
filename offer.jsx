/* ============================================================
   OFFER.JSX — „Mein Angebot"
   Two pillars: Brand Strategy + AI Automation
   ============================================================ */

const OFFER_DATA = {
  de: {
    label: "Angebot",
    headline: "WAS ICH MACHE",
    pillars: [
      {
        wordmark: "strategy",
        title: "STRATEGISCHE MARKENENTWICKLUNG",
        text: "Von der Analyse über das Konzept bis zur operativen Umsetzung. Nicht als Deck-Übung — sondern als Grundlage für konsistentes Handeln. Fundiert, pragmatisch, ergebnisorientiert.",
      },
      {
        wordmark: "ai",
        title: "AI-AUTOMATISIERUNG",
        text: "Kommunikationsabteilungen und Agenturen dabei unterstützen, ihre Prozesse durch AI zu automatisieren. Brand Support, Content-Produktion, Freigabe-Prozesse — identifizieren, wo AI wirklich hilft, und die Implementierung begleiten.",
      },
    ],
    process: {
      label: "Arbeitsweise",
      steps: [
        { marker: "01", title: "VERSTEHEN", text: "Analyse, Markt, Zielgruppen. Schwächen ehrlich benennen." },
        { marker: "02", title: "DENKEN", text: "Strategie, Konzeption, Differenzierung. Szenarien statt einer einzigen Antwort." },
        { marker: "03", title: "MACHEN", text: "Umsetzung mit handwerklicher Qualität. Nicht delegieren — mitarbeiten." },
        { marker: "04", title: "LERNEN", text: "Evaluation, Optimierung, neue Schwächen identifizieren." },
      ],
    },
    formats: {
      label: "Formate",
      items: [
        { title: "INTERIM MANAGEMENT", duration: "3–12 Monate" },
        { title: "STRATEGIEPROJEKTE", duration: "6–16 Wochen" },
        { title: "STRATEGIC ADVISORY", duration: "Laufend, outcome-basiert" },
      ],
    },
  },
  en: {
    label: "Services",
    headline: "WHAT I DO",
    pillars: [
      {
        wordmark: "strategy",
        title: "STRATEGIC BRAND DEVELOPMENT",
        text: "From analysis through concept to operational execution. Not as a deck exercise — but as a foundation for consistent action. Grounded, pragmatic, results-oriented.",
      },
      {
        wordmark: "ai",
        title: "AI AUTOMATION",
        text: "Helping communications teams and agencies automate their processes through AI. Brand support, content production, approval workflows — identifying where AI actually helps, and guiding the implementation.",
      },
    ],
    process: {
      label: "Approach",
      steps: [
        { marker: "01", title: "UNDERSTAND", text: "Analysis, market, audiences. Naming weaknesses honestly." },
        { marker: "02", title: "THINK", text: "Strategy, conception, differentiation. Scenarios instead of a single answer." },
        { marker: "03", title: "MAKE", text: "Execution with craftsmanship. Not delegating — contributing." },
        { marker: "04", title: "LEARN", text: "Evaluation, optimisation, identifying new weaknesses." },
      ],
    },
    formats: {
      label: "Formats",
      items: [
        { title: "INTERIM MANAGEMENT", duration: "3–12 months" },
        { title: "STRATEGY PROJECTS", duration: "6–16 weeks" },
        { title: "STRATEGIC ADVISORY", duration: "Ongoing, outcome-based" },
      ],
    },
  },
};

const offerStyles = {
  pillarsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "var(--space-3xl)",
    marginTop: "var(--space-3xl)",
  },
  pillarWordmark: {
    height: "32px",
    marginBottom: "var(--space-l)",
  },
  processGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "var(--space-xl)",
    marginTop: "var(--space-xl)",
  },
  processStep: {
    display: "flex",
    gap: "var(--space-m)",
    alignItems: "flex-start",
  },
  processMarker: {
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-xs)",
    fontWeight: 500,
    color: "var(--scarlet)",
    letterSpacing: "var(--tracking-wide)",
    flexShrink: 0,
    paddingTop: "2px",
  },
  formatsRow: {
    display: "flex",
    gap: "var(--space-3xl)",
    marginTop: "var(--space-xl)",
  },
  formatItem: {
    flex: 1,
    borderTop: "1px solid var(--border)",
    paddingTop: "var(--space-m)",
  },
};

function Offer({ lang }) {
  const t = OFFER_DATA[lang];

  return (
    <section id="angebot" style={{ background: "var(--surface)" }}>
      <div className="container">
        <SectionLabel>{t.label}</SectionLabel>
        <h2 className="headline headline-l">{t.headline}</h2>

        {/* Two Pillars */}
        <div style={offerStyles.pillarsGrid}>
          {t.pillars.map((p, i) => (
            <div key={i} className="card">
              <div
                className="wordmark"
                style={{
                  ...offerStyles.pillarWordmark,
                  WebkitMaskImage: `url(assets/${p.wordmark}.svg)`,
                  maskImage: `url(assets/${p.wordmark}.svg)`,
                }}
              />
              <h3 className="headline headline-s" style={{ marginBottom: "var(--space-m)" }}>
                {p.title}
              </h3>
              <p className="body-text" style={{ color: "var(--fg-muted)" }}>
                {p.text}
              </p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div style={{ marginTop: "var(--space-5xl)" }}>
          <MiniLabel>{t.process.label}</MiniLabel>
          <div style={offerStyles.processGrid}>
            {t.process.steps.map((s, i) => (
              <div key={i} style={offerStyles.processStep}>
                <span style={offerStyles.processMarker}>{s.marker}</span>
                <div>
                  <div className="headline" style={{ fontSize: "var(--text-s)", marginBottom: "var(--space-xs)" }}>
                    {s.title}
                  </div>
                  <p className="body-text" style={{ color: "var(--fg-muted)", fontSize: "var(--text-s)" }}>
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formats */}
        <div style={{ marginTop: "var(--space-5xl)" }}>
          <MiniLabel>{t.formats.label}</MiniLabel>
          <div style={offerStyles.formatsRow}>
            {t.formats.items.map((f, i) => (
              <div key={i} style={offerStyles.formatItem}>
                <div className="headline" style={{ fontSize: "var(--text-s)", marginBottom: "var(--space-xs)" }}>
                  {f.title}
                </div>
                <span className="body-text" style={{ color: "var(--fg-muted)", fontSize: "var(--text-s)" }}>
                  {f.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
