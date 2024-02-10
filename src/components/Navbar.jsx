import { Link } from "react-router-dom"
import { MdSunny } from "react-icons/md"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import TrafficDot from "../util/TrafficDot"

function Navbar() {

    const nav_items = [
        {id:1, item:'Home', path:'#home'},
        {id:2, item:'About', path:'#about'},
        {id:3, item:'Experience', path:'#experience'},
        {id:4, item:'Porject', path:'#project'},
        {id:5, item:'Skills', path:'#skills'},
        {id:6, item:'Contact', path:'#contact'},
    ]

  return (
    <>
        <div className="relavtive">
            {/* blur div */}
            <div className=" bg-gradient-to-r from-secondary to-primary"></div>
            

            <div className="w-full px-8 py-6 flex justify-between items-center rounded-xl bg-white">
                <TrafficDot/>
                <ul className="h-2/6 p-8 inset-6 absolute bg-white top-28 text-deepNaviBlue">
                    {
                        nav_items.map((data) =>(
                            <li key={data.id}>
                                <Link to={`${data.path}`}>{data.item}</Link>
                            </li>
                        ))
                    }
                    <button className="px-6 py-1 rounded-full border border-deepNaviBlue">Resume</button>
                </ul>
                <div className="flex items-center gap-2">
                    <MdSunny className="mr-4 text-deepNaviBlue"/>
                    <button className="px-6 py-1 hidden rounded-full border border-deepNaviBlue"
                    >Resume</button>
                    <HiOutlineMenuAlt3 className="text-2xl text-deepNaviBlue"/>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Navbar