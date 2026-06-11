import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — White House Restaurant" },
      { name: "description", content: "Browse our gallery of signature dishes, restaurant interior, family dining, event setups, and more at White House Restaurant, Shirpur." },
      { property: "og:title", content: "Gallery — White House Restaurant" },
      { property: "og:description", content: "A visual journey through our restaurant, food, and celebrations." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold font-heading text-burgundy text-center mb-4">
          Gallery
        </h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          A visual journey through our restaurant, food, and celebrations.
        </p>
      </div>
    </div>
  );
}
