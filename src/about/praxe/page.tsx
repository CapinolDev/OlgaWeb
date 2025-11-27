type TimelineItem = {
  period: string;
  place?: string;
  role?: string;
  description: string;
};

const timeline: TimelineItem[] = [
  {
    period: "5/2025 – současnost",
    place: "SŠ, PII",
    role: "Metodik práce s nadanými",
    description: "Podpora práce s nadáním na střední škole.",
  },
  {
    period: "9/2024 – současnost",
    place: "Nevypusť duši",
    role: "Lektor",
    description:
      "Lektorování programů pro pedagogy (Duševní zdraví), intervize na školách, rozjezd podpůrné skupiny pro rodiče a pečující o mládež s psychickými problémy.",
  },
  {
    period: "2023 – současnost",
    role: "Výklady testu Talent kompas",
    description:
      "Výklady testu studentům, dospělým a učitelům napříč sborem s cílem podpory tandemové práce a spolupráce ve sborovně.",
  },
  {
    period: "5/2017 – současnost",
    place: "Gymnázium Na Zatlance, Praha",
    role: "Pedagog, metodik a garant předmětu OSV a Svět práce",
    description:
      "Tvorba metodiky, osnov a klasifikačních kritérií pro OSV, Svět práce a Open Space; příprava a realizace expedic; od 2021 metodik práce s nadáním a mentor. Člen ŠPP – individuální konzultace se studenty nadanými i v krizi.",
  },
  {
    period: "2021 – 2023, 2025",
    place: "Člověk v tísni",
    role: "Mentor učitelů ZŠ",
    description: "Práce s metodou P4C (Philosophy for Children), Active Citizens.",
  },
  {
    period: "1/2019 – 2020",
    place: "NUDZ",
    role: "Konzultant",
    description:
      "Revize a metodika lekcí v projektu Psychosociální vzdělávání na ZŠ.",
  },
  {
    period: "10/2018 – 12/2024",
    place: "NUV/NPI",
    role: "Expert",
    description: "Revize RVP pro oblast Osobnostně sociální výchovy.",
  },
  {
    period: "5–6/2016",
    place: "NIDV, Praha",
    role: "Manažerka KA Evaluace",
    description:
      "Nastavení a rozjezd klíčové aktivity systémového projektu Strategické řízení a plánování ve školách a v územích.",
  },
  {
    period: "5/2016 – 6/2018",
    place: "Člověk v tísni, o.p.s.",
    role: "Lektor a metodik seminářů Filozofie pro děti",
    description: "Metodická příprava a vedení seminářů DVPP; vedení ukázkových lekcí.",
  },
  {
    period: "7/2015 – 4/2016",
    place: "Člověk v tísni, o.p.s.",
    role: "Mezinárodní koordinátor",
    description:
      "Koordinace mezinárodního týmu Teachers: Agents of change; konference, výstupy, propagace projektu a lektorování filozofie pro děti.",
  },
  {
    period: "7/2013 – 6/2015",
    place: "Člověk v tísni, o.p.s.",
    role: "Manažerka DVPP",
    description:
      "Nastavení a evaluace DVPP v projektu Systémová podpora inkluzivního vzdělávání; vedení týmu; návrh systémového zajištění DVPP.",
  },
  {
    period: "4/2011 – 11/2012",
    place: "NIDV, Praha",
    role: "Autor článků, recenzent, poradce",
    description:
      "Rešerše, rozhovory, recenze článků; konzultant projektu Projektový manažer 250+; studie podpory projektových manažerů ve školách; poradce k překladům.",
  },
  {
    period: "6/2009 – 9/2013",
    place: "NIDV, Praha",
    role: "Manažer dílčí aktivity projektu CISKOM",
    description:
      "Nastavení a monitoring projektu ESF; nábor a rozvoj lektorů; školení lektorů v LMS Moodle a tutorshipu.",
  },
  {
    period: "1/2008 – 6/2009",
    place: "EXPERTIS PRAHA, spol. s r.o.",
    role: "Project manager, metodik",
    description:
      "Koordinace vzdělávacích programů zaměřených na soft-skills a manažerský rozvoj; tvorba metodik a nabídek; vedení projektu interního vzdělávání financovaného z ESF.",
  },
  {
    period: "8–9/2007, 8–9/2008, 11/2008",
    place: "OA Hovorčovická, Praha",
    role: "Lektor",
    description: "Adaptační kurzy pro třídní učitele se studenty 1. ročníků.",
  },
  {
    period: "9/2003 – 6/2009",
    place: "1. Soukromá taneční konzervatoř, Praha",
    role: "Pedagog",
    description: "Výuka Psychologie, Pedagogiky a Didaktiky.",
  },
  {
    period: "4/2002 – 3/2005",
    place: "Linka bezpečí pro děti a mládež, Praha",
    role: "Konzultant a asistent náslechů",
    description: "Podpora na lince, konzultace a asistence.",
  },
];

const Page = () => {
  return (
    <div style={{ display: "grid", gap: "24px" }}>
      <div style={{ fontSize: "2rem", fontWeight: 700, color: "#f7f7ff" }}>
        Praxe
      </div>

      <div
        style={{
          position: "relative",
          paddingLeft: "20px",
          borderLeft: "2px solid rgba(255,255,255,0.1)",
          display: "grid",
          gap: "16px",
        }}
      >
        {timeline.map((item) => (
          <div
            key={`${item.period}-${item.role ?? ""}-${item.place ?? ""}`}
            style={{
              position: "relative",
              padding: "12px 14px 12px 18px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "grid",
              gap: "6px",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "-26px",
                top: "16px",
                width: "12px",
                height: "12px",
                borderRadius: "999px",
                background: "#b8a8ff",
                boxShadow: "0 0 0 6px rgba(184,168,255,0.18)",
              }}
            />
            <div style={{ color: "#b8a8ff", fontWeight: 700 }}>{item.period}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {item.role ? (
                <span style={{ color: "#f7f7ff", fontWeight: 600 }}>{item.role}</span>
              ) : null}
              {item.place ? (
                <span style={{ color: "#d6d4e4" }}>• {item.place}</span>
              ) : null}
            </div>
            <div style={{ color: "#d6d4e4", lineHeight: 1.6 }}>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
