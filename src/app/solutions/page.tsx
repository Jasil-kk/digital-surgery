import ProductLists from "@/components/products/ProductLists";
import WhyChooseUs from "@/components/products/WhyChooseUs";
import Hero from "@/components/solutions/Hero";

export default function Solutions() {
  const products = [
    {
      image: "/images/solutions/solution-1.png",
      title: "Telehealth & Remote Medical Solutions",
      points: [
        "Real-time, secure audio-visual communication platforms for clinical consultations, remote surgeries, and patient monitoring.",
        "Medical-grade systems for remote diagnostics, tele-consulting, and multidisciplinary collaboration across distances.",
        "Wearable and head-mounted visual devices that allow surgeons and specialists to transmit live video from their point-of-view to remote clinicians.",
        "Encrypted, high-fidelity data sharing systems designed for hospital use, rural care, and mobile units.",
      ],
    },
    {
      image: "/images/solutions/solution-2.png",
      title: "Surgical Training & Simulation",
      points: [
        "Virtual reality (VR) platforms for surgeon training and simulation.",
        "AI-based skill assessment systems and procedural simulators.",
        "Training support for hospitals, surgical centers, and universities.",
      ],
    },
  ];
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <ProductLists data={products} />
      <WhyChooseUs />
    </div>
  );
}
