import { Metadata } from "next";
import { AirportSection } from "@/presentation/airport-location";
import { CommonLayout } from "@/layouts/common";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.galleycloud.com"),

  title: "GalleyCloud | Premium In-Flight Catering & Services",
  description:
    "GalleyCloud provides premium in-flight catering and aviation hospitality services, helping airlines and passengers elevate their onboard experience.",

  alternates: {
    canonical: "https://www.galleycloud.com/",
  },

  keywords: [
    "GalleyCloud",
    "in-flight catering",
    "flight attendant services",
    "premium airline catering",
    "airline hospitality",
    "onboard food services",
    "aviation services",
  ],

  authors: [{ name: "GalleyCloud" }],
  publisher: "GalleyCloud",
  category: "Aviation & Catering Services",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "GalleyCloud | Premium In-Flight Catering & Services",
    description:
      "Explore GalleyCloud's premium in-flight catering and aviation hospitality solutions, designed to elevate the onboard experience for passengers and crew.",
    url: "https://www.galleycloud.com/",
    siteName: "GalleyCloud",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/images/og/galleycloud-home.jpg",
        width: 1200,
        height: 630,
        alt: "GalleyCloud – Premium In-Flight Catering",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GalleyCloud | Premium In-Flight Catering & Services",
    description:
      "Discover GalleyCloud’s in-flight catering and aviation services to enhance the onboard experience for airlines and passengers.",
    images: ["/images/og/galleycloud-home.jpg"],
    site: "@GalleyCloud",
    creator: "@GalleyCloud",
  },
};

export default function Home() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "GalleyCloud",
      url: "https://www.galleycloud.com",
      logo: "https://www.galleycloud.com/logo.png",
      description:
        "GalleyCloud offers premium in-flight catering and aviation hospitality services for airlines and passengers worldwide.",
      sameAs: [
        "https://www.facebook.com/galleycloud",
        "https://www.linkedin.com/company/galleycloud",
        "https://www.instagram.com/galleycloud",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        areaServed: "Global",
        availableLanguage: ["English"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "GalleyCloud",
      url: "https://www.galleycloud.com",
      publisher: {
        "@type": "Organization",
        name: "GalleyCloud",
        logo: {
          "@type": "ImageObject",
          url: "https://www.galleycloud.com/logo.png",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.galleycloud.com/",
        },
      ],
    },
  ];

  return (
    <CommonLayout>
      <AirportSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
    </CommonLayout>
  );
}
