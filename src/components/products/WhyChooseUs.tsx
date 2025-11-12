"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const pathname = usePathname();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Animate title and subtitle
      if (titleRef.current) {
        const elements = titleRef.current.children;
        gsap.from(elements, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        });
      }

      // Animate cards
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.from(cards, {
          opacity: 0,
          scale: 0.9,
          y: 50,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [pathname]);

  const data = [
    {
      icon: "/images/home/why-choose-us/icon-1.png",
      title: "Global Partnerships",
      desc: "Our team consists of surgeons, engineers, and health system experts who understand both the technical and clinical sides of surgical care.",
    },
    {
      icon: "/images/home/why-choose-us/icon-2.png",
      title: "Clinician-Led Approach",
      desc: "We collaborate with world-class technology providers to bring cutting-edge solutions to Saudi Arabia.",
    },
    {
      icon: "/images/home/why-choose-us/icon-3.png",
      title: "Regional Insight",
      desc: "We understand the unique clinical, regulatory, and logistical challenges in the Gulf region.",
    },
    {
      icon: "/images/home/why-choose-us/icon-4.png",
      title: "Turnkey Services",
      desc: "From consultation to supply, installation, training, and support — we provide complete, end-to-end services.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full px-[5%] sm:px-[8%] pt-10 pb-20 overflow-hidden text-center relative"
    >
      <div className="container mx-auto">
        <div ref={titleRef}>
          <h2 className="gradient-text font-semibold text-base">
            Why Choose Us
          </h2>
          <h1 className="mt-2 font-semibold text-3xl max-w-[500px] mx-auto">
            We bridge global innovation and local healthcare needs.
          </h1>
        </div>

        <div
          ref={cardsRef}
          className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {data.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={50}
                height={50}
                className="mb-2"
              />
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="mt-1.5 font-normal text-sm text-[#969393] text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
