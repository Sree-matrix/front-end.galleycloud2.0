"use client";

import React from "react";
import { Container, Typography, Paper, Stack, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CommonPageHeroSection } from "@/components/app-header/common-page-hero";
import { ContactForm } from "../form/contact-form";

export const ContactUsPage: React.FC = () => {
  return (
    <Stack sx={{ backgroundColor: "background.paper", minHeight: "100vh" }}>
      <CommonPageHeroSection
        title="Talk to Our Aviation Support Team"
        subtitle="Have a question, need coverage details, or require operational assistance? Our team is ready to help."
      />

      <Container
        maxWidth="xl"
        sx={{
          paddingTop: { xs: "3rem", md: "5rem" },
          paddingBottom: { xs: "3rem", md: "5rem" },
          paddingLeft: { xs: "1rem", sm: "1.5rem", md: "4rem" },
          paddingRight: { xs: "1rem", sm: "1.5rem", md: "4rem" },
        }}
      >
        <Grid container spacing={"3rem"} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack sx={{ gap: "1.5rem" }}>
              <Stack>
                <Typography variant="h2" sx={{ marginBottom: "1rem" }}>
                  Get In Touch –<br />
                  General Inquiries
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    marginBottom: "2.5rem",
                    maxWidth: "26.25rem",
                  }}
                >
                  Have questions or need assistance? Our team is always ready to guide you on your
                  journey.
                </Typography>
              </Stack>

              <Stack sx={{ gap: "2rem" }}>
                <Stack sx={{ gap: "0.5rem" }}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Call Us (24/7 Operations Support)
                  </Typography>
                  <Stack
                    sx={{
                      flexDirection: "row",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        width: "2.25rem",
                        height: "2.25rem",
                        borderRadius: "0.5rem",
                        backgroundColor: "grey.200",
                      }}
                    >
                      <PhoneIcon sx={{ fontSize: "1.125rem", color: "secondary.dark" }} />
                    </Stack>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      +8801779717686
                    </Typography>
                  </Stack>
                </Stack>

                <Stack sx={{ gap: "0.5rem" }}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Email
                  </Typography>
                  <Stack
                    sx={{
                      flexDirection: "row",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        width: "2.25rem",
                        height: "2.25rem",
                        borderRadius: "0.5rem",
                        backgroundColor: "grey.200",
                      }}
                    >
                      <EmailIcon sx={{ fontSize: "1.125rem", color: "secondary.dark" }} />
                    </Stack>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      Support@uprankly.com
                    </Typography>
                  </Stack>
                </Stack>

                <Stack sx={{ gap: "0.5rem" }}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Our Headquarters
                  </Typography>
                  <Stack
                    sx={{
                      flexDirection: "row",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        width: "2.25rem",
                        height: "2.25rem",
                        borderRadius: "0.5rem",
                        backgroundColor: "grey.200",
                      }}
                    >
                      <LocationOnIcon sx={{ fontSize: "1.125rem", color: "secondary.dark" }} />
                    </Stack>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      New York, USA
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              variant="outlined"
              sx={{
                paddingTop: { xs: "1.5rem", md: "2rem" },
                paddingBottom: { xs: "1.5rem", md: "2rem" },
                paddingLeft: { xs: "1.5rem", md: "2rem" },
                paddingRight: { xs: "1.5rem", md: "2rem" },
                borderRadius: "0.75rem",
                borderColor: "#E2E8F0",
                boxShadow: "none",
              }}
            >
              <Stack
                direction="row"
                alignItems="flex-end"
                sx={{
                  marginBottom: "1.5rem",
                  paddingLeft: "1rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  borderLeft: "0.178rem solid",
                  borderColor: "primary.main",
                  backgroundColor: "background.paper",
                  borderRadius: "0 0.375rem 0.375rem 0",
                }}
              >
                <Typography variant="body2" sx={{ color: "text.primary" }}>
                  For urgent operational support, please <strong>Contact us directly.</strong>
                </Typography>
              </Stack>

              <ContactForm />
            </Paper>

            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                textAlign: "center",
                display: "block",
                marginTop: "1rem",
                lineHeight: 1.6,
              }}
            >
              Your Message Goes Directly To Our Support Team. We Typically
              <br />
              Respond Within One Business Day.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};
