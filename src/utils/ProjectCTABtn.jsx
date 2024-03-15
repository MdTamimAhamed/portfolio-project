import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

function ProjectCTABtn({cta_name, border, icon_visivility}) {
  return (
    <div className={`${border?"border-[1px] border-deepNaviBlue/30 bg-transparent hover:border-primary hover:bg-primary"
    :'text-white bg-deepNaviBlue hover:bg-primary hover:text-deepNaviBlue'} 
    w-full md:w-full h-12 md:h-10 font-medium flex justify-center items-center px-6  rounded-xl transition-all duration-150 ease-in cursor-pointer`}>
        
        {cta_name === 'Resume'? 
        (<a href="https://www.google.com" target="_blank" >{cta_name}</a>)
        :(<Link to={''}>{cta_name}</Link>)}
        {icon_visivility? <GoArrowUpRight className="text-lg ml-2"/>:''}
        
    </div>
  )
}

export default ProjectCTABtn