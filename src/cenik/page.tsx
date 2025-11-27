const services = [
  {
    title: "Výklad talent kompas testu",
    detail: "Příprava a výklad 1,15h",
    price: "1 500 - 2 500 Kč (dle počtu výkladů a přítomných osob)",
  },
  { title: "Konzultace", detail: "1h", price: "700 Kč" },
  { title: "Lektorování, vedení intervize", detail: "1h", price: "1 000 Kč" },
];

const Page = () => {
  return (
    <div className="pricing-page" style={{ display: "grid", gap: "28px" }}>
      <div style={{ display: "grid", gap: "12px" }}>
        <div
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            letterSpacing: "-0.4px",
            color: "#f7f7ff",
          }}
        >
          Ceník
        </div>
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "14px",
            padding: "18px",
            display: "grid",
            gap: "14px",
          }}
        >
          {services.map((item) => (
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
              <div style={{ fontWeight: 600, fontSize: "1.05rem" }}>
                {item.title}
              </div>
              <div style={{ color: "#cfcde0", fontSize: "0.98rem" }}>
                {item.detail}
              </div>
              <div style={{ color: "#e7e4ff", fontWeight: 600 }}>
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "14px",
          padding: "18px",
          display: "grid",
          gap: "8px",
        }}
      >
        <div style={{ fontWeight: 700, fontSize: "1.1rem", color: "#f7f7ff" }}>
          Fakturační údaje
        </div>
        <div style={{ color: "#d6d4e4", lineHeight: 1.6 }}>
          <div>Olga Daşkın</div>
          <div>Radovská 786</div>
          <div>19800 Praha 9</div>
          <div>IČO: 21853274</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
