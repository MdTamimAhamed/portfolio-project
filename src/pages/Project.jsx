import { useState } from "react";
import ProjectCard from "../components/reUseable/cards/ProjectCard";
import RoundedFiltersWithDropdown from "../components/reUseable/filters/RoundedFiltersWithDropdown";

import Thumbnail1 from "/assets/images/Project1.jpg";
import Thumbnail from "/assets/images/commingsoon.jpg";
import Thumbnail2 from "/assets/images/project2.png";

import { FaReact } from "react-icons/fa";

import { SiExpress, SiRedux } from "react-icons/si";

import { DiMongodb } from "react-icons/di";
import { SiAdobeillustrator, SiFigma, SiTailwindcss } from "react-icons/si";

function Project() {
  const [filter, setFilter] = useState("All");
  const ProjectDetails = [
    {
      id: 1,
      thumbnail: Thumbnail1,
      title: "Demo Project Name",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It's been the industry's standard.",
      category: "Fullstack",
      tech: [
        <FaReact />,
        <SiExpress />,
        <SiTailwindcss />,
        <DiMongodb />,
        <SiRedux />,
      ],
    },
    {
      id: 2,
      thumbnail: Thumbnail2,
      title: "Demo Project Name 2",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      category: "UI Design",
      tech: [<SiFigma />, <SiAdobeillustrator />],
    },
    {
      id: 3,
      thumbnail: Thumbnail,
      title: "Demo Project Name 3",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      category: "",
    },
    {
      id: 4,
      thumbnail: Thumbnail,
      title: "Coming soon...",
      des: "Under Construction ",
      category: "",
    },
  ];

  const filterOptions = [
    { id: 1, name: "All", dropdown: false, active: true },
    {
      id: 2,
      name: "Web Projects",
      dropdown: true,
      dropdownItems: ["Frontend", "Fullstack", "UI Design"],
    },
    { id: 3, name: "Other", dropdown: false },
  ];

  const filteredProjects = ProjectDetails.filter((projects) => {
    if (filter == "All") {
      return true;
    }
    if (filter == "Other") {
      return projects.category === "Other";
    }
    return projects.category === filter;
  });

  return (
    <>
      <section
        id="projects"
        className=" mt-8 lg:mt-20 w-full rounded-2xl font-inter "
      >
        <div className="grid gap-8 mb-8 grid-cols-1">
          <div className=" bg-flatBg dark:bg-darkMode-background rounded-3xl p-6 lg:p-10">
            <div>
              <h1 className=" uppercase text-4xl md:text-6xl font-black text-sky-500">
                Project <br />
                <span className="uppercase dark:text-white/70 text-4xl md:text-6xl font-black text-deepNavi">
                  Showcase
                </span>
              </h1>
            </div>
            <p className="mt-2 w-full lg:w-[60%] dark:text-white/50 text-slate-500">
              Welcome to my project showcase. Explore my cruated collection of
              diverse Projects that showcase my passion, dedication and
              expertise.
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
              <RoundedFiltersWithDropdown
                filterOptions={filterOptions}
                projectDetails={ProjectDetails}
                setState={setFilter}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:gap-8 md:grid-cols-2">
          {filteredProjects.map((data) => {
            return (
              <ProjectCard
                key={data.id}
                thumbnail={data.thumbnail}
                title={data.title}
                description={data.des}
                category={data.category}
                tech={data.tech}
                setState={setFilter}
              />
            );
          })}
        </div>
        <button
          className="mt-4 h-10 rounded-full
         border-[1px] border-deepNaviBlue/50 px-4 text-sm hover:bg-deepNaviBlue hover:text-white dark:border-darkMode-textGray/20 dark:text-darkMode-textGray hover:dark:border-darkMode-green hover:dark:bg-darkMode-green hover:dark:text-darkMode-background"
        >
          Show More...
        </button>
      </section>
    </>
  );
}

export default Project;
