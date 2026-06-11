import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ContactSection() {
  const phone = "7507530889";
  const address = "SHOP NO 01, KG NAGAR, NAKA, Karwand, Shirpur, Maharashtra 425405";
  const mapQuery = encodeURIComponent("White House Restaurant Shirpur Maharashtra");

  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-burgundy mt-3 mb-4">
              Visit Us Today
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We'd love to welcome you. Reach out for reservations, events, or any inquiries.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ScrollReveal>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-burgundy/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-burgundy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{address}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-burgundy/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-burgundy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href={`tel:${phone}`} className="text-sm text-muted-foreground hover:text-burgundy transition-colors">
                      {phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-burgundy/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-burgundy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                    <p className="text-sm text-muted-foreground">Open Daily: 11:00 AM – 11:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <motion.a
                  href={`tel:${phone}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-burgundy text-cream rounded-full font-medium hover:bg-burgundy/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </motion.a>
                <motion.a
                  href={`https://wa.me/91${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </motion.a>
                <motion.a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-dark rounded-full font-medium hover:bg-gold/90 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </motion.a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-border h-full min-h-[300px] bg-muted">
              <iframe
                title="White House Restaurant Location"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15000!2d74.0!3d20.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAwJzAwLjAiTiA3NMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
