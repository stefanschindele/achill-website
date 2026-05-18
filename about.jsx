/* ============================================================
   ABOUT.JSX — „Über mich"
   Bio, Stations, Role
   ============================================================ */

const ABOUT_DATA = {
  de: {
    label: "Über mich",
    name: "stefan schindele",
    role: "Brand Advisory mit operativer Tiefe.",
    bio: "Über 20 Jahre Markenstrategie und Brand Systems für internationale Organisationen. Bei A1 Telekom Austria: Verantwortung für Markenstrategie und Markenführung über sieben Märkte — in einer Phase, in der sich der Markenwert von €900 Millionen auf €2,2 Milliarden entwickelte. Bei VIPnet, Drei Österreich und one: Marktlaunches, Repositionierungen, Aufbau skalierbarer Markenstrukturen.",
    stationsLabel: "Stationen",
    stations: [
      { years: "2016 – 2024", role: "Domain Lead Brand Strategy, Brand Management & Marketing Communications", org: "A1 Telekom Austria Group" },
      { years: "2013 – 2016", role: "Director Brand and Marketing Communication", org: "Vipnet (Kroatien)" },
      { years: "2008 – 2013", role: "Client Service Director & Strategic Planner", org: "Saffron Brand Consultants" },
      { years: "2004 – 2008", role: "Head of Communication", org: "Hutchison 3G Austria" },
    ],
  },
  en: {
    label: "About",
    name: "stefan schindele",
    role: "Brand advisory with operational depth.",
    bio: "Over 20 years of brand strategy and brand systems for international organisations. At A1 Telekom Austria: responsibility for brand strategy and brand management across seven markets — in a phase in which the brand value developed from €900 million to €2.2 billion. At VIPnet, Drei Österreich and one: market launches, repositionings, building scalable brand structures.",
    stationsLabel: "Stations",
    stations: [
      { years: "2016 – 2024", role: "Domain Lead Brand Strategy, Brand Management & Marketing Communications", org: "A1 Telekom Austria Group" },
      { years: "2013 – 2016", role: "Director Brand and Marketing Communication", org: "Vipnet (Croatia)" },
      { years: "2008 – 2013", role: "Client Service Director & Strategic Planner", org: "Saffron Brand Consultants" },
      { years: "2004 – 2008", role: "Head of Communication", org: "Hutchison 3G Austria" },
    ],
  },
};

function About({ lang }) {
  const t = ABOUT_DATA[lang];

  return (
    <section id="ueber">
      <div className="container">
        <SectionDivider label={lang === "de" ? "über mich" : "about"} />

        {/* Name in Cordier */}
        <div className="manifest" style={{ fontSize: "clamp(32px, 5vw, 56px)", textAlign: "center", marginBottom: "var(--space-m)" }}>
          {t.name}
        </div>
        <div className="headline headline-s" style={{ textAlign: "center", color: "var(--scarlet)", marginBottom: "var(--space-3xl)", letterSpacing: "var(--tracking-wide)" }}>
          {t.role}
        </div>

        {/* Bio */}
        <div style={{ maxWidth: "var(--prose-max)", margin: "0 auto var(--space-5xl)" }}>
          <p className="body-text" style={{ color: "var(--fg-muted)" }}>{t.bio}</p>
        </div>

        {/* Stations */}
        <SectionDivider label={t.stationsLabel.toLowerCase()} />

        <div style={{ maxWidth: "var(--prose-max)", margin: "0 auto" }}>
          {t.stations.map((s, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr auto",
              gap: "var(--space-l)",
              padding: "var(--space-l) 0",
              borderBottom: "1px solid var(--border)",
              alignItems: "baseline",
            }}>
              <span className="manifest" style={{ fontSize: "var(--text-s)", color: "var(--scarlet)" }}>{s.years}</span>
              <span style={{ fontWeight: 500 }}>{s.role}</span>
              <span className="body-text" style={{ color: "var(--fg-muted)", fontSize: "var(--text-s)", textAlign: "right" }}>{s.org}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
