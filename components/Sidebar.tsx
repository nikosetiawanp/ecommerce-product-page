"use client";

import IconMenu from "@/public/images/icon-menu.svg";
import IconClose from "@/public/images/icon-close.svg";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="lg:hidden p-2 rounded-full active:bg-black/10 hover:cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <IconMenu />
      </button>

      {open && (
        <div className="lg:hidden bg-black/50 w-screen h-screen z-50 absolute left-0 top-0">
          <div className="flex flex-col bg-white w-[300px] h-screen p-6 md:px-20 md:py-12 gap-14">
            <button
              className="rounded-full p-2 active:bg-black/10 w-fit h-fit"
              onClick={() => setOpen(false)}
            >
              <IconClose />
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
