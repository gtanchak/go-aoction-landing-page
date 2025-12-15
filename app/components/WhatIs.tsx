import { AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

const WhatIs = () => {
  const problems = [
    "Manual record-keeping leads to errors and disputes",
    "Time-consuming processes delay tournament start",
    "Lack of transparency causes trust issues",
    "No audit trail for bid verification",
    "Difficult to enforce complex auction rules",
  ];

  const benefits = [
    "100% accurate automated calculations",
    "Complete auction in half the time",
    "Real-time visibility for all stakeholders",
    "Complete bid history and audit logs",
    "Automatic rule enforcement and validation",
  ];

  return (
    <section id="what-is" className="py-20 md:py-32 bg-background">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Understanding Cricket Auctions
          </span>
          <h2 className=" text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            What Is Cricket Auction Software?
          </h2>
          <p className="text-lg text-gray-600">
            Cricket auction software is a digital platform that streamlines the
            entire player auction process for cricket tournaments. It automates
            bidding, manages team budgets, enforces rules, and provides
            real-time updates to all participants.
          </p>
        </div>

        {/* Problems vs Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems Card */}
          <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8 card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                Why Manual Cricket Auctions Are Inefficient
              </h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-destructive/10 rounded-full flex items-center justify-center mt-0.5">
                    <span className="w-2 h-2 bg-destructive rounded-full" />
                  </span>
                  <span className="text-foreground/80">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits Card */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                Benefits of Digital Auctions
              </h3>
            </div>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </span>
                  <span className="text-foreground/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
