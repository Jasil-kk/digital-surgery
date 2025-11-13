"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MediaDetails() {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation (button, date, title, description)
      gsap.fromTo(
        ".media-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".media-header",
            start: "top 85%",
          },
        }
      );

      // Main image animation
      gsap.fromTo(
        ".main-image",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".main-image",
            start: "top 85%",
          },
        }
      );

      // Paragraph animation
      gsap.fromTo(
        ".content-text",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".content-text",
            start: "top 90%",
          },
        }
      );

      // Other images animation
      gsap.fromTo(
        ".media-image",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-[5%] sm:px-[8%] py-20 overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="media-header flex items-center gap-2 cursor-pointer"
        >
          <Image
            src={"/images/png/arrow-left.png"}
            alt="Arrow Left"
            width={20}
            height={20}
          />
          <p>View All Media</p>
        </button>

        {/* Date */}
        <div className="media-header mt-5 flex items-center gap-2">
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

        {/* Title */}
        <h1 className="media-header mt-4 font-bold text-4xl">
          Digital Surgery at the Riyadh Global Health Exhibition 2025
        </h1>

        {/* Short description */}
        <p className="media-header mt-5 text-base font-normal text-[#969393]">
          Digital Surgery proudly participated in the Riyadh Global Health
          Exhibition 2025, showcasing our next-generation surgical and
          healthcare technologies to global industry leaders, medical
          professionals, and healthcare innovators.
        </p>

        {/* Main Image */}
        <Image
          src={"/images/media-single/media-single-1.png"}
          alt="Main"
          width={1110}
          height={500}
          className="main-image hidden sm:block mt-5 w-full"
        />
        <Image
          src={"/images/media-single/media-single-1-mob.png"}
          alt="Main Mobile"
          width={361}
          height={280}
          className="main-image block sm:hidden mt-5 w-full"
        />

        {/* Content Section */}
        <div className="mt-10 mx-auto max-w-[800px]">
          <p className="content-text text-base font-normal">
            Digital Surgery was honoured to participate in the Riyadh Global
            Health Exhibition 2025, one of the Middle East’s most influential
            healthcare events. Bringing together international medical experts,
            technology innovators, and healthcare institutions, the exhibition
            offered a dynamic platform for us to present our latest advancements
            in surgical visualisation, smart operating room systems, minimally
            invasive tools, and Telehealth technologies. <br /> <br /> Our
            presence at the event underscored our commitment to transforming
            surgical care in alignment with Saudi Arabia’s Vision 2030. As a
            clinician-led medical technology company, we showcased how our
            integrated solutions can enhance surgical precision, empower
            healthcare professionals, and elevate patient outcomes across
            hospitals and surgical centres.
          </p>

          {/* More Images */}
          <Image
            src={"/images/media-single/media-single-2.png"}
            alt="Image 2"
            width={800}
            height={500}
            className="media-image mt-10 w-full"
          />
          <Image
            src={"/images/media-single/media-single-3.png"}
            alt="Image 3"
            width={800}
            height={500}
            className="media-image mt-10 w-full"
          />
          <Image
            src={"/images/media-single/media-single-4.png"}
            alt="Image 4"
            width={800}
            height={500}
            className="media-image mt-10 w-full"
          />
        </div>
      </div>
    </section>
  );
}
