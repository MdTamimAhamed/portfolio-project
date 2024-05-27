import ProjectCTABtn from "./ProjectCTABtn";

function ProjectCard({ thumbnail, title, description, category }) {
  return (
    <>
      <div className=" rounded-3xl border-[1px] p-4  dark:border-darkMode-textGray/20">
        <figure className="h-auto w-full overflow-hidden rounded-2xl">
          <img
            className="w-full rounded-2xl transition-transform duration-200 ease-in hover:scale-105"
            src={thumbnail}
          />
        </figure>
        <article className="mt-6 h-20 dark:text-darkMode-textGray">
          <p className="text-sm text-highlighter dark:text-darkMode-green">
            {category}
          </p>
          <h1 className=" text-lg font-bold">{title} </h1>
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
