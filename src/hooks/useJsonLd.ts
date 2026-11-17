import { useEffect } from "react";
import { Product, FAQ } from "../types";

export function useJsonLd(products: Product[], faqs: FAQ[]) {
  useEffect(() => {
    const siteUrl = "https://mserman90.github.io/neri-home-el-dokuma/";
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "neri-home-jsonld";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${siteUrl}#website`,
          url: siteUrl,
          name: "Neri Home | El Dokuma Keçi Kılı & Cicim Tekstil",
          description: "Tekirdağ Saray Küçükyoncalı 1875 Rumeli göç mirası el dokuması kırlent, dolay yastık ve çanta mağazası.",
          inLanguage: "tr-TR",
        },
        {
          "@type": "HomeGoodsStore",
          "@id": `${siteUrl}#store`,
          name: "Neri Home",
          description:
            "Tekirdağ Saray Küçükyoncalı Mahallesi'nde 200 yıllık Rumeli sandık motifleriyle ahşap el tezgâhlarında dokunan doğal keçi kılı ve yün cicim kırlent, dolay yastık, heybe, çanta ve runner atölyesi.",
          url: siteUrl,
          telephone: "+905376966502",
          founder: {
            "@type": "Person",
            name: "Neriman Çakır",
            jobTitle: "Usta Dokumacı & Kurucu",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Küçükyoncalı Mahallesi 5110. Sokak No: 12",
            addressLocality: "Saray",
            addressRegion: "Tekirdağ",
            postalCode: "59600",
            addressCountry: "TR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 41.4428,
            longitude: 27.9239,
          },
          areaServed: ["TR", "US", "EU"],
          priceRange: "₺₺₺",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "28",
            bestRating: "5",
            worstRating: "1",
          },
        },
        {
          "@type": "FAQPage",
          "@id": `${siteUrl}#faq`,
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
        {
          "@type": "ItemList",
          "@id": `${siteUrl}#collection`,
          name: "Neri Home El Dokuma Koleksiyonu",
          itemListElement: products.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              "@id": `${siteUrl}?product=${p.id}`,
              name: p.name,
              sku: p.id,
              description: p.shortDesc,
              brand: { "@type": "Brand", name: "Neri Home" },
              material: p.material,
              category: p.category,
              itemCondition: "https://schema.org/NewCondition",
              offers: {
                "@type": "Offer",
                priceCurrency: "TRY",
                price: p.price,
                availability:
                  p.stockStatus === "in_stock"
                    ? "https://schema.org/InStock"
                    : "https://schema.org/PreOrder",
                url: `${siteUrl}?product=${p.id}`,
                seller: {
                  "@type": "Organization",
                  name: "Neri Home",
                },
              },
            },
          })),
        },
      ],
    });

    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [products, faqs]);
}
