import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, PartyPopper, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  const phone = "7507530889";
  const whatsappMessage = encodeURIComponent(
    "Hello White House Restaurant,\n\nI would like to make a reservation.\n\nDate:\nTime:\nNumber of Guests:\n\nPlease confirm availability."
  );
  const eventMessage = encodeURIComponent(
    "Hello White House Restaurant,\n\nI would like to inquire about an event booking.\n\nEvent Type:\nDate:\nExpected Guests:\nFood Preference:\n\nPlease share availability and package details."
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="White House Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-gold text-sm sm:text-base uppercase tracking-[0.3em] mb-4">
            Premium Family Restaurant & Dining Experience
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold font-heading text-cream tracking-tight mb-4"
        >
          WHITE HOUSE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-cream/80 tracking-widest uppercase mb-6"
        >
          Authentic Indian &bull; Tandoor &bull; Chinese &bull; Seafood &bull; Biryani
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg text-cream/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Serving unforgettable flavors, family celebrations, and memorable dining experiences in Shirpur.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10"
        >
          {[
            { icon: Star, label: "4.6/5 Rating", sub: "50+ Reviews" },
            { icon: PartyPopper, label: "150+", sub: "Signature Dishes" },
            { icon: Star, label: "Family", sub: "Friendly Dining" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-2 text-cream/90 bg-cream/10 backdrop-blur-sm rounded-full px-4 py-2">
              <stat.icon className="w-4 h-4 text-gold" />
              <div className="text-left">
                <span className="text-sm font-semibold">{stat.label}</span>
                {stat.sub && <span className="text-xs text-cream/60 block">{stat.sub}</span>}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-burgundy text-cream rounded-full font-medium hover:bg-burgundy/90 transition-colors shadow-lg"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <a
            href={`https://wa.me/91${phone}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Reservation
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=White+House+Restaurant+Shirpur+Maharashtra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-dark rounded-full font-medium hover:bg-gold/90 transition-colors shadow-lg"
          >
            <MapPin className="w-4 h-4" />
            Get Directions
          </a>
          <a
            href={`https://wa.me/91${phone}?text=${eventMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cream/15 text-cream border border-cream/30 rounded-full font-medium hover:bg-cream/25 transition-colors"
          >
            <PartyPopper className="w-4 h-4" />
            Plan An Event
          </a>
        </motion.div>
      </div>
    </section>
  );
}
