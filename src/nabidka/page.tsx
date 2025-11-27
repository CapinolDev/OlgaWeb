import { type OfferItem, individuals, schools } from "./shared";

const Section = ({ title, items }: { title: string; items: OfferItem[] }) => (
  <section
    style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "14px",
      padding: "18px",
      display: "grid",
      gap: "12px",
    }}
  >
    <h2 style={{ margin: 0, fontSize: "1.25rem", color: "#f7f7ff" }}>
      {title}
    </h2>
    <div style={{ display: "grid", gap: "10px" }}>
      {items.map((item) => (
        <div
          key={item.title}
          style={{
            display: "grid",
            gap: "4px",
            padding: "10px 12px",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div style={{ fontWeight: 600, color: "#f7f7ff" }}>{item.title}</div>
          <div style={{ color: "#d6d4e4", lineHeight: 1.6 }}>{item.detail}</div>
          {item.link ? (
            <a
              href={item.link}
              style={{ color: "#b8a8ff", textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Více o Talent kompasu
            </a>
          ) : null}
        </div>
      ))}
    </div>
  </section>
);

const Page = () => {
  return (
    <div style={{ display: "grid", gap: "24px" }}>
      <div style={{ fontSize: "2rem", fontWeight: 700, color: "#f7f7ff" }}>
        Nabídka
      </div>
      <Section title="Pro školy" items={schools} />
      <Section title="Pro jednotlivce / rodinu" items={individuals} />
    </div>
  );
};

export default Page;
