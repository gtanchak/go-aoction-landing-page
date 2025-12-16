import { Zap } from "lucide-react";
import { Button } from "./ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 text-sm text-primary-foreground mb-8">
            <Zap className="w-4 h-4" />
            Start Your Digital Auction Journey Today
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your{" "}
            <span className="text-secondary">Cricket Auctions?</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join thousands of tournament organizers who have upgraded to our
            professional cricket auction platform. Experience the difference of
            digital auctions with real-time bidding, complete transparency, and
            zero errors.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {/* <Button variant="cta" size="xl" className="group">
              <Calendar className="w-5 h-5" />
              Schedule a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button> */}
            <Button variant="link" size="lg" className="bg-white text-primary" asChild>
              <a
                href="https://app.goaoction.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Digital Auction
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-primary-foreground/70 text-sm">
            <span>✓ No credit card required</span>
            <span>✓ Free demo available</span>
            <span>✓ Setup in 5 minutes</span>
            <span>✓ 24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
