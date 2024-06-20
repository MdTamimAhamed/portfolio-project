function RoundedFilterBtn({ name }) {
  return (
    <a>
      <button
        className="dark:border-darkMode-textGray/20 dark:text-darkMode-textGray hover:dark:bg-darkMode-textGray
         hover:dark:text-darkMode-background rounded-full border-[1px] border-deepNaviBlue/50 transition-all duration-150 ease-in hover:bg-deepNaviBlue hover:text-white"
      >
        <div className="flex h-9 items-center px-6">{name}</div>
      </button>
    </a>
  );
}

export default RoundedFilterBtn;
