function SectionTitle({ description, title1, title2 }) {
  return (
    <div className="grid gap-8 mb-8 grid-cols-1 mt-28">
      <div className=" bg-flatBg dark:bg-darkMode-background rounded-4xl p-6 lg:p-10">
        <div>
          <h1 className=" uppercase text-4xl md:text-6xl font-black tracking-tight text-sky-500 ">
            {title1} <br />
            <span className="uppercase text-4xl md:text-6xl font-black text-deepNavi dark:text-white/70">
              {title2}
            </span>
          </h1>
        </div>
        <p className="mt-2 w-full lg:w-[70%] text-slate-500 dark:text-white/50">{description}</p>
      </div>
    </div>
  );
}

export default SectionTitle;
