import { Link } from "react-router-dom"
import { MdSunny } from "react-icons/md"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import TrafficDot from "../utils/TrafficDot"
import { useState } from "react";

function Navbar() {

    const [toggleNav, setToggleNav] = useState(false);

    const nav_items = [
        {id:1, item:'Home', path:'#home'},
        {id:2, item:'About', path:'#about'},
        {id:3, item:'Experience', path:'#experience'},
        {id:4, item:'Project', path:'#project'},
        {id:5, item:'Skills', path:'#skills'},
        {id:6, item:'Contact', path:'#contact'},
        {id:7, item:'FAQ', path:'#faq'}
    ]

    function toggleNavbar(e){
        setToggleNav(!toggleNav);
    }

  return (
    <>
        <div className="sticky top-0 z-50 bg-white rounded-2xl">
            {/* bg-blur div */}
            {/* <div className="w-24 h-24 absolute -z-50 left-1/2 translate-x-[-50%] blur-[90px] bg-gradient-to-tl from-secondary to-primary rounded-full"></div> */}
            <div className="w-full container  mx-auto px-8 h-[69px] relative flex justify-between items-center ">
                <TrafficDot/>
                <ul className={`${toggleNav?'block':'hidden'} w-full md:max-w-[908px] p-8 ces:p-0 absolute ces:flex ces:justify-end ces:static md:bg-none left-0 top-20 rounded-xl
                             text-deepNaviBlue`}>
                    {
                        nav_items.map((data) =>(
                            <li key={data.id}
                                className="my-3 ces:my-0 py-1 ">
                                <Link className="pl-3 ces:pl-6 hover:font-semibold transition-all" to={`${data.path}`}>{data.item}</Link>
                            </li>
                        ))
                    }
                    <button className="ml-2 ces:ml-6 px-6 py-1 rounded-full border text-black border-black hover:text-white
                    hover:bg-black transition-all ease-in ">Resume</button>
                </ul>
                <div className="flex items-center gap-2">
                    <MdSunny className="mr-4 md:mr-0 md:ml-4 text-deepNaviBlue cursor-pointer"/>
                    <HiOutlineMenuAlt3 onClick={toggleNavbar} 
                    className=" text-2xl hover:cursor-pointer text-deepNaviBlue ces:hidden"/>
                </div>
            </div>

        </div>
    </>
  )
}

export default Navbar