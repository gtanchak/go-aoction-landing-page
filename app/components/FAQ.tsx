import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "How do I conduct a cricket auction online?",
    answer:
      "Simply sign up, create your tournament, upload your player list, set your auction rules, and invite team owners. Our platform handles the entire bidding process in real-time. The auctioneer controls the flow while teams bid from their devices. It's as simple as clicking a button to place bids.",
  },
  {
    question: "Is this suitable for small tournaments?",
    answer:
      "Absolutely! Our software scales perfectly from small 4-team local tournaments to large 20+ team leagues. The interface is intuitive enough for casual organizers yet powerful enough for professional-grade events. Small tournaments especially benefit from the time savings and error elimination.",
  },
  {
    question: "Can auction rules be customized?",
    answer:
      "Yes, our rule engine is highly flexible. You can configure squad size limits, player category quotas, overseas player limits, retention rules, bid increments, maximum bids per team, RTM (Right to Match) options, and much more. If your tournament has unique rules, we can accommodate them.",
  },
  {
    question: "Is live auction supported?",
    answer:
      "Yes, real-time live auctions are our specialty! Teams can participate from different locations, see bids as they happen, and place their bids instantly. The auctioneer has full control over the pace, can pause/resume, and manage the flow seamlessly. Works great for both in-person and virtual auctions.",
  },
  {
    question: "Is training provided?",
    answer:
      "Yes, we provide comprehensive onboarding support. This includes video tutorials, documentation, and live training sessions for your team. For larger tournaments, we offer dedicated support during your auction to ensure everything runs smoothly. Our support team is available 24/7 during auction events.",
  },
  {
    question: "Can multiple users participate simultaneously?",
    answer:
      "Absolutely! Each team owner/representative gets their own login. Multiple teams can bid simultaneously while the auctioneer and admins monitor from their dashboards. Spectators can also watch the live auction without bidding access. The platform handles hundreds of concurrent users effortlessly.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. If you don't find what you're
            looking for, feel free to contact us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-6 [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
