/* ============================================================
   CASES.JSX — „Arbeiten"
   Three case studies from A1 context
   ============================================================ */

const CASES_DATA = {
  de: {
    label: "Arbeiten",
    title: "drei beispiele.",
    lede: "Aus dem A1-Kontext. Weitere in Vorbereitung — diese drei stehen beispielhaft für die Arbeit.",
    cases: [
      {
        nr: "01",
        tags: "AI-Automatisierung · Prozessdesign · Newsletter",
        title: "Quarterly Results Newsletter",
        subtitle: "Automatisierung eines unternehmensweiten Kommunikationsprozesses.",
        metricBefore: "3 Wochen",
        metricAfter: "3 Stunden",
      },
      {
        nr: "02",
        tags: "AI-Automatisierung · Content-Produktion · Brand Voice",
        title: "Social Media Content Generation",
        subtitle: "Mehr Content. Gleicher Anlass. Automatisiert.",
        metricBefore: "1 Posting",
        metricAfter: "15+",
      },
      {
        nr: "03",
        tags: "AI-Automatisierung · Brand Support · CI-Compliance",
        title: "A1 Brand Chatbot",
        subtitle: "Automatisierter Brand Support mit AI.",
        metricBefore: "−70%",
        metricAfter: "manuelle Anfragen",
      },
    ],
    cta: "Case lesen",
  },
  en: {
    label: "Selected work",
    title: "three examples.",
    lede: "From the A1 context. More in preparation — these three stand representative of the practice.",
    cases: [
      {
        nr: "01",
        tags: "AI automation · Process design · Newsletter",
        title: "Quarterly Results Newsletter",
        subtitle: "Automating a group-wide communications process.",
        metricBefore: "3 weeks",
        metricAfter: "3 hours",
      },
      {
        nr: "02",
        tags: "AI automation · Content production · Brand voice",
        title: "Social Media Content Generation",
        subtitle: "More content. Same occasion. Automated.",
        metricBefore: "1 post",
        metricAfter: "15+",
      },
      {
        nr: "03",
        tags: "AI automation · Brand support · CI compliance",
        title: "A1 Brand Chatbot",
        subtitle: "Automated brand support with AI.",
        metricBefore: "−70%",
        metricAfter: "manual requests",
      },
    ],
    cta: "Read case",
  },
};

function Cases({ lang }) {
  const t = CASES_DATA[lang];

  return (
    <section id="arbeiten">
      <div className="container">
        <SectionDivider label={lang === "de" ? "arbeiten" : "work"} />

        <div className="manifest" style={{ fontSize: "clamp(32px, 5vw, 56px)", textAlign: "center", marginBottom: "var(--space-m)" }}>
          {t.title}
        </div>
        <p className="body-text" style={{ textAlign: "center", color: "var(--fg-muted)", maxWidth: "var(--prose-max)", margin: "0 auto var(--space-5xl)" }}>
          {t.lede}
        </p>

        {/* Case Cards */}
        {t.cases.map((c, i) => (
          <div key={i} style={{
            borderLeft: "2px solid var(--scarlet)",
            paddingLeft: "var(--space-l)",
            marginBottom: "var(--space-3xl)",
            maxWidth: "var(--prose-max)",
            marginLeft: "auto",
            marginRight: "auto",
            background: "var(--surface)",
            padding: "var(--space-xl) var(--space-xl) var(--space-xl) var(--space-xl)",
            borderLeftWidth: "2px",
            borderLeftStyle: "solid",
            borderLeftColor: "var(--scarlet)",
          }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-m)", marginBottom: "var(--space-m)" }}>
              <span className="manifest" style={{ fontSize: "var(--text-xl)", color: "var(--scarlet)" }}>{c.nr}</span>
              <span className="mini-label">{c.tags}</span>
            </div>
            <h3 style={{ fontSize: "var(--text-xl)", color: "var(--scarlet)", fontWeight: 400, marginBottom: "var(--space-s)" }}>
              {c.title}
            </h3>
            <p className="body-text" style={{ color: "var(--fg-muted)", marginBottom: "var(--space-l)" }}>
              {c.subtitle}
            </p>
            {/* Metric */}
            <div className="manifest" style={{ fontSize: "clamp(24px, 4vw, 40px)", marginBottom: "var(--space-l)" }}>
              {c.metricBefore} <span style={{ color: "var(--fg-muted)" }}>→</span> <span className="accent">{c.metricAfter}</span>
            </div>
            <a href="#" className="label underline-grow" style={{ color: "var(--scarlet)", letterSpacing: "var(--tracking-wide)" }}>
              {t.cta} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
