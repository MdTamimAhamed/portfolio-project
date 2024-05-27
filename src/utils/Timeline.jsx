export default function Timeline({ when, what, where, status }) {
  return (
    <div>
      <main className="relative ml-6 w-full border-l-[1px] border-deepNaviBlue pt-6 dark:border-darkMode-textGray dark:text-darkMode-textGray">
        <div className="absolute -left-[4.2px] top-8 h-2 w-2 rounded-full bg-deepNaviBlue dark:bg-darkMode-textGray "></div>
        <div className="absolute -left-6 top-[35px] h-[1px] w-12 bg-deepNaviBlue dark:bg-darkMode-textGray md:w-[78px]"></div>

        <div className="mx-8 md:mx-16">
          <p className="dark:font-light dark:text-darkMode-green">{when}</p>
          <h1 className="text-md flex flex-wrap font-bold ">{what}</h1>
          <p className="flex">{where}</p>
          <p>{status}</p>
        </div>
      </main>
    </div>
  );
}
