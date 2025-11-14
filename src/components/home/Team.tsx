"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ArrowButton from "../ArrowButton";

export default function Team() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".team-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
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
      className="w-full px-[5%] sm:px-[8%] py-20 relative overflow-hidden text-center text-white"
    >
      <div className="container mx-auto">
        <h2 className="gradient-text font-semibold text-base">Team</h2>
        <h1 className="mt-1 font-semibold text-3xl">Meet Our Team</h1>

        <div className="mt-10 w-full flex justify-center gap-8 flex-wrap">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="team-card w-full max-w-[278px] h-[340px] p-5 bg-[#0D244A] rounded-2xl border border-[#1F3965] shadow-md relative"
            >
              <Image
                src={"/images/home/team/team-1.png"}
                alt="Team"
                width={198}
                height={235}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 text-left p-2.5">
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-3">
                  <p className="text-[#121B2A] text-base font-bold">
                    Dr. Ali Manea Alahmary
                  </p>
                  <p className="text-[#121B2A] font-normal text-xs">
                    Founding member & chief of board members
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ArrowButton label="Meet our team" className="mx-auto mt-12" />
      </div>

      <div
        style={{
          backgroundImage: 'url("/images/home/team/bg-frame.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
    </section>
  );
}
