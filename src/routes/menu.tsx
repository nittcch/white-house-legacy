import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Leaf, Flame, Search, Star } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ChefSpecialsSection } from "@/components/sections/ChefSpecialsSection";
import { ReservationSection } from "@/components/sections/ReservationSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { menuCategories } from "@/lib/menu-data";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Our Menu — White House Restaurant Shirpur" },
      { name: "description", content: "Explore 150+ dishes — Tandoori, Chinese, Biryani, Main Course, Breads, Milkshakes and more at White House Restaurant, Shirpur." },
      { property: "og:title", content: "Our Menu — White House Restaurant Shirpur" },
      { property: "og:description", content: "Authentic Indian, Tandoor, Chinese & Seafood menu in Shirpur." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [openId, setOpenId] = useState<string | null>(menuCategories[3]?.id ?? null);
  const [search, setSearch] = useState("");
  const [dietFilter, setDietFilter] = useState<"all" | "veg" | "nonveg">("all");

  const q = search.trim().toLowerCase();
  const isFiltering = q !== "" || dietFilter !== "all";

  const filtered = menuCategories
    .map((c) => ({
      ...c,
      items: c.items.filter((i) => {
        const matchesSearch = q === "" || i.name.toLowerCase().includes(q);
        const matchesDiet =
          dietFilter === "all" ||
          (dietFilter === "veg" && i.veg === true) ||
          (dietFilter === "nonveg" && i.veg === false);
        return matchesSearch && matchesDiet;
      }),
    }))
    .filter((c) => c.items.length > 0);

  const displayed = isFiltering ? filtered : menuCategories;

  return (
    <>
      <PageHeader
        eyebrow="Authentic Flavors"
        title="Our Complete Menu"
        subtitle="22 categories, 150+ dishes crafted with passion. From sizzling tandoori starters to creamy curries and aromatic biryanis."
        image={heroBg}
      />

      <ChefSpecialsSection />

      <section className="py-16 sm:py-24 bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">Full Menu</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-burgundy mt-3 mb-6">
                Browse Every Category
              </h2>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search dishes or categories..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {(search ? filtered : menuCategories).map((category) => (
              <ScrollReveal key={category.id}>
                <div className="rounded-xl border border-border bg-card overflow-hidden">
                  <button
                    onClick={() => setOpenId(openId === category.id ? null : category.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-semibold text-foreground text-left">{category.name}</span>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {category.items.length} items
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform ${
                        openId === category.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openId === category.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-1">
                          {category.items.map((item) => (
                            <div
                              key={item.name}
                              className="flex items-center justify-between py-2.5 border-b border-border/50 last:border-0"
                            >
                              <div className="flex items-center gap-2 flex-wrap">
                                {item.veg ? (
                                  <Leaf className="w-3.5 h-3.5 text-green-600 shrink-0" />
                                ) : (
                                  <Flame className="w-3.5 h-3.5 text-red-500 shrink-0" />
                                )}
                                <span className="text-sm text-foreground">{item.name}</span>
                                {item.bestseller && (
                                  <span className="inline-flex items-center gap-0.5 text-[10px] bg-gold/20 text-amber-700 px-1.5 py-0.5 rounded-full font-medium">
                                    <Star className="w-2.5 h-2.5 fill-current" /> Bestseller
                                  </span>
                                )}
                                {item.spicy && (
                                  <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded-full font-medium">
                                    Spicy
                                  </span>
                                )}
                              </div>
                              <span className="text-sm font-semibold text-burgundy shrink-0 ml-3">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8">
            * Prices may vary. Taxes applicable. Call 75075 30889 for today's specials.
          </p>
        </div>
      </section>

      <ReservationSection />
    </>
  );
}
