export default function EduCard({
  program,
  institute,
  startingYear,
  endingYear,
  country,
  gpa,
}) {
  return (
    <div className="w-full">
      <div className="flex justify-between ">
        <div>
          <p className="font-bold ">{program}</p>
          <h1 className="text-md flex flex-wrap ">{institute}</h1>
          <p className="text-black/50">{country}</p>
        </div>
        <div>
          <p className="flex">
            <span className="font-bold pr-1 ">Year:</span>
            {startingYear} - {endingYear}
          </p>
          <p className="font-bold">
            CGPA:<span className="font-normal"> {gpa}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
