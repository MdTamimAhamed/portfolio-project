import { useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa6";

function Accordion({ question, answer }) {
  const [toggleAns, setToggleAns] = useState(false);

  return (
    <button
      onClick={() => setToggleAns(!toggleAns)}
      className="mt-4 w-full rounded-xl border-[1px] border-deepNaviBlue/20 p-6"
    >
      <div className="flex justify-between text-lg font-medium">
        <p className="pr-2 text-left md:pr-4">{question}</p>
        <span>
          <MdOutlineExpandMore
            className={`${toggleAns ? "rotate-180" : " rotate-0"} cursor-pointer text-2xl transition-all duration-300 ease-out`}
          />
        </span>
      </div>
      <div
        className={`${toggleAns ? "flex h-auto" : "hidden"} mt-4 w-full justify-start pl-4 transition-all duration-300 ease-in`}
      >
        <FaHandPointRight className="text-5xl text-primary sm:text-3xl md:text-3xl mdx:text-2xl" />
        <p className="pl-2 pr-10 text-left lg:pr-20">{answer}</p>
      </div>
    </button>
  );
}

export default Accordion;
