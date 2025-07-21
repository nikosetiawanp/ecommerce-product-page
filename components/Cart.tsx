import { Menu, MenuButton, MenuItems } from "@headlessui/react";

import IconCart from "@/public/images/icon-cart.svg";

export default function Navbar() {
  return (
    <Menu>
      <MenuButton className="relative flex justify-center items-center w-[40px] h-[40px] p-1 rounded-full hover:cursor-pointer active:bg-black/10 focus:outline-0">
        <IconCart fill="#69707D" width={22} height={20} />
        <span className="absolute -top-1 -right-1 bg-orange-500 px-2 py-0.5 text-[10px] font-bold text-white rounded-full">
          3
        </span>
      </MenuButton>

      <MenuItems
        anchor="bottom"
        className="border-0 focus:outline-0 w-full rounded-[10px] px-2 md:px-0 md:w-[360px] shadow-2xl"
      >
        <div className="flex flex-col bg-white rounded-[10px] w-full min-h-[256px] shadow-2xl">
          <div className="py-6 px-3">
            <span className="text-preset-3 font-bold text-grey-950">Cart</span>
          </div>

          <hr className="border-grey-100" />
          <div className="flex-1 flex justify-center items-center px-3 py-6">
            <span className="text-preset-3 font-bold text-grey-500">
              Your cart is empty
            </span>
          </div>
        </div>
      </MenuItems>
    </Menu>
  );
}
