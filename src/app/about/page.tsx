import CoreValues from "@/components/about-us/CoreValues";
import Goals from "@/components/about-us/Goals";
import Hero from "@/components/about-us/Hero";
import Specialities from "@/components/about-us/Specialities";
import VisionMission from "@/components/about-us/VisionMission";

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <VisionMission />
      <Goals />
      <Specialities />
      <CoreValues />
    </div>
  );
}
