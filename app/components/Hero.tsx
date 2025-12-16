import { Check, Play } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-10 px-4 py-20 md:py-32 mx-auto">
        <div className="flex items-center justify-between gap-20">
          {/* Left Content */}
          <div className="text-primary-foreground space-y-8 animate-slide-up flex-1/2">
            <h1 className="text-[#282828] text-4xl md:text-5xl font-black leading-tight">
              Cricket Auction Software for Seamless Bidding
            </h1>

            <p className="text-lg md:text-xl text-gray-500 max-w-xl">
              Transform your cricket tournaments with our professional-grade
              auction platform. Real-time bidding, automated rules, and complete
              transparency.
            </p>

            <ul className="space-y-3">
              {[
                "Live player bidding with real-time updates",
                "Automated team budget & purse management",
                "Multi-device access from anywhere",
                "Complete bid history & audit logs",
              ].map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-[#282828]"
                >
                  <span className="shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="default" size="lg" className="group">
                Request Demo
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://app.goaoction.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get started
                </a>
              </Button>
            </div>

            <p className="text-sm text-blue-400">
              ✓ No credit card required &nbsp;•&nbsp; ✓ Setup in 5 minutes
              &nbsp;•&nbsp; ✓ 24/7 Support
            </p>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-secondary/30 to-accent/30 rounded-2xl blur-2xl" />
              <Image
                width={800}
                height={600}
                src="/hero-dashboard.jpg"
                alt="Cricket Auction Software Dashboard showing live player bidding interface with team budgets and real-time leaderboard"
                className="relative rounded-xl shadow-2xl border border-primary-foreground/10"
              />
            </div>

            {/* Floating Stats Cards */}
            <div
              className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg  animate-float bg-white"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-sm text-muted-foreground">
                Active Auctions
              </div>
              <div className="text-2xl font-black text-primary">1,247+</div>
            </div>

            <div
              className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-lg animate-float bg-white"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="text-sm text-muted-foreground">
                Players Auctioned
              </div>
              <div className="text-2xl font-black text-primary">50K+</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="hsl(140 20% 98%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
