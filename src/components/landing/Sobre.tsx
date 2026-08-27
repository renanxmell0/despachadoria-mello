import { Section } from "./Section";

export function Sobre() {
  return (
    <Section id="sobre" eyebrow="Sobre nós" title="Quem é a Despachadoria Mello">
      <div className="grid gap-6 lg:grid-cols-3">
        <p className="text-muted-foreground lg:col-span-2">
          A Despachadoria Mello nasceu em Rio Bonito com um propósito simples: tirar da frente do
          motorista a parte chata da documentação veicular. São anos de estrada lidando diariamente
          com Detran, cartórios e órgãos de trânsito — tempo suficiente para saber onde os processos
          costumam travar e como resolvê-los antes que virem dor de cabeça.
        </p>
        <div className="surface-card rounded-xl p-6">
          <p className="font-display text-3xl text-brand-yellow">+10 anos</p>
          <p className="mt-1 text-sm text-muted-foreground">de experiência em documentação veicular</p>
        </div>
      </div>
      <p className="mt-6 max-w-3xl text-muted-foreground">
        Nossa missão é simplificar a burocracia: explicar cada etapa em linguagem clara, informar
        prazos e valores sem surpresas e devolver o veículo regularizado no menor tempo possível.
      </p>
    </Section>
  );
}
