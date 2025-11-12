"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Hero() {
  const pathname = usePathname();

  // Refs for animation
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!textRef.current || !imageRef.current) return;

      // Animate text elements
      const textChildren = textRef.current.children;

      gsap.from(textChildren, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.25,
      });

      // Animate image with slight delay
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 60,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.4,
      });
    });

    return () => ctx.revert();
  }, [pathname]); // Re-run when navigating

  return (
    <section className="w-full min-h-screen px-[5%] sm:px-[8%] relative text-white flex items-end overflow-hidden">
      <div className="container mx-auto pt-32 md:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Text Section */}
          <div ref={textRef} className="flex flex-col justify-center">
            <h2 className="gradient-text font-semibold text-base">
              Businesses - Products
            </h2>
            <h1 className="mt-3 font-semibold text-5xl leading-tight">
              Innovation Engineered <br /> for Precision
            </h1>
            <p className="mt-5 text-base font-normal text-[#c9c9c9] max-w-[600px]">
              Explore our advanced range of surgical and medical technologies —
              from ultra-HD visualisation and minimally invasive tools to
              AI-driven imaging and VR training systems. Every product is
              designed to enhance accuracy, efficiency, and patient safety in
              the operating room.
            </p>
          </div>

          {/* Image Section */}
          <div
            ref={imageRef}
            className="w-full flex justify-center items-center"
          >
            <Image
              src={"/images/products/hero-image.png"}
              alt="Product"
              width={494}
              height={418}
              className="w-full max-w-[500px] object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Background layers */}
      <div
        style={{
          backgroundImage: 'url("/images/products/hero-bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[#051b40d2] -z-10" />
    </section>
  );
}
