"use client";

import { Stack } from "@mui/material";
import { deferComponent } from "@/core/utils/defer-component";

const HeroSection = deferComponent(
  () => import("./components/hero"),
  (module) => module.HeroSection,
);
const GlobalReachSection = deferComponent(
  () => import("@/components/reach-section"),
  (module) => module.GlobalReachSection,
);
const HowToOrderSection = deferComponent(
  () => import("./components/order"),
  (module) => module.HowToOrderSection,
);
const TestimonialsSection = deferComponent(
  () => import("@/components/testimonials"),
  (module) => module.TestimonialsSection,
);
const InFlightDiningHero = deferComponent(
  () => import("@/components/ratings-section"),
  (module) => module.InFlightDiningHero,
);
const GalleyCloudInsights = deferComponent(
  () => import("./components/cloud-insights"),
  (module) => module.GalleyCloudInsights,
);
const FAQSection = deferComponent(
  () => import("@/components/faq-section"),
  (module) => module.FAQSection,
);
const CrewStoriesSection = deferComponent(
  () => import("./components/crew-stories"),
  (module) => module.CrewStoriesSection,
);

export const LandingPage: React.FC = () => {
  return (
    <Stack>
      <HeroSection />
      <GlobalReachSection />
      <HowToOrderSection />
      <TestimonialsSection />
      <InFlightDiningHero />
      <GalleyCloudInsights />
      <FAQSection />
      <CrewStoriesSection />
    </Stack>
  );
};
