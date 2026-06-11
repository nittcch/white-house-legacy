import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — White House Restaurant" },
      { name: "description", content: "Read what our guests say about White House Restaurant, Shirpur. 4.6/5 rating with 50+ happy reviews." },
      { property: "og:title", content: "Reviews — White House Restaurant" },
      { property: "og:description", content: "See what our guests are saying about their dining experience." },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold font-heading text-burgundy text-center mb-4">
          Guest Reviews
        </h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Hear from the families and food lovers who make White House their favorite dining destination.
        </p>
      </div>
    </div>
  );
}
