import { motion } from "framer-motion";
import { Users, Maximize, Sparkles, Leaf, Zap, ListChecks, Carrot, PartyPopper } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const reasons = [
  { icon: Users, title: "Family-Friendly Dining", desc: "Welcoming atmosphere for guests of all ages" },
  { icon: Maximize, title: "Spacious Seating", desc: "Comfortable seating for small and large groups" },
  { icon: Sparkles, title: "Premium Ambience", desc: "Elegant decor with warm, inviting lighting" },
  { icon: Leaf, title: "Fresh Ingredients", desc: "Daily sourced produce and premium quality meats" },
  { icon: Zap, title: "Fast Service", desc: "Attentive staff ensuring timely service" },
  { icon: ListChecks, title: "Large Variety", desc: "150+ dishes across Indian, Chinese & Tandoor" },
  { icon: Carrot, title: "Veg & Non-Veg", desc: "Comprehensive menu for all dietary preferences" },
  { icon: PartyPopper, title: "Event Hosting", desc: "Perfect venue for birthdays and celebrations" },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">Why White House</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-burgundy mt-3 mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We go above and beyond to create dining experiences that keep families coming back.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-burgundy/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-7 h-7 text-burgundy" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
