"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function Participents() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.from(".part-title", {
        y: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .from(
          ".part-subtitle",
          {
            y: -40,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          ".part-image-1",
          {
            x: -100,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          ".part-image-2",
          {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .from(
          ".part-image-3",
          {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-[5%] sm:px-[8%] py-20 relative overflow-hidden text-center"
    >
      <div className="container mx-auto">
        <h2 className="part-title gradient-text font-semibold text-base">
          Participents
        </h2>
        <h1 className="part-subtitle mt-1 font-semibold text-3xl">
          We bridge global innovation
        </h1>

        <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-3">
          {/* Left Big Image */}
          <div className="part-image-1 w-full h-[400px] rounded-2xl overflow-hidden relative">
            <Image
              src={"/images/home/participents/image-1.png"}
              alt="Image"
              width={617}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 w-full max-w-[250px] bg-white rounded-2xl p-5 text-left">
              <h3 className="font-bold text-lg sm:text-xl">
                Unlocking <br /> Longevity Solutions
              </h3>
              <p className="mt-2 sm:mt-3 font-normal text-sm">
                Medical Excellence Forum
              </p>
              <div className="mt-2 sm:mt-5 flex items-center gap-2">
                <Image
                  src={"/images/png/calendar-icon.png"}
                  alt="Calendar"
                  width={20}
                  height={20}
                />
                <p className="text-[#4B7ABC] font-semibold text-sm font-open-sans">
                  20 October 2025
                </p>
              </div>
              <button
                onClick={() => router.push("/media-single")}
                className="mt-2 sm:mt-5 text-[#4B7ABC] font-normal text-sm border border-[#4B7ABC] rounded-lg h-8 sm:h-10 w-[109px] cursor-pointer hover:bg-[#4B7ABC] hover:text-white transition-all"
              >
                View Story
              </button>
            </div>
          </div>

          {/* Right 2 Smaller Images */}
          <div className="w-full grid grid-cols-2 gap-3">
            <div className="part-image-2 w-full h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={"/images/home/participents/image-2.png"}
                alt="Image"
                width={230}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="part-image-3 w-full h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={"/images/home/participents/image-3.png"}
                alt="Image"
                width={230}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
