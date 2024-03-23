export default function RoundedMedia({ icon, link }) {
  return (
    <a
      href={link}
      className="flex items-center justify-center text-sm font-semibold text-deepNaviBlue transition-all ease-in dark:text-darkMode-textGray group-hover:dark:text-darkMode-background"
      target="_blank"
    >
      <div
        className=" group  group flex h-10 w-10 cursor-pointer items-center 
      justify-center rounded-full border-[1px] border-deepNaviBlue bg-transparent
        transition-all duration-150 ease-in hover:border-primary hover:bg-primary dark:border-darkMode-textGray/20 hover:dark:border-darkMode-green"
      >
        <p className="text-base group-hover:text-deepNaviBlue">{icon}</p>
      </div>
    </a>
  );
}
