"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import ArrowButton from "../ArrowButton";

export default function Hero() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (!textRef.current || !buttonRef.current) return;

    // Cleanly isolate GSAP animations in a context
    const ctx = gsap.context(() => {
      // Animate heading + paragraph
      gsap.from(textRef.current!.children, {
        opacity: 0,
        x: 60,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.1,
      });

      // Animate button
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.6,
      });
    });

    // Cleanup animation when route changes
    return () => ctx.revert();
  }, [pathname]); // runs on every route navigation

  return (
    <section className="min-h-screen w-full text-white relative px-[5%] sm:px-[8%] pt-40 flex items-end overflow-hidden">
      {/* Background video */}
      <video
        src="/videos/home-hero.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      />

      {/* Overlay gradient */}
      <div
        style={{
          background:
            "linear-gradient(263.19deg, rgba(0, 0, 0, 0) 26.46%, rgba(0, 0, 0, 0.2) 86.58%), linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(180deg, rgba(18, 27, 42, 0.5) 0%, rgba(5, 62, 142, 0.5) 100%)",
        }}
        className="absolute top-0 left-0 -z-10 h-full w-full"
      />

      {/* Content */}
      <div className="container mx-auto sm:border-l border-[#02A8DA] py-10 sm:pl-9 sm:pb-20 sm:pt-10">
        <div ref={textRef}>
          <h1 className="font-semibold text-[40px] leading-[1.1]">
            Your Partner in Advanced <br /> Surgical & Medical Excellence.
          </h1>

          <p className="mt-5 font-normal text-base max-w-[550px]">
            Supplying Saudi Arabia’s hospitals and clinics with world-class
            medical and surgical equipment — delivering precision, reliability,
            and innovation where it matters most.
          </p>
        </div>

        <div ref={buttonRef}>
          <ArrowButton label="Explore Now" className="mt-5" />
        </div>
      </div>
    </section>
  );
}
