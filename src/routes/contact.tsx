import { createFileRoute } from "@tanstack/react-router";
import { Clock3, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { company } from "@/data/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Butterfly Interior | Book a Consultation" },
      {
        name: "description",
        content:
          "Contact Butterfly Interior in Udumalaipettai to discuss your residential, commercial, hospitality, or staging project.",
      },
      { property: "og:title", content: "Contact Butterfly Interior | Book a Consultation" },
      {
        property: "og:description",
        content:
          "Get in touch with Butterfly Interior for tailored premium design consultation and project guidance.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Start with a conversation about the space you want to transform."
        description="Reach out for a premium residential, commercial, renovation, or styling consultation with Butterfly Interior."
        image="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-shell py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Studio information"
              title="Easy access to the studio, with direct WhatsApp and phone contact for faster enquiries."
              description="The contact experience is intentionally simple so new leads can connect without friction."
            />
            <div className="mt-8 grid gap-4">
              <article className="surface-panel rounded-lg border border-border/80 p-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 size-5 text-accent" />
                  <div>
                    <h2 className="text-lg text-foreground">Address</h2>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{company.address}</p>
                  </div>
                </div>
              </article>
              <article className="surface-panel rounded-lg border border-border/80 p-5">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 size-5 text-accent" />
                  <div>
                    <h2 className="text-lg text-foreground">Phone</h2>
                    <a href={`tel:${company.phoneRaw}`} className="mt-2 block text-sm leading-7 text-muted-foreground transition-colors hover:text-foreground">
                      {company.phoneDisplay}
                    </a>
                  </div>
                </div>
              </article>
              <article className="surface-panel rounded-lg border border-border/80 p-5">
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-1 size-5 text-accent" />
                  <div>
                    <h2 className="text-lg text-foreground">Hours</h2>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{company.hours}</p>
                  </div>
                </div>
              </article>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border/80 py-20 sm:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Find the studio"
              title="Located in Malayandipattinam, Udumalaipettai."
              description="Use the embedded map for directions or open the business profile to view the location in Google Maps."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-lg border border-border/80 shadow-soft">
              <iframe
                title="Butterfly Interior location map"
                src={company.mapEmbed}
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
