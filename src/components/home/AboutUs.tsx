"use client";

import Image from "next/image";
import ArrowButton from "../ArrowButton";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // animate when section is ~80% into view
        },
      });

      tl.from(".about-h2", {
        opacity: 0,
        y: -40,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(".about-h1", {
          opacity: 0,
          x: -60,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(".about-p", {
          opacity: 0,
          x: -60,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".about-btn-wrapper",
          {
            opacity: 0,
            y: 50,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(".about-img", {
          opacity: 0,
          scale: 1.2,
          duration: 1,
          ease: "power3.out",
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-[5%] sm:px-[8%] py-20 relative overflow-hidden"
    >
      <div className="container mx-auto">
        <h2 className="about-h2 gradient-text font-semibold text-base">
          About Us
        </h2>
        <h1 className="about-h1 mt-1 font-semibold text-3xl">
          Delivering the Future of Surgical Care, Today.
        </h1>
        <p className="about-p mt-3 font-normal text-base text-[#626262] max-w-[700px]">
          Digital Surgery is a Saudi-based healthcare solutions company
          specializing in the supply and distribution of high-quality medical
          and surgical equipment. We collaborate with leading global
          manufacturers to ensure hospitals across the Kingdom are equipped with
          the latest innovations in patient care technology.
        </p>

        <div className="about-btn-wrapper">
          <ArrowButton
            label="About More"
            className="mt-6"
            textClassName="text-[#4B7ABC]"
          />
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-0 right-0 -z-10 h-full about-img">
        <Image
          src={"/images/svg/home-frame-1.png"}
          alt="Frame"
          width={512}
          height={512}
          className="h-full w-full object-contain"
        />
      </div>
    </section>
  );
}
