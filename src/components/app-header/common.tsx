"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AppBar, Toolbar, Stack, Typography } from "@mui/material";
import { BaseButton } from "../buttons/base";
import { OpenSideBarButton } from "../app-sidebar/open-sidebar-button";
import { SideBar } from "../app-sidebar";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/airport-location", label: "Airport Locations" },
  { href: "/contact-us", label: "Contact" },
  { href: "/blogs", label: "Blog" },
];

export const CommonAppHeader: React.FC = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSideBar = () => {
    setSideBarOpen((prev) => !prev);
  };

  return (
    <Stack>
     <AppBar 
  position="fixed" 
  sx={{ 
    backgroundColor: "white", 
    color: "black",
    boxShadow: "none",
    borderBottom: "1px solid #e0e0e0" 
  }}
>
        <Toolbar
          sx={{ paddingLeft: { xs: "0rem" }, paddingRight: { xs: "0rem" }, height: "4.8rem" }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ paddingX: { xs: "1rem", md: "2.5rem" }, width: "100%" }}
          >
            <Link
              href="/"
              style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
            >
              <Image
                src="/assets/images/logo/Galleycloud.svg"
                alt="GalleyCloud"
                width={160}
                height={50}
                style={{ cursor: "pointer", objectFit: "contain" }}
                priority
              />
            </Link>

            <Stack
              direction="row"
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: "2rem" }}
            >
              <Stack
                direction="row"
                sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: "2rem" }}
              >
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

                  return (
                    <Typography
                      variant="body2"
                      key={link.label}
                      component={Link}
                      href={link.href}
                      sx={{
                        position: "relative",
                        color: isActive ? "primary.light" : "text.secondary",
                        textDecoration: "none",
                        transition: "width 0.3s ease",

                        "&::after": {
                          content: '""',
                          ...{ position: "absolute", bottom: 0, left: 0 },
                          height: "1.5px",
                          width: isActive ? "100%" : "0%",
                          backgroundColor: "primary.light",
                          transition: "width 0.3s ease",
                        },

                        "&:hover::after": { width: "100%" },
                        "&:hover": { color: "primary.light" },
                      }}
                    >
                      {link.label}
                    </Typography>
                  );
                })}
              </Stack>

              <BaseButton component={Link} variant="outlined" href="/" fullWidth={false} rounded>
                Go To Dashboard
              </BaseButton>
            </Stack>

            <Stack sx={{ display: { xs: "flex", md: "none" } }}>
              <OpenSideBarButton toggleSideBar={toggleSideBar} />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ height: "4.8rem", display: "flex", justifyContent: "space-between" }} />
      <SideBar open={sideBarOpen} onClose={toggleSideBar} />
    </Stack>
  );
};
