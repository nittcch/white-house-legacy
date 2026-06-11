import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Our Menu — White House Restaurant" },
      { name: "description", content: "Explore our extensive menu featuring Veg & Non-Veg Tandoori, Chinese, Biryani, Main Course, Breads, and more at White House Restaurant, Shirpur." },
      { property: "og:title", content: "Our Menu — White House Restaurant" },
      { property: "og:description", content: "Authentic Indian, Tandoor, Chinese & Seafood menu in Shirpur." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold font-heading text-burgundy text-center mb-4">
          Our Menu
        </h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Discover our complete selection of authentic Indian, Tandoor, Chinese, and Seafood dishes crafted with passion and the freshest ingredients.
        </p>
        <p className="text-center text-burgundy font-medium">
          Full menu coming soon — call 75075 30889 to order!
        </p>
      </div>
    </div>
  );
}
