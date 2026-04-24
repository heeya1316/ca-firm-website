import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const CATEGORIES = [
  "All",
  "Taxation",
  "GST",
  "Business",
  "NRI",
  "Audit",
  "Finance",
];

const POSTS = [
  {
    id: "itr-deadline-2024",
    title: "ITR Filing Deadline for FY 2023-24: What You Need to Know",
    excerpt:
      "The last date for filing income tax returns for FY 2023-24 is July 31, 2024 for most taxpayers. Here is a complete checklist to ensure you file accurately and on time.",
    category: "Taxation",
    date: "June 15, 2024",
    readTime: "5 min read",
    author: "CA Rajesh Sharma",
  },
  {
    id: "gst-isd-new-rules",
    title: "New GST ISD Mechanism: What Changed from April 2024",
    excerpt:
      "The GST Council has made ISD (Input Service Distributor) mandatory for businesses with multiple registrations. Understand the revised rules and compliance obligations.",
    category: "GST",
    date: "May 30, 2024",
    readTime: "7 min read",
    author: "CA Priya Sharma",
  },
  {
    id: "startup-registration-guide",
    title:
      "Pvt Ltd vs LLP vs OPC: Choosing the Right Structure for Your Startup",
    excerpt:
      "Each business structure has distinct tax, compliance, and liability implications. This guide helps founders make an informed choice before registering.",
    category: "Business",
    date: "May 10, 2024",
    readTime: "9 min read",
    author: "CA Ankit Verma",
  },
  {
    id: "nri-tax-india-2024",
    title: "NRI Tax Guide 2024: What Income Is Taxable in India?",
    excerpt:
      "If you are an NRI with income from rent, capital gains, or fixed deposits in India, you need to file an ITR. Here is a plain-English breakdown of your obligations.",
    category: "NRI",
    date: "April 22, 2024",
    readTime: "6 min read",
    author: "CA Meena Gupta",
  },
  {
    id: "tax-audit-44ab-explained",
    title: "Tax Audit Under Section 44AB: Who Needs It and How to Prepare",
    excerpt:
      "Businesses crossing prescribed turnover thresholds must get a tax audit done before the ITR deadline. We explain eligibility, process, and common pitfalls.",
    category: "Audit",
    date: "April 5, 2024",
    readTime: "8 min read",
    author: "CA Ankit Verma",
  },
  {
    id: "budget-2024-highlights",
    title: "Union Budget 2024-25 Key Highlights for Taxpayers",
    excerpt:
      "The new tax regime, revised capital gains rates, and updated TDS thresholds — here is what the Union Budget 2024 means for individual and business taxpayers.",
    category: "Finance",
    date: "March 20, 2024",
    readTime: "10 min read",
    author: "CA Rajesh Sharma",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Taxation: "bg-primary/10 text-primary border-primary/20",
  GST: "bg-accent/10 text-accent border-accent/20",
  Business:
    "bg-secondary text-secondary-foreground border-secondary-foreground/10",
  NRI: "bg-primary/15 text-primary border-primary/25",
  Audit: "bg-muted text-foreground border-border",
  Finance: "bg-accent/15 text-accent border-accent/25",
};

export function Blog() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 lg:py-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.12 155) 0%, oklch(0.48 0.14 150) 100%)",
        }}
        data-ocid="blog-hero"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 hover:bg-accent/20">
            Insights & Updates
          </Badge>
          <h1 className="text-hero text-primary-foreground mb-4">CA Blog</h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl">
            Expert commentary on tax, GST, auditing, and business — updated
            regularly to keep you informed and compliant.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section
        className="bg-card border-b border-border sticky top-16 z-40"
        data-ocid="blog-filter"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className="shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border border-border text-foreground/70 hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-colors first:bg-primary/10 first:text-primary first:border-primary/30"
                data-ocid={`blog-filter-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-background py-16" data-ocid="blog-posts">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {POSTS.map((post) => (
              <article
                key={post.id}
                className="card-elevated rounded-2xl overflow-hidden flex flex-col group"
                data-ocid={`blog-post-${post.id}`}
              >
                {/* Category color bar */}
                <div className="h-1.5 bg-primary/50" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold border ${CATEGORY_COLORS[post.category] ?? "bg-muted text-muted-foreground border-border"}`}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <User className="h-3.5 w-3.5" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
                      aria-label={`Read more: ${post.title}`}
                    >
                      Read <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load more */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5"
              data-ocid="blog-load-more"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        className="bg-muted/40 py-16 border-t border-border"
        data-ocid="blog-newsletter"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="font-display font-bold text-2xl text-primary mb-3">
            Stay Updated on Tax & Compliance
          </h2>
          <p className="text-muted-foreground mb-6">
            Receive expert articles, deadline reminders, and regulatory updates
            directly in your inbox — no spam.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring max-w-sm"
              aria-label="Email for newsletter"
              data-ocid="newsletter-email-input"
            />
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              data-ocid="newsletter-subscribe-btn"
            >
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </>
  );
}
