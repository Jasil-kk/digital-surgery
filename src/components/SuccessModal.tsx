"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ArrowButton from "./ArrowButton";
import Image from "next/image";

type SuccessModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function SuccessModal({ open, onClose }: SuccessModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  // Animate when modal opens
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";

      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      gsap.fromTo(
        modalRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center z-9999 overflow-auto py-10 px-[5%]"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="max-w-[650px] w-full my-auto bg-white rounded-2xl sm:rounded-4xl p-6 py-10 sm:p-14 md:p-16 shadow-xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 sm:top-5 right-3 sm:right-5 hover:bg-slate-300 transition-all p-1 w-9 sm:w-10 h-9 sm:h-10 rounded-full select-none cursor-pointer"
        >
          <Image
            src={"/images/png/round-cross.png"}
            alt="Close"
            width={40}
            height={40}
          />
        </button>
        <div className="text-center flex flex-col items-center">
          <Image
            src={"/images/png/green-tick.png"}
            alt="Tick"
            width={100}
            height={100}
          />
          <h1 className="mt-8 gradient-text font-semibold text-3xl sm:text-4xl">
            Thank You for Contacting Digital Surgery!
          </h1>
          <p className="mt-6 font-medium text-base">
            We’ve received your message and our team will reach out to you
            shortly with the information you need.
          </p>
        </div>
      </div>
    </div>
  );
}
