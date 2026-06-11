import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Events", to: "/events" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/80 backdrop-blur-xl shadow-lg border-b border-gold/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="relative">
                <span className={`text-xl sm:text-2xl font-bold tracking-wider font-heading ${scrolled ? "text-burgundy" : "text-cream"}`}>
                  WHITE HOUSE
                </span>
                <span className="block text-[0.6rem] sm:text-xs tracking-[0.3em] text-gold uppercase -mt-1">
                  Restaurant
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  activeProps={{ className: "text-burgundy bg-burgundy/5" }}
                  className={`px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                    scrolled ? "text-foreground/80 hover:text-burgundy" : "text-cream/90 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:7507530889"
                className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  scrolled ? "text-burgundy hover:text-gold" : "text-cream hover:text-gold"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>75075 30889</span>
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "hover:bg-burgundy/10" : "hover:bg-cream/10"}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={`w-6 h-6 ${scrolled ? "text-burgundy" : "text-cream"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? "text-burgundy" : "text-cream"}`} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 bg-cream/95 backdrop-blur-xl border-b border-gold/20 shadow-xl lg:hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    className="block px-4 py-3 text-base font-medium text-foreground hover:text-burgundy hover:bg-burgundy/5 rounded-lg transition-colors"
                    activeProps={{ className: "text-burgundy bg-burgundy/5" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 pt-4 border-t border-gold/20 flex flex-col gap-2">
                <a
                  href="tel:7507530889"
                  className="flex items-center gap-2 px-4 py-3 text-burgundy font-medium rounded-lg hover:bg-burgundy/5"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/917507530889?text=Hello%20White%20House%20Restaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-burgundy text-cream font-medium rounded-lg"
                >
                  WhatsApp Us
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
