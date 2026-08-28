import { Zap, Receipt, Award, Route } from "lucide-react";
import { Section } from "./Section";

const ITENS = [
  { icon: Zap, title: "Agilidade", text: "Protocolos abertos no mesmo dia sempre que a documentação está completa." },
  { icon: Receipt, title: "Transparência", text: "Valores de taxas e serviço informados antes de começar. Sem custos escondidos." },
  { icon: Award, title: "Experiência", text: "Rotina diária com Detran-RJ, vistorias e cartórios da região." },
  { icon: Route, title: "Ponta a ponta", text: "Acompanhamento do primeiro contato até a entrega do documento final." },
];

export function Diferenciais() {
  return (
    <Section id="diferenciais" eyebrow="Diferenciais" title="Por que nos escolher?">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ITENS.map((i) => (
          <li key={i.title} className="surface-card rounded-xl p-6">
            <i.icon size={28} className="text-brand-red" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold">{i.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
