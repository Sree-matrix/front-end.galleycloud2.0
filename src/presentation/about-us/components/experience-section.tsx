"use client";

import React from "react";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";

export const ExperienceSection: React.FC = () => {
  return (
    <Stack
      direction={{ xs: "column-reverse", md: "row" }}
      sx={{
        width: "100%",
        backgroundColor: "grey.200",
      }}
    >
      <Stack
        sx={{
          flex: 1,
          justifyContent: "center",
          paddingTop: { xs: "2.5rem", md: "5rem" },
          paddingBottom: { xs: "3rem", md: "5rem" },
          paddingLeft: { xs: "1.5rem", md: "6rem" },
          paddingRight: { xs: "1.5rem", md: "6rem" },
          gap: "1.5rem",
        }}
      >
        <Typography variant="h2">
          Experience You Can Rely On — <br />
          When It Matters Most
        </Typography>

        <Typography variant="body2">
          Designed by professionals with real-world experience in aviation operations, catering
          coordination, and enterprise software.
        </Typography>

        <Stack sx={{ gap: "0.9rem", marginTop: "0.5rem" }}>
          {experiencePoints.map((item, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "text.primary",
              }}
            >
              • <strong>{item.label}</strong> — {item.desc}
            </Typography>
          ))}
        </Stack>

        <Stack
          sx={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginTop: "1rem",
          }}
        >
          <Stack
            sx={{
              width: "0.188rem",
              height: "1.4rem",
              backgroundColor: "primary.main",
            }}
          />
          <Typography
            sx={{
              fontSize: "0.9rem",
              color: "text.secondary",
              fontWeight: 500,
            }}
          >
            Aviation-first • Operations-driven • Proven globally.
          </Typography>
        </Stack>
      </Stack>

      <Stack
        sx={{
          position: "relative",
          flex: 1,
          minHeight: { xs: "32rem", md: "48rem" },
          height: { md: "auto" },
        }}
      >
        <Image
          src="/assets/images/about/about-exp.png"
          alt="Team discussion"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </Stack>
    </Stack>
  );
};

const experiencePoints = [
  {
    label: "Operational Experience",
    desc: "Built alongside operators, crew, and service partners in live aviation environments",
  },
  {
    label: "Aviation-Native Design",
    desc: "Workflows built for real constraints, not assumptions",
  },
  {
    label: "Reliability Over Features",
    desc: "Accuracy and accountability come before complexity",
  },
  {
    label: "Human Support Included",
    desc: "Real people step in when operations need it most",
  },
];
