import { MdArrowDropDown } from "react-icons/md";

function OptionBtn({name, dropdown}) {

  return (
    <div className='border-[1px] border-deepNaviBlue rounded-full'>
        <button className="flex items-center h-9 px-6">
            {name}
            <span className={`${!dropdown? 'hidden':'block'} text-2xl`}><MdArrowDropDown/></span>
        </button>
    </div>
  )
}

export default OptionBtn