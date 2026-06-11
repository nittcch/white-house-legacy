import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chef-specials")({
  head: () => ({
    meta: [
      { title: "Chef's Specials — White House Restaurant" },
      { name: "description", content: "Discover our signature dishes including White House Special Veg, Murgh Musallam, Hyderabadi Biryani, and more at White House Restaurant, Shirpur." },
      { property: "og:title", content: "Chef's Specials — White House Restaurant" },
      { property: "og:description", content: "Signature dishes crafted by our expert chefs." },
    ],
  }),
  component: ChefSpecialsPage,
});

function ChefSpecialsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold font-heading text-burgundy text-center mb-4">
          Chef's Specials
        </h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Our most celebrated creations, perfected over years of culinary expertise.
        </p>
      </div>
    </div>
  );
}
