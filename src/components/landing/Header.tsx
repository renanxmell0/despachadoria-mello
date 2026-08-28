import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, whatsappLink } from "./site";
const logoUrl = "/logo.png"

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt="Logo Despachadoria Mello"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full /60"
          />
          <span className="font-display text-sm leading-none tracking-wide">
            <span className="block text-foreground">DESPACHADORIA</span>
            <span className="block text-brand-yellow">MELLO</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand-red"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink("Olá! Gostaria de solicitar um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-brand-yellow px-4 py-2 text-sm font-bold uppercase tracking-wide text-background transition hover:brightness-110 hover:shadow-[var(--shadow-yellow)]"
          >
            Orçamento
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border p-2 text-foreground transition hover:border-brand-red lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-surface px-4 py-4 lg:hidden" aria-label="Menu mobile">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-2 hover:text-brand-red"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink("Olá! Gostaria de solicitar um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-md bg-brand-yellow px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-background"
          >
            Solicitar orçamento
          </a>
        </nav>
      )}
    </header>
  );
}
