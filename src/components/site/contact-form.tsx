import { useMemo, useState } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { company } from "@/data/site-content";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "Name is too long."),
  phone: z.string().trim().min(8, "Please enter a valid phone number.").max(20, "Phone number is too long."),
  email: z.string().trim().email("Please enter a valid email address.").max(255, "Email is too long."),
  message: z.string().trim().min(10, "Tell us a little about your project.").max(1000, "Message is too long."),
});

type ContactValues = z.infer<typeof contactSchema>;

const initialValues: ContactValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappUrl = useMemo(() => {
    const text = encodeURIComponent(company.whatsappMessage);
    return `https://wa.me/${company.phoneRaw}?text=${text}`;
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = contactSchema.safeParse(values);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        phone: fieldErrors.phone?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      });
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    const composedMessage = encodeURIComponent(
      `Hello Butterfly Interior,%0A%0AName: ${parsed.data.name}%0APhone: ${parsed.data.phone}%0AEmail: ${parsed.data.email}%0AProject Details: ${parsed.data.message}`,
    );

    window.open(`https://wa.me/${company.phoneRaw}?text=${composedMessage}`, "_blank", "noopener,noreferrer");
    setValues(initialValues);
  };

  const updateField = <K extends keyof ContactValues>(field: K, value: ContactValues[K]) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setIsSubmitted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="surface-panel w-full rounded-lg border border-border/80 p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <Input
            id="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your full name"
            aria-invalid={Boolean(errors.name)}
            className="w-full"
          />
          {errors.name ? <p className="text-sm text-destructive">{errors.name}</p> : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone
          </label>
          <Input
            id="phone"
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="Mobile number"
            aria-invalid={Boolean(errors.phone)}
            className="w-full"
          />
          {errors.phone ? <p className="text-sm text-destructive">{errors.phone}</p> : null}
        </div>
      </div>

      <div className="mt-5 space-y-5">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <Input
            id="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            className="w-full"
          />
          {errors.email ? <p className="text-sm text-destructive">{errors.email}</p> : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message
          </label>
          <Textarea
            id="message"
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Tell us about your home, business, renovation, or styling project."
            className="min-h-36 w-full resize-y sm:min-h-40"
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message ? <p className="text-sm text-destructive">{errors.message}</p> : null}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl text-sm leading-6 text-muted-foreground">
          {isSubmitted
            ? "Thanks — your request is ready to send on WhatsApp."
            : "Responses are routed directly to the studio on WhatsApp for fast follow-up."}
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
          <Button type="submit" variant="hero" size="xl" className="w-full sm:w-auto">
            Send enquiry
          </Button>
          <Button
            type="button"
            variant="luxeOutline"
            size="xl"
            className="w-full sm:w-auto"
            onClick={() => window.open(whatsappUrl, "_blank", "noopener,noreferrer")}
          >
            WhatsApp directly
          </Button>
        </div>
      </div>
    </form>
  );
}