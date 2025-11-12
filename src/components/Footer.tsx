"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full px-[5%] sm:px-[8%] bg-[#070B16] text-white">
      <div className="container mx-auto w-full">
        <div className="w-full py-20 relative">
          <Image
            src={"/images/png/ministry-logo.png"}
            alt="Minsitry Logo"
            width={78}
            height={71}
          />
          <div className="mt-10 flex items-start gap-10 sm:gap-20 md:gap-40 flex-wrap">
            <div className="">
              <h3 className="text-[#4BC5ED] font-normal text-lg">
                Get in Touch
              </h3>
              <p className="mt-2 font-normal text-[13px]">
                PO BOX NO. 56980, <br />
                Riyadh - 11564, KSA
              </p>

              <ul className="mt-7 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <Image
                    src={"/images/png/phone.png"}
                    alt="Phone"
                    width={15}
                    height={15}
                  />
                  <p className="font-normal font-open-sans text-[13px]">
                    +966 231321332
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src={"/images/png/mail.png"}
                    alt="Mail"
                    width={15}
                    height={15}
                  />
                  <p className="font-normal font-open-sans text-[13px]">
                    (066) 231321332
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src={"/images/png/telephone.png"}
                    alt="Tele Phone"
                    width={15}
                    height={15}
                  />
                  <p className="font-normal font-open-sans text-[13px]">
                    +966 231321332
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#4BC5ED] font-normal text-lg">
                Quick Links
              </h3>
              <ul className="mt-3 flex flex-col gap-2 font-normal text-[13px]">
                <li>Division</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Gallery</li>
              </ul>
            </div>
          </div>

          <Image
            src={"/images/png/footer-frame.png"}
            alt="Minsitry Logo"
            width={493}
            height={540}
            className="absolute top-0 right-0 h-full object-contain w-fit"
          />
        </div>
        <div className="w-full border-t border-[#03396A] text-[13px] font-normal flex items-center justify-between gap-2 flex-wrap py-5">
          <div className="flex items-center gap-4">
            <p>Terms & Conditions</p>
            <span>|</span>
            <p>Privacy Policy</p>
          </div>
          <p>
            © <span className="font-open-sans">2025</span> Digital Surgery Site
            by{" "}
            <a
              href="https://uxplore.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4B7ABC] underline"
            >
              Uxplore
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
