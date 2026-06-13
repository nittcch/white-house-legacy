import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, Quote, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ReservationSection } from "@/components/sections/ReservationSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { reviews } from "@/lib/reviews-data";
import whInterior from "@/assets/wh-interior.jpg.asset.json";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Guest Reviews — White House Restaurant Shirpur" },
      { name: "description", content: "Read 50+ reviews from happy guests at White House Restaurant, Shirpur. Rated 4.6/5 for food, ambience & family dining." },
      { property: "og:title", content: "Reviews — White House Restaurant" },
      { property: "og:description", content: "What our guests say about us. 4.6/5 stars." },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const avg = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);
  const wa = encodeURIComponent("Hello White House Restaurant,\n\nI'd like to share my feedback.");

  return (
    <>
      <PageHeader
        eyebrow="Loved by Shirpur"
        title="Guest Reviews"
        subtitle={`${avg} / 5 average rating · Based on ${reviews.length}+ verified guest reviews across Google, Zomato & in-house.`}
        image={whInterior.url}
      >
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-6 h-6 text-gold fill-gold" />
          ))}
        </div>
      </PageHeader>

      <section className="py-16 sm:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ScrollReveal key={i} delay={(i % 6) * 0.05}>
                <motion.div whileHover={{ y: -4 }} className="h-full flex flex-col p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all">
                  <Quote className="w-8 h-8 text-gold/30 mb-3" />
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className={`w-4 h-4 ${j < r.rating ? "text-gold fill-gold" : "text-muted-foreground/30"}`} />
                    ))}
                  </div>
                  <p className="text-sm text-foreground leading-relaxed mb-4">{r.text}</p>
                  {r.photo && (
                    <div className="mb-4 rounded-lg overflow-hidden aspect-[4/3]">
                      <img src={r.photo} alt={`Photo by ${r.name}`} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                    <span className="text-sm font-medium text-burgundy">{r.name}</span>
                    <span className="text-xs text-muted-foreground">{r.date}</span>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-14">
              <p className="text-muted-foreground mb-4">Loved your visit? We'd love to hear from you.</p>
              <motion.a
                href={`https://wa.me/917507530889?text=${wa}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-semibold"
              >
                <MessageCircle className="w-5 h-5" /> Share Your Feedback
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ReservationSection />
    </>
  );
}
