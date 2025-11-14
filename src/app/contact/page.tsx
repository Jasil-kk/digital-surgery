"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowButton from "@/components/ArrowButton";
import ContactCards from "@/components/contact/ContactCards";

gsap.registerPlugin(ScrollTrigger);

export default function Media() {
  const pageRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in heading
      gsap.from(".contact-heading", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-heading",
          start: "top 85%",
        },
      });

      // Form animation
      gsap.from(".contact-form", {
        opacity: 0,
        y: 60,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 90%",
        },
      });

      // Contact Cards
      gsap.from(".contact-cards", {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-cards",
          start: "top 90%",
        },
      });

      // Fix animations on navigation (Next.js)
      ScrollTrigger.refresh();
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full min-h-screen" ref={pageRef}>
      {/* HERO BG */}
      <div className="w-full h-screen bg-[#06173d73] relative">
        <div
          style={{
            backgroundImage: 'url("/images/contact/hero-frame.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute top-0 left-0 w-full h-full -z-10"
        />
      </div>

      {/* CONTENT AREA */}
      <div
        style={{
          background:
            "linear-gradient(270deg, #D8E4F7 12.51%, #E1EAFA 48.08%, #D8E4F7 90.86%)",
        }}
        className="w-full flex flex-col pb-20"
      >
        <div className="-mt-96 z-10 w-full px-[5%] sm:px-[8%]">
          <div className="container mx-auto text-center">
            {/* HEADING */}
            <div className="contact-heading">
              <h2 className="gradient-text font-semibold text-base">Contact</h2>
              <h1 className="mt-2 font-semibold text-4xl text-white">
                Let’s Advance Healthcare Together
              </h1>
            </div>

            {/* FORM */}
            <form className="contact-form mt-20 sm:mt-32 w-full max-w-[650px] mx-auto bg-white rounded-4xl p-6 py-10 sm:p-14 md:p-16">
              <h2 className="gradient-text font-semibold text-lg text-center">
                Connect With Digital Surgery
              </h2>

              <input
                type="text"
                placeholder="Full Name"
                className="mt-10 w-full h-12 sm:h-14 px-5 outline-none border-none text-sm font-medium bg-[#EFEFEF] rounded-2xl placeholder:text-black"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="mt-3 w-full h-12 sm:h-14 px-5 outline-none border-none text-sm font-medium bg-[#EFEFEF] rounded-2xl placeholder:text-black"
              />
              <input
                type="email"
                placeholder="Company Email ID"
                className="mt-3 w-full h-12 sm:h-14 px-5 outline-none border-none text-sm font-medium bg-[#EFEFEF] rounded-2xl placeholder:text-black"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="mt-3 w-full h-12 sm:h-14 px-5 outline-none border-none text-sm font-medium bg-[#EFEFEF] rounded-2xl placeholder:text-black"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="mt-3 w-full px-5 py-5 outline-none border-none text-sm font-medium bg-[#EFEFEF] rounded-2xl placeholder:text-black"
              ></textarea>

              <ArrowButton
                label="Submit"
                className="mx-auto mt-10"
                textClassName="min-w-[150px]"
              />
            </form>

            {/* CONTACT CARDS */}
            <div className="contact-cards w-full mt-24">
              <ContactCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
