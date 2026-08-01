import { Hero } from "@/components/Hero";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { Testimonials } from "@/components/Testimonials";
import { ProcessSection } from "@/components/ProcessSection";
import { LocationSection } from "@/components/LocationSection";
import { FAQSection } from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BeforeAfterSlider />
      <ServicesSection />
      <AboutSection />
      <Testimonials />
      <ProcessSection />
      <LocationSection />
      <FAQSection />
    </>
  );
}
