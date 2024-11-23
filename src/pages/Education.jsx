import EduCard from "../components/extraComponents/EduCard";
import SectionTitle from "../components/reUseable/bigTitle/SectionTitle";

function Education() {
  const eduInfo = [
    {
      id: 1,
      institutionCategory: "University",
      program: "Bachelor of Science in Computer Science and Engineering",
      institute: "Daffodil International University",
      link: "https://daffodilvarsity.edu.bd/",
      startingYear: "January, 2020",
      endingYear: "July, 2024",
      country: "Dhaka, Bangladesh",
      gpa: "3.40/4.00",
    },
    {
      id: 2,
      institutionCategory: "College",
      program: "Higher Secondary Certificate (HSC)",
      institute: "Dr. Mahbubur Rahman Mollah College",
      link: "https://dmrc.edu.bd/",
      startingYear: "January, 2017",
      endingYear: "July, 2019",
      country: "Dhaka, Bangladesh",
      gpa: "4.17/5.00",
    },

    {
      id: 3,
      institutionCategory: "School",
      program: "Secondary School Certificate (SSC)",
      institute: "Bright School and College",
      link: "https://www.bright.edu.bd/",
      startingYear: "January, 2015",
      endingYear: "February, 2017",
      country: "Dhaka, Bangladesh",
      gpa: "5.00/5.00",
    },
  ];

  return (
    <>
      <SectionTitle
        title1="Educational"
        title2="Background"
        description="These titles are concise and effectively communicate the purpose of the section, making them suitable for formal and professional contexts."
      />
      <div
        id="education"
        className="relative h-auto w-full rounded-4xl border-1 dark:border-white/30 dark:bg-darkMode-background"
      >
        <div className="p-6 ">
          {eduInfo.map((data) => (
            <div
              key={data.id}
              className={`flex ${data.id == 3 && "mb-0"} mb-8`}
            >
              <EduCard
                institutionCategory={data.institutionCategory}
                program={data.program}
                institute={data.institute}
                link={data.link}
                startingYear={data.startingYear}
                endingYear={data.endingYear}
                country={data.country}
                gpa={data.gpa}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Education;
