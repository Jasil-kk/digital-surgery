"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ArrowButton from "./ArrowButton";
import Image from "next/image";

type EnquiryModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function EnquiryModal({ open, onClose }: EnquiryModalProps) {
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
        <form className="w-full">
          <h2 className="gradient-text font-semibold text-lg text-center">
            Connect With Digital Surgery
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="mt-10 w-full h-12 px-5 outline-none border-none text-sm font-medium bg-[#EFEFEF] rounded-2xl placeholder:text-black"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="mt-3 w-full h-12 px-5 outline-none border-none text-sm font-medium bg-[#EFEFEF] rounded-2xl placeholder:text-black"
          />
          <input
            type="email"
            placeholder="Company Email ID"
            className="mt-3 w-full h-12 px-5 outline-none border-none text-sm font-medium bg-[#EFEFEF] rounded-2xl placeholder:text-black"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="mt-3 w-full h-12 px-5 outline-none border-none text-sm font-medium bg-[#EFEFEF] rounded-2xl placeholder:text-black"
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
      </div>
    </div>
  );
}
