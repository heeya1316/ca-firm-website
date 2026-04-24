import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Calculator,
  CheckCircle2,
  FileText,
  Globe,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

const SERVICES = [
  {
    icon: FileText,
    title: "Taxation Services",
    description:
      "ITR filing, tax planning, GST registration, TDS returns, and notice handling — comprehensive tax solutions.",
  },
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    description:
      "Monthly bookkeeping, financial statement preparation, and detailed MIS reporting for clarity.",
  },
  {
    icon: ShieldCheck,
    title: "Audit & Assurance",
    description:
      "Statutory, internal, tax, and GST audits conducted with precision and regulatory compliance.",
  },
  {
    icon: Building2,
    title: "Business Registration",
    description:
      "Pvt Ltd, OPC, LLP/Partnership setup; GST registration and ongoing ROC compliance filings.",
  },
  {
    icon: Globe,
    title: "NRI Taxation",
    description:
      "Specialized income tax filing and advisory for Non-Resident Indians with cross-border expertise.",
  },
  {
    icon: Briefcase,
    title: "Business Advisory",
    description:
      "Strategic financial advisory, cash flow planning, and business structuring for sustainable growth.",
  },
];

const STATS = [
  { value: "20+", label: "Years of Experience" },
  { value: "1,500+", label: "Clients Served" },
  { value: "₹500 Cr+", label: "Tax Managed" },
  { value: "98%", label: "Client Retention" },
];

const WHY_US = [
  {
    icon: Award,
    text: "Qualified ICAI-certified Chartered Accountants with specialised expertise",
  },
  {
    icon: Users,
    text: "Dedicated relationship manager for every client account",
  },
  {
    icon: Star,
    text: "Proactive alerts for deadlines, notices, and compliance changes",
  },
  {
    icon: CheckCircle2,
    text: "Transparent, fixed-fee pricing — no hidden charges",
  },
];

export function Home() {
  return (
    <>
      {/* Hero Section — white bg, strong typography */}
      <section
        className="bg-card border-b border-border py-20 lg:py-28"
        data-ocid="hero-section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-5 bg-accent/10 text-accent border-accent/20 hover:bg-accent/10 font-semibold">
              ICAI Registered — Trusted Since 2004
            </Badge>
            <h1 className="text-hero text-foreground mb-6">
              Expert Tax &amp; Accounting Solutions for India
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Sharma &amp; Associates provides reliable taxation, audit,
              bookkeeping, and business registration services. Transparent
              advice, compliant filings, and dedicated support — for individuals
              and growing businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                data-ocid="hero-cta-consultation"
              >
                <Link to="/contact">
                  Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary hover:border-primary/30"
                data-ocid="hero-cta-itr"
              >
                <Link to="/contact">File Your ITR Now</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-5">
              {[
                "Registered member of ICAI",
                "Recognized by Ministry of Corporate Affairs",
                "Serving PAN India with local Delhi expertise",
                "End-to-end digital filing & compliance",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar — secondary sage background */}
      <section
        className="bg-secondary border-b border-border"
        data-ocid="stats-section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center ${i < STATS.length - 1 ? "lg:border-r lg:border-border" : ""}`}
              >
                <div className="font-display font-bold text-3xl text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-secondary-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview — white background */}
      <section className="bg-background py-20" data-ocid="services-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-label mb-3 block">What We Do</span>
            <h2 className="text-section-title">Comprehensive CA Services</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base">
              From filing your income tax return to registering your company, we
              cover every financial and compliance need.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="card-elevated rounded-xl p-6 hover:-translate-y-0.5 transition-smooth group"
                  data-ocid={`service-card-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4 group-hover:bg-accent/15 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 font-semibold"
              data-ocid="services-more-btn"
            >
              <Link to="/services">
                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Us — secondary sage background for visual rhythm */}
      <section
        className="bg-secondary border-y border-border py-20"
        data-ocid="whyus-section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-label mb-3 block">Why Choose Us</span>
              <h2 className="text-section-title mb-6">
                Integrity, Expertise &amp; Commitment
              </h2>
              <p className="text-secondary-foreground leading-relaxed mb-8 text-base">
                With over two decades of practice, we bring deep domain
                knowledge and a client-first approach to every engagement.
                Whether you are a salaried professional, a startup, or an
                established enterprise — we tailor our services to your exact
                needs.
              </p>
              <ul className="space-y-4">
                {WHY_US.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15">
                      <Icon className="h-4 w-4 text-accent" />
                    </span>
                    <span className="text-secondary-foreground leading-snug pt-1">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                data-ocid="about-learn-more"
              >
                <Link to="/about">
                  Learn About Our Firm <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/about-team.dim_800x500.jpg"
                alt="Sharma & Associates team"
                className="rounded-2xl shadow-md object-cover w-full h-80 lg:h-96"
              />
              <div className="absolute -bottom-4 -left-4 bg-primary rounded-xl px-5 py-4 shadow-md hidden sm:block">
                <div className="font-display font-bold text-2xl text-primary-foreground">
                  20+
                </div>
                <div className="text-sm font-medium text-primary-foreground/80">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner — dark primary green for strong contrast */}
      <section
        className="py-20"
        style={{ backgroundColor: "oklch(0.22 0.07 155)" }}
        data-ocid="cta-banner"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            Ready to Simplify Your Finances?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Book a free 30-minute consultation with our experts. No obligations
            — just clear, honest advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              data-ocid="cta-consultation-btn"
            >
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              data-ocid="cta-business-btn"
            >
              <Link to="/services">Start Your Business</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
