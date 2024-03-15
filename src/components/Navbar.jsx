import { Link } from "react-router-dom"
import { MdSunny } from "react-icons/md"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import TrafficDot from "../utils/TrafficDot"
import { useEffect, useState } from "react";

function Navbar() {

    const [toggleNav, setToggleNav] = useState(false);

    const NavElements = [
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
        <div className={` sticky z-50 top-2`}>
            <div className="w-full h-[69px] px-8 flex items-center rounded-xl backdrop-blur-lg bg-white/90 shadow-sm relative">
                <nav className="w-full flex justify-between items-center ">
                    <TrafficDot/>
                    <ul className={`${toggleNav? 'block':'hidden'} w-full absolute md:static md:flex md:justify-center md:items-center 
                                    z-10 md:z-0 left-0 top-20 md:top-0 px-2 md:p-0 py-6 shadow-md md:shadow-none md:bg-transparent bg-white rounded-xl`}>
                        {
                            NavElements.map((data)=>(
                                <li key={data.id} 
                                className="mx-4 md:mx-2 p-2 hover:bg-black/5  rounded-md 
                                        transition-all duration-150 ease-in cursor-pointer">
                                    <Link to="#"><span className="pl-2 md:pl-0">{data.item}</span></Link> 
                                </li>
                            ))
                        }
                    </ul>
                    <MdSunny className=" cursor-pointer"/>
                </nav>
                <div>
                    <HiOutlineMenuAlt3 
                    onClick={toggleNavbar}
                    className={`text-2xl md:hidden ml-6 cursor-pointer`}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar