export interface Service {
  slug: string;
  title: string;
  desc: string;
  icon: string;
}

// Shared between the homepage teaser grid and the dedicated /uslugi page,
// so titles, descriptions and anchor slugs never drift apart.
export const services: Service[] = [
  {
    slug: "stomatologia-zachowawcza",
    title: "Stomatologia zachowawcza",
    desc: "Zajmujemy się profilaktyką, diagnostyką oraz leczeniem próchnicy i jej powikłań. Pracujemy na najwyższej jakości materiałach kompozytowych, wykonując estetyczne wypełnienia, które przywracają zdrowie i naturalny wygląd zębów.",
    icon: `<path d="M12 4c-1.1 0-1.8.6-3 .6-1.9 0-3.5-1.3-4.7-1.3-.9 0-1.3.7-1.3 1.9 0 3 1.1 6.7 2 9.7.4 1.4.9 2.9 2.1 2.9 1.1 0 1.5-1.1 1.9-2.4.4-1.3.8-3 2-3s1.6 1.7 2 3c.4 1.3.8 2.4 1.9 2.4 1.2 0 1.7-1.5 2.1-2.9.9-3 2-6.7 2-9.7 0-1.2-.4-1.9-1.3-1.9-1.2 0-2.8 1.3-4.7 1.3-1.2 0-1.9-.6-3-.6z"/>`,
  },
  {
    slug: "stomatologia-dziecięca",
    title: "Stomatologia dziecięca",
    desc: "Zapewniamy naszym najmłodszym Pacjentom przyjazną atmosferę oraz bezstresowe leczenie. Dbamy o zdrowy rozwój uzębienia poprzez profilaktykę, edukację i leczenie dostosowane do potrzeb dzieci.",
    icon: `<circle cx="12" cy="12" r="9"/><path d="M8 13s1.5 3 4 3 4-3 4-3"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>`,
  },
  {
    slug: "endodoncja-pod-mikroskopem",
    title: "Endodoncja pod mikroskopem",
    desc: "Nowoczesne leczenie kanałowe pod mikroskopem pozwala na precyzyjne oczyszczenie i wypełnienie kanałów korzeniowych. Dzięki temu możemy skutecznie ratować nawet bardzo zniszczone zęby.",
    icon: `<path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>`,
  },
  {
    slug: "protetyka",
    title: "Protetyka",
    desc: "Odbudowujemy utracone lub uszkodzone zęby, przywracając estetykę uśmiechu i komfort codziennego funkcjonowania. Wykonujemy wysoko estetyczne licówki, korony i mosty porcelanowe, a także protezy dopasowane do indywidualnych potrzeb Pacjenta. Zajmujemy się również protetyką opartą na implantach zębowych.",
    icon: `<path d="M3 8l4 3 5-6 5 6 4-3-2 10H5L3 8z"/><path d="M5 21h14"/>`,
  },
  {
    slug: "chirurgia-stomatologiczna",
    title: "Chirurgia stomatologiczna",
    desc: "Wykonujemy zabiegi chirurgiczne, takie jak usuwanie zębów, w tym zębów zatrzymanych, oraz przygotowanie jamy ustnej do dalszego leczenia. W ofercie znajdą Państwo również zabiegi z zakresu chirurgii, takie jak resekcje korzeni zębów, wyłuszczenie torbieli czy plastyka wędzidełek.",
    icon: `<path d="M4 20l7-7"/><path d="M13.5 10.5l6-6a2.1 2.1 0 0 0-3-3l-6 6"/><path d="M13.5 10.5L17 14"/>`,
  },
  {
    slug: "higienizacja-i-profilaktyka",
    title: "Higienizacja i profilaktyka",
    desc: "Regularna higienizacja pozwala skutecznie usuwać kamień nazębny, osad i przebarwienia. Zabiegi profilaktyczne pomagają zapobiegać próchnicy oraz chorobom dziąseł i przyzębia.",
    icon: `<path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z"/>`,
  },
  {
    slug: "wybielanie",
    title: "Wybielanie",
    desc: "Profesjonalne wybielanie zębów pozwala rozjaśnić uśmiech w przewidywalny i skuteczny sposób. Zabieg wykonywany pod kontrolą lekarza jest bezpieczny i zapewnia naturalny efekt.",
    icon: `<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>`,
  },
];
