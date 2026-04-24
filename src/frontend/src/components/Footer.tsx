import { Link } from "@tanstack/react-router";
import { ExternalLink, Mail, MapPin, Phone, Scale } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  "ITR Filing",
  "GST Registration & Filing",
  "Tax Planning & Advisory",
  "Audit & Assurance",
  "Business Registration",
  "NRI Taxation",
  "Bookkeeping & Accounting",
  "ROC Compliance",
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer
      style={{
        backgroundColor: "oklch(0.18 0.06 155)",
        color: "oklch(0.99 0.005 155)",
      }}
      data-ocid="site-footer"
    >
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/90">
                <Scale
                  className="h-5 w-5 text-accent-foreground"
                  strokeWidth={2.5}
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-base text-primary-foreground tracking-tight">
                  Sharma & Associates
                </span>
                <span
                  className="text-[10px] font-semibold tracking-widest uppercase"
                  style={{ color: "oklch(0.75 0.06 155)" }}
                >
                  Chartered Accountants
                </span>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "oklch(0.78 0.04 155)" }}
            >
              Trusted advisors for tax, audit, and business compliance. Serving
              individuals and businesses across India with integrity and
              expertise.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:+911140001234"
                className="flex items-center gap-2 text-sm transition-colors hover:text-accent"
                style={{ color: "oklch(0.78 0.04 155)" }}
              >
                <Phone className="h-4 w-4 text-accent shrink-0" />
                +91 11 4000 1234
              </a>
              <a
                href="mailto:info@sharmaassociates.in"
                className="flex items-center gap-2 text-sm transition-colors hover:text-accent"
                style={{ color: "oklch(0.78 0.04 155)" }}
              >
                <Mail className="h-4 w-4 text-accent shrink-0" />
                info@sharmaassociates.in
              </a>
              <div
                className="flex items-start gap-2 text-sm"
                style={{ color: "oklch(0.78 0.04 155)" }}
              >
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>12, Connaught Place, New Delhi – 110 001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-display font-semibold text-xs uppercase tracking-wider mb-4"
              style={{ color: "oklch(0.65 0.06 150)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm transition-colors hover:text-accent"
                    style={{ color: "oklch(0.78 0.04 155)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="font-display font-semibold text-xs uppercase tracking-wider mb-4"
              style={{ color: "oklch(0.65 0.06 150)" }}
            >
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm transition-colors hover:text-accent"
                    style={{ color: "oklch(0.78 0.04 155)" }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3
              className="font-display font-semibold text-xs uppercase tracking-wider mb-4"
              style={{ color: "oklch(0.65 0.06 150)" }}
            >
              Working Hours
            </h3>
            <ul
              className="space-y-3 text-sm"
              style={{ color: "oklch(0.78 0.04 155)" }}
            >
              <li>
                <span
                  className="block text-xs uppercase tracking-wide mb-0.5 font-semibold"
                  style={{ color: "oklch(0.65 0.06 150)" }}
                >
                  Weekdays
                </span>
                Monday – Friday: 9:30 AM – 6:30 PM
              </li>
              <li>
                <span
                  className="block text-xs uppercase tracking-wide mb-0.5 font-semibold"
                  style={{ color: "oklch(0.65 0.06 150)" }}
                >
                  Weekend
                </span>
                Saturday: 10:00 AM – 2:00 PM
              </li>
              <li>
                <span
                  className="block text-xs uppercase tracking-wide mb-0.5 font-semibold"
                  style={{ color: "oklch(0.65 0.06 150)" }}
                >
                  Holiday
                </span>
                Sunday & Public Holidays: Closed
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid oklch(0.28 0.05 155)" }}>
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{ color: "oklch(0.58 0.04 150)" }}
        >
          <span>
            © {year} Sharma & Associates, Chartered Accountants. All rights
            reserved.
          </span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-accent transition-colors"
          >
            Built with love using caffeine.ai{" "}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
