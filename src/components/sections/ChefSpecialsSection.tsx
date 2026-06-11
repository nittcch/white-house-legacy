import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "@tanstack/react-router";

import vegThali from "@/assets/dish-veg-thali.jpg";
import murghMusallam from "@/assets/dish-murgh-musallam.jpg";
import biryani from "@/assets/dish-biryani.jpg";
import paneerKingdom from "@/assets/dish-paneer-kingdom.jpg";
import chickenTikka from "@/assets/dish-chicken-tikka.jpg";
import fishCurry from "@/assets/dish-fish-curry.jpg";
import muttonRogan from "@/assets/dish-mutton-rogan.jpg";
import paneerTikka from "@/assets/dish-paneer-tikka.jpg";

const specials = [
  { name: "White House Special Veg", image: vegThali, desc: "An elaborate vegetarian thali featuring our finest veg curries, breads, and rice" },
  { name: "Murgh Musallam", image: murghMusallam, desc: "Whole roasted chicken stuffed with spiced minced meat and eggs" },
  { name: "Chicken Hyderabadi Dum Biryani", image: biryani, desc: "Layered saffron rice with tender chicken, slow-cooked in sealed clay pot" },
  { name: "Paneer Kingdom", image: paneerKingdom, desc: "A royal assortment of our best paneer preparations on one platter" },
  { name: "Chicken Tikka", image: chickenTikka, desc: "Perfectly charred tandoori chicken pieces marinated in yogurt and spices" },
  { name: "Fish Curry", image: fishCurry, desc: "Kerala-style coconut-based curry with fresh fish and aromatic spices" },
  { name: "Mutton Rogan Josh", image: muttonRogan, desc: "Rich Kashmiri-style mutton curry with deep red gravy and warm spices" },
  { name: "Paneer Tikka", image: paneerTikka, desc: "Grilled cottage cheese cubes with bell peppers and signature marinade" },
];

export function ChefSpecialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">Signature Creations</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-cream mt-3 mb-4">
              Chef's Specials
            </h2>
            <p className="text-cream/60 max-w-2xl mx-auto">
              Our most celebrated dishes, perfected over years of culinary mastery and loved by thousands of guests.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specials.map((dish, i) => (
            <ScrollReveal key={dish.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden bg-dark border border-cream/10 hover:border-gold/30 transition-colors"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 bg-gold/90 text-dark text-xs font-bold px-2 py-1 rounded-full">
                    <Star className="w-3 h-3" /> SPECIAL
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-cream mb-1">{dish.name}</h3>
                  <p className="text-sm text-cream/50 line-clamp-2">{dish.desc}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold rounded-full font-medium hover:bg-gold hover:text-dark transition-colors"
            >
              View All Specials
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
