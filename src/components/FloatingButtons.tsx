import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export function FloatingButtons() {
  const phone = "7507530889";
  const whatsappMessage = encodeURIComponent(
    "Hello White House Restaurant,\n\nI would like to make an inquiry."
  );

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
      <motion.a
        href={`https://wa.me/91${phone}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.a>

      <motion.a
        href={`tel:${phone}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-burgundy text-cream flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.a>

      <motion.a
        href="https://www.google.com/maps/search/?api=1&query=White+House+Restaurant+Shirpur+Maharashtra"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gold text-dark flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Get Directions"
      >
        <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.a>
    </div>
  );
}
