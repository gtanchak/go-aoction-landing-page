import Image from "next/image";

const previews = [
  {
    title: "Live Auction Dashboard",
    description:
      "Real-time overview of ongoing bids, team budgets, and player queue",
    image: "/hero-dashboard.jpg",
    alt: "Cricket auction software live dashboard showing real-time bidding interface with team budgets, active bids, and player queue management",
  },
  {
    title: "Player Bidding Screen",
    description:
      "Intuitive bidding interface with player profiles and team selections",
    image: "/bidding-screen.jpg",
    alt: "Player bidding screen of cricket auction software displaying player profile card, current bid amount, team logos, and bidding controls",
  },
  {
    title: "Team Summary View",
    description:
      "Comprehensive team roster with squad composition and budget tracking",
    image: "/team-summary.jpg",
    alt: "Team summary dashboard showing squad composition, player categories breakdown, remaining budget, and complete roster listing",
  },
];

const ProductPreview = () => {
  return (
    <section
      id="preview"
      className="py-20 md:py-32 bg-gradient-hero overflow-hidden"
    >
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
            Product Preview
          </span>
          <h2 className=" text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-6">
            See the Software in Action
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Experience the power and elegance of our cricket auction platform.
            Built for seamless performance and stunning visuals.
          </p>
        </div>

        {/* Preview Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {previews.map((preview, index) => (
            <div
              key={index}
              className="group relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-foreground/10 card-hover"
            >
              <div className="aspect-4/3 overflow-hidden">
                <Image
                  src={preview.image}
                  alt={preview.alt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">
                  {preview.title}
                </h3>
                <p className="text-primary-foreground/70">
                  {preview.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
