import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Sobre } from "@/components/landing/Sobre";
import { Servicos } from "@/components/landing/Servicos";
import { Diferenciais } from "@/components/landing/Diferenciais";
import { ComoFunciona } from "@/components/landing/ComoFunciona";
import { Depoimentos } from "@/components/landing/Depoimentos";
import { Faq, FAQ_ITENS } from "@/components/landing/Faq";
import { Contato } from "@/components/landing/Contato";
import { Footer } from "@/components/landing/Footer";
import { WhatsappFab } from "@/components/landing/WhatsappFab";

const TITLE = "Despachante Veicular no Rio de Janeiro | Despachadoria Mello";
const DESCRIPTION =
  "Despachante veicular em Rio Bonito, RJ: transferência, emplacamento, licenciamento, 2ª via de CRV/CRLV e regularização de multas com agilidade e valores transparentes.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Despachadoria Mello",
          description: DESCRIPTION,
          telephone: "+55 21 96760-6396",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Desembargador Itabaiana de Oliveira, 28",
            addressLocality: "Rio Bonito",
            addressRegion: "RJ",
            addressCountry: "BR",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "17:30",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITENS.map((i) => ({
            "@type": "Question",
            name: i.q,
            acceptedAnswer: { "@type": "Answer", text: i.a },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Diferenciais />
        <ComoFunciona />
        <Depoimentos />
        <Faq />
        <Contato />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
