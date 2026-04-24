import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Heart,
  Target,
  Users,
} from "lucide-react";

const TEAM = [
  {
    name: "CA Rajesh Sharma",
    title: "Founder & Managing Partner",
    qual: "FCA, DISA (ICAI)",
    bio: "Over 20 years of experience in direct taxation, statutory audits, and corporate advisory. Rajesh has advised 500+ businesses on tax and compliance matters.",
  },
  {
    name: "CA Priya Sharma",
    title: "Partner – GST & Indirect Tax",
    qual: "ACA, B.Com (H)",
    bio: "Specialises in GST advisory, appeal representations, and indirect tax planning. Priya has handled complex GST matters for manufacturing and e-commerce clients.",
  },
  {
    name: "CA Ankit Verma",
    title: "Partner – Audit & Assurance",
    qual: "ACA, Certified Forensic Accountant",
    bio: "Expert in statutory and forensic audits. Ankit brings rigour and independence to every engagement, serving clients in BFSI, retail, and IT sectors.",
  },
  {
    name: "CA Meena Gupta",
    title: "Senior Manager – NRI Services",
    qual: "ACA, International Taxation Diploma",
    bio: "Dedicated NRI taxation specialist with experience in DTAA applications, FEMA compliance, and cross-border investment structuring.",
  },
];

const VALUES = [
  {
    icon: Award,
    title: "Integrity",
    description:
      "We uphold the highest professional standards. Our advice is always honest, even when it is not what you hoped to hear.",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "Accuracy is non-negotiable. We double-check every figure, deadline, and filing to protect your interests.",
  },
  {
    icon: Heart,
    title: "Client First",
    description:
      "Your goals drive our work. We take the time to understand your situation before recommending any course of action.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work as an extension of your team — accessible, responsive, and genuinely invested in your success.",
  },
];

const MILESTONES = [
  { year: "2004", event: "Firm founded in New Delhi by CA Rajesh Sharma" },
  {
    year: "2008",
    event: "Expanded to serve corporate clients; crossed 200 active accounts",
  },
  { year: "2014", event: "Added GST advisory practice ahead of GST rollout" },
  { year: "2018", event: "Launched dedicated NRI taxation service" },
  {
    year: "2022",
    event: "Crossed 1,500 client milestone; opened second office",
  },
  { year: "2024", event: "20 years of trusted service — still growing" },
];

export function About() {
  return (
    <>
      {/* Page Header */}
      <section
        className="py-16 lg:py-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.12 155) 0%, oklch(0.48 0.14 150) 100%)",
        }}
        data-ocid="about-hero"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 hover:bg-accent/20">
            Our Firm
          </Badge>
          <h1 className="text-hero text-primary-foreground mb-4">
            About Sharma &amp; Associates
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl">
            A heritage of trust, two decades of expertise, and an unwavering
            commitment to doing right by every client.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-20" data-ocid="about-story">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-label mb-3 block">Our Story</span>
              <h2 className="text-section-title mb-6">
                Built on Trust, Grown Through Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sharma &amp; Associates was founded in 2004 in New Delhi with
                  a simple mission: to make professional CA services accessible,
                  transparent, and genuinely helpful for every Indian taxpayer
                  and entrepreneur.
                </p>
                <p>
                  What started as a solo practice has grown into a multi-partner
                  firm with a team of 25 professionals serving clients across
                  India. We have navigated every major tax reform — from service
                  tax to GST — while keeping our clients compliant, informed,
                  and ahead of the curve.
                </p>
                <p>
                  Today, we serve salaried individuals, HNIs, startups, MSMEs,
                  listed companies, and NRIs — all with the same attention to
                  detail and personal service that defined us from day one.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/assets/generated/about-team.dim_800x500.jpg"
                alt="Sharma & Associates team"
                className="rounded-2xl shadow-elevated w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section
        className="bg-muted/40 py-16 border-y border-border"
        data-ocid="about-mission"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-label mb-3 block">Our Mission</span>
          <h2 className="text-section-title mb-6">Why We Do What We Do</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed italic">
            "To empower individuals and businesses to meet their financial
            obligations with confidence — through reliable, timely, and ethical
            professional services."
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-background py-20" data-ocid="about-milestones">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-label mb-3 block">Our Journey</span>
            <h2 className="text-section-title">Two Decades of Milestones</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-primary/20 pl-8 space-y-8">
              {MILESTONES.map((m) => (
                <div key={m.year} className="relative">
                  <div className="absolute -left-[2.65rem] flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-subtle">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div className="text-label mb-1">{m.year}</div>
                  <p className="text-foreground/80">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="bg-muted/40 py-20 border-y border-border"
        data-ocid="about-values"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-label mb-3 block">What Guides Us</span>
            <h2 className="text-section-title">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="card-elevated rounded-xl p-6 text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 mx-auto mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-background py-20" data-ocid="about-team">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-label mb-3 block">Our People</span>
            <h2 className="text-section-title">Meet the Team</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              A dedicated team of qualified Chartered Accountants and
              specialists — each bringing deep domain knowledge.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="card-elevated rounded-xl p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 text-primary font-display font-bold text-xl">
                  {member.name.split(" ").slice(-1)[0][0]}
                </div>
                <h3 className="font-display font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-accent font-medium mt-0.5">
                  {member.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1 mb-3">
                  {member.qual}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
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
        data-ocid="about-cta"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl text-primary-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Get in touch with our team for a no-obligation consultation about
            your tax and business needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-primary font-semibold"
            data-ocid="about-cta-btn"
          >
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
