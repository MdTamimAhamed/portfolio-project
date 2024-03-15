import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

function CTABtn({cta_name, border}) {
  return (
    <div className={`${border?"border-[1px] border-deepNaviBlue bg-transparent hover:border-primary hover:bg-primary"
    :'text-white bg-deepNaviBlue hover:bg-primary hover:text-deepNaviBlue'} 
    w-full md:w-36 h-12 md:h-10 font-medium flex justify-center items-center px-6  rounded-full transition-all duration-150 ease-in cursor-pointer`}>
        
        {cta_name === 'Resume'? 
        (<a href="https://www.google.com" target="_blank" >{cta_name}</a>)
        :(<Link to={''}>{cta_name}</Link>)}
        <GoArrowUpRight className="text-lg ml-2"/>
        
    </div>
  )
}

export default CTABtn