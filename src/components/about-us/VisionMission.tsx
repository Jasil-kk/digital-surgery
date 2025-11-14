"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VisionMission() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: false,
        },
      });

      tl.from(leftRef.current, {
        x: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          centerRef.current,
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          rightRef.current,
          {
            x: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full px-[5%] sm:px-[8%] py-20">
      <div className="container mx-auto">
        <div className="w-full items-center grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT */}
          <div ref={leftRef} className="w-full">
            <h2 className="gradient-text font-semibold text-base">Solutions</h2>
            <h1 className="mt-2 font-semibold text-3xl">Our Mission</h1>
            <ul className="pl-6 mt-5 text-base font-normal list-disc">
              <li>
                To bring global medical technology innovations into the Saudi
                and GCC healthcare market.
              </li>
              <li>
                To empower surgeons and clinicians with tools that enhance
                visibility, accuracy, and connectivity.
              </li>
              <li>
                To support healthcare institutions in building intelligent
                surgical and telehealth infrastructure.
              </li>
              <li>
                To advance Saudi Arabia’s health sector in alignment with Vision
                2030.
              </li>
            </ul>
          </div>

          {/* CENTER IMAGE */}
          <div
            ref={centerRef}
            className="w-full aspect-square lg:aspect-auto lg:h-[500px] rounded-4xl overflow-hidden"
          >
            <Image
              src={"/images/about/vision-pic.png"}
              alt="Vision"
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT */}
          <div ref={rightRef} className="w-full lg:text-right">
            <h2 className="gradient-text font-semibold text-base">Solutions</h2>
            <h1 className="mt-2 font-semibold text-3xl">Our Vision</h1>
            <p className="mt-5 text-base font-normal">
              To be the leading provider of smart surgical and healthcare
              technologies that enable precision, efficiency, and digital
              transformation in operating rooms, hospitals, and remote care
              environments.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
