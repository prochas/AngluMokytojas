import { DM_Sans } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "@/components/Header/Header";
import "./globals.css";

const SITE_URL = "https://www.anglumokytojas.lt";
const OG_IMAGE = `${SITE_URL}/images/ogImage.png`;

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Anglų kalbos korepetitorius – pamokos vaikams ir suaugusiems",
  description:
    "Individualios anglų kalbos pamokos vaikams ir suaugusiems. Profesionalus pasiruošimas egzaminams, kalbėjimo, rašymo ir gramatikos įgūdžių lavinimas.",
  keywords: [
    "anglų korepetitorius",
    "anglų pamokos vaikams",
    "anglų pamokos suaugusiems",
    "anglų egzaminų pasiruošimas",
    "anglų kalbos mokymas Vilnius",
    "individualus anglų mokymas",
    "anglų kalbos korepetitorius",
  ],
  authors: [
    { name: "Justinas Leganovič", url: "https://www.anglumokytojas.lt" },
  ],
  creator: "Justinas Leganovič",
  metadataBase: new URL("https://www.anglumokytojas.lt"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Anglų kalbos korepetitorius",
    description:
      "Kokybiškos anglų kalbos pamokos vaikams ir suaugusiems. Egzaminų pasiruošimas ir kalbos tobulinimas profesionaliai.",
    url: "https://www.anglumokytojas.lt",
    siteName: "Anglų pamokos su korepetitoriumi",
    type: "website",
    locale: "lt_LT",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Anglų kalbos pamokos – korepetitorius",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anglų kalbos korepetitorius",
    description:
      "Kokybiškos anglų kalbos pamokos vaikams ir suaugusiems. Egzaminų pasiruošimas ir kalbos tobulinimas profesionaliai.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "https://www.anglumokytojas.lt",
  },
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="lt" className={dmSans.variable}>
      <body className="antialiased bg-gray-50 text-gray-900">
        <Header />
        <main>{children}</main>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="16e36642-f098-44e4-afeb-39d79c0b06ea"
          data-culture="lt"
          data-blockingmode="auto"
          type="text/javascript"
          strategy="lazyOnload"
        />
        <Script
          id="ld-json-anglumokytojas"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.anglumokytojas.lt/#website",
                  url: "https://www.anglumokytojas.lt/",
                  name: "Anglų pamokos su korepetitoriumi",
                  inLanguage: "lt-LT",
                  publisher: {
                    "@id": "https://www.anglumokytojas.lt/#organization",
                  },
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.anglumokytojas.lt/#webpage",
                  url: "https://www.anglumokytojas.lt/",
                  name: "Anglų kalbos korepetitorius – pamokos vaikams ir suaugusiems",
                  isPartOf: {
                    "@id": "https://www.anglumokytojas.lt/#website",
                  },
                  inLanguage: "lt-LT",
                  about: {
                    "@id": "https://www.anglumokytojas.lt/#organization",
                  },
                  description:
                    "Anglų kalbos pamokos nuotoliniu būdu: 1–4, 5–10, 11–12 kl. mokiniams ir suaugusiesiems. Pagalba ruošiantis VBE, kontroliniams ir tarpinėms patikroms.",
                  datePublished: "2025-01-01",
                  dateModified: "2025-08-10",
                },
                {
                  "@type": "ImageObject",
                  url: OG_IMAGE,
                  width: 1200,
                  height: 630,
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.anglumokytojas.lt/#organization",
                  name: "Anglų mokytojas",
                  url: "https://www.anglumokytojas.lt/",
                  email: "info@anglumokytojas.lt",
                  telephone: "+37067977969",
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      contactType: "customer support",
                      telephone: "+37067977969",
                      email: "info@anglumokytojas.lt",
                      availableLanguage: ["lt", "en"],
                    },
                  ],
                  areaServed: { "@type": "Country", name: "Lithuania" },
                  serviceArea: {
                    "@type": "AdministrativeArea",
                    name: "Lietuva",
                  },
                  hasOfferCatalog: {
                    "@id": "https://www.anglumokytojas.lt/#catalog",
                  },
                },
                {
                  "@type": "OfferCatalog",
                  "@id": "https://www.anglumokytojas.lt/#catalog",
                  name: "Anglų kalbos pamokos",
                  url: "https://www.anglumokytojas.lt/#paslaugos",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      "@id":
                        "https://www.anglumokytojas.lt/#offer-children-1-4",
                      name: "1–4 klasių mokiniams – individualios pamokos",
                      priceCurrency: "EUR",
                      price: 25.0,
                      priceSpecification: {
                        "@type": "UnitPriceSpecification",
                        priceCurrency: "EUR",
                        price: 25.0,
                        unitText: "per 60 min",
                      },
                      itemOffered: {
                        "@type": "Service",
                        "@id":
                          "https://www.anglumokytojas.lt/#service-children-1-4",
                        serviceType: "Anglų kalbos pamokos 1–4 kl.",
                        provider: {
                          "@id": "https://www.anglumokytojas.lt/#organization",
                        },
                        areaServed: "Lietuva",
                        availableChannel: {
                          "@type": "ServiceChannel",
                          serviceUrl: "https://www.anglumokytojas.lt/",
                          name: "Nuotoliniu būdu",
                        },
                      },
                    },
                    {
                      "@type": "Offer",
                      "@id":
                        "https://www.anglumokytojas.lt/#offer-children-5-10",
                      name: "5–10 klasių mokiniams – individualios pamokos",
                      priceCurrency: "EUR",
                      price: 25.0,
                      priceSpecification: {
                        "@type": "UnitPriceSpecification",
                        priceCurrency: "EUR",
                        price: 25.0,
                        unitText: "per 60 min",
                      },
                      itemOffered: {
                        "@type": "Service",
                        "@id":
                          "https://www.anglumokytojas.lt/#service-children-5-10",
                        serviceType: "Anglų kalbos pamokos 5–10 kl.",
                        provider: {
                          "@id": "https://www.anglumokytojas.lt/#organization",
                        },
                        areaServed: "Lietuva",
                        availableChannel: {
                          "@type": "ServiceChannel",
                          serviceUrl: "https://www.anglumokytojas.lt/",
                          name: "Nuotoliniu būdu",
                        },
                      },
                    },
                    {
                      "@type": "Offer",
                      "@id": "https://www.anglumokytojas.lt/#offer-11-12",
                      name: "11–12 klasių mokiniams – VBE pasiruošimas",
                      priceCurrency: "EUR",
                      price: 25.0,
                      priceSpecification: {
                        "@type": "UnitPriceSpecification",
                        priceCurrency: "EUR",
                        price: 25.0,
                        unitText: "per 60 min",
                      },
                      itemOffered: {
                        "@type": "Service",
                        "@id": "https://www.anglumokytojas.lt/#service-11-12",
                        serviceType: "VBE anglų kalbos egzaminui",
                        provider: {
                          "@id": "https://www.anglumokytojas.lt/#organization",
                        },
                        areaServed: "Lietuva",
                        availableChannel: {
                          "@type": "ServiceChannel",
                          serviceUrl: "https://www.anglumokytojas.lt/",
                          name: "Nuotoliniu būdu",
                        },
                      },
                    },
                    {
                      "@type": "Offer",
                      "@id": "https://www.anglumokytojas.lt/#offer-adults",
                      name: "Suaugusiesiems – individualios pamokos",
                      priceCurrency: "EUR",
                      price: 25.0,
                      priceSpecification: {
                        "@type": "UnitPriceSpecification",
                        priceCurrency: "EUR",
                        price: 25.0,
                        unitText: "per 60 min",
                      },
                      itemOffered: {
                        "@type": "Service",
                        "@id": "https://www.anglumokytojas.lt/#service-adults",
                        serviceType: "Anglų kalbos pamokos suaugusiesiems",
                        provider: {
                          "@id": "https://www.anglumokytojas.lt/#organization",
                        },
                        areaServed: "Lietuva",
                        availableChannel: {
                          "@type": "ServiceChannel",
                          serviceUrl: "https://www.anglumokytojas.lt/",
                          name: "Nuotoliniu būdu",
                        },
                      },
                    },
                  ],
                },
                {
                  "@type": "AggregateOffer",
                  "@id": "https://www.anglumokytojas.lt/#bundle-offers",
                  name: "Mėnesio planai",
                  url: "https://www.anglumokytojas.lt/#kainos",
                  priceCurrency: "EUR",
                  lowPrice: 22.9,
                  highPrice: 25.0,
                  offerCount: 3,
                  offers: [
                    {
                      "@type": "Offer",
                      name: "1 pamoka per savaitę (4 per mėn.)",
                      price: 100.0,
                      priceCurrency: "EUR",
                      availability: "https://schema.org/InStock",
                    },
                    {
                      "@type": "Offer",
                      name: "2 pamokos per savaitę (8 per mėn.)",
                      price: 190.0,
                      priceCurrency: "EUR",
                      availability: "https://schema.org/InStock",
                    },
                    {
                      "@type": "Offer",
                      name: "3 pamokos per savaitę (12 per mėn.)",
                      price: 275.0,
                      priceCurrency: "EUR",
                      availability: "https://schema.org/InStock",
                    },
                  ],
                },
              ],
            }),
          }}
        />
        <Analytics />
        <SpeedInsights />
        <ToastContainer position="bottom-right" autoClose={3000} />
      </body>
    </html>
  );
}
