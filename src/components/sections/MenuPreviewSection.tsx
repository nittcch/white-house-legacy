import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Leaf, Flame, Search } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { menuCategories } from "@/lib/menu-data";
import { Link } from "@tanstack/react-router";

export function MenuPreviewSection() {
  const [openCategory, setOpenCategory] = useState<string | null>("veg-tandoori");
  const [searchTerm, setSearchTerm] = useState("");

  const q = searchTerm.trim().toLowerCase();
  const filteredCategories = menuCategories.map((cat) => ({
    ...cat,
    items: cat.items.filter((item) => item.name.toLowerCase().includes(q)),
  })).filter((cat) => cat.items.length > 0);

  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">Our Menu</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-burgundy mt-3 mb-4">
              Explore Our Dishes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              From sizzling tandoori starters to aromatic biryanis, discover flavors that celebrate Indian cuisine.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search dishes or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          <AnimatePresence>
            {(searchTerm ? filteredCategories : menuCategories).slice(0, 8).map((category) => (
              <ScrollReveal key={category.id}>
                <div className="rounded-xl border border-border bg-card overflow-hidden">
                  <button
                    onClick={() =>
                      setOpenCategory(openCategory === category.id ? null : category.id)
                    }
                    className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-semibold text-foreground">{category.name}</span>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {category.items.length} items
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform ${
                        openCategory === category.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openCategory === category.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-2">
                          {category.items.slice(0, 6).map((item) => (
                            <div
                              key={item.name}
                              className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                            >
                              <div className="flex items-center gap-2">
                                {item.veg ? (
                                  <Leaf className="w-3.5 h-3.5 text-green-600" />
                                ) : (
                                  <Flame className="w-3.5 h-3.5 text-red-500" />
                                )}
                                <span className="text-sm text-foreground">{item.name}</span>
                                {item.bestseller && (
                                  <span className="text-[10px] bg-gold/20 text-amber-700 px-1.5 py-0.5 rounded-full font-medium">
                                    Bestseller
                                  </span>
                                )}
                              </div>
                              <span className="text-sm font-semibold text-burgundy">{item.price}</span>
                            </div>
                          ))}
                          {category.items.length > 6 && (
                            <p className="text-xs text-muted-foreground text-center pt-1">
                              +{category.items.length - 6} more items
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </AnimatePresence>
        </div>

        <ScrollReveal>
          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-burgundy text-cream rounded-full font-medium hover:bg-burgundy/90 transition-colors shadow-lg"
            >
              View Full Menu
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
