"use client";

import React from "react";
import { Stack, Container, Typography, Divider } from "@mui/material";
import privacyPolicyContent from "@/core/static-contents/privacy-policy.json";
import { CommonPageHeroSection } from "@/components/app-header/common-page-hero";
import { TableOfContentCard } from "@/components/widgets/table-of-content-card";

export const TermsAndConditionsPage: React.FC = () => {
  return (
    <Stack>
      <CommonPageHeroSection
        title="Terms & conditions"
        subtitle=""
        seconderySubtitle="Last updated: October 30, 2017"
      />

      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          gap: "2.5rem",
          paddingY: { xs: "2rem", md: "3rem" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Stack
          sx={{
            flex: 1,
            position: { md: "sticky" },
            top: "6.875rem",
            alignSelf: "flex-start",
          }}
        >
          <TableOfContentCard title="Legal Agreements" sections={privacyPolicyContent?.content} />
        </Stack>

        <Stack
          sx={{
            width: "60rem",
            gap: "2.5rem",
          }}
        >
          {privacyPolicyContent?.content?.map((section, index) => (
            <Stack key={index} id={`section-${index}`} sx={{ scrollMarginTop: "7.5rem" }}>
              {section.title && (
                <>
                  <Stack
                    sx={{
                      position: "relative",
                      marginBottom: "0.75rem",
                      paddingLeft: "0.75rem",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        height: "60%",
                        width: "0.25rem",
                        backgroundColor: "primary.main",
                        borderRadius: "0.125rem",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 400,
                        color: "primary.main",
                      }}
                    >
                      {index + 1}. {section.title}
                    </Typography>
                  </Stack>

                  <Divider sx={{ marginBottom: "1.25rem" }} />
                </>
              )}
              <Typography
                variant="body1"
                sx={{
                  whiteSpace: "pre-line",
                  lineHeight: 1.75,
                  color: "text.secondary",
                }}
              >
                {renderContent(section.content)}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Stack>
  );
};

const renderContent = (content: unknown): string => {
  if (typeof content === "string") return content;

  if (Array.isArray(content)) {
    return content.map((item) => (typeof item === "string" ? item : item?.text || "")).join("\n\n");
  }

  if (typeof content === "object" && content !== null) {
    return (content as { text?: string }).text || "";
  }

  return "";
};
