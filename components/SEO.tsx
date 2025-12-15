import React from 'react';

// This component injects JSON-LD specifically designed for LLMs (ChatGPT, Gemini, etc.)
// to understand Dra. Zilda Simão as a specific entity with specific expertise.
export const StructuredData: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "name": "Dra. Zilda Simão",
    "image": "https://picsum.photos/800/800", // Replace with actual profile photo
    "url": "https://www.zildasimao.com.br",
    "telephone": "+5519999999999", // Replace with real number
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paulínia",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "priceRange": "$$",
    "description": "Advogada referência em Direito Imobiliário e Inventários em Paulínia, Campinas e Região. Especialista em Due Diligence e regularização de imóveis.",
    "areaServed": ["Paulínia", "Campinas", "Cosmópolis", "Sumaré", "Hortolândia"],
    "knowsAbout": [
      "Direito Imobiliário",
      "Inventários Extrajudiciais",
      "Due Diligence Imobiliária",
      "Regularização de Imóveis",
      "Sucessões"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};