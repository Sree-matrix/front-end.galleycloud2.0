"use client";

import React from "react";
import { Stack } from "@mui/material";
import { deferComponent } from "@/core/utils/defer-component";
import { CommonPageHeroSection } from "@/components/app-header/common-page-hero";

const WhyGalleyCloudExists = deferComponent(
  () => import("./components/why-galleycloud-exists"),
  (module) => module.WhyGalleyCloudExists,
);

const ExperienceSection = deferComponent(
  () => import("./components/experience-section"),
  (module) => module.ExperienceSection,
);

const GlobalReachSection = deferComponent(
  () => import("../../components/reach-section"),
  (module) => module.GlobalReachSection,
);

const TestimonialsSection = deferComponent(
  () => import("../../components/testimonials"),
  (module) => module.TestimonialsSection,
);

const FAQSection = deferComponent(
  () => import("../../components/faq-section"),
  (module) => module.FAQSection,
);

const InFlightDiningHero = deferComponent(
  () => import("../../components/ratings-section"),
  (module) => module.InFlightDiningHero,
);

const HeadSection: React.FC = () => {
  return (
    <CommonPageHeroSection
      title="About Us"
      subtitle="GalleyCloud transforms in-flight catering, linking operators with top caterers for simple ordering and reliable support."
    />
  );
};
export const AboutUsPage: React.FC = () => {
  return (
    <Stack>
      <HeadSection />
      <WhyGalleyCloudExists />
      <ExperienceSection />
      <GlobalReachSection />
      <TestimonialsSection />
      <InFlightDiningHero />
      <FAQSection />
    </Stack>
  );
};
