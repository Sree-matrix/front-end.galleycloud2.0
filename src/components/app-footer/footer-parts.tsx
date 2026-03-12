"use client";

import Image from "next/image";
import { Stack, Typography, Link, Box, Container } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import { BaseButton } from "@/components/buttons/base";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    icon: <InstagramIcon sx={{ fontSize: "1rem" }} />,
    href: "#",
  },
  {
    label: "Facebook",
    icon: <FacebookIcon sx={{ fontSize: "1rem" }} />,
    href: "#",
  },
  {
    label: "You tube",
    icon: <YouTubeIcon sx={{ fontSize: "1rem" }} />,
    href: "#",
  },
  { label: "Twitter", icon: <XIcon sx={{ fontSize: "0.9rem" }} />, href: "#" },
];

export const AppFooter: React.FC = () => {
  return (
    <Stack
      component="footer"
      sx={{
        backgroundColor: "#1A234E", // Exact navy from screenshot
        color: "#ffffff",
      }}
    >
      <Container maxWidth="xl">
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            paddingTop: { xs: "4rem", md: "6rem" },
            paddingBottom: "4rem",
            gap: { xs: "3rem", md: "2rem" },
          }}
        >
          {/* Brand Section */}
          <Stack sx={{ maxWidth: "22rem", gap: "1.5rem" }}>
            <Stack direction="row" alignItems="center" gap={1}>
              <Image
                src="/assets/icons/logo-white.svg" // Replace with your cloud icon path
                alt="Logo"
                width={32}
                height={32}
              />
              <Typography
                variant="h5"
                sx={{ fontWeight: 500, letterSpacing: "0.5px" }}
              >
                GalleyCloud
              </Typography>
            </Stack>

            <Typography
              sx={{
                fontSize: "0.875rem",
                lineHeight: 1.6,
                opacity: 0.8,
                fontWeight: 300,
              }}
            >
              GalleyCloud is a modern aviation catering platform built to
              support operators worldwide with reliable technology and dedicated
              operational support.
            </Typography>

            <BaseButton LeftIcon={PhoneIcon} sx={{bgcolor:"white", color:"secondary.main"}} >
                  Get In Touch
                </BaseButton>
          </Stack>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, auto)",
              },
              gap: { xs: "2.5rem", md: "4rem" },
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

            <Stack sx={{ gap: "1.25rem" }}>
              <Typography sx={{ fontWeight: 600, fontSize: "0.9rem" }}>
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
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.85rem",
                    transition: "0.2s",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {social.icon}
                  {social.label}
                </Link>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>

      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          backgroundColor: "rgba(0,0,0,0.1)",
          paddingY: "1.5rem",
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
            gap={2}
          >
            <Typography sx={{ opacity: 0.6, fontSize: "0.75rem" }}>
              © 2026 ClaPos, All right reserved
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              gap={1}
              sx={{ opacity: 0.8 }}
            >
              <LanguageIcon sx={{ fontSize: "1rem" }} />
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 300 }}>
                United States / English
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
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
  <Stack sx={{ gap: "1.25rem" }}>
    <Typography sx={{ fontWeight: 600, fontSize: "0.9rem" }}>
      {title}
    </Typography>
    {links.map((link) => (
      <Link
        key={link.label}
        href={link.href}
        underline="none"
        sx={{
          color: "rgba(255,255,255,0.7)",
          fontSize: "0.85rem",
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
