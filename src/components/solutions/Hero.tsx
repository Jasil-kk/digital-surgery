"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    // Create a GSAP context for safe cleanup on navigation
    const ctx = gsap.context(() => {
      gsap.from(textRef.current!.children, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.25,
      });
    }, sectionRef);

    return () => ctx.revert(); // Clean up on route change
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen px-[5%] sm:px-[8%] relative text-white flex items-center overflow-hidden"
    >
      <div className="container mx-auto pt-32 pb-20">
        {/* Text Section */}
        <div ref={textRef} className="flex flex-col justify-center">
          <h2 className="gradient-text font-semibold text-base">
            Businesses - Solutions
          </h2>
          <h1 className="mt-3 font-semibold text-5xl leading-tight">
            Integrated Intelligence <br /> for Smarter Care
          </h1>
          <p className="mt-5 text-base font-normal text-[#c9c9c9] max-w-[600px]">
            We create end-to-end digital ecosystems that connect surgical
            devices, data, and teams. Our smart OR integration, telehealth, and
            diagnostic solutions empower clinicians to work seamlessly —
            transforming surgical performance and patient outcomes.
          </p>
        </div>
      </div>

      {/* Background layers (no animation) */}
      <div
        style={{
          backgroundImage: 'url("/images/solutions/hero-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      <div
        style={{
          background:
            "linear-gradient(180.41deg, rgba(5, 26, 60, 0.75) 24.01%, rgba(5, 26, 60, 0.7) 63.54%, rgba(5, 26, 60, 0) 99.67%)",
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
    </section>
  );
}
