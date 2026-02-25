import { Instagram, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";

export const FOOTER_CONTENT = {
  columns: [
    {
      title: "Explora",
      links: [
        { label: "Disciplinas", path: "/prototype/deportes" },
        { label: "Templos", path: "/prototype/lugares" },
        { label: "Rituales", path: "/prototype/agenda" },
        { label: "Ecosistema", path: "/prototype/ecosistema" }, // CONFIRMADO: Ecosistema
        { label: "Qué es Heartbeat", path: "/prototype/que-es-heartbeat" }
      ]
    },
    {
      title: "Formatos",
      links: [
        { label: "Life", path: "/prototype/ecosistema/life" },
        { label: "Urban Hubs", path: "/prototype/ecosistema/urban" },
        { label: "Hoteles", path: "/prototype/ecosistema/hotels" },
        { label: "Restaurantes KM0", path: "/prototype/ecosistema/km0" }
      ]
    },
    {
      title: "Magazine",
      links: [
        { label: "Portada", path: "/prototype/magazine" },
        { label: "Cuerpo", path: "/prototype/magazine/category/cuerpo" },
        { label: "Salud", path: "/prototype/magazine/category/salud" },
        { label: "Planeta", path: "/prototype/magazine/category/planeta" }
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
      { label: "Busca ubicaciones", path: "/prototype/lugares", icon: ArrowRight },
      { label: "Descubre tu alma", path: "/prototype/ecosistema", icon: ArrowRight } // CONFIRMADO: Ecosistema
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
    text: "Reservar",
    alt: "Unirse ahora",
    style: "bg-black text-white hover:bg-neutral-800"
  },
  secondary: {
    places: "Buscar ubicaciones",
    sports: "Explorar disciplinas",
    style: "bg-white text-black border border-black hover:bg-neutral-50"
  },
  editorial: {
    read: "Leer código",
    agenda: "Ver rituales",
    style: "text-black underline decoration-2 underline-offset-4 hover:text-neutral-600"
  }
};
