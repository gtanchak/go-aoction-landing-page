import {
  Cloud,
  FileSpreadsheet,
  Gavel,
  History,
  Settings2,
  ShieldCheck,
  Smartphone,
  Trophy,
  Users,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: Gavel,
    title: "Live Player Bidding System",
    description:
      "Experience real-time bidding with instant updates. Multiple teams can bid simultaneously with automatic bid increments and countdown timers for exciting, transparent auctions.",
  },
  {
    icon: Wallet,
    title: "Team Budget & Purse Management",
    description:
      "Automatic tracking of each team's remaining purse. Set initial budgets, track spending in real-time, and prevent over-budget bids automatically.",
  },
  {
    icon: Users,
    title: "Player Categories & Base Price Setup",
    description:
      "Organize players into customizable categories like batsmen, bowlers, all-rounders. Set individual base prices and category-wise rules for structured auctions.",
  },
  {
    icon: Settings2,
    title: "Auctioneer Control Panel",
    description:
      "Powerful dashboard for auctioneers to manage the entire auction flow. Start/pause bids, skip players, mark as sold/unsold, and control the pace of your auction.",
  },
  {
    icon: Trophy,
    title: "Real-Time Leaderboard",
    description:
      "Live leaderboard showing team standings, squad compositions, and spending summaries. Keep all participants informed with at-a-glance tournament insights.",
  },
  {
    icon: ShieldCheck,
    title: "Automatic Rule Validation",
    description:
      "Built-in rule engine ensures fair play. Automatic validation of squad size limits, category quotas, overseas player limits, and budget constraints.",
  },
  {
    icon: History,
    title: "Bid History & Audit Logs",
    description:
      "Complete transparency with detailed bid history for every player. Full audit trail of all auction activities for dispute resolution and compliance.",
  },
  {
    icon: Smartphone,
    title: "Multi-Device Compatibility",
    description:
      "Access your auction from any device - desktop, tablet, or mobile. Responsive design ensures smooth experience across all screen sizes.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based Access",
    description:
      "No installation required. Access your auctions from anywhere with secure cloud infrastructure. Automatic data backup and real-time sync across devices.",
  },
  {
    icon: FileSpreadsheet,
    title: "Export Reports (Excel / PDF)",
    description:
      "Generate comprehensive reports including team sheets, player allocations, spending summaries, and bid histories. Export to Excel or PDF for easy sharing.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Powerful Features
          </span>
          <h2 className=" text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Everything You Need for a{" "}
            <span className="text-gradient-primary">Professional Auction</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our cricket auction software comes packed with all the features you
            need to run seamless, transparent, and efficient player auctions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 lg:p-8 border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
