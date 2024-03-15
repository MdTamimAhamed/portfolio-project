import ProjectCTABtn from "./ProjectCTABtn"

function ProjectCard({thumbnail,title, description, category}) {
  return (
    <>
        <div className=" p-4 border-[1px]  rounded-3xl">
            <figure className="w-full h-auto overflow-hidden rounded-2xl">
                <img 
                    className="rounded-2xl w-full hover:scale-105 transition-transform duration-200 ease-in"
                    src={thumbnail}
                    />
            </figure>
            <article className="mt-6 h-20">
                <h1 className="text-lg font-bold">{title} </h1>
                <p className="leading-5">{description}</p>
            </article>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row sm:gap-4 md:gap-2  gap-2 mt-8">
                <ProjectCTABtn
                    cta_name ="Project Details"
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
  )
}

export default ProjectCard