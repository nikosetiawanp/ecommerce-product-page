import { Menu, MenuButton, MenuItems } from "@headlessui/react";

export default function Cart() {
  return (
    <Menu>
      <MenuButton className="relative flex justify-center items-center w-[40px] h-[40px] p-1 rounded-full hover:cursor-pointer active:bg-black/10 focus:outline-0">
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707d"
            fillRule="nonzero"
          />
        </svg>
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
