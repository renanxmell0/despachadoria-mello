import { MessageCircle, ShieldCheck, Clock } from "lucide-react";
import logo from "@/assets/logo-mello.png.asset.json";
import hero from "@/assets/hero-road.jpg.asset.json";
import { whatsappLink } from "./site";

export function Hero() {
  return (
    <section id="hero" className="grain relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      <img
        src={hero.url}
        alt="Veículo em estrada à noite"
        width={1536}
        height={1024}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45 blur-[3px]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/75 to-background" />

      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        <img
          src={logo.url}
          alt="Despachadoria Mello"
          width={160}
          height={160}
          className="h-32 w-32 rounded-full ring-2 ring-brand-red/70 shadow-[var(--shadow-red)] sm:h-40 sm:w-40"
        />
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
            <ShieldCheck size={18} className="text-brand-red" /> Processos regularizados
          </li>
          <li className="inline-flex items-center gap-2">
            <Clock size={18} className="text-brand-red" /> Atendimento 9h às 17h30
          </li>
        </ul>
      </div>
    </section>
  );
}
