import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Celebrations — White House Restaurant" },
      { name: "description", content: "Host birthdays, anniversaries, family gatherings, and corporate events at White House Restaurant, Shirpur. Book your celebration today." },
      { property: "og:title", content: "Events & Celebrations — White House Restaurant" },
      { property: "og:description", content: "Host your special moments at White House Restaurant." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold font-heading text-burgundy text-center mb-4">
          Events & Celebrations
        </h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Celebrate your special moments with us. Birthdays, anniversaries, family gatherings, and corporate events.
        </p>
      </div>
    </div>
  );
}
