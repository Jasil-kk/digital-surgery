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
      className="w-full min-h-80 sm:min-h-screen px-[5%] sm:px-[8%] relative text-white flex items-center text-center overflow-hidden"
    >
      <div className="container mx-auto pt-32 md:pt-20">
        <div ref={textRef}>
          <h2 className="gradient-text font-semibold text-base">Media</h2>
          <h1 className="mt-2 font-semibold text-4xl max-w-[500px] mx-auto">
            Media & Press Center
          </h1>
        </div>
      </div>

      {/* Background layers */}
      <div
        style={{
          backgroundImage: 'url("/images/media/hero-bg.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[#171d2be8] -z-10" />
    </section>
  );
}
