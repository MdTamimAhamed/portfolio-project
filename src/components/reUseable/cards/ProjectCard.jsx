import ProjectCTABtn from "../ctaButtons/ProjectCTABtn";

function ProjectCard({ thumbnail, title, description, category, tech = [] }) {
  return (
    <>
      <div
        className="relative dark:bg-darkMode-background rounded-3xl lg:rounded-4xl bg-white p-4 lg:p-6  dark:border-darkMode-textGray/20 border-[1px]
       border-slate-200 "
      >
        <figure className="h-auto w-full overflow-hidden rounded-2xl">
          <img
            className="w-full h-72 aspect-square rounded-2xl transition-transform duration-200 ease-in hover:scale-105"
            src={thumbnail}

          />
        </figure>
        <div className=" w-full flex items-center justify-between">
          <p className="text font-medium text-highlighter dark:text-darkMode-green basis-[30%]">
            {category}
          </p>
          <div className="flex md:flex-wrap lg:flex-nowrap items-center gap-2 lg:gap-4 justify-end basis-[90%] py-4">
            {tech.map((item, index) => (
              <span
                key={index}
                className="text-lg bg-slate-200 rounded-full p-2 text-slate-800"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <article className="h-20 dark:text-darkMode-textGray">
          <h1 className=" text-xl font-bold">{title} </h1>
          <p className="leading-5">{description}</p>
        </article>

        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:gap-4 md:flex-col  md:gap-2 lg:flex-row">
          <ProjectCTABtn
            cta_name="Project Details"
            border={true}
            icon_visivility={false}
          />
          <ProjectCTABtn
            cta_name="Live Preview"
            border={false}
            icon_visivility={true}
          />
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
