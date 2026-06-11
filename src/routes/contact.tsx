import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — White House Restaurant" },
      { name: "description", content: "Get in touch with White House Restaurant, Shirpur. Call 75075 30889 or visit us at SHOP NO 01, KG NAGAR, NAKA, Karwand, Shirpur." },
      { property: "og:title", content: "Contact Us — White House Restaurant" },
      { property: "og:description", content: "Call, WhatsApp, or visit White House Restaurant in Shirpur." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold font-heading text-burgundy text-center mb-4">
          Contact Us
        </h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          We'd love to hear from you. Reach out for reservations, events, or any inquiries.
        </p>
      </div>
    </div>
  );
}
