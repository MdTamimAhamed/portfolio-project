import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

function RoundedFiltersWithDropdown({
  setState,
  filterOptions,
  projectDetails,
}) {
  const [dropdown, setDropdown] = useState(false);
  const [active, setActive] = useState(filterOptions[0].name);

  const totalProjects = projectDetails.reduce((a, current) => a + 1, 0);

  function handleDropdownMenu() {
    setDropdown(!dropdown);
  }

  function handleDropdownItemSelection(itemName) {
    setState(itemName);
    setDropdown(!dropdown);
  }

  function handleFilterSelection(itemName) {
    setActive(itemName);
    setState(itemName);
    setDropdown(false);
  }

  return (
    <>
      {filterOptions.map((item) =>
        //conditional rendering
        item.dropdown !== true ? (
          //----------------------------button with (no) dropdown icon
          <button
            key={item.id}
            onClick={() => handleFilterSelection(item.name)}
            className={`${active == item.name ? "bg-deepNavi text-white" : ""} dark:border-darkMode-textGray/20 dark:text-darkMode-textGray hover:dark:bg-darkMode-textGray
         hover:dark:text-darkMode-background rounded-full border-1 border-deepNavi/50 transition-all 
         duration-150 ease-in hover:bg-deepNavi/10 hover:text-deepNavi`}
          >
            <div className="flex h-9 items-center px-6">
              {item.name}
              {item.name === "All" && ` (${totalProjects})`}
            </div>
          </button>
        ) : (
          //-----------------------------button with the dropdown icon
          <div className="relative z-20">
            <button
              key={item.id}
              onClick={handleDropdownMenu}
              className={`${active === item.name ? "bg-deepNavi text-white" : ""}dark:border-darkMode-textGray/20 dark:text-darkMode-textGray hover:dark:bg-darkMode-textGray
              hover:dark:text-darkMode-background rounded-full border-1 border-deepNavi/50 transition-all duration-150 ease-in hover:bg-deepNavi/10 hover:text-deepNavi`}
            >
              <div className="flex h-9 items-center px-6">
                {item.name}
                <span className={`text-2xl`}>
                  <MdArrowDropDown />
                </span>
              </div>
            </button>

            <div
              className={`${dropdown ? "block" : active === item.name ? "bg-deepNavi text-white" : "hidden"} absolute bg-white w-full p-2 drop-shadow-2xl  rounded-xl mt-2`}
            >
              <ul className="[&>li]:py-1">
                {item.dropdownItems.map((category, index) => {
                  return (
                    <>
                      <li
                        key={index}
                        onClick={() => handleDropdownItemSelection(category)}
                        className="hover:bg-deepNavi hover:text-white hover:font-semibold transition-all ease-in duration-100 rounded-lg px-2 cursor-pointer"
                      >
                        {category}
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        ),
      )}
    </>
  );
}

export default RoundedFiltersWithDropdown;
