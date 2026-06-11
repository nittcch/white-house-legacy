import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — White House Restaurant" },
      { name: "description", content: "Join the White House Restaurant family. We are hiring Chefs, Waiters, Captains, Cashiers, and more in Shirpur, Maharashtra." },
      { property: "og:title", content: "Careers — White House Restaurant" },
      { property: "og:description", content: "Join our team. We're hiring passionate hospitality professionals." },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold font-heading text-burgundy text-center mb-4">
          Join The White House Family
        </h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Passionate about food and hospitality? We'd love to have you on our team.
        </p>
      </div>
    </div>
  );
}
