"use client";

import Image from "next/image";
import { Card, CardContent, Typography, Stack } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import type { IAirport } from "@/presentation/airport-location/components/data";
import { BaseButton } from "@/components/buttons/base";

type TProps = {
  airport: IAirport;
};

export const AirportCard = ({ airport }: TProps) => {
  return (
    <Card
      elevation={0}
      sx={{
        position: "relative",
        backgroundColor: "grey.200",
        borderRadius: "0.875rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "0.375rem",
          backgroundColor: "primary.main",
          borderTopLeftRadius: "0.875rem",
          borderBottomLeftRadius: "0.875rem",
        }}
      />

      <CardContent
        sx={{
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
          paddingLeft: "1.125rem",
          paddingRight: "1.125rem",
        }}
      >
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: "1rem",
          }}
        >
          <Stack>
            <Typography sx={{ fontWeight: 600, fontSize: "1rem", color: "text.primary" }}>
              {airport.name} ({airport.code})
            </Typography>

            <Stack
              sx={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "0.5rem",
              }}
            >
              <img
                src={`https://flagcdn.com/w40/${airport.countryCode}.png`}
                alt={airport.country}
                width="20"
                height="14"
                style={{
                  borderRadius: "1rem",
                  objectFit: "cover",
                }}
              />
              <Typography sx={{ fontSize: "0.875rem", color: "text.secondary" }}>
                {airport.country}
              </Typography>
            </Stack>

            <Stack
              sx={{ flexDirection: "row", display: "flex", gap: "1.125rem", marginTop: "0.75rem" }}
            >
              <Stack
                sx={{ flexDirection: "row", display: "flex", gap: "0.25rem", alignItems: "center" }}
              >
                <VerifiedIcon sx={{ fontSize: "1rem", color: "#16a34a" }} />
                <Typography sx={{ fontSize: "0.875rem", color: "success.main", fontWeight: 500 }}>
                  Verified Caterers
                </Typography>
              </Stack>

              <Stack
                sx={{ flexDirection: "row", display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <Image
                  src="/assets/icons/reserve.svg"
                  alt="Available Caterers"
                  width={16}
                  height={16}
                />
                <Typography sx={{ fontSize: "0.875rem", color: "text.primary" }}>
                  Available Caterers: {airport.caterers}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <BaseButton>Start Your Order</BaseButton>
        </Stack>
      </CardContent>
    </Card>
  );
};
