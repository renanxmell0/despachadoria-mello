import { Quote } from "lucide-react";
import { Section } from "./Section";

const DEPOIMENTOS = [
  {
    nome: "Carlos Andrade",
    servico: "Transferência de veículo",
    texto:
      "Comprei o carro em outro município e achei que ia levar semanas. Em poucos dias estava tudo no meu nome, sem eu precisar sair do trabalho.",
  },
  {
    nome: "Juliana Moreira",
    servico: "Licenciamento anual",
    texto:
      "Me avisaram do vencimento, mandaram a guia e resolveram tudo pelo WhatsApp. Atendimento muito atencioso.",
  },
  {
    nome: "Rafael Souza",
    servico: "Regularização de multas",
    texto:
      "Tinha débitos antigos e não sabia por onde começar. Organizaram tudo e explicaram cada passo com clareza.",
  },
];

export function Depoimentos() {
  return (
    <Section id="depoimentos" eyebrow="Depoimentos" title="Quem já resolveu com a gente">
      <ul className="grid gap-4 lg:grid-cols-3">
        {DEPOIMENTOS.map((d) => (
          <li key={d.nome} className="surface-card rounded-xl p-6">
            <Quote size={24} className="text-brand-red" aria-hidden="true" />
            <blockquote className="mt-4 text-sm text-muted-foreground">“{d.texto}”</blockquote>
            <p className="mt-5 font-display text-sm text-foreground">{d.nome}</p>
            <p className="text-xs text-brand-yellow">{d.servico}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
