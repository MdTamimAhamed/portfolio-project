import Timeline from "../utils/Timeline";

function Education() {
  const timelines = [
    {
      id: 1,
      when: "Current",
      what: "University/Local/Personal Project",
      where: "MERN Stack, UI/UX",
      status: "2+ years MERN",
    },
  ];

  return (
    <div
      id="education"
      className="relative mt-10 h-auto w-full rounded-2xl  pb-6 dark:bg-darkMode-background"
    >
      {/* <div className="absolute -top-10 -z-50 h-64 w-64 rounded-full bg-gradient-to-br from-secondary to-primary opacity-50 blur-[120px]"></div>
      <div className="absolute bottom-10 right-40 -z-50 h-72 w-72 rounded-full bg-gradient-to-br from-secondary to-primary opacity-50 blur-[120px]"></div> */}

      <div className="px-6 py-12">
        <h1 className="pb-4 text-xl font-bold text-deepNaviBlue dark:text-darkMode-textGray">
          Timeline
        </h1>
        {timelines.map((data) => (
          <span key={data.id}>
            <Timeline
              when={data.when}
              what={data.what}
              where={data.where}
              status={data.status}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Education;
