"use client";

import React from "react";
import { Navigation, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Stack,
  Container,
  Typography,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import "swiper/css";
import "swiper/css/navigation";

interface ITestimonialProps {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export const TestimonialsSection: React.FC = () => {
  return (
    <Stack
      sx={{
        paddingTop: { xs: "5rem", md: "7.5rem" },
        paddingBottom: { xs: "5rem", md: "7.5rem" },
        backgroundColor: "#FFFFFF",
      }}
    >
      <Container maxWidth="xl">
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-end" },
            gap: "2rem",
            marginBottom: "3.75rem",
          }}
        >
          <Stack sx={{ maxWidth: "45rem", gap: "1.5rem" }}>
            <Typography variant="h2">
              Trusted By Aviation <br /> Professionals Worldwide
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#6b7280", fontSize: "1.1rem" }}
            >
              Operators choose GalleyCloud because reliability matters more than
              promises.
            </Typography>
          </Stack>

          <Stack
            sx={{
              flexDirection: "row",
              gap: "1rem",
              marginBottom: "0.5rem",
            }}
          >
            <IconButton
              className="testimonial-prev"
              sx={{
                width: "2.5rem",
                height: "2.5rem",
                backgroundColor: "#D9E1FF",
                color: "#4F46E5",
                "&:hover": { backgroundColor: "#C7D2FE" },
              }}
            >
              <img
                src="/assets/icons/arrow-left.svg"
                alt="Prev"
                style={{ width: 18 }}
              />
            </IconButton>
            <IconButton
              className="testimonial-next"
              sx={{
                width: "2.5rem",
                height: "2.5rem",
                backgroundColor: "#D9E1FF",
                color: "#4F46E5",
                "&:hover": { backgroundColor: "#C7D2FE" },
              }}
            >
              <img
                src="/assets/icons/arrow-right.svg"
                alt="Next"
                style={{ width: 18 }}
              />
            </IconButton>
          </Stack>
        </Stack>

        <Swiper
          modules={[Navigation, Mousewheel]}
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          grabCursor
          mousewheel={{ forceToAxis: true }}
          spaceBetween={30}
          slidesPerView={1.1}
          breakpoints={{
            900: { slidesPerView: 2.2 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide
              key={`${item.name}-${index}`}
              style={{ height: "auto" }}
            >
              <CrewStoryCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Stack>
  );
};

const CrewStoryCard = (props: ITestimonialProps) => {
  const { name, role, quote, image } = props;

  return (
    <Stack
      sx={{
        background: "#F6F6F8",
       
        padding: "2.5rem",
        height: "100%",
        minHeight: "100px",
        
        position: "relative",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
        border: "1px solid #F3F4F6",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" >
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            src={image}
            alt={name}
            sx={{ width: "3rem", height: "3rem" }}
          />
          <Stack>
            <Typography
              sx={{ fontWeight: 700, color: "#111827", fontSize: "1rem" }}
            >
              {name}
            </Typography>
            <Typography sx={{ color: "#6B7280", fontSize: "0.875rem" }}>
              {role}
            </Typography>
          </Stack>
        </Stack>

        <Box sx={{ color: "#111827", opacity: 0.8 }}>
          <FormatQuoteIcon
            sx={{ fontSize: "2rem", transform: "rotate(180deg)" }}
          />
        </Box>
      </Stack>

      <Typography
        sx={{
          marginTop: "1.5rem",
          fontSize: "1rem",
          lineHeight: 1.6,
          color: "#374151",
          fontWeight: 400,
        }}
      >
        {quote}
      </Typography>
    </Stack>
  );
};

const testimonials: ITestimonialProps[] = [
  {
    name: "Lori Weaver",
    role: "Catering Chief",
    image: "https://i.pravatar.cc/150?img=32",
    quote:
      "GalleyCloud has transformed our in-flight dining. The platform is easy to use, and the support team is always ready to assist. Highly recommended for any aviation crew!",
  },
  {
    name: "Jayson Kiehn",
    role: "Catering Owner",
    image: "https://i.pravatar.cc/150?img=12",
    quote:
      "I'm consistently impressed with GalleyCloud's service. The quality of the meals and the punctuality of deliveries are top-notch. It's a game-changer for our flight operations.",
  },
  {
    name: "Emily Roberts",
    role: "Flight Operations Manager",
    image: "https://i.pravatar.cc/150?img=47",
    quote:
      "The ordering experience is seamless and reliable. GalleyCloud saves us time while maintaining premium quality.",
  },
  {
    name: "Emily Roberts",
    role: "Flight Operations Manager",
    image: "https://i.pravatar.cc/150?img=47",
    quote:
      "The ordering experience is seamless and reliable. GalleyCloud saves us time while maintaining premium quality.",
  },
  {
    name: "Emily Roberts",
    role: "Flight Operations Manager",
    image: "https://i.pravatar.cc/150?img=47",
    quote:
      "The ordering experience is seamless and reliable. GalleyCloud saves us time while maintaining premium quality.",
  },
  {
    name: "Emily Roberts",
    role: "Flight Operations Manager",
    image: "https://i.pravatar.cc/150?img=47",
    quote:
      "The ordering experience is seamless and reliable. GalleyCloud saves us time while maintaining premium quality.",
  },
  {
    name: "Emily Roberts",
    role: "Flight Operations Manager",
    image: "https://i.pravatar.cc/150?img=47",
    quote:
      "The ordering experience is seamless and reliable. GalleyCloud saves us time while maintaining premium quality.",
  },
  {
    name: "Emily Roberts",
    role: "Flight Operations Manager",
    image: "https://i.pravatar.cc/150?img=47",
    quote:
      "The ordering experience is seamless and reliable. GalleyCloud saves us time while maintaining premium quality.",
  },
];
