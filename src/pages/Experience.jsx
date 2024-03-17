import Timeline from "../utils/Timeline";

function Experience() {
  const timelines = [
    {
      id: 1,
      when: "Current",
      what: "University/Local/Personal Project",
      where: "MERN Stack, UI/UX",
      status: "2+ years MERN",
    },
    {
      id: 2,
      when: "2020-Present",
      what: "BSc. in Computer Science and Engineering",
      where: "Daffodil International University",
      status: "Bangladesh, Dhaka",
    },
    {
      id: 3,
      when: "March 2018 - Present",
      what: "Freelance Digital Artist & UI Designer",
      where: "Fiverr.com",
      status: "Level Two",
    },
    {
      id: 4,
      when: "2017 - 2019",
      what: "Higher Secondary Certificate (HSC) ",
      status: "Bangladesh, Dhaka",
    },
  ];

  return (
    <div
      id="experience"
      className="relative mt-10 h-auto w-full rounded-2xl bg-white pb-6"
    >
      <div className="absolute -top-10 -z-50 h-64 w-64 rounded-full bg-gradient-to-br from-secondary to-primary opacity-50 blur-[120px]"></div>
      <div className="absolute bottom-10 right-40 -z-50 h-72 w-72 rounded-full bg-gradient-to-br from-secondary to-primary opacity-50 blur-[120px]"></div>

      <div className="px-8 py-12 lg:px-16">
        <h1 className="pb-4 text-xl font-bold text-deepNaviBlue">Timeline</h1>
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

export default Experience;
