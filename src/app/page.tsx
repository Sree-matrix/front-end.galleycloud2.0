import { CommonLayout } from "@/layouts/common";
import { LandingPage } from "@/presentation/landing";

export const metadata = {
  title: "GalleyCloud - Elevate Your In-Flight Experience",
  description:
    "Explore a wide range of catering options tailored for flight attendants and passengers. Discover premium services, place orders, and enhance your travel experience with GalleyCloud's customer portal.",
};

export default async function Page() {
  return (
    <CommonLayout>
      <LandingPage />
    </CommonLayout>
  );
}
