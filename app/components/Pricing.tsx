import { Check } from "lucide-react";
import { Button } from "./ui/button";

const Pricing = () => {
  const features = [
    "Unlimited tournaments",
    "Unlimited teams per auction",
    "Real-time live bidding",
    "Custom auction rules",
    "Excel/PDF reports",
    "Multi-device access",
    "24/7 email support",
    "Data backup & security",
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Pricing
          </span>
          <h2 className=" text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Flexible Plans for{" "}
            <span className="text-gradient-primary">Every Tournament</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer customized pricing based on your tournament size and
            requirements. Contact us for a quote tailored to your needs.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-3xl border-2 border-primary shadow-glow overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-hero p-8 text-center">
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-2">
                Custom Enterprise Plan
              </h3>
              <p className="text-primary-foreground/80">
                Tailored to your tournament needs
              </p>
            </div>

            {/* Features */}
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </span>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="default" size="lg" className="w-full">
                Request Pricing
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Free demo available • No commitment required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
