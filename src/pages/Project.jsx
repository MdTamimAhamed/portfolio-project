import { useState } from "react";
import RoundedDropdownBtn from "../components/reUseable/buttons/RoundedDropdownBtn";
import RoundedFilterBtn from "../components/reUseable/buttons/RoundedFilterBtn";
import ProjectCard from "../utils/ProjectCard";

import Thumbnail1 from "/assets/images/Project1.png";
import Thumbnail from "/assets/images/commingsoon.jpg";
import Thumbnail2 from "/assets/images/project2.png";

function Project() {
  const [filter, setFilter] = useState("");
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
    {
      id: 5,
      thumbnail: Thumbnail,
      title: "Coming soon",
      des: "Under Construction",
      category: "None",
    },
    {
      id: 6,
      thumbnail: Thumbnail,
      title: "Coming soon",
      des: "Under Construction",
      category: "None",
    },
    {
      id: 7,
      thumbnail: Thumbnail,
      title: "Coming soon",
      des: "Under Construction",
      category: "None",
    },
  ];

  function handleCardLoad() {}

  return (
    <>
      <section
        id="projects"
        className="mt-10 w-full rounded-2xl p-8  font-inter dark:bg-darkMode-background border-slate-100 border-2"
      >
        <h1 className="pb-4 text-xl font-bold text-deepNaviBlue dark:text-darkMode-textGray">
          Projects
        </h1>

        <div className="flex flex-wrap gap-2">
          <RoundedFilterBtn name="All" />
          <RoundedDropdownBtn name="Web Projects" />
          <RoundedFilterBtn name="Others" />
        </div>

        <div className="mt-4 grid gap-8 md:grid-cols-2">
          {ProjectDetails.map((data) => (
            <ProjectCard
              key={data.id}
              thumbnail={data.thumbnail}
              title={data.title}
              description={data.des}
              category={data.category}
              setState={setFilter}
            />
          ))}
        </div>
        <button
          onClick={handleCardLoad}
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
