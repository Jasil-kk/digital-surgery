import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutUs from "@/components/home/AboutUs";
import Hero from "@/components/home/Hero";
import Participents from "@/components/home/Participents";
import WhatWeDo from "@/components/home/WhatWeDo";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Hero />
      <WhatWeDo />
      <AboutUs />
      <WhyChooseUs />
      <Participents />
      <Footer />
    </div>
  );
}
