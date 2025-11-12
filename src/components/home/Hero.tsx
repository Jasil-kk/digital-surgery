"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ArrowButton from "../ArrowButton";

export default function Hero() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!textRef.current) return;

    // Animate title + paragraph
    gsap.from(textRef.current.children, {
      opacity: 0,
      x: 60,
      duration: 1,
      ease: "power3.out",
      stagger: 0.25,
    });

    // Animate button from bottom
    if (buttonRef.current) {
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        delay: 0.6, // starts after the text is in
      });
    }
  }, []);

  return (
    <section className="min-h-screen w-full text-white relative px-[5%] sm:px-[8%] flex items-end">
      <video
        src={"/videos/home-hero.mp4"}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      />

      <div
        style={{
          background:
            "linear-gradient(263.19deg, rgba(0, 0, 0, 0) 26.46%, rgba(0, 0, 0, 0.2) 86.58%),linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),linear-gradient(180deg, rgba(18, 27, 42, 0.5) 0%, rgba(5, 62, 142, 0.5) 100%)",
        }}
        className="absolute top-0 left-0 -z-10 h-full w-full"
      />

      <div className="container mx-auto sm:border-l border-[#02A8DA] py-10 sm:pl-9 sm:pb-20 sm:pt-10">
        <div ref={textRef}>
          <h1 className="font-semibold text-[40px] leading-11">
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
