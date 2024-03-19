import OptionBtn from "../utils/OptionBtn";
import ProjectCard from "../utils/ProjectCard";

import Thumbnail1 from "/assets/images/Project1.png";
import Thumbnail2 from "/assets/images/project2.png";
import Thumbnail from "/assets/images/commingsoon.jpg";

function Project() {
  const ProjectDetails = [
    {
      id: 1,
      thumbnail: Thumbnail1,
      title: "DIU Event Junction",
      des: "An event management application. Built using MERN Stack.",
      category: "Fullstack",
    },
    {
      id: 2,
      thumbnail: Thumbnail2,
      title: "Vitalia Health Care",
      des: "A responsive web UI for vitalia health care.",
      category: "Web UI",
    },
    {
      id: 3,
      thumbnail: Thumbnail,
      title: "Coming soon",
      des: "Under Construction ",
      category: "None",
    },
    {
      id: 4,
      thumbnail: Thumbnail,
      title: "Coming soon",
      des: "Under Construction",
      category: "None",
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="mt-10 w-full rounded-2xl bg-white px-8 py-12 font-inter lg:px-16"
      >
        <h1 className="pb-4 text-xl font-bold text-deepNaviBlue">Projects</h1>
        <div className="flex flex-wrap gap-2">
          <OptionBtn name="All" />
          <OptionBtn name="Web Projects" dropdown={true} />
          <OptionBtn name="UI Projects" dropdown={true} />
          <OptionBtn name="Others" />
        </div>

        <div className="mt-4 grid gap-8 md:grid-cols-2 ">
          {ProjectDetails.map((data) => (
            <ProjectCard
              key={data.id}
              thumbnail={data.thumbnail}
              title={data.title}
              description={data.des}
              category={data.category}
            />
          ))}
        </div>
        <button
          className="mt-4 h-10 rounded-full
         border-[1px] border-deepNaviBlue/50 px-4 text-sm hover:bg-deepNaviBlue hover:text-white"
        >
          Show More...
        </button>
      </section>
    </>
  );
}

export default Project;
