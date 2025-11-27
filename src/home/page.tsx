const Page = () => {
  return (
    <div style={{ display: "grid", gap: "20px" }}>
      <div style={{ fontSize: "2.4rem", fontWeight: 800, color: "#f7f7ff" }}>
        Olga Daşkın
      </div>
      <div style={{ color: "#d6d4e4", fontSize: "1.08rem", lineHeight: 1.7 }}>
        Učitelka, průvodkyně, lektorka, metodička a věčný přirozený propojovač.
        Čerpám z multidisciplinarity: praxe ve školství, nezisku, státní správě i
        businessu. Stejně jako na zahradě, i v hodinách sázím semínka, hledám pro ně
        světlo, závlahu a trpělivost, a pomáhám studentům i učitelům růst.
      </div>

      <div
        style={{
          display: "grid",
          gap: "14px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "14px",
          padding: "16px",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "1.3rem", color: "#f7f7ff" }}>
          Co dělám
        </h2>
        <ul style={{ margin: 0, paddingLeft: "18px", color: "#d6d4e4", lineHeight: 1.6 }}>
          <li>Podpora nadaných a metoda P4C, mentoring a intervize pro pedagogy.</li>
          <li>Lektorování a workshopy: komunikace, psychohygiena, OSV, tandemová výuka.</li>
          <li>Talent Kompas: výklady testu pro studenty, učitele, dospělé a rodiny.</li>
          <li>Spolupráce s Nevypusť duši a Talent Kompasem; sdílení know-how napříč Českem.</li>
        </ul>
      </div>

      <div
        style={{
          display: "grid",
          gap: "10px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "14px",
          padding: "16px",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "1.3rem", color: "#f7f7ff" }}>
          Proč spolupracovat
        </h2>
        <ul style={{ margin: 0, paddingLeft: "18px", color: "#d6d4e4", lineHeight: 1.6 }}>
          <li>Multidisciplinární zázemí: školství, nezisk, státní správa i firemní prostředí.</li>
          <li>Praktický přístup: testování, ověřování a iterace metod podle potřeb týmů a tříd.</li>
          <li>Partnerský přístup: respekt, trpělivost, jasný rámec a hledání cest pro růst.</li>
        </ul>
      </div>

      <div
        style={{
          display: "grid",
          gap: "8px",
          color: "#d6d4e4",
          lineHeight: 1.6,
        }}
      >
        <div style={{ fontWeight: 700, color: "#f7f7ff" }}>Ze soukromí</div>
        <div>
          Tři děti, manžel a zahrada jsou mé trvalé inspirace. Miluju různorodost lidí kolem
          sebe, učím se z jejich příběhů a sdílím svoje zkušenosti s kolegy ve škole,
          v Nevypusť duši, Talent Kompasu i v týmu na podporu nadání.
        </div>
      </div>
    </div>
  );
};

export default Page;
