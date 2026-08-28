import { Instagram, Facebook, Phone } from "lucide-react";

import { ADDRESS, HOURS, NAV_LINKS, WHATSAPP_DISPLAY, whatsappLink } from "./site";

const logoUrl = "/logo.png"

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3">
        <div>
          <img
            src={logoUrl}
            alt="Despachadoria Mello"
            width={64}
            height={64}
            loading="lazy"
            className="h-16 w-16 rounded-full "
          />
          <p className="mt-4 text-sm text-muted-foreground">
            Despachante veicular em Rio Bonito, RJ. Documentação do seu veículo sem filas.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <p className="font-display text-sm text-brand-yellow">Navegação</p>
          <ul className="mt-3 grid gap-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-brand-red">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-sm text-brand-yellow">Contato</p>
          <p className="mt-3 text-sm text-muted-foreground">{ADDRESS}</p>
          <p className="mt-2 text-sm text-muted-foreground">{HOURS}</p>
          <a
            href={whatsappLink("Olá!")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-sm text-brand-yellow hover:underline"
          >
            <Phone size={16} /> {WHATSAPP_DISPLAY}
          </a>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.instagram.com/despachadoriamello/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-md border border-border p-2 text-muted-foreground transition hover:border-brand-red hover:text-brand-red"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-md border border-border p-2 text-muted-foreground transition hover:border-brand-red hover:text-brand-red"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Despachadoria Mello. Todos os direitos reservados.
      </p>
    </footer>
  );
}
