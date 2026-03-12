import { Metadata } from "next";
import { CommonLayout } from "@/layouts/common";
import { AboutUsPage } from "@/presentation/about-us";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.galleycloud.com"),

  title: "About GalleyCloud | Premium In‑Flight Catering & Services",
  description:
    "Learn more about GalleyCloud — your destination for premium in‑flight catering options and tailored services for flight attendants and travelers.",

  alternates: {
    canonical: "https://www.galleycloud.com/about-us/",
  },

  keywords: [
    "GalleyCloud",
    "in flight catering",
    "flight attendant services",
    "premium airline catering",
    "Galley Cloud catering",
    "onboard food services",
    "aviation hospitality options",
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
    title: "About GalleyCloud | In‑Flight Catering & Premium Services",
    description:
      "Explore how GalleyCloud enhances the in‑flight experience with premium catering options and aviation hospitality solutions.",
    url: "https://www.galleycloud.com/about-us",
    siteName: "GalleyCloud",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og/galleycloud-about.jpg",
        width: 1200,
        height: 630,
        alt: "GalleyCloud – Elevate Your In‑Flight Experience",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About GalleyCloud | In‑Flight Catering & Premium Services",
    description:
      "Discover GalleyCloud’s mission to elevate the in‑flight experience with tailored catering options and premium cabin services.",
    images: ["/images/og/galleycloud-about.jpg"],
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
        "GalleyCloud offers premium in‑flight catering services and tailored airline hospitality solutions for flight attendants and passengers worldwide.",
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
      "@type": "AboutPage",
      url: "https://www.galleycloud.com/about-us",
      name: "About GalleyCloud",
      description:
        "About GalleyCloud — get to know our mission and how our catering services improve in‑flight hospitality.",
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
          name: "About Us",
          item: "https://www.galleycloud.com/about-us",
        },
      ],
    },
  ];

  return (
    <CommonLayout>
      <AboutUsPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
    </CommonLayout>
  );
}
