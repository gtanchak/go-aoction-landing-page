import {
  Briefcase,
  Building2,
  Gamepad2,
  GraduationCap,
  MapPin,
} from "lucide-react";

const useCases = [
  {
    icon: GraduationCap,
    title: "Cricket Academies",
    description:
      "Perfect for academy tournaments where young talents are drafted into teams. Create exciting mock-IPL experiences for aspiring cricketers with professional-grade auction management.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Building2,
    title: "School & College Tournaments",
    description:
      "Ideal for inter-school and inter-college cricket leagues. Engage students with real auction experiences while maintaining fairness and transparency in team formations.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Briefcase,
    title: "Corporate Cricket Leagues",
    description:
      "Bring excitement to your corporate cricket events. Perfect for office leagues where departments or teams bid for employees, fostering team building and healthy competition.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: MapPin,
    title: "Local Franchise Leagues",
    description:
      "Power your local cricket tournaments with professional auction capabilities. Whether it's a neighborhood league or city-wide championship, run auctions like the pros.",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Gamepad2,
    title: "Fantasy Cricket Auctions",
    description:
      "Host virtual fantasy cricket drafts with friends and communities. Create leagues, set budgets, and experience the thrill of building your dream team through live bidding.",
    color: "bg-pink-500/10 text-pink-600",
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Who Uses It
          </span>
          <h2 className=" text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Built for Every{" "}
            <span className="text-gradient-primary">Cricket Community</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our cricket auction software adapts to tournaments of all sizes and
            types. From small local leagues to large-scale championships.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-6 lg:p-8 border border-border card-hover ${
                index === useCases.length - 1
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${useCase.color}`}
              >
                <useCase.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
