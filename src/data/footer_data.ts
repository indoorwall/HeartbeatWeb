import { Instagram, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";

export const FOOTER_CONTENT = {
  columns: [
    {
      title: "Explora",
      links: [
        { label: "Disciplinas", path: "/prototype/deportes" },
        { label: "Templos", path: "/prototype/lugares" },
        { label: "Rituales", path: "/prototype/agenda" },
        { label: "Universo", path: "/prototype/universo" }
      ]
    },
    {
      title: "Formatos",
      links: [
        // CAMBIO: Life Reserve -> Life
        { label: "Life", path: "/prototype/universo/life" },
        { label: "Urban Hubs", path: "/prototype/universo/urban" },
        { label: "Hoteles", path: "/prototype/universo/hotels" },
        { label: "Restaurantes KM0", path: "/prototype/universo/km0" }
      ]
    },
    {
      title: "Journal",
      links: [
        { label: "Últimos Códigos", path: "/prototype/historias" },
        { label: "Naturaleza", path: "/prototype/historias?cat=Naturaleza" },
        { label: "Innovación", path: "/prototype/historias?cat=Innovación" },
        { label: "Comunidad", path: "/prototype/historias?cat=Comunidad" }
      ]
    },
    {
      title: "Proyectos",
      links: [
        { label: "Heartbeat Clothes (WIP)", path: "#" },
        { label: "Energy Machines (WIP)", path: "#" },
        { label: "Impacto & Sostenibilidad", path: "#" }
      ]
    }
  ],
  startHere: {
    title: "¿Buscas tu frecuencia?",
    links: [
      { label: "Encuentra tu disciplina", path: "/prototype/deportes", icon: ArrowRight },
      { label: "Busca un templo cerca", path: "/prototype/lugares", icon: ArrowRight },
      { label: "Descubre tu alma", path: "/prototype/universo", icon: ArrowRight }
    ]
  },
  social: [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ],
  legal: [
    { label: "Privacidad", path: "#" },
    { label: "Cookies", path: "#" },
    { label: "Términos", path: "#" }
  ],
  brand: {
    name: "HEARTBEAT",
    slogan: "Tu alma tecnológica."
  }
};

export const CTA_SYSTEM = {
  primary: {
    text: "Sincronizar",
    alt: "Unirse ahora",
    style: "bg-black text-white hover:bg-neutral-800"
  },
  secondary: {
    places: "Ver templos",
    sports: "Explorar disciplinas",
    style: "bg-white text-black border border-black hover:bg-neutral-50"
  },
  editorial: {
    read: "Leer código",
    agenda: "Ver rituales",
    style: "text-black underline decoration-2 underline-offset-4 hover:text-neutral-600"
  }
};
