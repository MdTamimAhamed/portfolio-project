import EduCard from "../utils/EduCard";

function Education() {
  const eduInfo = [
    {
      id: 1,
      program: "Bachelor of Science in Computer Science and Engineering",
      institute: "Daffodil International University",
      startingYear: "January, 2020",
      endingYear: "July, 2024",
      country: "Dhaka, Bangladesh",
      gpa: "3.40/4.00",
    },
  ];

  return (
    <div
      id="education"
      className="relative mt-10 h-auto w-full rounded-2xl  pb-2 dark:bg-darkMode-background border-slate-100 border-2"
    >
      <div className="p-8 ">
        <h1 className="pb-4  flex items-center text-xl font-bold text-deepNaviBlue dark:text-darkMode-textGray">
          Education
        </h1>
        {eduInfo.map((data) => (
          <div key={data.id} className="flex ">
            <EduCard
              program={data.program}
              institute={data.institute}
              startingYear={data.startingYear}
              endingYear={data.endingYear}
              country={data.country}
              gpa={data.gpa}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
