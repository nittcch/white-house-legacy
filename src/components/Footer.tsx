import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark text-cream/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold tracking-wider font-heading text-gold mb-2">
              WHITE HOUSE
            </h3>
            <p className="text-sm text-cream/60 tracking-widest uppercase mb-4">
              Premium Family Restaurant
            </p>
            <p className="text-sm text-cream/60 leading-relaxed max-w-xs">
              Serving unforgettable flavors, family celebrations, and memorable
              dining experiences in Shirpur, Maharashtra.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "Menu", to: "/menu" },
                { label: "Events", to: "/events" },
                { label: "Gallery", to: "/gallery" },
                { label: "Reviews", to: "/reviews" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              Our Menu
            </h4>
            <ul className="space-y-2.5">
              {[
                "Tandoori Starters",
                "Chinese Starters",
                "Main Course",
                "Biryani & Rice",
                "Breads",
                "Soups & Salads",
                "Drinks & Milkshakes",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-cream/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-cream/60">
                  SHOP NO 01, KG NAGAR, NAKA, Karwand, Shirpur, Maharashtra
                  425405
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="tel:7507530889"
                  className="text-sm text-cream/60 hover:text-gold transition-colors"
                >
                  75075 30889
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span className="text-sm text-cream/60">
                  Open Daily: 11 AM – 11 PM
                </span>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 text-center">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} White House Restaurant, Shirpur.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
