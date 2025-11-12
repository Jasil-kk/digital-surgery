import Hero from "@/components/products/Hero";
import ProductLists from "@/components/products/ProductLists";
import WhyChooseUs from "@/components/products/WhyChooseUs";

export default function Products() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <ProductLists />
      <WhyChooseUs />
    </div>
  );
}
