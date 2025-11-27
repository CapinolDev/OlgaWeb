import CardNav from "./cardnav";
import logo from "./../../public/olgaLogoBlack.svg";

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
          label: "Pro školy",
          ariaLabel: "Pro školy",
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
      label: "Kontakt/Ceník",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        {
          label: "Kontakt",
          ariaLabel: "Kontaktujte nás",
          href: "/kontakt",
        },
        {
          label: "Ceník",
          ariaLabel: "Ceník",
          href: "/cenik",
        },
      ],
    },
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Navbar;
