"use client";

import { useState } from "react";

export default function ProductImage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <div className="w-full h-[300px] bg-orange-500 md:rounded-[15px] lg:hidden"></div>

      <div className="hidden lg:flex flex-col gap-8 w-full max-w-[445px]">
        <div className="h-[445px] w-[445px] bg-grey-500 rounded-[15px]"></div>
        <div className="flex gap-8 justify-between">
          {[0, 1, 2, 3].map((number) => (
            <div
              key={number}
              className="h-[88px] w-[88px] bg-grey-500 rounded-[10px]"
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
