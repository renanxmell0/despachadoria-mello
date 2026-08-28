import { MessageCircle, ShieldCheck, Clock } from "lucide-react";
import { useEffect, useRef } from "react";
import { whatsappLink } from "./site";

const heroUrl = "/hero.jpg"
const logoUrl = "/logo.png"
export function Hero() {
  const heroImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const offset = window.scrollY * 0.80; // intensidade do efeito
        if (heroImgRef.current) {
          heroImgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
        }
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section id="hero" className="grain relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      <img
        ref={heroImgRef}
        src={heroUrl}
        alt="Veículo em estrada à noite"
        width={1536}
        height={1024}
        className="absolute inset-0 -z-10 h-[120%] w-full object-cover opacity-90 blur-[3px]  will-change-transform"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/75 to-background" />

      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        
        <h1 className="mt-8 text-3xl leading-tight font-bold sm:text-5xl">
          Burocracia veicular resolvida com{" "}
          <span className="text-brand-red">rapidez</span> e{" "}
          <span className="text-brand-yellow">segurança</span>
        </h1>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">
          Despachante em Rio Bonito, RJ. Transferência, emplacamento, licenciamento e toda a
          documentação do seu veículo com atendimento próximo e acompanhamento do início ao fim.
        </p>

        <div className="mt-8 w-full sm:w-auto">
          <a
            href={whatsappLink("Olá! Vim pelo site e gostaria de falar sobre um serviço.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-yellow px-8 py-4 text-base font-bold uppercase tracking-wide text-background transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[var(--shadow-yellow)] sm:w-auto"
          >
            <MessageCircle size={20} /> Falar no WhatsApp
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          
          <li className="inline-flex items-center gap-2">
            <Clock size={18} className="text-brand-red" /> Atendimento 9h às 17h30
          </li>
        </ul>
      </div>
    </section>
  );
}
