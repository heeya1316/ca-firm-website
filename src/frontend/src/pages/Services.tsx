import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Globe,
  Receipt,
  ShieldCheck,
} from "lucide-react";

const SERVICE_CATEGORIES = [
  {
    id: "taxation",
    icon: FileText,
    title: "Taxation Services",
    color: "text-primary",
    bg: "bg-primary/10",
    services: [
      {
        name: "Income Tax Return (ITR) Filing",
        desc: "Hassle-free ITR filing for salaried, business, capital gains, and complex income profiles.",
      },
      {
        name: "Tax Planning & Advisory",
        desc: "Year-round planning to minimise legal tax liability and optimise deductions and exemptions.",
      },
      {
        name: "GST Registration & Filing",
        desc: "End-to-end GST onboarding, monthly/quarterly returns, reconciliation, and annual filing.",
      },
      {
        name: "TDS Returns & Compliance",
        desc: "Timely TDS deduction, deposit, and return filing to avoid penalties and notices.",
      },
      {
        name: "Handling Income Tax Notices",
        desc: "Expert representation and response drafting for assessments, scrutiny, and demand notices.",
      },
    ],
  },
  {
    id: "accounting",
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    color: "text-accent",
    bg: "bg-accent/10",
    services: [
      {
        name: "Bookkeeping (Monthly / Quarterly)",
        desc: "Regular, accurate recording of all financial transactions using cloud-based accounting tools.",
      },
      {
        name: "Financial Statement Preparation",
        desc: "P&L, Balance Sheet, and Cash Flow statements compliant with Ind AS/GAAP.",
      },
      {
        name: "MIS Reports",
        desc: "Monthly management information reports tailored to your business decision-making needs.",
      },
    ],
  },
  {
    id: "audit",
    icon: ShieldCheck,
    title: "Audit & Assurance",
    color: "text-secondary-foreground",
    bg: "bg-secondary",
    services: [
      {
        name: "Statutory Audit",
        desc: "Mandatory audits for companies and specified entities under the Companies Act, 2013.",
      },
      {
        name: "Internal Audit (on request)",
        desc: "Process-level audits to identify control weaknesses, risks, and efficiency gaps.",
      },
      {
        name: "Tax Audit (u/s 44AB)",
        desc: "Income Tax Act audits for businesses exceeding turnover thresholds.",
      },
      {
        name: "GST Audit",
        desc: "Comprehensive review of GST records for accuracy and regulatory compliance.",
      },
    ],
  },
  {
    id: "registration",
    icon: Building2,
    title: "Business Registration & Compliance",
    color: "text-foreground",
    bg: "bg-muted",
    services: [
      {
        name: "Private Limited Company Registration",
        desc: "Complete Pvt Ltd incorporation with MCA filing, PAN, TAN, and shareholder documentation.",
      },
      {
        name: "One Person Company (OPC)",
        desc: "Single-founder corporate structure — registration and post-incorporation compliances.",
      },
      {
        name: "LLP / Partnership Registration",
        desc: "Limited Liability Partnership and traditional partnership deed drafting and registration.",
      },
      {
        name: "GST Registration",
        desc: "New GST enrollment, amendments, and cancellation handled end-to-end.",
      },
      {
        name: "ROC Compliance & Filings",
        desc: "Annual returns, board resolutions, director changes, and all MCA/ROC filings.",
      },
    ],
  },
  {
    id: "nri",
    icon: Globe,
    title: "NRI Taxation",
    color: "text-primary",
    bg: "bg-primary/15",
    services: [
      {
        name: "NRI Income Tax Filing",
        desc: "ITR filing for rental income, capital gains, interest income, and foreign assets in India.",
      },
      {
        name: "NRI Tax Advisory",
        desc: "DTAA guidance, NRE/NRO/FCNR account taxation, and repatriation advisory.",
      },
      {
        name: "FEMA Compliance",
        desc: "Advisory on FEMA regulations for property purchase, investment, and remittances.",
      },
    ],
  },
];

const WHY_ITEMS = [
  { icon: Receipt, text: "Fixed, transparent pricing — no surprise bills" },
  { icon: BookOpen, text: "Dedicated CA assigned to every client account" },
  {
    icon: ClipboardCheck,
    text: "Deadline reminders and proactive compliance alerts",
  },
  { icon: CheckCircle2, text: "Secure, digital document handling" },
];

export function Services() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 lg:py-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.12 155) 0%, oklch(0.48 0.14 150) 100%)",
        }}
        data-ocid="services-hero"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 hover:bg-accent/20">
            Full-Service CA Firm
          </Badge>
          <h1 className="text-hero text-primary-foreground mb-4">
            Our Services
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl">
            Comprehensive financial and compliance services for individuals,
            businesses, and NRIs — all under one roof.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-background py-20" data-ocid="services-list">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {SERVICE_CATEGORIES.map((category, i) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                id={category.id}
                className={`rounded-2xl border border-border overflow-hidden ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}
                data-ocid={`service-category-${category.id}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 px-6 py-5 border-b border-border">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${category.bg}`}
                  >
                    <Icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h2 className="font-display font-bold text-2xl text-primary">
                    {category.title}
                  </h2>
                </div>
                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
                  {category.services.map((service) => (
                    <div
                      key={service.name}
                      className="bg-card p-5 hover:bg-primary/5 transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {service.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="bg-muted/40 py-16 border-y border-border"
        data-ocid="services-why"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-section-title">Why Work With Us?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_ITEMS.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="card-elevated rounded-xl p-5 flex flex-col items-center text-center gap-3"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground/80 leading-snug">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.12 155) 0%, oklch(0.48 0.14 150) 100%)",
        }}
        data-ocid="services-cta"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl text-primary-foreground mb-4">
            Need a Service? Let's Talk.
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Our team is available to discuss your requirements and provide a
            tailored quote — usually within 24 hours.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-primary font-semibold"
            data-ocid="services-cta-btn"
          >
            <Link to="/contact">
              Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
