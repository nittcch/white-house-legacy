import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "@tanstack/react-router";

import whFacade from "@/assets/wh-facade.jpg.asset.json";
import whEntryNight from "@/assets/wh-entry-night.jpg.asset.json";
import whBanquetLong from "@/assets/wh-banquet-long.jpg.asset.json";
import whBooth from "@/assets/wh-booth-seating.jpg.asset.json";
import whGuestTable from "@/assets/wh-guest-table.jpg.asset.json";
import whDesign from "@/assets/wh-design.jpg.asset.json";
import whFoodSpread from "@/assets/wh-food-spread.jpg.asset.json";

const galleryImages = [
  { src: whFacade.url, alt: "White House Facade", span: "col-span-2 row-span-2" },
  { src: whEntryNight.url, alt: "Entrance at Night" },
  { src: whBanquetLong.url, alt: "Banquet Hall Setup" },
  { src: whBooth.url, alt: "Private Booth Seating", span: "col-span-2" },
  { src: whGuestTable.url, alt: "Guests Dining" },
  { src: whDesign.url, alt: "Restaurant Interior Design" },
];

export function GalleryPreviewSection() {
  return (
    <section className="py-20 sm:py-28 bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">Visual Journey</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-cream mt-3 mb-4">
              Gallery
            </h2>
            <p className="text-cream/60 max-w-2xl mx-auto">
              Step inside our world of warm interiors, signature flavors, and unforgettable celebrations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[220px]">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={img.alt} delay={i * 0.08} className={img.span || ""}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-full h-full rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                <span className="absolute bottom-3 left-3 text-cream text-sm font-medium">
                  {img.alt}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold rounded-full font-medium hover:bg-gold hover:text-dark transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
