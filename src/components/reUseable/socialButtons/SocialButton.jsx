export default function SocialButton({ icon, ctaName, link }) {
  return (
    <div
      className=" dark:border-darkMode-textGray/20  hover:dark:border-darkMode-green group flex h-10 cursor-pointer 
    items-center justify-center rounded-full border-1 
      bg-white px-6 transition-all duration-150 ease-in dark:bg-white/30 dark:hover:bg-primary hover:border-primary hover:bg-primary"
    >
      <a
        href={link}
        className="dark:text-darkMode-textGray group-hover:dark:text-darkMode-background flex items-center justify-center text-sm font-semibold text-deepNaviBlue transition-all ease-in"
        target="_blank"
      >
        <p className="text-base">{icon}</p>
        <p className="ml-2">{ctaName}</p>
      </a>
    </div>
  );
}
