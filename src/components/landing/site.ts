export const WHATSAPP_NUMBER = "5521967606396";
export const WHATSAPP_DISPLAY = "+55 21 96760-6396";
export const ADDRESS = "Rua Desembargador Itabaiana de Oliveira, 28 — Rio Bonito, RJ";
export const HOURS = "Segunda a sexta, das 9:00 às 17:30";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];
