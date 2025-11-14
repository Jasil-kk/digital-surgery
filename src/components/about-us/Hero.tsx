"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    // GSAP context for cleanup on navigation
    const ctx = gsap.context(() => {
      gsap.from(textRef.current!.children, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup on route change
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-96 pb-20 sm:pb-0 sm:min-h-screen px-[5%] sm:px-[8%] relative text-white flex items-center text-center overflow-hidden"
    >
      <div className="container mx-auto pt-32 md:pt-20">
        <div ref={textRef}>
          <h2 className="gradient-text font-semibold text-base">Businesses</h2>
          <h1 className="mt-2 font-semibold text-4xl max-w-[500px] mx-auto">
            Where Precision Meets Innovation
          </h1>
        </div>
      </div>

      {/* Background layers */}
      <div
        style={{
          backgroundImage: 'url("/images/about/hero-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      <div
        style={{
          background:
            "linear-gradient(180.41deg, rgba(11, 16, 27, 0.8) 24.01%, rgba(19, 29, 50, 0.5) 63.54%, rgba(11, 16, 27, 0) 99.67%)",
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
    </section>
  );
}
