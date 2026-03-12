"use client";

import Image from "next/image";

import { Stack, Container, Typography } from "@mui/material";

import { BaseButton } from "@/components/buttons/base";

interface IInsightData {
  id: number;
  image: string;
  title: string;
  description: string;
  meta: string;
}

interface IInsightCardProps {
  item: IInsightData;
  isLarge?: boolean;
}

const InsightCard = (props: IInsightCardProps) => {
  const { item, isLarge = false } = props;

  return (
    <Stack
      sx={{
        position: "relative",
        width: "100%",
        paddingBottom: "100%",
        borderRadius: "0.75rem",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover .hoverContent": {
          opacity: 1,
          transform: "translateY(0)",
        },
        "&:hover .baseTitle": {
          opacity: 0,
        },
      }}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        style={{ objectFit: "cover" }}
      />

      <Stack
        className="baseTitle"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: isLarge ? "1rem 1.25rem" : "0.75rem 1rem",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0))",
          transition: "opacity 0.3s ease",
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            color: "common.white",
            fontSize: isLarge ? "1rem" : "0.875rem",
            fontWeight: 600,
            lineHeight: 1.4,
          }}
        >
          {item.title}
        </Typography>
      </Stack>

      <Stack
        className="hoverContent"
        sx={{
          position: "absolute",
          inset: 0,
          padding: isLarge ? "1.25rem" : "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.25))",
          opacity: 0,
          transform: "translateY(1.25rem)",
          transition: "all 0.4s ease",
          zIndex: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "common.white",
            fontSize: isLarge ? "1rem" : "0.875rem",
            fontWeight: 600,
            fontFamily: "Roboto, sans-serif",
            lineHeight: 1.4,
            marginBottom: "0.375rem",
          }}
        >
          {item.title}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "divider",
            fontSize: isLarge ? "0.875rem" : "0.75rem",
            marginBottom: "0.375rem",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          {item.description}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "grey.300",
            fontSize: isLarge ? "0.75rem" : "0.6875rem",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          {item.meta}
        </Typography>
      </Stack>
    </Stack>
  );
};

export const GalleyCloudInsights = () => {
  return (
    <Stack
      sx={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="xl">
        <Stack
          sx={{
            textAlign: "center",
            marginBottom: "3.75rem",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 500,
              color: "text.primary",
              marginBottom: "1.25rem",
            }}
          >
            Stay Informed: GalleyCloud Insights
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: "1rem",
              maxWidth: "43.75rem",
              marginBottom: "2.5rem",
              color: "text.secondary",
              lineHeight: 1.6,
            }}
          >
            Explore the latest insights on in-flight dining, aviation catering
            trends, and culinary innovations. Stay informed with GalleyCloud.
          </Typography>

          <BaseButton variant="outlined" >Explore Our Blog</BaseButton>
        </Stack>

        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            display: "flex",
            gap: "1.5rem",
          }}
        >
          <Stack sx={{ flex: 1 }}>
            <InsightCard item={INSIGHTS_DATA[0]} isLarge />
          </Stack>

          <Stack
            sx={{
              flex: 1,
              display: { xs: "flex", md: "grid" },
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.5rem",
            }}
          >
            {INSIGHTS_DATA.slice(1).map((item) => (
              <InsightCard key={item.id} item={item} />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

const INSIGHTS_DATA: IInsightData[] = [
  {
    id: 1,
    image: "/assets/images/home/cloud1.jpg",
    title: "Cloud Storage vs. Local Storage: Which One is Right for You?",
    description:
      "Are you still storing important files on physical hard drives? This article compares local and cloud storage.",
    meta: "Published on March 22, 2024",
  },
  {
    id: 2,
    image: "/assets/images/home/cloud2.jpg",
    title: "Why Airlines Are Moving to Cloud Galleys",
    description:
      "Learn how cloud-based galley systems improve operational efficiency.",
    meta: "Published on March 18, 2024",
  },
  {
    id: 3,
    image: "/assets/images/home/cloud3.jpg",
    title: "Future of In-Flight Catering",
    description:
      "A deep dive into digital transformation in aviation catering.",
    meta: "Published on March 12, 2024",
  },
  {
    id: 4,
    image: "/assets/images/home/cloud4.jpg",
    title: "Smart Inventory in Aviation",
    description: "Real-time inventory tracking using cloud-powered platforms.",
    meta: "Published on March 05, 2024",
  },
  {
    id: 5,
    image: "/assets/images/home/cloud5.jpg",
    title: "Cloud Security for Airlines",
    description: "How airlines keep operational and customer data secure.",
    meta: "Published on Feb 28, 2024",
  },
];
