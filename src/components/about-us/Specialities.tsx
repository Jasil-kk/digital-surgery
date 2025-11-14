"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Specialities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // 🔹 Animate Cards
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // 🔹 Animate Left Text
      gsap.from(textBlockRef.current, {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textBlockRef.current,
          start: "top 80%",
        },
      });

      // 🔹 Animate Right Image
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      });

      // Required for Next.js page change animations to work again
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const specialities = [
    {
      image: "/images/about/speciality-1.png",
      text: "Surgical Visualisation & Imaging Systems",
    },
    {
      image: "/images/about/speciality-2.png",
      text: "Smart Operating Room Integration",
    },
    {
      image: "/images/about/speciality-3.png",
      text: "Minimally Invasive Surgical Technologies",
    },
    {
      image: "/images/about/speciality-4.png",
      text: "AI-Enhanced Diagnostics",
    },
    {
      image: "/images/about/speciality-5.png",
      text: "Telehealth & Remote Care Systems",
    },
    {
      image: "/images/about/speciality-6.png",
      text: "Surgical Training & Simulation",
    },
    {
      image: "/images/about/speciality-7.png",
      text: "Robotic-Assisted Surgery",
    },
    {
      image: "/images/about/speciality-8.png",
      text: "Clinical Data & Device Connectivity",
    },
  ];

  return (
    <section ref={sectionRef} className="w-full relative overflow-hidden">
      {/* TOP SECTION */}
      <div className="text-white px-[5%] sm:px-[8%] py-20 pb-64 relative">
        <div className="container mx-auto text-center">
          <h1 className="mt-2 font-semibold text-4xl">Specialties</h1>

          <div className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {specialities.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="count-card glassy-box min-h-60 p-5 flex flex-col items-center justify-center"
              >
                <Image
                  src={item.image}
                  alt={item.text}
                  width={50}
                  height={50}
                />
                <p className="mt-3 font-semibold text-base whitespace-pre-line">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Background Image */}
        <div
          style={{
            backgroundImage: 'url("/images/about/specialities-bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute top-0 left-0 -z-10 h-full w-full"
        />
      </div>

      {/* LOWER SECTION */}
      <div className="w-full px-[5%] sm:px-[8%] bg-[#172338] flex">
        <div className="-mt-52 container mx-auto py-20">
          <div className="relative w-full min-h-[560px] p-5 items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="absolute top-0 left-0 h-full w-full">
              <Image
                src={"/images/about/who-we-are-bg.png"}
                alt="Bg"
                width={1030}
                height={560}
                className="hidden lg:block w-full h-full"
              />
              <Image
                src={"/images/about/who-we-are-bg-mob.png"}
                alt="Bg"
                width={1030}
                height={560}
                className="block lg:hidden w-full h-full"
              />
            </div>

            {/* LEFT TEXT */}
            <div
              ref={textBlockRef}
              className="px-2 py-5 sm:p-5 pr-10 sm:pr-20 lg-p-0 lg:pr-0 lg:pl-20 z-10"
            >
              <h2 className="gradient-text font-semibold text-base">
                Who we are
              </h2>
              <h1 className="mt-2 font-semibold text-4xl">Digital Surgery</h1>
              <p className="mt-5 text-base font-normal">
                Digital Surgery is a clinician-led medical technology company
                founded on 01 January 2025 in Saudi Arabia. Operating at the
                intersection of medical devices, health technology, surgical
                innovation, and tele health, we are dedicated to transforming
                how healthcare is delivered across Saudi Arabia and the wider
                GCC region. Built by a team of experienced surgeons, biomedical
                engineers, and healthcare innovators, Digital Surgery was
                created to address real clinical challenges using modern,
                intelligent, and precision-driven technology.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div ref={imageRef} className="z-10">
              <Image
                src={"/images/products/hero-image.png"}
                alt="Product"
                width={489}
                height={418}
                className="w-full max-w-[500px] object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
