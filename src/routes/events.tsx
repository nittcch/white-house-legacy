import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Users, Cake, Briefcase, Sparkles, Heart, PartyPopper } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import eventSpace from "@/assets/event-space.jpg";
import whInterior from "@/assets/wh-interior.jpg.asset.json";

const eventTypes = [
  { icon: Cake, title: "Birthday Parties", desc: "Cake-cutting setup, custom decoration, and dedicated service for memorable celebrations." },
  { icon: Heart, title: "Anniversaries", desc: "Intimate candlelit setup with rose decoration and personalized menu curation." },
  { icon: Users, title: "Family Get-Togethers", desc: "Spacious banquet seating for 50+ guests with a versatile multi-cuisine spread." },
  { icon: Briefcase, title: "Corporate Dinners", desc: "Professional ambience, projector available, and timed-course service for business events." },
  { icon: PartyPopper, title: "Engagement & Pre-Wedding", desc: "Premium decor, stage setup, and live-counter buffet options for grand functions." },
  { icon: Sparkles, title: "Festive Celebrations", desc: "Special festive thalis and group menus for Diwali, Eid, New Year and more." },
];

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Celebrations — White House Restaurant Shirpur" },
      { name: "description", content: "Host birthdays, anniversaries, family gatherings, engagements, and corporate dinners at White House Restaurant, Shirpur. Custom menus & decor available." },
      { property: "og:title", content: "Events & Celebrations — White House Restaurant" },
      { property: "og:description", content: "Premium banquet space and curated menus for every occasion." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const phone = "7507530889";
  const wa = encodeURIComponent(
    "Hello White House Restaurant,\n\nI'd like to inquire about hosting an event.\n\nEvent type:\nDate:\nNumber of guests:\nBudget per head:\n\nPlease share details."
  );

  return (
    <>
      <PageHeader
        eyebrow="Celebrations & Gatherings"
        title="Events at White House"
        subtitle="From intimate anniversaries to grand corporate dinners — our banquet hall, curated menus, and warm hospitality make every occasion unforgettable."
        image={eventSpace}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <motion.a
            href={`https://wa.me/91${phone}?text=${wa}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-semibold shadow-xl"
          >
            <MessageCircle className="w-5 h-5" /> Inquire on WhatsApp
          </motion.a>
          <motion.a
            href={`tel:${phone}`}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-dark rounded-full font-semibold shadow-xl"
          >
            <Phone className="w-5 h-5" /> Call 75075 30889
          </motion.a>
        </div>
      </PageHeader>

      <section className="py-20 sm:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">Occasions We Host</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-burgundy mt-3 mb-4">
                Made for Every Moment
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((e, i) => (
              <ScrollReveal key={e.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="h-full p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-burgundy/10 flex items-center justify-center mb-4">
                    <e.icon className="w-6 h-6 text-burgundy" />
                  </div>
                  <h3 className="text-xl font-semibold font-heading text-burgundy mb-2">{e.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <img
              src={whInterior.url}
              alt="White House Banquet Hall"
              className="rounded-2xl shadow-2xl w-full"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">Banquet Space</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-cream mt-3 mb-5">
              Spacious. Elegant. Yours.
            </h2>
            <p className="text-cream/70 leading-relaxed mb-4">
              Our dedicated banquet hall comfortably hosts up to 80 guests with versatile seating arrangements,
              full A/C, ambient lighting, and customizable decor — perfect for both intimate dinners and grand celebrations.
            </p>
            <ul className="space-y-2 text-cream/70 text-sm">
              <li>✓ Seating for up to 80 guests</li>
              <li>✓ Customizable menu &amp; live counters</li>
              <li>✓ Theme decoration on request</li>
              <li>✓ Cake-cutting &amp; stage setup included</li>
              <li>✓ Ample parking on premises</li>
            </ul>
            <motion.a
              href={`https://wa.me/91${phone}?text=${wa}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gold text-dark rounded-full font-semibold"
            >
              <MessageCircle className="w-5 h-5" /> Book the Hall
            </motion.a>
          </ScrollReveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
