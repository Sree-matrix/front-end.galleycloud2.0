import { Metadata } from "next";
import { PrivacyPolicyPage } from "@/presentation/privacy-policy";
import { CommonLayout } from "@/layouts/common";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.galleycloud.com"),

  title: "GalleyCloud Privacy Policy | Data Protection & User Privacy",
  description:
    "Read GalleyCloud's Privacy Policy to understand how we handle data, protect user privacy, and ensure secure in-flight catering and aviation services.",

  alternates: {
    canonical: "https://www.galleycloud.com/privacy-policy/",
  },

  keywords: [
    "GalleyCloud privacy policy",
    "data protection",
    "user privacy",
    "in-flight catering privacy",
    "aviation services data security",
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
    title: "GalleyCloud Privacy Policy | Data Protection & User Privacy",
    description:
      "Learn how GalleyCloud ensures user privacy, data protection, and secure handling of information for aviation and in-flight catering services.",
    url: "https://www.galleycloud.com/privacy-policy",
    siteName: "GalleyCloud",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og/galleycloud-privacy.jpg",
        width: 1200,
        height: 630,
        alt: "GalleyCloud Privacy Policy – Data Protection",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GalleyCloud Privacy Policy | Data Protection & User Privacy",
    description:
      "Understand how GalleyCloud protects user data and privacy across our in-flight catering and aviation services.",
    images: ["/images/og/galleycloud-privacy.jpg"],
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
        "GalleyCloud provides premium in-flight catering and aviation hospitality services, with a strong commitment to user privacy and data protection.",
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
      "@type": "WebPage",
      name: "GalleyCloud Privacy Policy",
      url: "https://www.galleycloud.com/privacy-policy",
      description:
        "GalleyCloud Privacy Policy – Learn how we handle user data and maintain security in aviation and in-flight catering services.",
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Privacy Policy",
          item: "https://www.galleycloud.com/privacy-policy",
        },
      ],
    },
  ];

  return (
    <CommonLayout>
      <PrivacyPolicyPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
    </CommonLayout>
  );
}
