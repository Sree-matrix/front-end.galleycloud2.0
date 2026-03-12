"use client";

import Image from "next/image";
import { Stack, Typography, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import LanguageIcon from "@mui/icons-material/Language";
import { BaseButton } from "@/components/buttons/base";

const SOCIAL_LINKS = [
  { label: "Instagram", icon: <InstagramIcon sx={{ fontSize: "1.2rem" }} />, href: "#" },
  { label: "Facebook", icon: <FacebookIcon sx={{ fontSize: "1.2rem" }} />, href: "#" },
  { label: "YouTube", icon: <YouTubeIcon sx={{ fontSize: "1.2rem" }} />, href: "#" },
  { label: "Twitter", icon: <XIcon sx={{ fontSize: "1.1rem" }} />, href: "#" },
];

export const AppFooter: React.FC = () => {
  return (
    <Stack
      component="footer"
      sx={{
        background: "linear-gradient(192.53deg, #6C7FD2 -131.81%, #0D184A 114.84%)",
        color: "#ffffff",
        paddingTop: { xs: "3rem", md: "5rem" },
        paddingBottom: { xs: "1.5rem", md: "2rem" },
      }}
    >
      <Stack
        sx={{
          maxWidth: "90rem",
          margin: "0 auto",
          width: "100%",
          paddingLeft: { xs: "1.5rem", md: "4rem" },
          paddingRight: { xs: "1.5rem", md: "4rem" },
        }}
      >
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <Stack
            sx={{
              gap: "1.25rem",
              maxWidth: "22rem",
              padding: "1.5rem 0",
            }}
          >
            <Stack
              sx={{ flexDirection: "row", display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <Image
                src="/assets/images/logos/logo-full-horizontal.webp"
                alt="Galleycloud"
                width={200}
                height={50}
                style={{ objectFit: "contain" }}
              />
            </Stack>

            <Typography
              variant="body2"
              sx={{
                opacity: 0.85,
                fontSize: "0.95rem",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              GalleyCloud is a modern aviation catering platform built to support operators
              worldwide with reliable technology and dedicated operational support.
            </Typography>

            <BaseButton sx={{bgcolor:"white", color:"text.secondary"}}>
              Start Your Order
              <Stack
                component="img"
                style={{ marginLeft: "0.6rem", width: "1.2rem" }}
                src="/assets/icons/spoonsclr.svg"
              />
            </BaseButton>
          </Stack>
          <Stack
            sx={{
              flexDirection: "row",
              display: "flex",
              gap: { xs: "4rem", md: "4rem" },
              flexWrap: "wrap",
            }}
          >
            <FooterColumn
              title="Pages"
              links={[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "Contact", href: "/contact" },
                { label: "Blog", href: "/blog" },
              ]}
            />
            <FooterColumn
              title="Pages"
              links={[
                { label: "Airport Location", href: "/airport-location" },
                { label: "Be come a Partner", href: "/partner" },
              ]}
            />
            <FooterColumn
              title="Legal"
              links={[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms and Condition", href: "/terms-and-conditions" },
              ]}
            />

            <Stack sx={{ gap: "1.15rem" }}>
              <Typography sx={{ fontWeight: 600, fontSize: "0.938rem", marginBottom: "0.5rem" }}>
                Social Media
              </Typography>
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  underline="none"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "0.875rem",
                    transition: "0.2s",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {social.icon}
                  {social.label}
                </Link>
              ))}
            </Stack>
          </Stack>
        </Stack>

        <Stack
          sx={{
            borderTop: "0.063rem solid rgba(255,255,255,0.1)",
            marginTop: "8rem",
            paddingTop: "4rem",
          }}
        >
          <Stack
            sx={{
              flexDirection: { xs: "column", md: "row" },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Typography sx={{ opacity: 0.6, fontSize: "0.813rem", fontWeight: 300 }}>
              © 2026 GalleyCloud, All rights reserved
            </Typography>

            <Stack
              sx={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                opacity: 0.8,
              }}
            >
              <LanguageIcon sx={{ fontSize: "1.1rem" }} />
              <Typography sx={{ fontSize: "0.813rem", fontWeight: 300 }}>
                United States / English
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <Stack sx={{ gap: "2.5rem" }}>
    <Typography sx={{ fontWeight: 600, fontSize: "0.938rem", marginBottom: "0.5rem" }}>
      {title}
    </Typography>
    {links.map((link) => (
      <Link
        key={link.label}
        href={link.href}
        underline="none"
        sx={{
          color: "rgba(255,255,255,0.8)",
          fontSize: "0.875rem",
          fontWeight: 300,
          transition: "0.2s",
          "&:hover": { color: "#fff" },
        }}
      >
        {link.label}
      </Link>
    ))}
  </Stack>
);
