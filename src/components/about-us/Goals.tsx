"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Goals() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !imageRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -80,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(textRef.current, {
        opacity: 0,
        x: 80,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-[5%] sm:px-[8%] py-20 bg-[#D8E4F7]"
    >
      <div className="container mx-auto">
        <div className="w-full items-center grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* IMAGE */}
          <div
            ref={imageRef}
            className="w-full aspect-square order-2 md:order-1"
          >
            <Image
              src={"/images/about/goal-image.png"}
              alt="Goal"
              width={533}
              height={549}
              className="w-full"
            />
          </div>

          {/* TEXT */}
          <div ref={textRef} className="w-full order-1 md:order-2">
            <h2 className="gradient-text font-semibold text-base">
              Our Strategic Goals
            </h2>
            <h1 className="mt-2 font-semibold text-4xl">Future Roadmap</h1>
            <ul className="pl-6 mt-6 text-base font-normal list-disc">
              <li>
                Expansion into full-service surgical robotics and AI-based
                platforms.
              </li>
              <li>Establishment of local assembly and R&D partnerships.</li>
              <li>
                Localisation of digital health software for Arabic-speaking
                clinicians.
              </li>
              <li>
                Development of mobile tele health units for remote care
                delivery.
              </li>
              <li>
                Certification and training programs in partnership with local
                medical schools.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
