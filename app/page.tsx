import FAQ from "./components/FAQ";
import Features from "./components/Features";
import FinalCTA from "./components/FinalCTA";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import ProductPreview from "./components/ProductPreview";
import Testimonials from "./components/Testimonials";
import UseCases from "./components/UseCases";
import WhatIs from "./components/WhatIs";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <WhatIs />
        <Features />
        <HowItWorks />
        <UseCases />
        <WhyChooseUs />
        <ProductPreview />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
    </div>
  );
}
