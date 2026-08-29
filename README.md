# Landing page — Despachadoria Mello

Página única, mobile-first, com estética "premium automotivo": fundo preto/grafite, vermelho vibrante nos detalhes e amarelo nos botões de ação.

## Identidade visual

- Fundos: #0D0D0D a #1A1A1A, com cartões em grafite levemente mais claro
- Vermelho #E31E24: ícones, linhas divisórias, molduras e destaques
- Amarelo #F5E400: botões principais ("Solicitar Orçamento", "Falar no WhatsApp")
- Texto branco, títulos em caixa alta, sans-serif condensada/forte
- Hover sutil (brilho, leve elevação) nos botões amarelos e vermelhos

## Seções (na ordem)

1. **Hero** — logo em destaque, headline sobre rapidez e segurança na burocracia veicular, subtítulo de experiência/atendimento, CTA amarelo para WhatsApp; fundo escuro com imagem desfocada de veículo/estrada e leve textura
2. **Sobre** — texto institucional: quem somos, tempo de mercado, missão de simplificar a burocracia
3. **Serviços** — 9 cards com ícones vermelhos: transferência, emplacamento, licenciamento anual, 2ª via de CRV/CRLV, baixa de veículo, regularização de multas e pontuação, vistoria, comunicação de venda, atualização cadastral no Detran
4. **Diferenciais** — agilidade, transparência de valores, experiência, acompanhamento ponta a ponta
5. **Como funciona** — 4 etapas: contato → envio de documentos → processamento → entrega
6. **Depoimentos** — 3 depoimentos placeholder (nome, serviço, texto)
7. **FAQ** — accordion: prazos, documentos necessários, formas de pagamento, atendimento presencial ou remoto
8. **Contato** — formulário (nome, telefone, serviço, mensagem) que monta a mensagem e abre o WhatsApp já preenchido; endereço, horário e mapa incorporado
9. **Rodapé** — logo, navegação, redes sociais, contato

Extras: botão flutuante de WhatsApp fixo em amarelo, navegação fixa por âncoras com scroll suave, menu mobile.

## Dados confirmados

- WhatsApp: +55 21 96760-6396
- Endereço: Rua Desembargador Itabaiana de Oliveira, 28 — Rio Bonito, RJ
- Horário: 9:00 às 17:30
- Formulário: abre o WhatsApp com os dados preenchidos (sem backend)

## Logo

Você indicou que vai enviar a logo oficial. Enquanto ela não chega, uso um marcador de logo no mesmo estilo (fundo preto, carro vermelho, texto branco/amarelo) e troco pelo arquivo real assim que enviado.

## SEO

- Title: "Despachante Veicular no Rio de Janeiro | Despachadoria Mello"
- Meta description focada em documentação de veículos RJ, emplacamento e transferência
- H1 único, HTML semântico, alt em imagens, og/twitter tags e JSON-LD de LocalBusiness com endereço e horário

## Detalhes técnicos

- Tokens de cor (preto, vermelho, amarelo) definidos em `src/styles.css` via `@theme inline`; nenhuma cor fixa nos componentes
- Página construída em `src/routes/index.tsx` com componentes em `src/components/landing/*`
- Metadados via `head()` da rota, incluindo canonical
- Imagem de fundo do hero gerada e importada de `src/assets/`
- Mapa via iframe do Google Maps; sem backend nesta etapa

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
