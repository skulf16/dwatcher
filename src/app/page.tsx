import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Insight } from "@/components/sections/Insight";
import { Reports } from "@/components/sections/Reports";
import { Tech } from "@/components/sections/Tech";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Features />
      <HowItWorks />
      <Insight />
      <Reports />
      <Tech />
      <Pricing />
      <Contact />
    </>
  );
}
