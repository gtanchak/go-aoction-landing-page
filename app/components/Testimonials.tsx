import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Tournament Director",
    organization: "Mumbai Premier League",
    content:
      "This software transformed our auction process completely. What used to take 4-5 hours now completes in under 2 hours with zero errors. The transparency has eliminated all disputes.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Sports Coordinator",
    organization: "Delhi Public School",
    content:
      "Our inter-school cricket tournament has become the most anticipated event of the year, thanks to the excitement of live auctions. Students love the IPL-style experience!",
    rating: 5,
  },
  {
    name: "Vikram Patel",
    role: "HR Manager",
    organization: "TechCorp India",
    content:
      "The corporate league auction brought our employees together like nothing else. The software's ease of use meant even non-tech folks could participate seamlessly. Incredible team building experience!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className=" text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Trusted by Tournament{" "}
            <span className="text-gradient-primary">Organizers Worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from organizers who have transformed their cricket auctions
            with our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border card-hover relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.organization}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
