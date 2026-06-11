import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { reviews } from "@/lib/reviews-data";
import { Link } from "@tanstack/react-router";

const featuredReviews = reviews.slice(0, 6);

export function ReviewsPreviewSection() {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-burgundy mt-3 mb-4">
              What Our Guests Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gold fill-gold" />
              ))}
            </div>
            <p className="text-foreground font-semibold">4.6 / 5 Average Rating</p>
            <p className="text-muted-foreground text-sm">Based on 50+ reviews</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredReviews.map((review, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-gold/20 transition-all duration-300 h-full"
              >
                <Quote className="w-8 h-8 text-gold/30 mb-3" />
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`w-4 h-4 ${
                        j < review.rating ? "text-gold fill-gold" : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-4">{review.text}</p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                  <span className="text-sm font-medium text-burgundy">{review.name}</span>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 px-6 py-3 border border-burgundy text-burgundy rounded-full font-medium hover:bg-burgundy hover:text-cream transition-colors"
            >
              Read All Reviews
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
