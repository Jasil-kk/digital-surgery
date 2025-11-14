"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CoreValues() {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const coreValues = [
    "Clinical Excellence",
    "Innovation with Purpose",
    "Integrity & Trust",
    "Patient-First Impact",
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-[5%] sm:px-[8%] pt-5 pb-36 bg-[#172338] text-white relative"
    >
      <div className="container mx-auto text-center">
        <h1 className="mt-2 font-semibold text-4xl">Our Core Values</h1>
      </div>

      <div className="mt-12 w-full flex justify-center gap-3 flex-wrap">
        {coreValues.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="relative z-10 text-center w-[270px] h-20 flex items-center justify-center font-semibold"
          >
            <Image
              src={"/images/about/pill-shape.png"}
              alt="Shape"
              width={270}
              height={80}
              className="absolute top-0 left-0 w-full h-full -z-10"
            />
            {item}
          </div>
        ))}
      </div>

      <Image
        src={"/images/about/core-value-shape.png"}
        alt="Shape"
        width={304}
        height={304}
        className="absolute right-0 bottom-0"
      />
    </section>
  );
}
