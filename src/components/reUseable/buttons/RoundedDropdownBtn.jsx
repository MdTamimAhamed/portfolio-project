import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

function RoundedDropdownBtn({ name, setState }) {
  const [dropdown, setDropdown] = useState(false);
  function handleDropdownMenu() {
    setDropdown(!dropdown);
  }

  function handleItemSelection(name) {
    setState(name);
  }

  const menuItem = ["Frontend", "Backend", "UI Design"];
  return (
    <div className="relative z-20">
      <button
        onClick={handleDropdownMenu}
        className={`${dropdown ? "bg-transparent" : "bg-black"}dark:border-darkMode-textGray/20 dark:text-darkMode-textGray hover:dark:bg-darkMode-textGray
         hover:dark:text-darkMode-background rounded-full border-[1px] border-deepNaviBlue/50 transition-all duration-150 ease-in hover:bg-deepNaviBlue hover:text-white`}
      >
        <div className="flex h-9 items-center px-6">
          {name}
          <span className={`text-2xl`}>
            <MdArrowDropDown />
          </span>
        </div>
      </button>
      <div
        className={`${dropdown ? "block" : "hidden"} absolute bg-white w-full p-2 drop-shadow-2xl  rounded-xl mt-2`}
      >
        <ul className="[&>li]:py-1">
          {menuItem.map((item) => (
            <li
              key={item}
              onClick={() => handleItemSelection(item)}
              className="hover:bg-black hover:text-white hover:font-semibold transition-all ease-in duration-100 rounded-lg px-2 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RoundedDropdownBtn;
