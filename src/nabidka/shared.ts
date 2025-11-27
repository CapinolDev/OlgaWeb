export type OfferItem = {
  title: string;
  detail: string;
  link?: string;
};

export const schools: OfferItem[] = [
  {
    title: "Konzultace",
    detail:
      "Nastavení a rozjezd OSV ve škole, podpora vyučujících, práce s nadanými, P4C.",
  },
  {
    title: "Intervize",
    detail: "Co intervize je a pomoc se zavedením intervizí na škole.",
  },
  {
    title: "Talent kompas",
    detail: "Výklad a práce s výsledkem testu pro učitele i studenty.",
    link: "https://talentkompas.cz/talenty/proc-si-udelat-test-talentu-pri-vyberu-povolani-nebo-univerzity/",
  },
  {
    title: "Lektorská činnost",
    detail:
      "Workshopy pro studenty, učitele i rodiče: komunikace, psychohygiena, silné stránky, OSV, práce s časem a sebeorganizace, P4C.",
  },
  {
    title: "Mentoring",
    detail:
      "Podpora vyučujících při zavádění TH, OSV, práce s nadanými a P4C.",
  },
];

export const individuals: OfferItem[] = [
  {
    title: "Talent kompas",
    detail:
      "Výklad a práce s výsledkem testu pro dospělé i dospívající, rodiče i teenagery.",
    link: "https://talentkompas.cz/talenty/proc-si-udelat-test-talentu-pri-vyberu-povolani-nebo-univerzity/",
  },
];
