"use client";
import Image from "next/image";
import { Container, Stack, Typography } from "@mui/material";

export const WhyGalleyCloudExists = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        paddingTop: { xs: "2.5rem", md: "4.5rem" },
        paddingBottom: { xs: "2.5rem", md: "4.5rem" },
      }}
    >
      <Container maxWidth="xl">
        <Stack
          sx={{
            rowGap: { xs: "2rem", md: "3rem" },
          }}
        >
          <Stack
            sx={{
              maxWidth: "38.75rem",
              rowGap: "1rem",
            }}
          >
            <Typography variant="h2">Why GalleyCloud Exists</Typography>

            <Typography
              variant="body2"
              sx={{
                fontSize: "1rem",
                lineHeight: "1.6",
                color: "text.primary",
              }}
            >
              In-flight catering is complex. Last-minute changes, inconsistent suppliers, and manual
              coordination lead to delays and costs. GalleyCloud solves this by providing a platform
              to manage catering with confidence worldwide.
            </Typography>
          </Stack>

          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              columnGap: "1.5rem",
              rowGap: "1.5rem",
            }}
          >
            <Stack
              sx={{
                borderWidth: "0.125rem",
                borderStyle: "solid",
                borderColor: "#eeeeee",
                borderRadius: "0.75rem",
                padding: "1.5rem",
                rowGap: "1rem",
              }}
            >
              <Stack
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "grey.200",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/assets/images/about/flight.svg"
                  alt="Flight icon"
                  width={20}
                  height={20}
                />
              </Stack>

              <Typography variant="h4">Aviation-First Thinking</Typography>

              <Typography
                sx={{
                  fontSize: "0.875rem",
                  lineHeight: "1.7",
                  color: "text.secondary",
                }}
              >
                We focus on aviation needs, not generic solutions. Our features address real
                constraints, timelines, and service expectations in the air.
              </Typography>
            </Stack>

            <Stack
              sx={{
                borderWidth: "0.125rem",
                borderStyle: "solid",
                borderColor: "#eeeeee",
                borderRadius: "0.75rem",
                padding: "1.5rem",
                rowGap: "1rem",
              }}
            >
              <Stack
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "grey.200",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image src="/assets/images/about/cube.svg" alt="Cube icon" width={20} height={20} />
              </Stack>

              <Typography variant="h4">Operational Reliability</Typography>

              <Typography
                sx={{
                  fontSize: "0.875rem",
                  lineHeight: "1.7",
                  color: "text.secondary",
                }}
              >
                Accuracy, consistency, and accountability matter more than features. Our platform
                prioritizes order precision, supplier verification, and real-time visibility.
              </Typography>
            </Stack>

            <Stack
              sx={{
                borderWidth: "0.125rem",
                borderStyle: "solid",
                borderColor: "#eeeeee",
                borderRadius: "0.75rem",
                padding: "0.75rem",
                rowGap: "1rem",
              }}
            >
              <Stack
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "grey.200",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/assets/images/about/global.svg"
                  alt="Global icon"
                  width={20}
                  height={20}
                />
              </Stack>

              <Typography variant="h4">Global Execution, Local Expertise</Typography>

              <Typography
                sx={{
                  fontSize: "0.875rem",
                  lineHeight: "1.7",
                  color: "text.secondary",
                }}
              >
                We work with vetted local caterers worldwide, ensuring regional quality standards
                while maintaining global consistency.
              </Typography>
            </Stack>

            <Stack
              sx={{
                borderWidth: "0.125rem",
                borderStyle: "solid",
                borderColor: "#eeeeee",
                borderRadius: "0.75rem",
                padding: "1.5rem",
                rowGap: "1rem",
              }}
            >
              <Stack
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "grey.200",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/assets/images/about/people.svg"
                  alt="People icon"
                  width={20}
                  height={20}
                />
              </Stack>

              <Typography variant="h4">Partnership, Not Just Software</Typography>

              <Typography
                sx={{
                  fontSize: "0.875rem",
                  lineHeight: "1.7",
                  color: "text.secondary",
                }}
              >
                We support operators with real people, not just dashboards. When something goes
                wrong, you’re not alone.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
