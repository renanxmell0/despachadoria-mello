import {
  ArrowLeftRight,
  BadgeCheck,
  CalendarCheck,
  FileText,
  Trash2,
  Gavel,
  ClipboardCheck,
  Send,
  RefreshCw,
  Truck  
} from "lucide-react";
import { Section } from "./Section";
import { whatsappLink } from "./site";

const SERVICOS = [
  { icon: ArrowLeftRight, title: "Transferência", text: "Mudança de propriedade e de município/estado com toda a documentação conferida." },
  { icon: BadgeCheck, title: "Emplacamento", text: "Placas Mercosul para veículos novos, usados e transferidos." },
  { icon: CalendarCheck, title: "Licenciamento anual", text: "Emissão de guias, quitação e retirada do CRLV-e sem filas." },
  { icon: FileText, title: "2ª via de CRV / CRLV", text: "Reposição de documentos perdidos, furtados ou danificados." },
  { icon: Trash2, title: "Baixa de veículo", text: "Baixa definitiva por sinistro, leilão ou fim de vida útil." },
  { icon: Gavel, title: "Multas e pontuação", text: "Regularização de débitos, recursos e acompanhamento da CNH." },
  { icon: ClipboardCheck, title: "Vistoria", text: "Agendamento e orientação para vistoria de identificação veicular." },
  { icon: Send, title: "Comunicação de venda", text: "Proteção contra multas do novo proprietário após a venda." },
  { icon: RefreshCw, title: "Atualização cadastral", text: "Endereço, dados do proprietário e alterações no Detran." },
  { icon: Truck, title: "Cadastro ANTT", text: "Cadastro e renovação do RNTRC para transporte de cargas." },
  
];

export function Servicos() {
  return (
    <Section
      id="servicos"
      eyebrow="Serviços"
      title="Tudo o que seu veículo precisa"
      description="Cuidamos de cada etapa junto ao Detran-RJ para você não perder tempo com filas, sistemas e retrabalho."
      alt
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICOS.map((s) => (
          <li key={s.title} className="surface-card rounded-xl p-6">
            <s.icon size={28} className="text-brand-red" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ul>

      <a
        href={whatsappLink("Olá! Gostaria de um orçamento para um serviço de despachante.")}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex w-full items-center justify-center rounded-md bg-brand-yellow px-8 py-4 text-sm font-bold uppercase tracking-wide text-background transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[var(--shadow-yellow)] sm:w-auto"
      >
        Solicitar orçamento
      </a>
    </Section>
  );
}
