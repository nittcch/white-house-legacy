import { motion } from "framer-motion";
import { Leaf, Flame, Fish, Users, UtensilsCrossed, PartyPopper } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const highlights = [
  { icon: Leaf, label: "Fresh Ingredients", desc: "Farm-fresh vegetables and premium quality meats sourced daily" },
  { icon: Flame, label: "Tandoori Specialties", desc: "Authentic clay oven cooking for that perfect smoky flavor" },
  { icon: Fish, label: "Chinese Cuisine", desc: "Flavorful Indo-Chinese dishes with the right balance of spices" },
  { icon: Users, label: "Family Atmosphere", desc: "Spacious seating designed for comfortable family dining" },
  { icon: UtensilsCrossed, label: "Veg & Non-Veg", desc: "Extensive menu catering to all dietary preferences" },
  { icon: PartyPopper, label: "Event Hosting", desc: "Birthdays, anniversaries, and corporate gatherings" },
];

export function AboutSection() {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">Our Story</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-burgundy mt-3 mb-4">
              A Legacy of Flavor in Shirpur
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              White House Restaurant has become one of Shirpur's most beloved family dining destinations. 
              From our signature biryanis to our clay-oven tandoori delicacies, every dish tells a story of 
              passion, tradition, and the finest ingredients. Whether you're celebrating a special occasion 
              or simply craving an authentic meal, we welcome you to experience dining at its finest.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-burgundy/10 flex items-center justify-center mb-4 group-hover:bg-burgundy/20 transition-colors">
                  <item.icon className="w-6 h-6 text-burgundy" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
