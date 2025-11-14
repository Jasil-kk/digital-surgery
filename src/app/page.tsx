import AboutUs from "@/components/home/AboutUs";
import Hero from "@/components/home/Hero";
import Participents from "@/components/home/Participents";
import Team from "@/components/home/Team";
import WhatWeDo from "@/components/home/WhatWeDo";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <WhatWeDo />
      <AboutUs />
      <WhyChooseUs />
      <Participents />
      <Team />
    </div>
  );
}
