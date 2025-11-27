import CardNav from "./cardnav";

type NavbarProps = {
  activePath?: string;
  routeVersion?: number;
};

const Navbar = ({ activePath, routeVersion }: NavbarProps) => {
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

  return (
    <CardNav
      items={items}
      baseColor="rgba(236, 214, 238, 0.01)"
      ease="power3.out"
      activePath={activePath}
      routeVersion={routeVersion}
      homeHref="/home"
      homeLabel="Domů"
    />
  );
};

export default Navbar;
