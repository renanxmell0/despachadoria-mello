import { MessageCircle } from "lucide-react";
import { whatsappLink } from "./site";

export function WhatsappFab() {
  return (
    <a
      href={whatsappLink("Olá! Vim pelo site da Despachadoria Mello.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-4 bottom-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow text-background shadow-[var(--shadow-yellow)] transition hover:-translate-y-1 hover:brightness-110"
    >
      <MessageCircle size={26} />
    </a>
  );
}
