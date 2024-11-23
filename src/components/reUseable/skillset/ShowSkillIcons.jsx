import { motion } from "framer-motion";
function ShowSkillIcons({ icon, title, icons = [] }) {
  return (
    <div className=" gap-8 justify-between lg:flex lg:justify-between">
      <div
        className={`basis-1/4 rounded-xl lg:bg-flatBg dark:bg-white/5 bg-deepNavi flex justify-center items-center py-4 md:py-6 mt-10  lg:mt-0`}
      >
        <div className="flex flex-col items-center">
          <motion.div
            animate={{
              y: ["0%", "-7%", "0%", "-5%", "0%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="h-12 w-12 lg:bg-deepNavi dark:text-deepNavi bg-white dark:bg-primary lg:shadow-none shadow-lg shadow-sky-700 text-deepNavi lg:text-white flex justify-center items-center text-xl rounded-full">
              {icon}
            </div>
          </motion.div>
          <h1 className="mt-2 font-medium dark:text-white/70  lg:text-deepNavi text-white">
            {title}
          </h1>
        </div>
      </div>

      <div className=" grid gap-2 lg:gap-4 grid-cols-3 md:grid-cols-5 xl:grid-cols-6 basis-8/12 lg:basis-10/12 mt-4 lg:mt-0">
        {icons.map((data) => (
          <div
            className=" group relative flex h-28 w-full cursor-default flex-col items-center border-1 hover:border-sky-200 justify-center rounded-xl transition-all duration-200 ease-linear
                  hover:scale-105  hover:bg-sky-100 dark:border-darkMode-textGray/20 hover:dark:bg-darkMode-textGray/10 md:h-32 md:w-32"
            key={data.id}
          >
            <span className="text-3xl dark:text-white/70 text-deepNavi group-hover:text-sky-500 transition-all duration-200 ease-linear">
              {data.icon}
            </span>
            <span className="mt-2 text-sm font-semibold dark:text-white/70 text-slate-600 group-hover:text-sky-500 transition-all duration-200 ease-linear">
              {data.iconName}
            </span>

            {data.status ? (
              <span className="absolute bottom-0 rounded-sm bg-indigo-500 px-2 text-xs font-medium  text-white dark:bg-green-300/10">
                {data.status}
              </span>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowSkillIcons;
