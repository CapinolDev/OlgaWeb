import CardNav from "./cardnav";

const Navbar = () => {
  const items = [
    {
      label: "O mně",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Praxe", ariaLabel: "Moje praxe", href: "/about/praxe" },
        {
          label: "Vzdělání",
          ariaLabel: "Moje vzdělání",
          href: "/about/vzdelani",
        },
      ],
    },
    {
      label: "Nabídka",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Pro Školy",
          ariaLabel: "Pro Školy",
          href: "/nabidka/skoly",
        },
        {
          label: "Pro jednotlivce / rodinu",
          ariaLabel: "Pro jednotlivce / rodinu",
          href: "/nabidka/jednotlivec",
        },
      ],
    },
    {
      label: "Kontakt",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        {
          label: "Kontakt",
          ariaLabel: "Kontaktujte nás",
          href: "/kontakt",
        },
      ],
    },
    {
      label: "Ceník",
      bgColor: "#36284D",
      textColor: "#fff",
      links: [
        {
          label: "Ceník",
          ariaLabel: "Ceník",
          href: "/cenik",
        },
      ],
    },
  ];

  return <CardNav items={items} baseColor="#fff" ease="power3.out" />;
};

export default Navbar;
