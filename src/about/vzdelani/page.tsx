type EducationItem = {
  period: string;
  institution: string;
  detail: string;
};

type CourseItem = {
  title: string;
  detail?: string;
};

const education: EducationItem[] = [
  {
    period: "1998 – 2005",
    institution: "FF UK Praha",
    detail:
      "Magisterské studium: Pedagogika (SZZK Pedagogické poradenství, Pedagogika osobnostně sociálního rozvoje a Didaktika) a Učitelství pro střední školy (SZZK Pedagogika a Psychologie).",
  },
  {
    period: "2003 – 2007",
    institution: "FF UK Praha",
    detail:
      "Bakalářské studium: Andragogika a personální řízení. Bakalářská práce: Analýza vzdělávacích potřeb (BZK Andragogika, Personální řízení a Psychologie).",
  },
];

const dalsiVzdelavani: CourseItem[] = [
  {
    title:
      "Talent Kompas – certifikace talentového kouče, zaměřeno na práci s výsledky testu talentů",
    detail: "Certifikace 2023, recertifikace 2024.",
  },
  {
    title: "Kariérový rozvoj ve školní praxi",
    detail: "80 hodin, 2022/2023.",
  },
  { title: "aART - Adopted Aggression Replacement Training®", detail: "Výcvik 2022/2023." },
  {
    title: 'Euroguidance CROSS BORDER SEMINAR “Hope in times of uncertainty”',
    detail: "Riga, 2022.",
  },
  {
    title:
      "Stáž na školách a v institucích zabývajících se prací s nadanými dětmi",
    detail: "Budapešť, Maďarsko, 11/2021.",
  },
  { title: "WCGTC (World Council for Gifted and Talented Children)", detail: "8/2021." },
  {
    title: "P4C – Philosophy for children – navazující školení pro učitele a lektory, Formativní hodnocení",
    detail: "2021.",
  },
  { title: "Mindfulness nejen pro talentované", detail: "2020." },
  { title: "Systemika ve školní praxi", detail: "2018." },
  { title: "Roční sebezkušenostní výcvik Videotrénink interakcí", detail: "2016." },
  {
    title:
      "VTI (Videotrénink interakcí) – 3denní; Sit beside me – Hodnotové vzdělávání 5 dnů; Business writing; P4C – Philosophy for children – navazující školení pro lektory – 2 dny",
    detail: "2015.",
  },
  { title: "P4C – Philosophy for children", detail: "3 dny, 2014." },
  {
    title:
      "Krátkodobé sebezkušenostní výcviky v Rogersovské psychoterapii a poradenství a v Logoterapii a poradenství – realizované pod Linkou bezpečí.",
  },
  {
    title: "Sociálně-psychologický výcvik pod Hestia v rámci programu 5P.",
  },
];

const conferences: CourseItem[] = [
  {
    title:
      "Host na semináři o duševním zdraví KÚ Liberec + sdílení dobré praxe na konferenci k duševnímu zdraví v Praze (Pasparta)",
    detail: "11/2024.",
  },
  {
    title: "Webinář pro MZS: Podpora duševního zdraví dětí a mladistvých",
    detail: "2024.",
  },
  {
    title:
      "Členka pracovní skupiny Duševní zdraví dětí a mladistvých při Metropolitním zdravotním servisu v Praze",
    detail: "2023 a 2024.",
  },
  {
    title:
      "Konference SOFA: Duševní zdraví dětí a mládeže v pražských školách",
    detail: "Příspěvek: Socio-emoční učení, Praha 2024.",
  },
  {
    title:
      'Konference "Kariérové vzdělávání a poradenství ve školách", Kampus Hybernská, Praha',
    detail:
      "10. 10. 2023. Příprava obsahu konference a příspěvky za Gymnázium Na Zatlance se zaměřením na nadání a nadané žáky.",
  },
  {
    title: "Přednášející na semináři Dítě a duševní zdraví, MZS",
    detail: "2022.",
  },
  {
    title:
      "Seminář Communication v rámci Prague European Parliament for Youth",
    detail: "Příprava a vedení, Praha 2018.",
  },
  {
    title:
      "Workshop k metodě Filozofie pro děti na mezinárodních konferencích Teachers Agents of Change (2015) a MENU International Forum for Change (2016).",
  },
];

const collaborations: CourseItem[] = [
  {
    title: "Spolupráce s Talent Kompas",
    detail: "https://talentkompas.cz/pruvodce/olga-daskin/",
  },
  {
    title: "Spolupráce s Nevypusť duši",
    detail: "https://nevypustdusi.cz/vypis-programu/?program=ucitele",
  },
];

const Card = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section
    style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "14px",
      padding: "18px",
      display: "grid",
      gap: "10px",
    }}
  >
    <h2 style={{ margin: 0, fontSize: "1.25rem", color: "#f7f7ff" }}>{title}</h2>
    {children}
  </section>
);

const Page = () => {
  return (
    <div style={{ display: "grid", gap: "24px" }}>
      <div style={{ fontSize: "2rem", fontWeight: 700, color: "#f7f7ff" }}>
        Vzdělání
      </div>

      <Card title="Formální vzdělání">
        <div style={{ display: "grid", gap: "12px" }}>
          {education.map((item) => (
            <div
              key={`${item.period}-${item.institution}`}
              style={{
                padding: "10px 12px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.02)",
                display: "grid",
                gap: "6px",
              }}
            >
              <div style={{ color: "#b8a8ff", fontWeight: 700 }}>{item.period}</div>
              <div style={{ color: "#f7f7ff", fontWeight: 600 }}>
                {item.institution}
              </div>
              <div style={{ color: "#d6d4e4", lineHeight: 1.6 }}>{item.detail}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Další vzdělávání">
        <div style={{ display: "grid", gap: "10px" }}>
          {dalsiVzdelavani.map((item) => (
            <div
              key={item.title}
              style={{
                padding: "10px 12px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.02)",
                display: "grid",
                gap: "4px",
              }}
            >
              <div style={{ color: "#f7f7ff", fontWeight: 600 }}>{item.title}</div>
              {item.detail ? (
                <div style={{ color: "#d6d4e4" }}>{item.detail}</div>
              ) : null}
            </div>
          ))}
        </div>
      </Card>

      <Card title="Účast na konferencích a další praxe">
        <div style={{ display: "grid", gap: "10px" }}>
          {conferences.map((item) => (
            <div
              key={item.title}
              style={{
                padding: "10px 12px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.02)",
                display: "grid",
                gap: "4px",
              }}
            >
              <div style={{ color: "#f7f7ff", fontWeight: 600 }}>{item.title}</div>
              {item.detail ? (
                <div style={{ color: "#d6d4e4" }}>{item.detail}</div>
              ) : null}
            </div>
          ))}
        </div>
      </Card>

      <Card title="Spolupráce">
        <div style={{ display: "grid", gap: "8px" }}>
          {collaborations.map((item) => (
            <div key={item.title} style={{ color: "#f7f7ff" }}>
              <div style={{ fontWeight: 600 }}>{item.title}</div>
              <a
                href={item.detail}
                style={{ color: "#b8a8ff", textDecoration: "underline" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.detail}
              </a>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Page;
