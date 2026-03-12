"use client";

import Image from "next/image";
import { Stack, Container, Typography, Avatar, Rating } from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenuRounded";
import { BaseButton } from "@/components/buttons/base";

export const InFlightDiningHero = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "background.paper",
        paddingTop: "3.75rem",
        paddingBottom: "3.75rem",
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          sx={{
            position: "relative",
            backgroundColor: "grey.200",
            borderRadius: "1.75rem",
            minHeight: "26.25rem",
            overflow: "hidden",
          }}
        >
          <Stack
            sx={{
              flex: { xs: "1", md: "0.55" },
              padding: { xs: "2rem", md: "3.5rem" },
              zIndex: 2,
            }}
          >
            <Typography
              variant="h2"
              sx={{ color: "primary.dark", marginBottom: "1rem" }}
            >
              Leave Your In-Flight Dining Up To The Pros.
            </Typography>

            <Typography
              sx={{
                fontSize: "0.9375rem",
                color: "primary.light",
                maxWidth: "32rem",
                marginBottom: "2rem",
                lineHeight: 1.6,
              }}
            >
              Crews all over the world trust GalleyCloud. Join thousands of
              operators who experience the future of gourmet catering at their
              fingertips!
            </Typography>

            <Stack
              sx={{
                flexDirection: "row",
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "2.5rem",
              }}
            >
              <BaseButton RightIcon={RestaurantMenuIcon} rounded>
                Start Your Order
              </BaseButton>

              <BaseButton sx={{ bgcolor: "white", color: "text.secondary" }}>
                Talk to Our Team
              </BaseButton>
            </Stack>

            <Stack
              sx={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Stack sx={{ flexDirection: "row", display: "flex" }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Avatar
                    key={i}
                    src={`https://i.pravatar.cc/150?img=${i + 10}`}
                    sx={{
                      width: "2.25rem",
                      height: "2.25rem",
                      border: "0.125rem solid #ffffff",
                      marginLeft: i === 1 ? 0 : "-0.5rem",
                    }}
                  />
                ))}
              </Stack>

              <Stack>
                <Rating
                  value={5}
                  readOnly
                  size="small"
                  sx={{ color: "warning.main" }}
                />
                <Typography
                  sx={{
                    fontSize: "0.8125rem",
                    color: "primary.light",
                    fontWeight: 500,
                  }}
                >
                  5/5 (125+ Customer Reviews)
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: { xs: "0%", md: "45%" },
              display: { xs: "none", md: "block" },
              zIndex: 1,
            }}
          >
            <Image
              src="/assets/images/home/rating.svg"
              alt="In-flight dining food"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "left center",
              }}
            />
          </Stack>
          <Stack
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: { xs: "0%", md: "45%" },
              display: { xs: "none", md: "block" },
              zIndex: 1,
            }}
          >
            <Image
              src="/assets/images/home/Vector348.png"
              alt="In-flight dining food"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "left center",
              }}
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
