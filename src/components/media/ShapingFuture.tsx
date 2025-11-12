"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ShapingFuture() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".heading",
            start: "top 80%",
          },
        }
      );

      // Paragraph animation
      gsap.fromTo(
        ".description",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".description",
            start: "top 85%",
          },
        }
      );

      // Image grid animation
      gsap.fromTo(
        ".grid-item",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-[5%] sm:px-[8%] py-20 text-center overflow-hidden"
    >
      <div className="container mx-auto">
        <h1 className="heading font-semibold text-3xl max-w-[500px] mx-auto">
          Shaping the Future of Surgery — One Milestone at a Time
        </h1>
        <p className="description mt-4 font-normal text-base text-[#969393] mx-auto max-w-[730px]">
          Stay updated with the latest announcements, events, partnerships, and
          expansion plans from Digital Surgery. Explore our milestones, industry
          participation, and the innovations shaping the future of surgical and
          healthcare technology.
        </p>

        <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-4">
          {/* Left Big Image */}
          <div className="grid-item w-full h-[400px] rounded-2xl overflow-hidden relative">
            <Image
              src={"/images/home/participents/image-1.png"}
              alt="Image"
              width={617}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 w-full max-w-[250px] bg-white rounded-2xl p-5 text-left">
              <h3 className="font-bold text-lg sm:text-xl">
                Digital Surgery at the Riyadh Global Health Exhibition{" "}
                <span className="font-open-sans">2025</span>
              </h3>
              <div className="mt-2 flex items-center gap-2">
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
              <button className="mt-2 sm:mt-5 text-[#4B7ABC] font-normal text-sm border border-[#4B7ABC] rounded-lg h-8 sm:h-10 w-[109px] cursor-pointer hover:bg-[#4B7ABC] hover:text-white transition-all">
                View Story
              </button>
            </div>
          </div>

          {/* Right 2 Smaller Images */}
          <div className="grid-item w-full grid grid-cols-2 gap-4">
            <div className="w-full h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={"/images/home/participents/image-2.png"}
                alt="Image"
                width={230}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full rounded-2xl overflow-hidden h-[400px]">
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

        {/* Bottom Grid */}
        <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="grid-item w-full h-[400px] rounded-2xl overflow-hidden relative"
            >
              <Image
                src={`/images/media/media-${item}.png`}
                alt={`Image ${item}`}
                width={353}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 w-full max-w-[250px] bg-white rounded-2xl p-5 text-left">
                <h3 className="font-bold text-lg sm:text-xl">
                  Unlocking Longevity Solutions
                </h3>
                <p className="mt-2 font-normal text-sm">
                  Medical Excellence Forum
                </p>
                <div className="mt-2 sm:mt-3 flex items-center gap-2">
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
                <button className="mt-2 sm:mt-5 text-[#4B7ABC] font-normal text-sm border border-[#4B7ABC] rounded-lg h-8 sm:h-10 w-[109px] cursor-pointer hover:bg-[#4B7ABC] hover:text-white transition-all">
                  View Story
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
