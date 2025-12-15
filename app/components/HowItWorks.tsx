import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Tournament & Teams",
    description:
      "Set up your tournament with all participating teams, their logos, and initial budgets. Configure basic tournament settings in minutes.",
  },
  {
    number: "02",
    title: "Upload Player List",
    description:
      "Import your player database via Excel or add players manually. Include player details, categories, base prices, and photos.",
  },
  {
    number: "03",
    title: "Define Auction Rules",
    description:
      "Configure squad size limits, category quotas, bid increments, retention rules, and any custom regulations for your tournament.",
  },
  {
    number: "04",
    title: "Start Live Auction",
    description:
      "Go live with real-time bidding. Teams bid from their devices while the auctioneer controls the flow from the master panel.",
  },
  {
    number: "05",
    title: "Assign Players Automatically",
    description:
      "Players are automatically assigned to winning teams. Budgets update in real-time, and all transactions are logged instantly.",
  },
  {
    number: "06",
    title: "Download Team Reports",
    description:
      "Export comprehensive reports including final squads, spending breakdowns, and complete bid histories in Excel or PDF format.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Simple Process
          </span>
          <h2 className=" text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            How the Cricket Auction Software Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get your auction up and running in just six simple steps. Our
            intuitive platform guides you through the entire process.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Card */}
                <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 card-hover h-full">
                  {/* Step Number */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform">
                    <span className="font-heading text-2xl font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (not on last item in row) */}
                {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 z-10 w-8 h-8 bg-secondary rounded-full items-center justify-center -translate-y-1/2 shadow-gold">
                    <ArrowRight className="w-4 h-4 text-secondary-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
