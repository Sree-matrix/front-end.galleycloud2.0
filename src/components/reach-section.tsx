"use client";

import React from "react";
import Image from "next/image";
import { Stack, Container, Typography } from "@mui/material";

interface IStatCardProps {
  number: string;
  label: string;
  src: string;
  showDivider: boolean;
}

export const GlobalReachSection: React.FC = () => {
  return (
    <Stack
      sx={{
        paddingY: { xs: "3rem", md: "4.5rem" },
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="xl">
        <Stack
          sx={{
            textAlign: "center",
            marginBottom: "3rem",
            gap: "0.75rem",
          }}
        >
          <Typography variant="h2">GalleyCloud: Trusted Worldwide.</Typography>

          <Typography
            sx={{
              fontSize: "0.938rem",
              color: "text.secondary",
              maxWidth: "56.25rem",
              marginX: "auto",
              lineHeight: 1.5,
            }}
          >
            We continuously expand and verify our network to meet the expectations of private,
            charter, and business aviation operators worldwide.
          </Typography>
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            display: "flex",
            backgroundColor: "grey.200",
            borderRadius: "1rem",
            paddingLeft: { xs: "1rem", md: "1.5rem" },
            paddingRight: { xs: "1rem", md: "1.5rem" },
            paddingTop: { xs: "1.5rem", md: "2rem" },
            paddingBottom: { xs: "1.5rem", md: "2rem" },
            marginBottom: "3rem",
            overflowX: { xs: "auto", md: "visible" },
            flexWrap: { xs: "nowrap", md: "wrap" },
            gap: "1.5rem",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {STATS_DATA.map((stat, index) => (
            <StatCard
              key={stat.label}
              number={stat.number}
              label={stat.label}
              src={stat.src}
              showDivider={index !== STATS_DATA.length - 1}
            />
          ))}
        </Stack>

        <Stack
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "84.5rem",
            height: { xs: "28rem", md: "50.25rem" },
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "3rem",
          }}
        >
          <Image
            src="/assets/images/home/worldmap.svg"
            alt="World Map"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </Stack>

        <Stack
          sx={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            columnGap: "0.75rem",
            textAlign: { xs: "flex-start", md: "center" },
          }}
        >
          <Stack
            sx={{
              width: "0.25rem",
              height: "1.75rem",
              backgroundColor: "primary.main",
              borderRadius: "0.125rem",
            }}
          />

          <Typography
            variant="body1"
            sx={{
              fontSize: "0.875rem",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "text.secondary",
              maxWidth: "48rem",
              alignContent: "flex-start",
            }}
          >
            Coverage reflects active catering partners and operational locations — not future
            projections.
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
};

const StatCard = React.memo<IStatCardProps>(({ number, label, src, showDivider }) => {
  return (
    <Stack
      sx={{
        flex: 1,
        minWidth: "12rem",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingY: "1.25rem",
        paddingX: "1rem",
        position: "relative",

        "&::after": {
          content: '""',
          display: { sm: showDivider ? "block" : "none" },
          position: "absolute",
          right: 0,
          top: "20%",
          height:"80%",
          borderRight: "0.145rem dashed #4f6df5",
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "2rem", md: "2.625rem" },
          fontWeight: 400,
          color: "text.primary",
          fontFamily: "Quattrocento",
          marginBottom: "0.5rem",
        }}
      >
        {number}
      </Typography>

      <Stack
        sx={{
          flexDirection: "row",
          display: "flex",
          gap: "0.375rem",
          alignItems: "center",
          color: "text.secondary",
        }}
      >
        <Image src={src} alt={label} width={18} height={18} />

        <Typography sx={{ fontSize: "0.813rem" }}>{label}</Typography>
      </Stack>
    </Stack>
  );
});

StatCard.displayName = "StatCard";

const STATS_DATA = [
  {
    number: "80+",
    label: "Airframes",
    src: "/assets/images/home/flight.svg",
  },
  {
    number: "15,000+",
    label: "Orders Delivered",
    src: "/assets/images/home/tick.svg",
  },
  {
    number: "1,000+",
    label: "Catering Partners",
    src: "/assets/images/home/cart.svg",
  },
  {
    number: "24/7",
    label: "Support",
    src: "/assets/images/home/phone.svg",
  },
];
