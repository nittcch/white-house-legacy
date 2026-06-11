import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "@tanstack/react-router";

import heroBg from "@/assets/hero-bg.jpg";
import biryani from "@/assets/dish-biryani.jpg";
import paneerTikka from "@/assets/dish-paneer-tikka.jpg";
import eventSpace from "@/assets/event-space.jpg";
import chickenTikka from "@/assets/dish-chicken-tikka.jpg";
import murghMusallam from "@/assets/dish-murgh-musallam.jpg";

const galleryImages = [
  { src: heroBg, alt: "Restaurant Interior", span: "col-span-2 row-span-2" },
  { src: biryani, alt: "Chicken Biryani" },
  { src: paneerTikka, alt: "Paneer Tikka" },
  { src: eventSpace, alt: "Event Space", span: "col-span-2" },
  { src: chickenTikka, alt: "Chicken Tikka" },
  { src: murghMusallam, alt: "Murgh Musallam" },
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
              A glimpse into our world of flavors, celebrations, and memorable moments.
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
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-3 left-3 text-cream text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
