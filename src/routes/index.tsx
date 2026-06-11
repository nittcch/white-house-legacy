import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ChefSpecialsSection } from "@/components/sections/ChefSpecialsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { MenuPreviewSection } from "@/components/sections/MenuPreviewSection";
import { ReservationSection } from "@/components/sections/ReservationSection";
import { GalleryPreviewSection } from "@/components/sections/GalleryPreviewSection";
import { ReviewsPreviewSection } from "@/components/sections/ReviewsPreviewSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "White House Restaurant — Premium Family Dining in Shirpur" },
      { name: "description", content: "White House Restaurant, Shirpur — Authentic Indian, Tandoor, Chinese & Seafood. Family-friendly dining, event hosting, and unforgettable flavors." },
      { property: "og:title", content: "White House Restaurant — Premium Family Dining in Shirpur" },
      { property: "og:description", content: "Authentic Indian, Tandoor, Chinese & Seafood. Family-friendly dining, event hosting, and unforgettable flavors." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ChefSpecialsSection />
      <WhyChooseSection />
      <MenuPreviewSection />
      <ReservationSection />
      <GalleryPreviewSection />
      <ReviewsPreviewSection />
      <ContactSection />
    </>
  );
}
