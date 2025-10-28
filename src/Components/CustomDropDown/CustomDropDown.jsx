import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

function CustomDropDown({ MenuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button onClick={handleDropDown} className="cursor-pointer">
      <div className="relative space-y-1 z-10">
        <div className="h-10 flex items-center gap-x-3 w-full py-2 px-5">
          <span className="font-medium text-sm">{MenuItems.slice(0, 1)}</span>

          <FaAngleDown
            className={`cursor-pointer transition-all duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        <div
          className={`bg-white rounded-md shadow-md absolute w-full p-2 ${
            isOpen ? "block" : "hidden"
          } `}
        >
          <ul className="space-y-3 text-sm font-medium">
            {MenuItems.slice(1, MenuItems.length).map((Items, index) => (
              <li
                key={index}
                className="px-3 py-1.5 hover:bg-black/10 rounded-sm cursor-pointer"
              >
                {Items}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </button>
  );
}

export default CustomDropDown;
