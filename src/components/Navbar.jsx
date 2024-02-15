import { Link } from "react-router-dom"
import { MdSunny } from "react-icons/md"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import TrafficDot from "../util/TrafficDot"
import { useState } from "react";

function Navbar() {

    const [toggleNav, setToggleNav] = useState(false);

    const nav_items = [
        {id:1, item:'Home', path:'#home'},
        {id:2, item:'About', path:'#about'},
        {id:3, item:'Experience', path:'#experience'},
        {id:4, item:'Porject', path:'#project'},
        {id:5, item:'Skills', path:'#skills'},
        {id:6, item:'Contact', path:'#contact'},
        {id:7, item:'FAQ', path:'#faq'}
    ]

    function toggleNavbar(e){
        setToggleNav(!toggleNav);
    }

  return (
    <>
        <div className="relative">
            {/* bg-blur div */}
            <div className="w-24 h-24 absolute left-1/2 translate-x-[-50%] blur-[90px] bg-gradient-to-tl from-secondary to-primary rounded-full"></div>
            
            <div className="w-full container md:max-w-[908px] mx-auto px-8 h-[69px] relative flex justify-between items-center rounded-[15px] bg-white/90">
                <TrafficDot/>
                <ul className={`${toggleNav?'block':'hidden'} w-full md:max-w-[908px] p-8 md:p-0 absolute md:flex md:justify-end md:static bg-white md:bg-none left-0 top-20 rounded-xl
                             text-deepNaviBlue`}>
                    {
                        nav_items.map((data) =>(
                            <li key={data.id}
                                className="my-3 md:my-0 py-1 ">
                                <Link className="pl-3 md:pl-6 hover:font-semibold transition-all" to={`${data.path}`}>{data.item}</Link>
                            </li>
                        ))
                    }
                    <button className="ml-2 md:ml-6 px-6 py-1 rounded-full border text-black border-black hover:text-white
                    hover:bg-black transition-all ease-in ">Resume</button>
                </ul>
                <div className="flex items-center gap-2">
                    <MdSunny className="mr-4 md:mr-0 md:ml-4 text-deepNaviBlue cursor-pointer"/>
                    <HiOutlineMenuAlt3 onClick={toggleNavbar} 
                    className=" text-2xl hover:cursor-pointer text-deepNaviBlue md:hidden"/>
                </div>
            </div>

        </div>
    </>
  )
}

export default Navbar