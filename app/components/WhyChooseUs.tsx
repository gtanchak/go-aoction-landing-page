import {
  Check,
  Headphones,
  HeartHandshake,
  Settings,
  Shield,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "./ui/button";

const advantages = [
  {
    icon: Shield,
    title: "Unmatched Reliability",
    description:
      "99.9% uptime guarantee with automatic failover and data backup. Your auction never stops.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconGradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: HeartHandshake,
    title: "Complete Transparency",
    description:
      "Every bid, every transaction is logged. Full visibility for all participants builds trust.",
    gradient: "from-pink-500/20 to-rose-500/20",
    iconGradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Settings,
    title: "Custom Rules Engine",
    description:
      "Configure complex auction rules to match any tournament format. Your rules, enforced automatically.",
    gradient: "from-purple-500/20 to-indigo-500/20",
    iconGradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "24/7 support during your auctions. Our team is always ready to help you succeed.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconGradient: "from-emerald-500 to-teal-500",
  },
];

const comparisonData = [
  { feature: "Setup Time", manual: "Hours", software: "5 Minutes" },
  { feature: "Error Rate", manual: "High", software: "Zero" },
  { feature: "Transparency", manual: "Limited", software: "100%" },
  { feature: "Audit Trail", manual: "None", software: "Complete" },
  { feature: "Rule Enforcement", manual: "Manual", software: "Automatic" },
  { feature: "Real-time Updates", manual: "No", software: "Yes" },
  {
    feature: "Remote Participation",
    manual: "Not Possible",
    software: "Fully Supported",
  },
  { feature: "Report Generation", manual: "Hours", software: "Instant" },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose"
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className=" text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 leading-tight">
            The Clear Choice for{" "}
            <span className="text-gradient-primary">Modern Auctions</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join thousands of tournament organizers who have upgraded from
            manual auctions to our professional digital platform.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group relative text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${advantage.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              {/* Icon container */}
              <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${advantage.iconGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
                <advantage.icon
                  className={`w-10 h-10 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300`}
                />
              </div>

              <h3 className="relative z-10 font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {advantage.title}
              </h3>
              <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-2xl shadow-primary/5">
          {/* Header with gradient */}
          <div className="relative p-8 lg:p-10 border-b border-border bg-linear-to-r from-primary/5 via-primary/10 to-primary/5">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/5 to-transparent opacity-50"></div>
            <h3 className="relative font-heading text-2xl md:text-3xl font-bold text-foreground text-center">
              Manual Auction vs Software Auction
            </h3>
            <p className="relative text-center text-muted-foreground mt-2">
              See the difference that technology makes
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/30 border-b border-border">
                  <th className="text-left p-5 font-heading font-semibold text-foreground">
                    Feature
                  </th>
                  <th className="text-center p-5 font-heading font-semibold text-destructive">
                    Manual Auction
                  </th>
                  <th className="text-center p-5 font-heading font-semibold text-primary">
                    Our Software
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors duration-200"
                  >
                    <td className="p-5 text-foreground font-medium">
                      {row.feature}
                    </td>
                    <td className="p-5 text-center">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-destructive/10 text-destructive font-medium">
                        {row.manual === "No" ||
                        row.manual === "None" ||
                        row.manual === "Not Possible" ? (
                          <X className="w-5 h-5 shrink-0" />
                        ) : null}
                        {row.manual}
                      </span>
                    </td>
                    <td className="p-5 text-center">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-semibold">
                        {row.software === "Yes" ||
                        row.software.includes("100") ||
                        row.software.includes("Zero") ||
                        row.software.includes("Complete") ||
                        row.software.includes("Instant") ||
                        row.software.includes("Automatic") ||
                        row.software.includes("Fully") ? (
                          <Check className="w-5 h-5 shrink-0" />
                        ) : null}
                        {row.software}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA Section */}
          <div className="relative p-8 lg:p-10 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 text-center border-t border-border">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-50"></div>
            <div className="relative">
              <p className="text-muted-foreground mb-6 text-lg">
                Ready to transform your auction experience?
              </p>
              <Button
                variant="default"
                size="lg"
                className="shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a
                  href="https://app.goaoction.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Switch to Smart Auctions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
