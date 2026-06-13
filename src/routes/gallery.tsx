import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollReveal } from "@/components/ScrollReveal";

import whFacade from "@/assets/wh-facade.jpg.asset.json";
import whEntryNight from "@/assets/wh-entry-night.jpg.asset.json";
import whBanquetLong from "@/assets/wh-banquet-long.jpg.asset.json";
import whBooth from "@/assets/wh-booth-seating.jpg.asset.json";
import whGuestTable from "@/assets/wh-guest-table.jpg.asset.json";
import whDesign from "@/assets/wh-design.jpg.asset.json";
import whExteriorDay from "@/assets/wh-exterior-day.jpg.asset.json";
import whFoodSpread from "@/assets/wh-food-spread.jpg.asset.json";
import whMeals from "@/assets/wh-meals.jpg.asset.json";
import whChickenWings from "@/assets/wh-chicken-wings.jpg.asset.json";

import biryani from "@/assets/dish-biryani.jpg";
import paneerTikka from "@/assets/dish-paneer-tikka.jpg";
import chickenTikka from "@/assets/dish-chicken-tikka.jpg";
import murghMusallam from "@/assets/dish-murgh-musallam.jpg";
import muttonRogan from "@/assets/dish-mutton-rogan.jpg";
import fishCurry from "@/assets/dish-fish-curry.jpg";

const interior = [
  { src: whFacade.url, alt: "White House Facade" },
  { src: whEntryNight.url, alt: "Entrance at Night" },
  { src: whExteriorDay.url, alt: "Restaurant Exterior" },
  { src: whBanquetLong.url, alt: "Long Banquet Table" },
  { src: whBooth.url, alt: "Private Booth Seating" },
  { src: whGuestTable.url, alt: "Guests at Dinner" },
  { src: whDesign.url, alt: "Interior Design Detail" },
];

const dishes = [
  { src: whFoodSpread.url, alt: "White House Food Spread" },
  { src: whMeals.url, alt: "Signature Meals" },
  { src: whChickenWings.url, alt: "Chicken Wings" },
  { src: biryani, alt: "Chicken Hyderabadi Biryani" },
  { src: murghMusallam, alt: "Murgh Musallam" },
  { src: muttonRogan, alt: "Mutton Rogan Josh" },
  { src: chickenTikka, alt: "Tandoori Chicken Tikka" },
  { src: paneerTikka, alt: "Paneer Tikka" },
  { src: fishCurry, alt: "Fish Curry" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — White House Restaurant Shirpur" },
      { name: "description", content: "A visual journey through our restaurant, signature dishes, banquet hall and celebrations at White House Restaurant, Shirpur." },
      { property: "og:title", content: "Gallery — White House Restaurant" },
      { property: "og:description", content: "Photos of our food, interiors, and celebrations." },
      { property: "og:image", content: whFacade.url },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="A Visual Journey"
        title="Our Gallery"
        subtitle="Step inside our world — warm interiors, signature dishes, and unforgettable celebrations captured in every frame."
        image={whEntryNight.url}
      />

      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-burgundy mb-8">Inside White House</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[260px]">
            {interior.map((img, i) => (
              <ScrollReveal
                key={img.alt}
                delay={i * 0.05}
                className={i === 0 ? "col-span-2 row-span-2" : i === 3 ? "col-span-2" : ""}
              >
                <motion.div whileHover={{ scale: 1.02 }} className="relative w-full h-full rounded-xl overflow-hidden group">
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-cream text-sm font-medium">{img.alt}</span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-cream mb-8">Signature Dishes</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {dishes.map((img, i) => (
              <ScrollReveal key={img.alt} delay={i * 0.05}>
                <motion.div whileHover={{ scale: 1.03 }} className="relative aspect-square rounded-xl overflow-hidden group">
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  <span className="absolute bottom-3 left-3 text-cream text-xs sm:text-sm font-medium">{img.alt}</span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
