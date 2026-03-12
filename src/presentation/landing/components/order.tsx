"use client";

import Image from "next/image";

import { Stack, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

interface IStepProps {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  label: string;
  reverse?: boolean;
}

const STEPS_DATA: IStepProps[] = [
  {
    number: "1",
    title: "Search nearest airport or catering",
    description:
      "Experience unparalleled convenience in aviation catering. Our platform helps you effortlessly locate nearby airports and connect with top-rated caterers, ensuring punctual, first-class service tailored for every journey. Elevate your in-flight dining experience with precision and ease.",
    imageSrc: "/assets/images/home/frame1.png",
    imageAlt: "Search nearest airport",
    label: "Search nearest airport or catering",
  },
  {
    number: "2",
    title: "Choose Your Caterer",
    description:
      "Gain access to an exclusive network of culinary experts, each rigorously assessed for their commitment to quality and dependability, guaranteeing a smooth and customized dining experience that precisely matches your needs. We partner with the best in the industry to bring you unparalleled service and exquisite cuisine.",
    imageSrc: "/assets/images/home/frame2.png",
    imageAlt: "Choose caterer",
    label: "Select the catering outlet",
    reverse: true,
  },
  {
    number: "3",
    title: "Select Your Cuisine & Submit Order",
    description:
      "Discover exquisite menus with gourmet dishes from around the world, designed for aviation crews' sophisticated palates. Easily personalize your choices, outlining specific dietary needs and preferences for a truly customized dining experience. Our team ensures smooth ordering and manages all logistics, from preparation to in-flight delivery, so you can focus on your journey and passengers.",
    imageSrc: "/assets/images/home/frame3.png",
    imageAlt: "Select cuisine",
    label: "Select your cuisine & submit order",
  },
];

const StepCard = (props: IStepProps) => {
  const { number, title, description, imageSrc, imageAlt, label, reverse = false } = props;

  return (
    <Grid
      container
      spacing={{ xs: "1.875rem", md: "3.125rem" }}
      alignItems="center"
      sx={{ marginBottom: { xs: "6.25rem", md: "8.75rem" } }}
    >
      <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: reverse ? 2 : 1 } }}>
        <Stack>
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
            sx={{
              width: "fit-content",
              paddingLeft: "1.5625rem",
              paddingRight: "1.5625rem",
              paddingTop: "0.625rem",
              paddingBottom: "0.625rem",
              marginBottom: "1.875rem",
              borderRadius: "62.4375rem",
              border: "0.125rem solid",
              borderColor: "divider",
              background: "grey.200",
            }}
          >
            <Stack
              sx={{
                width: "0.375rem",
                height: "0.375rem",
                backgroundColor: "primary.main",
                borderRadius: "50%",
              }}
            />
            <Typography variant="caption">{label}</Typography>
          </Stack>

          <Typography variant="h3" sx={{ fontSize: "3rem" }}>
            {number}. {title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              color: "text.secondary",
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: reverse ? 1 : 2 } }}>
        <Stack
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "30rem",
            marginX: "auto",
            aspectRatio: "7.5 / 6.6",
            overflow: "hidden",
          }}
        >
          <Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 48rem) 100vw, 35rem" />
        </Stack>
      </Grid>
    </Grid>
  );
};

export const HowToOrderSection = () => {
  return (
    <Stack
      sx={{
        paddingTop: { xs: "5rem", md: "7.5rem" },
        paddingBottom: { xs: "5rem", md: "1.5rem" },
        background: "grey.200",
      }}
    >
      <Container maxWidth="xl">
        <Stack sx={{ textAlign: "center", marginBottom: { xs: "5rem", md: "5rem" } }}>
          <Typography
            variant="h2"
            sx={{
              marginBottom: "0.5rem",
            }}
          >
            How Easy Is It To Place An Order?
          </Typography>

          <Typography variant="body2">
            Whether you are landing in Teterboro, Dubai, or Nice, access a curated network of
            top-tier kitchens ready to serve.
          </Typography>
        </Stack>

        {STEPS_DATA.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </Container>
    </Stack>
  );
};
