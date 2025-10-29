import { useState, useEffect } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import CustomDropDown from "../CustomDropDown/CustomDropDown";
import { HiMiniShoppingCart } from "react-icons/hi2";
import CustomBtn from "../CustomBtn/CustomBtn";


function Navbar() {
  const menuItems = ["Pages", "Page 1", "Page 2", "Page 3"];
  const [isOpen , setIsOpen] = useState(false)
  
  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    
    const handleResize = () => {
   if(window.innerWidth > 768){
    setIsOpen(false)
   } 
   }

   handleResize()
   
   window.addEventListener("resize", handleResize)

   return () => window.removeEventListener('resize', handleResize)
   
  },[window.innerWidth])

  return (
    <>
      <div>
        <div className="relative bg-white py-3 lg:rounded-full shadow-md max-w-7xl mx-auto px-5 flex items-center justify-between">
          <RiMenu2Fill className="text-[1.8rem] cursor-no-drop block md:hidden" 
          onClick={handleMenu}
          />
          <div className={`${isOpen ? 'translate-x-0': "-translate-x-full"} transition-all duration-300 ease-in-out flex flex-col gap-y-10 md:hidden max-w-[20rem] w-full min-h-screen bg-white absolute left-0 top-16 p-10`}>
            <ul className="flex flex-col gap-y-5 items-start  gap-x-6 lg:gap-x-10  font-medium">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Pages</a>
              </li>
            </ul>
            <CustomBtn
              label="Contact Me - Email"
              styling="bg-[#FFEE5B] hover:bg-[#f4e031]"
            />
          </div>

          <div className="flex items-center gap-x-10">
            <a href="/">
              <img src="/Logo.png" alt="Home" className="max-w-10 w-full" />
            </a>

            <ul className="hidden md:flex items-center  gap-x-6 lg:gap-x-10 text-sm font-medium">
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
            <CustomBtn
              label="Contact Me - Email"
              styling="bg-[#FFEE5B] hover:bg-[#f4e031] hidden md:block"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
