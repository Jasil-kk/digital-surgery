"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ArrowButton from "../ArrowButton";

gsap.registerPlugin(ScrollTrigger);

interface Product {
  image: string;
  title: string;
  points: string[];
}

type ProductListProps = {
  data: Product[];
};

export default function ProductLists({ data }: ProductListProps) {
  const pathname = usePathname();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!cardsRef.current) return;
      const cards = cardsRef.current.children;

      // Animate each card when it scrolls into view
      gsap.from(cards, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate the button when it appears
      gsap.from(".enquiry-button", {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".enquiry-button",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [pathname]);

  return (
    <section
      ref={sectionRef}
      className="w-full px-[5%] sm:px-[8%] py-20 overflow-hidden"
    >
      <div className="container mx-auto">
        <div ref={cardsRef} className="w-full flex flex-col gap-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-2xl border border-[#C8DFE6] flex flex-col lg:flex-row items-start gap-5 p-5"
            >
              <div className="w-full max-w-[410px] aspect-video">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={410}
                  height={228}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="lg:pt-5">
                <h2 className="font-bold text-2xl text-[#0a0a0a]">
                  {item.title}
                </h2>
                <ul className="mt-4 text-[#626262] font-normal text-base list-disc pl-6 space-y-1">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="enquiry-button flex justify-center">
          <ArrowButton label="Send Enquiry" className="mx-auto mt-10" />
        </div>
      </div>
    </section>
  );
}
