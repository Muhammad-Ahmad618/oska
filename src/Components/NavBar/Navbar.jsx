import { RiMenu3Line } from "react-icons/ri";
import CustomDropDown from "../CustomDropDown/CustomDropDown";
import { HiMiniShoppingCart } from "react-icons/hi2";
import CustomBtn from "../CustomBtn/CustomBtn";

function Navbar() {
  const menuItems = ["Pages", "Page 1", "Page 2", "Page 3"];

  return (
    <>
      <div className="hidden px-5 md:block">
        <div className="bg-white py-3 md:rounded-full shadow-md max-w-7xl mx-auto px-5 flex items-center justify-between">
          <div className="flex items-center gap-x-10">
            <a href="/">
              <img src="/Logo.png" alt="Home" className="max-w-10 w-full" />
            </a>

            <ul className="flex items-center  gap-x-6 lg:gap-x-10 text-sm font-medium">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="text-gray-300">|</li>
              <li>
                <CustomDropDown MenuItems={menuItems} />
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-x-5">
            <div className="flex gap-x-3 items-center">
              <HiMiniShoppingCart className="text-[1.2rem]" />
              <span className="font-medium">0</span>
            </div>
            <CustomBtn label="Contact Me - Email" styling="bg-[#FFEE5B] hover:bg-[#f4e031]"/>
          </div>
        </div>
      </div>

      <div className="block z-10 fixed w-full border-0 p-0.5 top-0 md:hidden bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 ">
        <div className="bg-[#161515] py-2">
          <div className="flex items-center justify-between px-5 md:hidden">
            <img src="/Logo.webp" alt="M-ahmad" className="max-w-12" />
            <RiMenu3Line
              className="text-white text-[2rem]"
              onClick={() => setSideMenu(!sideMenu)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
