"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

type WhatWeDoData = {
  title: string;
  description: string;
  image: string;
};

export default function WhatWeDo() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subTitleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const data: WhatWeDoData[] = [
    {
      title: "Advanced Surgical Visualisation",
      description:
        "High-definition (4K/8K), 3D, and AR-integrated imaging systems for precise, immersive surgical navigation and education.",
      image: "/images/home/what-we-do/what-we-do-1.webp",
    },
    {
      title: "Smart Operating Room Integration",
      description:
        "Digitally connected ORs with centralised control, wireless data sharing, and automated workflows for seamless surgical efficiency.",
      image: "/images/home/what-we-do/what-we-do-2.webp",
    },
    {
      title: "Minimally Invasive Surgery Tools",
      description:
        "AI-powered laparoscopic, robotic, and endoscopic instruments ensuring precision, safety, and minimal patient impact.",
      image: "/images/home/what-we-do/what-we-do-3.webp",
    },
    {
      title: "Medical Imaging & Diagnostics",
      description:
        "Real-time, AI-enhanced imaging systems integrated with surgical tools for faster and more accurate clinical decisions.",
      image: "/images/home/what-we-do/what-we-do-4.webp",
    },
    {
      title: "Telehealth & Remote Solutions",
      description:
        "Secure telemedicine platforms for remote surgery, consultation, and monitoring with medical-grade connectivity and data protection.",
      image: "/images/home/what-we-do/what-we-do-5.webp",
    },
    {
      title: "Surgical Training & Simulation",
      description:
        "VR-based training and AI skill assessment systems for hospitals and universities to enhance surgical performance.",
      image: "/images/home/what-we-do/what-we-do-6.webp",
    },
  ];

  useLayoutEffect(() => {
    if (!titleRef.current || !subTitleRef.current || !descRef.current) return;

    gsap.from(titleRef.current, {
      opacity: 0,
      y: -40,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
      },
    });

    gsap.from([subTitleRef.current, descRef.current], {
      opacity: 0,
      x: -60,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: subTitleRef.current,
        start: "top 85%",
      },
    });

    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      gsap.from(cards, {
        opacity: 0,
        x: (i: number) => (i % 2 === 0 ? -80 : 80),
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
        },
      });
    }
  }, []);

  return (
    <section className="w-full px-[5%] sm:px-[8%] py-20 text-center">
      <div className="container mx-auto">
        <h2 ref={titleRef} className="gradient-text font-semibold text-base">
          What We Do
        </h2>

        <h1 ref={subTitleRef} className="mt-1 font-semibold text-3xl">
          Surgical Innovation and Digital Healthcare Connectivity
        </h1>

        <p
          ref={descRef}
          className="mt-3 font-normal text-base text-[#969393] mx-auto max-w-[730px]"
        >
          Digital Surgery offers comprehensive solutions in both surgical
          innovation and digital healthcare connectivity, focusing on these core
          areas
        </p>

        <div
          ref={cardsRef}
          className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full aspect-536/350 overflow-hidden rounded-2xl relative"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={536}
                height={350}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2.5 left-2.5 w-full max-w-[245px] min-h-[191px] bg-white rounded-2xl text-left p-5">
                <h3 className="text-lg font-semibold leading-6">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-normal text-[#626262]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
