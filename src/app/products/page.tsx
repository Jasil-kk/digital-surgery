import Hero from "@/components/products/Hero";
import ProductLists from "@/components/products/ProductLists";
import WhyChooseUs from "@/components/products/WhyChooseUs";

export default function Products() {
  const products = [
    {
      image: "/images/products/product-1.png",
      title: "Advanced Surgical Visualisation",
      points: [
        "Ultra-high-definition (4K/8K), 3D, and immersive surgical imaging systems.",
        "Endoscopic, laparoscopic, and microscopic video solutions.",
        "Augmented and mixed reality overlays for surgical navigation and education.",
        "Hands-free, head-mounted imaging tools that integrate with OR workflows.",
      ],
    },
    {
      image: "/images/products/product-2.png",
      title: "Smart Operating Room Integration",
      points: [
        "Digitally connected operating rooms with centralized control.",
        "Surgical display systems with integrated recording and streaming.",
        "Wireless data sharing and device interoperability.",
        "Automated OR workflows to enhance efficiency and sterility.",
      ],
    },
    {
      image: "/images/products/product-3.png",
      title: "Minimally Invasive Surgery Tools",
      points: [
        "High-performance laparoscopic, robotic-assisted, and endoscopic instruments.",
        "Electrosurgical and energy-based devices for tissue manipulation and dissection.",
        "AI-supported tools for precision and safety in complex procedures.",
      ],
    },
    {
      image: "/images/products/product-4.png",
      title: "Medical Imaging & Diagnostics",
      points: [
        "Pre-operative and intraoperative imaging systems.",
        "Real-time imaging platforms integrated with surgical tools.",
        "AI-enhanced visualization and diagnostic tools for faster clinical decisions.",
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
