"use client";

import Image from "next/image";
import { Container, Stack, Typography, useTheme } from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenuRounded";
import { BaseButton } from "@/components/buttons/base";

export const HeroSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        paddingTop: { xs: "2rem", md: "3rem" },
        paddingBottom: { xs: "0rem", md: "0rem" },
        background: theme.palette.grey[400],
        overflow: "hidden",
      }}
    >
      <Container
        sx={{
          paddingLeft: { xs: "1rem", sm: "1.5rem", md: "2rem" },
          paddingRight: { xs: "1rem", sm: "1.5rem", md: "2rem" },
        }}
      >
        <Stack
          sx={{
            marginBottom: { xs: "2rem", md: "3.5rem" },
            textAlign: "center",
            alignItems: "center",
            gap: { xs: "1rem", md: "1.25rem" },
          }}
        >
          <Typography variant="h1">
            Gourmet In-Flight Dining,
            <br />
            Simplified. From Kitchen to Cabin
            <br />
            in One Click.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: { xs: "90%", sm: "28rem", md: "34rem" },
              color: "text.primary",
            }}
          >
            The streamlined ordering platform built specifically for private aviation crews. Fast,
            secure, and delivered directly to your aircraft.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            sx={{
              paddingLeft: { xs: "1rem", sm: "0rem" },
              paddingTop: { xs: "0.5rem", md: "0.75rem" },
              paddingRight: { xs: "1rem", sm: "0rem" },
              width: { xs: "100%", sm: "auto" },
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: "0.75rem", md: "0.75rem" },
            }}
          >
            <BaseButton RightIcon={RestaurantMenuIcon} rounded>
              Start Your Order
            </BaseButton>
            <BaseButton variant="outlined" rounded>
              Login To Dashboard
            </BaseButton>
          </Stack>
        </Stack>

        <Stack
          sx={{
            width: { xs: "24.283rem", md: "100%" },
            maxWidth: { xs: "100%", sm: "95%", md: "90rem" },
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: { xs: "0.75rem", md: "1rem" },
            overflow: "hidden",
            boxShadow:
              "linear-gradient(0deg, #FFFFFF,  70%), radial-gradient(67.06% 42.03% at 50% 3.29%, #FFFFFF 0%,  #DEE4FFB2 70%)",
          }}
        >
          <Stack
            sx={{
              position: "relative",
              width: { xs: "24.283rem", lg: "100%" },
              height: { xs: "13.299rem", sm: "20rem", md: "28rem", lg: "29rem" },
              borderLeft: "0.25rem solid rgba(13, 24, 74, 0.1)",
              borderRight: "0.25rem solid rgba(13, 24, 74, 0.1)",
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
              overflow: "hidden",
            }}
          >
            <Image
              alt="GalleyCloud dashboard preview"
              src="/assets/images/home/hero.png"
              style={{ objectFit: "cover", objectPosition: "top center", boxShadow: "#0D184A 20%" }}
              priority
              fill
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
