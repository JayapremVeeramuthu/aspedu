import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  keywords: string;
};

const SEO = ({ title, description, keywords }: SEOProps) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "ASP Computer Education",
    alternateName: "ASPEDU",
    founder: {
      "@type": "Person",
      name: "Ajith Alagarsamy",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kallal",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
