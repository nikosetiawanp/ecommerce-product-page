"use client";

import IconMenu from "@/components/icons/icon-menu.svg";
import IconClose from "@/components/icons/icon-close.svg";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="lg:hidden p-2 rounded-full active:bg-black/10 hover:cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
            fill="#69707D"
            fill-rule="evenodd"
          />
        </svg>{" "}
      </button>

      {open && (
        <div className="lg:hidden bg-black/50 w-screen h-screen z-50 absolute left-0 top-0">
          <div className="flex flex-col bg-white w-[300px] h-screen p-6 md:px-20 md:py-12 gap-14">
            <button
              className="rounded-full p-2 active:bg-black/10 w-fit h-fit"
              onClick={() => setOpen(false)}
            >
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#69707D"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
            <ul className="flex flex-col gap-6">
              <li className="text-[18px] font-bold text-grey-950 hover:cursor-pointer">
                <a href="">Collections</a>
              </li>
              <li className="text-[18px] font-bold text-grey-950 hover:cursor-pointer">
                <a href="">Men</a>
              </li>
              <li className="text-[18px] font-bold text-grey-950 hover:cursor-pointer">
                <a href="">Women</a>
              </li>
              <li className="text-[18px] font-bold text-grey-950 hover:cursor-pointer">
                <a href="">About</a>
              </li>
              <li className="text-[18px] font-bold text-grey-950 hover:cursor-pointer">
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
