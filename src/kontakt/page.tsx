const Page = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div style={{ display: "grid", gap: "20px", maxWidth: "760px" }}>
      <div style={{ fontSize: "2rem", fontWeight: 700, color: "#f7f7ff" }}>
        Kontakt
      </div>

      <div
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "14px",
          padding: "16px",
          display: "grid",
          gap: "6px",
          color: "#d6d4e4",
        }}
      >
        <div style={{ fontWeight: 700, color: "#f7f7ff" }}>Olga Daşkın</div>
        <div>
          T:{" "}
          <a
            href="tel:+420605543088"
            style={{ color: "#b8a8ff", textDecoration: "underline" }}
          >
            +420 605 54 30 88
          </a>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "14px",
          padding: "18px",
          display: "grid",
          gap: "12px",
        }}
      >
        <div style={{ color: "#f7f7ff", fontWeight: 700, fontSize: "1.1rem" }}>
          Napište mi
        </div>

        <label style={{ display: "grid", gap: "6px", color: "#d6d4e4" }}>
          Jméno
          <input
            type="text"
            name="name"
            required
            style={{
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "10px 12px",
              background: "rgba(255,255,255,0.05)",
              color: "#f7f7ff",
            }}
          />
        </label>

        <label style={{ display: "grid", gap: "6px", color: "#d6d4e4" }}>
          E-mail
          <input
            type="email"
            name="email"
            required
            style={{
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "10px 12px",
              background: "rgba(255,255,255,0.05)",
              color: "#f7f7ff",
            }}
          />
        </label>

        <label style={{ display: "grid", gap: "6px", color: "#d6d4e4" }}>
          Zpráva
          <textarea
            name="message"
            rows={5}
            required
            style={{
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "10px 12px",
              background: "rgba(255,255,255,0.05)",
              color: "#f7f7ff",
              resize: "vertical",
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            marginTop: "4px",
            padding: "12px 14px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.12)",
            background:
              "linear-gradient(135deg, rgba(184,168,255,0.45), rgba(108,89,181,0.55))",
            color: "#0f0c19",
            fontWeight: 700,
            cursor: "pointer",
            transition: "transform 120ms ease, box-shadow 120ms ease",
          }}
        >
          Odeslat
        </button>
      </form>
    </div>
  );
};

export default Page;
import type React from "react";
