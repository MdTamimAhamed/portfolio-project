import OptionBtn from "../utils/OptionBtn"
import ProjectCard from "../utils/ProjectCard"

import Thumbnail1 from "/src/assets/images/Project1.png"
import Thumbnail2 from '/src/assets/images/project2.png'
import Thumbnail from '/src/assets/images/commingsoon.jpg'

function Project() {

    const ProjectDetails = [
      {
        id:1, 
        thumbnail:Thumbnail1, 
        title:'DIU Event Junction', 
        des:'An event management application. Built using MERN Stack.',
        category:'Fullstack'
      },
      {
        id:1, 
        thumbnail:Thumbnail2, 
        title:'Vitalia Health Care', 
        des:'A responsive web UI for vitalia health care.',
        category:'Web UI'
      },
      {
        id:1, 
        thumbnail:Thumbnail, 
        title:'Coming soon', 
        des:'Under Construction ',
        category:'None'
      },
      {
        id:1, 
        thumbnail:Thumbnail, 
        title:'Coming soon', 
        des:'Under Construction',
        category:'None'
      }
    ]

  return (
    <> 
      <div className="w-full mt-10 px-8 lg:px-16 py-12 bg-white/75 rounded-2xl font-inter">
        <h1 className="pb-4 text-xl font-bold text-deepNaviBlue">Projects</h1>
        <div className="flex flex-wrap gap-2">
          <OptionBtn
            name="All"
          />
          <OptionBtn
            name="Web Projects"
            dropdown={true}
          />
          <OptionBtn
            name="UI Projects"
            dropdown={true}
          />
          <OptionBtn
            name="Others"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-4 ">
          {
            ProjectDetails.map((data)=>(
              <ProjectCard
                thumbnail={data.thumbnail}
                title={data.title}
                description={data.des}
                category={data.category}
              />
            ))
          }
        </div>
        <button className="h-10 text-sm border-[1px]
         border-deepNaviBlue/50 rounded-full mt-4 px-4 hover:bg-deepNaviBlue hover:text-white">Show More...</button>
      </div>
    </>
  )
}

export default Project