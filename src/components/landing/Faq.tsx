import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "./Section";

export const FAQ_ITENS = [
  {
    q: "Quais são os prazos dos serviços?",
    a: "Licenciamento costuma sair no mesmo dia. Transferência e emplacamento levam em média de 3 a 7 dias úteis, dependendo de vistoria e da fila do Detran. O prazo estimado é informado antes de começar.",
  },
  {
    q: "Quais documentos preciso enviar?",
    a: "Em geral: CRV/ATPV-e assinado, documento de identidade e CPF, comprovante de residência atualizado e comprovante de vistoria quando aplicável. Enviamos a lista exata do seu caso pelo WhatsApp.",
  },
  {
    q: "Quais as formas de pagamento?",
    a: "Aceitamos PIX, dinheiro, cartão de débito e crédito. As taxas do Detran são pagas por guia oficial e vêm discriminadas no orçamento.",
  },
  {
    q: "O atendimento é presencial ou remoto?",
    a: "Os dois. Você pode resolver tudo pelo WhatsApp com envio digital dos documentos, ou ir até nosso escritório em Rio Bonito, das 9:00 às 17:30.",
  },
];

export function Faq() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Perguntas frequentes" alt>
      <Accordion type="single" collapsible className="max-w-3xl">
        {FAQ_ITENS.map((item, i) => (
          <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left font-display text-base uppercase hover:text-brand-red">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
