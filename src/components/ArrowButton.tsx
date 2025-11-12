"use client";
import Image from "next/image";

type ArrowButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
  textClassName?: string;
  arrowBoxClassName?: string;
};

export default function ArrowButton({
  label,
  onClick,
  className = "",
  textClassName = "",
  arrowBoxClassName = "",
}: ArrowButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer w-fit flex items-center gap-0.5 transition-all duration-500 hover:-translate-y-1 ${className}`}
    >
      <button
        className={`gradient-border cursor-pointer text-sm font-semibold h-11 px-5 ${textClassName}`}
      >
        {label}
      </button>
      <div
        style={{
          background:
            "linear-gradient(278.53deg, #24BDFE -0.91%, #2C7BDC 113.07%)",
        }}
        className={`cursor-pointer h-11 w-10 grid place-items-center rounded-[5px] ${arrowBoxClassName}`}
      >
        <Image
          src={"/images/svg/arrow-right-top.svg"}
          alt="Arrow"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
