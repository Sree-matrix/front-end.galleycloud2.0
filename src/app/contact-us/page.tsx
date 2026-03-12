import { Metadata } from "next";
import { ContactUsPage } from "@/presentation/contact-us";
import { CommonLayout } from "@/layouts/common";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.galleycloud.com"),

  title: "Contact GalleyCloud | In-Flight Catering & Aviation Services",
  description:
    "Get in touch with GalleyCloud to learn more about our in-flight catering solutions, aviation hospitality services, and partnership opportunities.",

  alternates: {
    canonical: "https://www.galleycloud.com/contact-us/",
  },

  keywords: [
    "GalleyCloud contact",
    "in-flight catering support",
    "aviation services contact",
    "flight attendant services",
    "airline hospitality inquiry",
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
    title: "Contact GalleyCloud | In-Flight Catering & Aviation Services",
    description:
      "Reach out to GalleyCloud to discuss premium in-flight catering, aviation hospitality services, or partnership opportunities.",
    url: "https://www.galleycloud.com/contact-us",
    siteName: "GalleyCloud",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og/galleycloud-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact GalleyCloud – In-Flight Catering & Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact GalleyCloud | In-Flight Catering & Aviation Services",
    description:
      "Contact GalleyCloud for premium in-flight catering and aviation hospitality solutions.",
    images: ["/images/og/galleycloud-contact.jpg"],
    site: "@GalleyCloud",
    creator: "@GalleyCloud",
  },
};

export default function Page() {
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
      "@type": "ContactPage",
      url: "https://www.galleycloud.com/contact-us",
      name: "Contact GalleyCloud",
      description:
        "Contact GalleyCloud for inquiries about in-flight catering, aviation hospitality, or partnership opportunities.",
      publisher: {
        "@type": "Organization",
        name: "GalleyCloud",
        url: "https://www.galleycloud.com",
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact Us",
          item: "https://www.galleycloud.com/contact-us",
        },
      ],
    },
  ];

  return (
    <CommonLayout>
      <ContactUsPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
    </CommonLayout>
  );
}
