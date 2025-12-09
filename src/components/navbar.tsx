import CardNav from "./cardnav";

type NavbarProps = {
  activePath?: string;
  routeVersion?: number;
};

const Navbar = ({ activePath, routeVersion }: NavbarProps) => {
  const withHash = (path: string) =>
    path === "/" ? "#/" : `#${path.startsWith("/") ? path : `/${path}`}`;

  const items = [
    {
      label: "O mn�>",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: "Praxe",
          ariaLabel: "Moje praxe",
          href: withHash("/about/praxe"),
        },
        {
          label: "Vzd�>lA�nA-",
          ariaLabel: "Moje vzd�>lA�nA-",
          href: withHash("/about/vzdelani"),
        },
      ],
    },
    {
      label: "NabA-dka",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Pro ��koly",
          ariaLabel: "Pro ��koly",
          href: withHash("/nabidka/skoly"),
        },
        {
          label: "Pro jednotlivce / rodinu",
          ariaLabel: "Pro jednotlivce / rodinu",
          href: withHash("/nabidka/jednotlivec"),
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
          ariaLabel: "Kontaktujte nA�s",
          href: withHash("/kontakt"),
        },
      ],
    },
    {
      label: "CenA-k",
      bgColor: "#36284D",
      textColor: "#fff",
      links: [
        {
          label: "CenA-k",
          ariaLabel: "CenA-k",
          href: withHash("/cenik"),
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
      homeHref={withHash("/home")}
      homeLabel="Dom�_"
    />
  );
};

export default Navbar;
