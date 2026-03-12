"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container, Typography, Collapse, IconButton, Stack, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PhoneIcon from '@mui/icons-material/Phone';
import RemoveIcon from "@mui/icons-material/Remove";
import { BaseButton } from "@/components/buttons/base";

interface IFAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  return (
    <Stack
      component="section"
      sx={{
        paddingTop: { xs: "3rem", md: "5rem" },
        paddingBottom: { xs: "3rem", md: "5rem" },
        background: "linear-gradient(to bottom, #ffffff 0%, #f5f7ff 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={"2.5rem"} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack sx={{ gap: "0.5rem", marginBottom: "2rem" }}>
              <Typography variant="h2">Let’s Explore Ways We Can Assist You</Typography>
              <Typography sx={{ fontSize: "1rem", color: "text.secondary" }}>
                Discover why top aviation crews trust GalleyCloud.
              </Typography>
            </Stack>

            <Stack sx={{ gap: "0.75rem" }}>
              {faqData.map((faq, index) => (
                <Stack
                  key={index}
                  sx={{
                    borderWidth: expandedIndex === index ? "0.125rem" : "0.036rem",
                    borderStyle: "solid",
                    borderColor: "#C7D1FF",
                    borderRadius: "0.75rem",
                    backgroundColor: "#f6f6f8",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Stack
                    onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                    sx={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: "1rem",
                      paddingBottom: "1rem",
                      paddingLeft: "1.25rem",
                      paddingRight: "1.25rem",
                      cursor: "pointer",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "text.primary",
                        fontSize: "1.125rem",
                        fontWeight: "500",
                      }}
                    >
                      {faq.question}
                    </Typography>
                    <IconButton size="small" sx={{ pointerEvents: "none" }}>
                      {expandedIndex === index ? (
                        <RemoveIcon fontSize="small" sx={{ color: "primary.main" }} />
                      ) : (
                        <AddIcon fontSize="small" sx={{ color: "primary.main" }} />
                      )}
                    </IconButton>
                  </Stack>

                  <Collapse in={expandedIndex === index}>
                    <Stack
                      sx={{
                        paddingLeft: "1.5rem",
                        paddingRight: "1.5rem",
                        paddingBottom: "1rem",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: "text.primary",
                          fontFamily: "Roboto,sans serif,",
                          fontSize: "1rem",
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </Stack>
                  </Collapse>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "center" },
              marginTop: { xs: "2rem", md: "5.5rem" },
            }}
          >
            <Stack
              sx={{
                width: { xs: "100%", sm: "22rem", md: "25rem" },
                minHeight: { xs: "11.25rem", md: "12.25rem" },
                borderRadius: "1rem",
                paddingTop: { xs: "1.125rem", md: "1.25rem" },
                paddingBottom: { xs: "1.125rem", md: "1.25rem" },
                paddingLeft: { xs: "1.125rem", md: "1.25rem" },
                paddingRight: { xs: "1.125rem", md: "1.25rem" },
                position: "relative",
                overflow: "hidden",
                backgroundColor: "grey.200",
                boxShadow: "0rem 0.375rem 1rem rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src="/assets/images/home/faq348.svg"
                alt=""
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "right center",
                  opacity: 0.9,
                }}
              />
              <Image
                src="/assets/images/home/faq349.svg"
                alt=""
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "right center",
                  opacity: 0.9,
                }}
              />

              <Stack
                sx={{
                  gap: "0.75rem",
                  position: "relative",
                  zIndex: 2,
                  maxWidth: { xs: "75%", md: "70%" },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: "1.25rem", md: "1.725rem" },
                    fontWeight: 500,
                    color: "primary.dark",
                    lineHeight: 1.2,
                  }}
                >
                  Questions? We&apos;re here to help
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "0.875rem",
                    color: "primary.light",
                    lineHeight: 1.5,
                  }}
                >
                  Reach out to us for support, inquiries, or to share your ideas.
                </Typography>

                <BaseButton LeftIcon={PhoneIcon} sx={{bgcolor:"white", color:"secondary.main"}} >
                  Get In Touch
                </BaseButton>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

const faqData: IFAQItem[] = [
  {
    question: "What is GalleyCloud?",
    answer:
      "GalleyCloud is a modern aviation catering platform that connects flight operators with premium caterers worldwide. We streamline the entire ordering process from kitchen to cabin.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Simply search for your airport, browse verified caterers, select your menu items, and place your order. Our concierge team manages the rest to ensure timely delivery.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No, there is no setup fee for our standard aviation crew package.",
  },
  {
    question: "Do you offer discounts for bulk orders?",
    answer: "Yes, we offer special pricing for corporate flight departments and bulk orders.",
  },
  {
    question: "What happens if I encounter technical issues?",
    answer:
      "Our technical support team is available 24/7 via the 'Get In Touch' button or live chat.",
  },
];
