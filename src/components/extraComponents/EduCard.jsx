import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function EduCard({
  program,
  institute,
  link,
  startingYear,
  endingYear,
  country,
  gpa,
  institutionCategory,
}) {
  return (
    <div className={`relative w-full border-1 dark:border-white/20 p-6 rounded-xl`}>
      <motion.h1
        animate={{
          y: ["0%", "-7%", "0%", "-5%", "0%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="  absolute min-w-28 -top-4 bg-deepNavi dark:text-white text-white px-4 py-1 flex items-center rounded-md "
      >
        {institutionCategory || "University"}
      </motion.h1>
      <div className="flex justify-between flex-col md:flex-row ">
        <div className="md:basis-8/12 dark:border-white/20 md:border-r-1">
          <p className="font-bold dark:text-white">{program}</p>
          <a
            href={link}
            target="_blank"
            className="text-md w-full flex items-center dark:text-white/70 hover:cursor-pointer hover:underline hover:text-sky-500 "
          >
            {institute}
            <FiExternalLink className="ml-1" />
          </a>
          <p className="text-black/50 dark:text-white/40">{country}</p>
        </div>
        <div className="basis-4/12 mt-4 md:ml-10 md:mt-0">
          <p className="flex dark:text-white/70">
            <span className="font-bold pr-1 dark:text-white/70 ">Year:</span>
            {startingYear} - {endingYear}
          </p>
          <p className="font-bold dark:text-white/70">
            {institutionCategory !== "University" ? "GPA" : "CGPA"}:
            <span className="font-normal"> {gpa}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
