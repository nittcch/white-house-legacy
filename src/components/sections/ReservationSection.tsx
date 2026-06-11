import { motion } from "framer-motion";
import { MessageCircle, Phone, Clock, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ReservationSection() {
  const phone = "7507530889";
  const whatsappMessage = encodeURIComponent(
    "Hello White House Restaurant,\n\nI would like to reserve a table.\n\nDate:\nTime:\nNumber of Guests:\n\nPlease confirm availability."
  );

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-burgundy" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHpNMjAgMjBoNHY0aC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">Book Your Table</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-cream mt-3 mb-4">
              Reserve Your Table
            </h2>
            <p className="text-cream/70 max-w-2xl mx-auto">
              Skip the wait. Reserve your table via WhatsApp or call us directly for instant confirmation.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <motion.a
            href={`https://wa.me/91${phone}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white rounded-full font-semibold text-lg hover:bg-green-700 transition-colors shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Reserve on WhatsApp
          </motion.a>
          <motion.a
            href={`tel:${phone}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-cream text-burgundy rounded-full font-semibold text-lg hover:bg-cream/90 transition-colors shadow-xl"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Clock, title: "Open Daily", desc: "11:00 AM – 11:00 PM" },
            { icon: MapPin, title: "Location", desc: "Shirpur, Maharashtra" },
            { icon: Phone, title: "Contact", desc: "75075 30889" },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="text-center p-4 rounded-xl bg-cream/10 border border-cream/10">
                <item.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                <h4 className="text-cream font-medium text-sm">{item.title}</h4>
                <p className="text-cream/60 text-sm">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
