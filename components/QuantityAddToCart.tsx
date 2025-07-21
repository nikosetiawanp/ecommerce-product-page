"use client";

import Image from "next/image";

import IconCart from "@/public/images/icon-cart.svg";

export default function QuantityAddToCart() {
  return (
    <div className="flex flex-col md:flex-row w-full gap-4">
      <div className="flex justify-between items-center bg-grey-50 rounded-[10px] px-2 py-4 w-full lg:max-w-[160px]">
        {/* Minus */}
        <button className="button-icon">
          <img
            src={"/images/icon-minus.svg"}
            alt={"icon-minus"}
            width={12}
            height={12}
          />
        </button>
        <span className="text-grey-950 text-preset-3 font-bold">0</span>
        {/* Plus */}
        <button className="button-icon">
          <img
            src={"/images/icon-plus.svg"}
            alt={"icon-plus"}
            width={12}
            height={12}
          />
        </button>
      </div>
      <button className="button-primary">
        <IconCart fill="#1D2026" width={22} height={20} />
        Add to Cart
      </button>
    </div>
  );
}
