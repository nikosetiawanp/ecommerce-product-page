export default function Navbar() {
  const links = ["Men", "Women", "About", "Contact"];
  return (
    <nav className="flex justify-between items-center w-full md:max-w-[605px] lg:max-w-[1110px] bg-white p-8 md:px-0 lg:py-8 lg:mb-[96px] md:border-b border-grey-100">
      {/* Left side */}
      <div className="flex items-center">
        {/* Menu and logo */}
        <div className="flex items-center lg:items-start gap-4 mr-8 lg:mr-14">
          <button className="lg:hidden">
            {/* <IconMenu /> */}
            <img src="/images/icon-menu.svg" alt="icon-menu" />
          </button>
          <img src={"/images/logo.svg"} alt={"logo"} />
        </div>
        {/* Links desktop */}
        <ul className="gap-8 hidden lg:flex items-start h-full">
          {links.map((link, index) => (
            <li key={index} className="relative text-preset-4 text-grey-500 ">
              {link}
              <hr className="absolute w-full -bottom-[45px] left-0 border-3 border-orange-500" />
            </li>
          ))}
        </ul>
      </div>
      {/* Right side */}
      <div className="flex justify-between items-center gap-6 md:gap-12">
        <button className="relative flex justify-center items-center w-[40px] h-[40px] p-1 rounded-full hover:cursor-pointer active:bg-black/10">
          <img src={"/images/icon-cart.svg"} alt={"icon-cart"} />
          <span className="absolute -top-1 -right-1 bg-orange-500 px-2 py-0.5 text-[10px] font-bold text-white rounded-full">
            3
          </span>
        </button>
        <div className="w-[24px] md:w-[50px] h-[24px] md:h-[50px] rounded-full bg-grey-500"></div>
      </div>
    </nav>
  );
}
