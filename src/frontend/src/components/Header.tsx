import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Scale, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (prevPath.current !== location.pathname) {
    prevPath.current = location.pathname;
    setMenuOpen(false);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-card border-b border-border transition-all duration-300",
        scrolled ? "shadow-md" : "shadow-sm",
      )}
      data-ocid="site-header"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary group-hover:bg-primary/90 transition-colors duration-200">
              <Scale
                className="h-5 w-5 text-primary-foreground"
                strokeWidth={2.5}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-base text-foreground tracking-tight">
                Sharma & Associates
              </span>
              <span className="text-[10px] font-semibold text-muted-foreground tracking-widest uppercase">
                Chartered Accountants
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "link-nav px-3 py-1.5 rounded-md text-foreground/70 hover:text-foreground hover:bg-secondary",
                  location.pathname === link.href &&
                    "text-primary bg-primary/8 font-semibold",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              data-ocid="header-cta"
            >
              <Link to="/contact">Get Consultation</Link>
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-secondary transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              data-ocid="mobile-menu-toggle"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-card border-t border-border pb-4"
          data-ocid="mobile-nav"
        >
          <nav className="container mx-auto px-4 pt-2 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-3 rounded-lg text-foreground/70 hover:text-foreground hover:bg-secondary font-medium transition-colors",
                  location.pathname === link.href &&
                    "text-primary bg-primary/8 font-semibold",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              data-ocid="mobile-cta"
            >
              <Link to="/contact">Get Consultation</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
