/* ============================================================
   OFFER.JSX — „Mein Angebot"
   Three pillars + Wie ich arbeite + Vier Schritte + Formate
   ============================================================ */

const OFFER_DATA = {
  de: {
    label: "Mein Angebot",
    title: "Eine integrierte Arbeitsweise.",
    lede: "Von der strategischen Klärung bis zur operativen Umsetzung. AI als Beschleuniger in jedem Schritt.",
    pillars: [
      {
        kind: "Kernangebot",
        wordmark: "strategy",
        headline: "Brand Advisory mit operativer Tiefe",
        body: [
          "Strategische Markenarbeit, die nicht beim Konzept aufhört. Ich denke die Marke — und mache das, was daraus folgt. Von der Analyse über das Konzept bis zum konkreten Ergebnis.",
          "Markenstrategien mit inhaltlicher Tiefe — nicht als PowerPoint-Übung, sondern als Grundlage für konsistentes Handeln. Und dann das Handeln selbst.",
          "Mich interessiert, was eine Marke ausmacht, woraus sie Kraft zieht, was sie tragfähig macht. Diese Substanz arbeite ich heraus — und entwickle sie weiter.",
        ],
        partnerPre: "Für design-intensive Projekte mit ",
        partnerName: "Zündel Branding",
        partnerPost: ", einem der profiliertesten Brand Designer im deutschsprachigen Raum.",
        partnerUrl: "https://zuendel.com",
      },
      {
        kind: "Durchziehender Faden",
        wordmark: "ai",
        headline: "AI als Werkzeug, nicht als Antwort",
        body: [
          "AI ist kein eigenes Angebot. Sie ist Werkzeug in allem, was ich tue. In der Analyse beschleunigt sie das Lesen, in der Konzeption liefert sie Optionen, in der Umsetzung übernimmt sie Wiederholung. An jeder Stelle kuratiere ich das Ergebnis.",
          "Was AI nicht kann: Ironie. Unerwartet konzeptionelle Gedanken. Das Urteil, was für Ihren Kontext richtig ist. Hier macht Domain-Wissen den Unterschied — und davon habe ich zwanzig Jahre.",
        ],
        partnerPre: "Für komplexe AI-Systeme mit ",
        partnerName: "Frontira",
        partnerPost: ", einem der führenden Teams für Intelligent Systems in Europa.",
        partnerUrl: "https://frontira.com",
      },
      {
        kind: "Zusätzlich",
        wordmark: "execution",
        headline: "Workflow & Organisation",
        body: [
          "Wenn Ihre Kommunikationsabteilung nicht nur besser kommunizieren, sondern auch effizienter arbeiten soll. Prozessanalyse, Team-Struktur, Workflow-Redesign.",
          "Oft eine Folge der Hauptarbeit: Wer Marke neu denkt, denkt auch Strukturen neu.",
        ],
      },
    ],
    howIWork: {
      label: "Wie ich arbeite",
      headline: "Mein Ansatz ist analytisch, nicht dogmatisch.",
      body: [
        "Mich interessiert weniger, was nicht funktioniert, als das, worauf sich aufbauen lässt. Aus der vorhandenen Substanz entsteht die Richtung.",
        "Fertige Lösungen, die nur noch umgesetzt werden müssen, liefere ich nicht. Stattdessen entwickle ich Szenarien, arbeite Optionen aus, wäge mit Ihnen ab. Dann entscheiden wir gemeinsam, welcher Weg zu Ihrer Situation passt.",
      ],
      pullPre: "Nicht ",
      pullEm: "die Lösung",
      pullMid: " — sondern ",
      pullBold: "Ihre Optionen",
      pullPost: ". Nicht linear, sondern dialogisch.",
    },
    steps: {
      label: "Vier Schritte",
      items: [
        { nr: "01", title: "Verstehen", text: "Analyse, Markt, Zielgruppen. Szenarien entwickeln. Erkennen, was die Marke trägt — und woran sich weiterbauen lässt." },
        { nr: "02", title: "Denken", text: "Optionen ausarbeiten, dialogisch abwägen. Strategie, Differenzierung, Konzeption." },
        { nr: "03", title: "Machen", text: "Umsetzung mit handwerklicher Qualität. Von der ersten Konzeptseite bis zum konkreten Ergebnis." },
        { nr: "04", title: "Lernen", text: "Evaluation, Optimierung, nächste Entwicklungsschritte. Was funktioniert? Was lassen wir? Was kommt als Nächstes?" },
      ],
    },
    formats: {
      label: "Formate",
      items: [
        { kind: "Interim Management", span: "3–12 Monate", body: "Operative Verantwortung, während Sie die richtige Lösung aufbauen." },
        { kind: "Strategieprojekte", span: "6–16 Wochen", body: "Klare Aufgabe, definiertes Ergebnis, volle Fokussierung." },
        { kind: "Strategic Advisory", span: "Laufend, outcome-basiert", body: "Strategischer Sparringspartner auf Zeit." },
        { kind: "Freelance", span: "Flexibel", body: "Pitches, Kampagnen, Design-Projekte." },
      ],
    },
  },
  en: {
    label: "What I offer",
    title: "An integrated way of working.",
    lede: "From strategic clarity to operational execution. AI as accelerator at every step.",
    pillars: [
      {
        kind: "Core offering",
        wordmark: "strategy",
        headline: "Brand advisory with operational depth",
        body: [
          "Strategic brand work that doesn't stop at the concept. I think the brand — and make what follows. From analysis through concept to concrete result.",
          "Brand strategies with substance — not as a PowerPoint exercise, but as a foundation for consistent action. And then the action itself.",
          "I'm interested in what makes a brand, what gives it power, what makes it durable. I work this substance out — and develop it further.",
        ],
        partnerPre: "For design-intensive projects with ",
        partnerName: "Zündel Branding",
        partnerPost: ", one of the most distinctive brand designers in the German-speaking world.",
        partnerUrl: "https://zuendel.com",
      },
      {
        kind: "Connecting thread",
        wordmark: "ai",
        headline: "AI as tool, not as answer",
        body: [
          "AI is not its own offering. It is a tool in everything I do. In analysis it accelerates reading, in concepting it offers options, in execution it takes over repetition. At every step I curate the result.",
          "What AI can't do: irony. Unexpectedly conceptual thinking. The judgement of what is right for your context. Here domain knowledge makes the difference — and I have twenty years of it.",
        ],
        partnerPre: "For complex AI systems with ",
        partnerName: "Frontira",
        partnerPost: ", one of Europe's leading teams for intelligent systems.",
        partnerUrl: "https://frontira.com",
      },
      {
        kind: "In addition",
        wordmark: "execution",
        headline: "Workflow & organisation",
        body: [
          "When your communications department needs to work better, not just communicate better. Process analysis, team structure, workflow redesign.",
          "Often a consequence of the main work: those who rethink the brand rethink the structures too.",
        ],
      },
    ],
    howIWork: {
      label: "How I work",
      headline: "My approach is analytical, not dogmatic.",
      body: [
        "I'm less interested in what doesn't work than in what can be built on. The direction emerges from the existing substance.",
        "I don't deliver finished solutions to be implemented. Instead I develop scenarios, work out options, weigh them with you. Then we decide together which way fits your situation.",
      ],
      pullPre: "Not ",
      pullEm: "the solution",
      pullMid: " — but ",
      pullBold: "your options",
      pullPost: ". Not linear, but dialogic.",
    },
    steps: {
      label: "Four steps",
      items: [
        { nr: "01", title: "Understand", text: "Analysis, market, audiences. Develop scenarios. Recognise what carries the brand — and what can be built further." },
        { nr: "02", title: "Think", text: "Work out options, weigh in dialogue. Strategy, differentiation, concept." },
        { nr: "03", title: "Make", text: "Execution with craft quality. From the first concept page to the concrete result." },
        { nr: "04", title: "Learn", text: "Evaluation, optimisation, next development steps. What works? What do we leave? What comes next?" },
      ],
    },
    formats: {
      label: "Formats",
      items: [
        { kind: "Interim management", span: "3–12 months", body: "Operative responsibility while you build the right long-term solution." },
        { kind: "Strategy projects", span: "6–16 weeks", body: "Clear task, defined outcome, full focus." },
        { kind: "Strategic advisory", span: "Ongoing, outcome-led", body: "Strategic sparring partner on retainer." },
        { kind: "Freelance", span: "Flexible", body: "Pitches, campaigns, design projects." },
      ],
    },
  },
};

function Offer({ lang }) {
  const t = OFFER_DATA[lang];

  return (
    <section id="angebot">
      <div className="container">
        <SectionDivider label={lang === "de" ? "mein angebot" : "what I offer"} />

        {/* Header */}
        <div className="manifest" style={{ fontSize: "clamp(32px, 5vw, 56px)", textAlign: "center", marginBottom: "var(--space-m)" }}>
          {lang === "de" ? "eine integrierte arbeitsweise." : "an integrated way of working."}
        </div>
        <p className="body-text" style={{ textAlign: "center", color: "var(--fg-muted)", marginBottom: "var(--space-5xl)", maxWidth: "var(--prose-max)", margin: "0 auto var(--space-5xl)" }}>
          {t.lede}
        </p>

        {/* Pillars */}
        {t.pillars.map((p, i) => (
          <div key={i} style={{ marginBottom: "var(--space-5xl)" }}>
            {/* Wordmark */}
            <div style={{ textAlign: "center", marginBottom: "var(--space-3xl)" }}>
              <div className="wordmark" style={{
                WebkitMaskImage: "url(assets/" + p.wordmark + ".svg)",
                maskImage: "url(assets/" + p.wordmark + ".svg)",
                height: "60px", minWidth: "200px", margin: "0 auto",
              }} />
            </div>

            <div style={{ maxWidth: "var(--prose-max)", margin: "0 auto" }}>
              <MiniLabel>{p.kind}</MiniLabel>
              <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 400, marginTop: "var(--space-s)", marginBottom: "var(--space-l)" }}>
                {p.headline}
              </h3>
              {p.body.map((para, j) => (
                <p key={j} className="body-text" style={{ color: "var(--fg-muted)", marginBottom: "var(--space-m)" }}>{para}</p>
              ))}
              {p.partnerName && (
                <p className="body-text" style={{ color: "var(--fg-muted)", fontSize: "var(--text-s)", marginTop: "var(--space-l)" }}>
                  {p.partnerPre}<a href={p.partnerUrl} target="_blank" rel="noopener noreferrer" className="underline-grow" style={{ color: "var(--fg)" }}>{p.partnerName}</a>{p.partnerPost}
                </p>
              )}
            </div>

            {i < t.pillars.length - 1 && <hr className="hairline" style={{ maxWidth: "var(--prose-max)", margin: "var(--space-3xl) auto" }} />}
          </div>
        ))}

        {/* Wie ich arbeite */}
        <SectionDivider label={t.howIWork.label.toLowerCase()} />

        <div style={{ maxWidth: "var(--prose-max)", margin: "0 auto" }}>
          <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 700, marginBottom: "var(--space-l)" }}>
            {t.howIWork.headline}
          </h3>
          {t.howIWork.body.map((para, i) => (
            <p key={i} className="body-text" style={{ color: "var(--fg-muted)", marginBottom: "var(--space-m)" }}>{para}</p>
          ))}
          <p style={{ fontSize: "var(--text-xl)", marginTop: "var(--space-l)", lineHeight: "var(--leading-tight)" }}>
            {t.howIWork.pullPre}<em style={{ color: "var(--fg-muted)" }}>{t.howIWork.pullEm}</em>{t.howIWork.pullMid}<strong className="accent">{t.howIWork.pullBold}</strong>{t.howIWork.pullPost}
          </p>
        </div>

        {/* Vier Schritte */}
        <SectionDivider label={t.steps.label.toLowerCase()} />

        <div style={{ maxWidth: "var(--prose-max)", margin: "0 auto" }}>
          {t.steps.items.map((s, i) => (
            <div key={i} style={{ display: "flex", gap: "var(--space-l)", marginBottom: "var(--space-3xl)" }}>
              <span className="manifest" style={{ fontSize: "var(--text-2xl)", color: "var(--scarlet)", flexShrink: 0, width: "48px" }}>{s.nr}</span>
              <div>
                <h4 style={{ fontWeight: 500, marginBottom: "var(--space-xs)" }}>{s.title}</h4>
                <p className="body-text" style={{ color: "var(--fg-muted)" }}>{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Formate */}
        <SectionDivider label={t.formats.label.toLowerCase()} />

        <div style={{ maxWidth: "var(--prose-max)", margin: "0 auto" }}>
          {t.formats.items.map((f, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-xl)", marginBottom: "var(--space-3xl)", alignItems: "flex-start" }}>
              <div style={{ flex: "0 0 40%" }}>
                <h4 style={{ fontWeight: 500 }}>{f.kind}</h4>
                <span className="manifest" style={{ fontSize: "var(--text-s)", color: "var(--scarlet)" }}>{f.span}</span>
              </div>
              <p className="body-text" style={{ color: "var(--fg-muted)", flex: 1 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
