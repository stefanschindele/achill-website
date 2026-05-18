/* ============================================================
   CASES.JSX — „Arbeiten"
   Track record + case highlights
   ============================================================ */

const CASES_DATA = {
  de: {
    label: "Arbeiten",
    headline: "ERFAHRUNG",
    track: {
      text: "Zwanzig Jahre. Sieben Märkte. Ein Ansatz.",
      stats: [
        { value: "€ 900 Mio → 2,2 Mrd", label: "Markenwert-Steigerung" },
        { value: "7", label: "Märkte" },
        { value: "20", label: "Jahre Erfahrung" },
      ],
    },
    stations: [
      {
        name: "A1 Telekom Austria Group",
        role: "Group Brand Management",
        scope: "Markenarchitektur, Brand Governance, AI Brand Support über sieben Märkte",
      },
      {
        name: "Saffron Brand Consultants",
        role: "Brand Strategy",
        scope: "Internationale Markenberatung — Strategie, Identität, Implementierung",
      },
      {
        name: "Hutchison 3G / Drei",
        role: "Brand & Communications",
        scope: "Markenaufbau und Kommunikation für Mobilfunk-Launch in Österreich",
      },
      {
        name: "Vipnet (A1 Kroatien)",
        role: "Brand Management",
        scope: "Rebranding und Markenintegration im kroatischen Markt",
      },
    ],
    caseHighlight: {
      miniLabel: "Fallbeispiel",
      title: "AI BRAND SUPPORT",
      client: "A1 Telekom Austria Group",
      text: "Entwicklung eines AI-gestützten Brand Chatbots, der Brand-Design-Fragen automatisch beantwortet, hochgeladene Dokumente auf CI-Konformität prüft und benötigte Assets direkt bereitstellt. Reduktion manueller Brand-Anfragen, sofortige Verfügbarkeit rund um die Uhr.",
    },
  },
  en: {
    label: "Work",
    headline: "EXPERIENCE",
    track: {
      text: "Twenty years. Seven markets. One approach.",
      stats: [
        { value: "€ 900 M → 2.2 B", label: "Brand value growth" },
        { value: "7", label: "Markets" },
        { value: "20", label: "Years of experience" },
      ],
    },
    stations: [
      {
        name: "A1 Telekom Austria Group",
        role: "Group Brand Management",
        scope: "Brand architecture, governance, AI brand support across seven markets",
      },
      {
        name: "Saffron Brand Consultants",
        role: "Brand Strategy",
        scope: "International brand consultancy — strategy, identity, implementation",
      },
      {
        name: "Hutchison 3G / Drei",
        role: "Brand & Communications",
        scope: "Brand building and communications for mobile launch in Austria",
      },
      {
        name: "Vipnet (A1 Croatia)",
        role: "Brand Management",
        scope: "Rebranding and brand integration in the Croatian market",
      },
    ],
    caseHighlight: {
      miniLabel: "Case",
      title: "AI BRAND SUPPORT",
      client: "A1 Telekom Austria Group",
      text: "Development of an AI-powered brand chatbot that automatically answers brand design questions, checks uploaded documents for CI compliance, and provides required assets directly. Reduction of manual brand queries, instant 24/7 availability.",
    },
  },
};

const caseStyles = {
  statsRow: {
    display: "flex",
    gap: "var(--space-3xl)",
    marginTop: "var(--space-3xl)",
    marginBottom: "var(--space-3xl)",
  },
  stat: {
    flex: 1,
    borderTop: "2px solid var(--scarlet)",
    paddingTop: "var(--space-m)",
  },
  statValue: {
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-2xl)",
    fontWeight: 400,
    letterSpacing: "var(--tracking-tight)",
    lineHeight: "var(--leading-tight)",
  },
  statLabel: {
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-xs)",
    color: "var(--fg-muted)",
    textTransform: "uppercase",
    letterSpacing: "var(--tracking-wide)",
    marginTop: "var(--space-xs)",
  },
  stationsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "var(--space-xl)",
    marginTop: "var(--space-xl)",
  },
  station: {
    borderTop: "1px solid var(--border)",
    paddingTop: "var(--space-m)",
  },
  caseBlock: {
    marginTop: "var(--space-5xl)",
    borderLeft: "2px solid var(--scarlet)",
    paddingLeft: "var(--space-l)",
    maxWidth: "var(--prose-max)",
  },
};

function Cases({ lang }) {
  const t = CASES_DATA[lang];

  return (
    <section id="arbeiten">
      <div className="container">
        <SectionLabel>{t.label}</SectionLabel>
        <h2 className="headline headline-l">{t.headline}</h2>

        {/* Lead */}
        <p className="body-text" style={{
          fontSize: "var(--text-l)",
          color: "var(--fg-muted)",
          marginTop: "var(--space-l)",
          maxWidth: "var(--prose-max)",
        }}>
          {t.track.text}
        </p>

        {/* Stats */}
        <div style={caseStyles.statsRow}>
          {t.track.stats.map((s, i) => (
            <div key={i} style={caseStyles.stat}>
              <div style={caseStyles.statValue}>{s.value}</div>
              <div style={caseStyles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Stations */}
        <MiniLabel>Stationen</MiniLabel>
        <div style={caseStyles.stationsGrid}>
          {t.stations.map((s, i) => (
            <div key={i} style={caseStyles.station}>
              <div className="headline" style={{ fontSize: "var(--text-s)", marginBottom: "var(--space-xs)" }}>
                {s.name}
              </div>
              <div style={{ color: "var(--scarlet)", fontSize: "var(--text-s)", marginBottom: "var(--space-xs)" }}>
                {s.role}
              </div>
              <p className="body-text" style={{ color: "var(--fg-muted)", fontSize: "var(--text-s)" }}>
                {s.scope}
              </p>
            </div>
          ))}
        </div>

        {/* Case Highlight */}
        <div style={caseStyles.caseBlock}>
          <MiniLabel>{t.caseHighlight.miniLabel}</MiniLabel>
          <h3 className="headline headline-s" style={{ marginTop: "var(--space-m)" }}>
            {t.caseHighlight.title}
          </h3>
          <div style={{ color: "var(--scarlet)", fontSize: "var(--text-s)", marginTop: "var(--space-xs)" }}>
            {t.caseHighlight.client}
          </div>
          <p className="body-text" style={{ color: "var(--fg-muted)", marginTop: "var(--space-m)" }}>
            {t.caseHighlight.text}
          </p>
        </div>
      </div>
    </section>
  );
}
