import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { ReservationSection } from "@/components/sections/ReservationSection";
import whEntrance from "@/assets/wh-entrance.jpg.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — White House Restaurant Shirpur" },
      { name: "description", content: "Call 75075 30889 or visit White House Restaurant at SHOP NO 01, KG NAGAR, NAKA, Karwand, Shirpur, Maharashtra 425405. Open daily 11 AM – 11 PM." },
      { property: "og:title", content: "Contact Us — White House Restaurant" },
      { property: "og:description", content: "Call, WhatsApp, or visit us in Shirpur." },
      { property: "og:image", content: whEntrance.url },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Visit White House"
        subtitle="We'd love to welcome you. Reach out for reservations, events, or any inquiry — we respond within minutes."
        image={whEntrance.url}
      />
      <ContactSection />
      <ReservationSection />
    </>
  );
}
