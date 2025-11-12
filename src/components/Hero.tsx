"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useLayoutEffect(() => {
    if (!videoRef.current || !containerRef.current) return;

    gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom+=400 top",
        scrub: true,
        pin: true,
      },
      scale: 0.35,
      borderRadius: "24px",
      y: "-40vh",
    });
  }, []);

  return (
    <section ref={containerRef} className="hero-wrapper h-screen w-full relative">
      <video
      src={"/mov_bbb.mp4"}
        ref={videoRef}
        className="hero-video w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
    </section>
  );
}
