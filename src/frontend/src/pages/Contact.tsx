import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const SERVICES_LIST = [
  "ITR Filing",
  "GST Registration / Filing",
  "Tax Planning & Advisory",
  "Statutory / Tax Audit",
  "Company / LLP Registration",
  "Bookkeeping & Accounting",
  "NRI Taxation",
  "TDS Compliance",
  "Income Tax Notice",
  "Other",
];

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "12, Connaught Place, New Delhi – 110 001",
  },
  { icon: Phone, label: "Phone", value: "+91 11 4000 1234" },
  { icon: Mail, label: "Email", value: "info@sharmaassociates.in" },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Fri: 9:30 AM – 6:30 PM | Sat: 10 AM – 2 PM",
  },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="py-16 lg:py-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.12 155) 0%, oklch(0.48 0.14 150) 100%)",
        }}
        data-ocid="contact-hero"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 hover:bg-accent/20">
            Reach Out
          </Badge>
          <h1 className="text-hero text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-primary-foreground/70 max-w-xl">
            Talk to a CA today. We respond within 24 hours on business days.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="bg-background py-20" data-ocid="contact-main">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="font-display font-bold text-2xl text-primary mb-6">
                Send us a Message
              </h2>
              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 p-12 text-center"
                  data-ocid="contact-success"
                >
                  <CheckCircle2 className="h-14 w-14 text-accent mb-4" />
                  <h3 className="font-display font-bold text-xl text-primary mb-2">
                    Message Received!
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    Thank you, {form.name || "there"}. Our team will get back to
                    you within one business day.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-6 border-primary text-primary hover:bg-primary/5"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        service: "",
                        message: "",
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-ocid="contact-form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Rahul Sharma"
                        value={form.name}
                        onChange={handleChange}
                        required
                        data-ocid="contact-name-input"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">
                        Email Address{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="rahul@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        data-ocid="contact-email-input"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                        data-ocid="contact-phone-input"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="service">Service Required</Label>
                      <Select
                        value={form.service}
                        onValueChange={(val) =>
                          setForm((prev) => ({ ...prev, service: val }))
                        }
                      >
                        <SelectTrigger
                          id="service"
                          data-ocid="contact-service-select"
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICES_LIST.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="message">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your requirement or any specific questions..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                      data-ocid="contact-message-input"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    data-ocid="contact-submit-btn"
                  >
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info + Map */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card-elevated rounded-2xl p-6 space-y-5">
                <h3 className="font-display font-semibold text-lg text-primary">
                  Firm Details
                </h3>
                {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-0.5">
                        {label}
                      </p>
                      <p className="text-sm text-foreground/85 leading-snug">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div
                className="rounded-2xl border border-border overflow-hidden bg-muted/50"
                style={{ height: "220px" }}
                data-ocid="contact-map"
                aria-label="Office location map placeholder"
              >
                <div className="flex flex-col h-full items-center justify-center gap-3 text-muted-foreground">
                  <MapPin className="h-8 w-8 text-primary/50" />
                  <div className="text-center">
                    <p className="font-medium text-foreground/70 text-sm">
                      Connaught Place, New Delhi
                    </p>
                    <a
                      href="https://maps.google.com/?q=Connaught+Place+New+Delhi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent hover:underline mt-1 block"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-elevated rounded-2xl p-5 bg-accent/10 border-accent/20">
                <p className="text-sm font-semibold text-foreground mb-1">
                  Free Initial Consultation
                </p>
                <p className="text-sm text-muted-foreground">
                  Call us at{" "}
                  <a
                    href="tel:+911140001234"
                    className="text-accent hover:underline font-medium"
                  >
                    +91 11 4000 1234
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:info@sharmaassociates.in"
                    className="text-accent hover:underline font-medium"
                  >
                    info@sharmaassociates.in
                  </a>{" "}
                  to schedule a call at your convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
