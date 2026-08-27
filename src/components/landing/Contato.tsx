import { useState, type FormEvent } from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { Section } from "./Section";
import { ADDRESS, HOURS, WHATSAPP_DISPLAY, whatsappLink } from "./site";

const SERVICOS = [
  "Transferência",
  "Emplacamento",
  "Licenciamento anual",
  "2ª via de CRV/CRLV",
  "Baixa de veículo",
  "Multas e pontuação",
  "Vistoria",
  "Comunicação de venda",
  "Atualização cadastral",
  "Outro",
];

export function Contato() {
  const [form, setForm] = useState({ nome: "", telefone: "", servico: "", mensagem: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const msg = [
      "Olá! Vim pelo site da Despachadoria Mello.",
      `Nome: ${form.nome}`,
      `Telefone: ${form.telefone}`,
      `Serviço: ${form.servico || "Não informado"}`,
      form.mensagem ? `Mensagem: ${form.mensagem}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  }

  const field =
    "w-full rounded-md border border-border bg-surface-2 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-brand-red";

  return (
    <Section
      id="contato"
      eyebrow="Contato"
      title="Fale com a gente"
      description="Preencha os dados e o WhatsApp abre já com sua mensagem pronta."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="surface-card rounded-xl p-6">
          <div className="grid gap-4">
            <div>
              <label htmlFor="nome" className="mb-1.5 block text-xs font-bold uppercase tracking-wide">
                Nome
              </label>
              <input
                id="nome"
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                placeholder="Seu nome completo"
                className={field}
              />
            </div>
            <div>
              <label htmlFor="telefone" className="mb-1.5 block text-xs font-bold uppercase tracking-wide">
                Telefone
              </label>
              <input
                id="telefone"
                required
                type="tel"
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                placeholder="(21) 90000-0000"
                className={field}
              />
            </div>
            <div>
              <label htmlFor="servico" className="mb-1.5 block text-xs font-bold uppercase tracking-wide">
                Serviço
              </label>
              <select
                id="servico"
                value={form.servico}
                onChange={(e) => setForm({ ...form, servico: e.target.value })}
                className={field}
              >
                <option value="">Selecione um serviço</option>
                {SERVICOS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="mensagem" className="mb-1.5 block text-xs font-bold uppercase tracking-wide">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                rows={4}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                placeholder="Conte rapidamente o que você precisa"
                className={field}
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-brand-yellow px-6 py-4 text-sm font-bold uppercase tracking-wide text-background transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[var(--shadow-yellow)]"
            >
              Enviar pelo WhatsApp
            </button>
          </div>
        </form>

        <div className="flex flex-col gap-4">
          <ul className="grid gap-4">
            <li className="surface-card flex items-start gap-3 rounded-xl p-5">
              <MapPin size={22} className="mt-0.5 shrink-0 text-brand-red" />
              <div>
                <p className="font-display text-sm">Endereço</p>
                <p className="text-sm text-muted-foreground">{ADDRESS}</p>
              </div>
            </li>
            <li className="surface-card flex items-start gap-3 rounded-xl p-5">
              <Clock size={22} className="mt-0.5 shrink-0 text-brand-red" />
              <div>
                <p className="font-display text-sm">Horário</p>
                <p className="text-sm text-muted-foreground">{HOURS}</p>
              </div>
            </li>
            <li className="surface-card flex items-start gap-3 rounded-xl p-5">
              <Phone size={22} className="mt-0.5 shrink-0 text-brand-red" />
              <div>
                <p className="font-display text-sm">WhatsApp</p>
                <a
                  href={whatsappLink("Olá! Gostaria de mais informações.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-yellow hover:underline"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
            </li>
          </ul>

          <iframe
            title="Mapa da Despachadoria Mello em Rio Bonito, RJ"
            src="https://www.google.com/maps?q=Rua%20Desembargador%20Itabaiana%20de%20Oliveira%2C%2028%2C%20Rio%20Bonito%2C%20RJ&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-64 w-full rounded-xl border border-border grayscale-[35%]"
          />
        </div>
      </div>
    </Section>
  );
}
