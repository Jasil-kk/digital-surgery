"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Animate left-side count cards
      tl.from(".count-card", {
        opacity: 0,
        x: -50,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Animate right-side text & image
      tl.from(
        [".why-h2", ".why-h1", ".why-p", ".why-img"],
        {
          opacity: 0,
          x: 80,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=1" // overlaps with left-side count cards
      );

      // Animate bottom section titles
      tl.from(
        [".bottom-h2", ".bottom-h1"],
        {
          opacity: 0,
          y: -40,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=1" // overlaps with above animations
      );

      // Animate bottom cards (icons)
      tl.from(
        ".bottom-card",
        {
          opacity: 0,
          y: 50,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.8" // starts slightly before previous ends
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full text-white relative overflow-hidden"
    >
      <div className="w-full relative px-[5%] sm:px-[8%] py-20">
        {/* Background Video */}
        <video
          src={"/videos/home-why-choose.mp4"}
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted
        />

        {/* Counter Section */}
        <div className="w-full container mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            {[
              { num: "8+", text: "Operational Location" },
              { num: "12", text: "Successful Clients" },
              { num: "2000", text: "Well-trained Professionals" },
              { num: "50+", text: "Medical Partners" },
            ].map((item, i) => (
              <div
                key={i}
                className="count-card glassy-box min-h-60 flex flex-col items-center justify-center"
              >
                <h2 className="font-semibold font-open-sans text-[56px] leading-14">
                  {item.num}
                </h2>
                <p className="mt-2 font-semibold text-sm whitespace-pre-line">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:pt-10">
            <h2 className="why-h2 gradient-text font-semibold text-base">
              Saudi Healthcare Excellence
            </h2>
            <h1 className="why-h1 mt-2 font-semibold text-3xl max-w-[500px]">
              Proudly Supporting the Kingdom’s Healthcare Vision{" "}
              <span className="font-open-sans">2030</span>
            </h1>
            <p className="why-p mt-5 font-normal text-base text-[#F3F3F3]">
              As part of Saudi Arabia’s healthcare transformation journey,
              Digital Surgery plays a key role in enhancing clinical outcomes
              through technology, training, and reliable product delivery.
            </p>
            <Image
              src={"/images/png/vision-2030.png"}
              alt="Vision 2030"
              width={122}
              height={82}
              className="why-img mt-7"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-36 w-full container mx-auto text-center">
          <h2 className="bottom-h2 gradient-text font-semibold text-base">
            Why Choose us
          </h2>
          <h1 className="bottom-h1 mt-2 font-semibold text-3xl max-w-[500px] mx-auto">
            We bridge global innovation and local healthcare needs.
          </h1>

          <div className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
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
            ].map((item, i) => (
              <div key={i} className="bottom-card flex flex-col items-center">
                <Image src={item.icon} alt="Icon" width={50} height={50} />
                <h3 className="mt-2 font-semibold text-lg">{item.title}</h3>
                <p className="mt-1.5 font-nomal text-sm text-[#969393] text-center">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradients */}
      <div
        style={{
          background:
            "linear-gradient(0.71deg, #051C40 30.62%, rgba(15, 36, 68, 0.737899) 49.93%, rgba(5, 62, 142, 0) 85.18%)",
        }}
        className="absolute top-0 left-0 -z-10 h-full w-full"
      />
      <div
        style={{
          backgroundImage: 'url("/images/home/why-choose-us/bg-gradient.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute top-0 left-0 -z-10 h-full w-full"
      />
    </section>
  );
}
