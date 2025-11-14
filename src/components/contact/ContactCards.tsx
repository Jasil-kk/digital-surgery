"use client";

import Image from "next/image";

export default function ContactCards() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="w-full bg-white text-left rounded-2xl overflow-hidden">
        <div className="w-full h-[110px]">
          <Image
            src={"/images/contact/card-frame.png"}
            alt="Contact"
            width={353}
            height={110}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-sm font-normal p-5 pt-10">
          <h2 className="font-bold text-2xl">Riyadh</h2>
          <div className="mt-5 flex items-center gap-2">
            <Image
              src={"/images/contact/location.png"}
              alt="Location"
              width={20}
              height={20}
            />
            <p>PO BOX NO. 56980, Riyadh - 11564, KSA</p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Image
              src={"/images/contact/mail.png"}
              alt="Mail"
              width={20}
              height={20}
            />
            <p>Info@digitalsurgery.me</p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Image
              src={"/images/contact/mobile.png"}
              alt="Mobile"
              width={20}
              height={20}
            />
            <p className="font-open-sans">+966 231321332</p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Image
              src={"/images/contact/phone.png"}
              alt="Phone"
              width={20}
              height={20}
            />
            <p className="font-open-sans">(066) 231321332</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-white text-left rounded-2xl overflow-hidden">
        <div className="w-full h-[110px]">
          <Image
            src={"/images/contact/card-frame.png"}
            alt="Contact"
            width={353}
            height={110}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-sm font-normal p-5 pt-10">
          <h2 className="font-bold text-2xl">Jeddah</h2>
          <div className="mt-5 flex items-center gap-2">
            <Image
              src={"/images/contact/location.png"}
              alt="Location"
              width={20}
              height={20}
            />
            <p>PO BOX NO. 56980, Riyadh - 11564, KSA</p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Image
              src={"/images/contact/mail.png"}
              alt="Mail"
              width={20}
              height={20}
            />
            <p>Info@digitalsurgery.me</p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Image
              src={"/images/contact/mobile.png"}
              alt="Mobile"
              width={20}
              height={20}
            />
            <p className="font-open-sans">+966 231321332</p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Image
              src={"/images/contact/phone.png"}
              alt="Phone"
              width={20}
              height={20}
            />
            <p className="font-open-sans">(066) 231321332</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-white text-left rounded-2xl overflow-hidden">
        <div className="w-full h-[110px]">
          <Image
            src={"/images/contact/card-frame.png"}
            alt="Contact"
            width={353}
            height={110}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-sm font-normal p-5 pt-10">
          <h2 className="font-bold text-2xl">Damamm</h2>
          <div className="mt-5 flex items-center gap-2">
            <Image
              src={"/images/contact/location.png"}
              alt="Location"
              width={20}
              height={20}
            />
            <p>PO BOX NO. 56980, Riyadh - 11564, KSA</p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Image
              src={"/images/contact/mail.png"}
              alt="Mail"
              width={20}
              height={20}
            />
            <p>Info@digitalsurgery.me</p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Image
              src={"/images/contact/mobile.png"}
              alt="Mobile"
              width={20}
              height={20}
            />
            <p className="font-open-sans">+966 231321332</p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Image
              src={"/images/contact/phone.png"}
              alt="Phone"
              width={20}
              height={20}
            />
            <p className="font-open-sans">(066) 231321332</p>
          </div>
        </div>
      </div>
    </div>
  );
}
