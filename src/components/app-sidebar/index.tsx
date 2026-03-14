"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Drawer, Toolbar, IconButton, Container, Typography, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/CloseRounded";

interface ISideBarProps {
  readonly open: boolean;
  readonly onClose: () => void;
}

export const SideBar: React.FC<ISideBarProps> = (props) => {
  const { open, onClose } = props;

  return (
  <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        zIndex: 9999, 
        width: "100%",
        "& .MuiDrawer-paper": {
          width: "100%",
          height: "100%",
          backgroundColor: "#0D184A",
          boxSizing: "border-box",
        },
      }}
    >
      <Container sx={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        <Stack sx={{ gap: "4rem" }}>
          <Toolbar
            sx={{
              paddingX: "0 !important",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "5rem",
            }}
          >
            <Stack
              sx={{ flexDirection: "row", display: "flex", alignItems: "center", gap: "1.5rem" }}
            >
              <Image
                src="/assets/images/logos/logo-full-horizontal.webp"
                alt="Galleycloud"
                width={200}
                height={50}
                style={{ objectFit: "contain" }}
              />
            </Stack>

            <IconButton onClick={onClose} sx={{ color: "white" }}>
              <CloseIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          </Toolbar>

          <Stack sx={{ gap: "3.5rem", marginTop: "2rem" }}>
            <NavLink href="/" label="HOME" onClose={onClose} />
            <NavLink href="/about-us" label="ABOUT" onClose={onClose} />
            <NavLink href="/airport-location" label="AIRPORT LOCATION" onClose={onClose} />
            <NavLink href="/blogs" label="BLOGS" onClose={onClose} />
            <NavLink href="/contact-us" label="CONTACT US" onClose={onClose} />
            <NavLink href="/authentications/sign-up" label="REGISTER NOW" onClose={onClose} />
            <NavLink href="/login" label="LOGIN" onClose={onClose} />
          </Stack>
        </Stack>
      </Container>
    </Drawer>
  );
};

const NavLink = ({
  href,
  label,
  onClose,
}: {
  href: string;
  label: string;
  onClose: () => void;
}) => (
  <Link href={href} onClick={onClose} style={{ textDecoration: "none" }}>
    <Typography
      sx={{
        fontFamily: "'Quattrocento', serif",
        color: "rgba(255, 255, 255, 0.9)",
        fontSize: "1.125rem",
        fontWeight: 400,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        transition: "color 0.2s ease-in-out",
        "&:hover": {
          color: "white",
        },
      }}
    >
      {label}
    </Typography>
  </Link>
);
