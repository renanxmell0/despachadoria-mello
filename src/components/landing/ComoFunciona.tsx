import { Section } from "./Section";

const ETAPAS = [
  { n: "01", title: "Contato", text: "Você chama no WhatsApp e conta o que precisa. Explicamos prazo e valor." },
  { n: "02", title: "Envio de documentos", text: "Lista objetiva do que enviar — por foto, digital ou presencialmente." },
  { n: "03", title: "Processamento", text: "Cuidamos das guias, protocolos e vistorias, com atualizações no caminho." },
  { n: "04", title: "Entrega", text: "Documento pronto, entregue a você físico ou digital." },
];

export function ComoFunciona() {
  return (
    <Section id="como-funciona" eyebrow="Como funciona" title="Quatro etapas, zero fila" alt>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ETAPAS.map((e) => (
          <li key={e.n} className="surface-card rounded-xl p-6">
            <span className="font-display text-4xl text-brand-red">{e.n}</span>
            <h3 className="mt-3 text-lg font-semibold">{e.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{e.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
