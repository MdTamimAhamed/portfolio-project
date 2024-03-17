export default function SocialButton({ icon, ctaName, link }) {
  return (
    <div
      className=" flex h-10 cursor-pointer items-center justify-center rounded-full border-[1px] 
    border-deepNaviBlue bg-transparent px-6 transition-all duration-150
      ease-in hover:border-primary hover:bg-primary"
    >
      <a
        href={link}
        className="flex items-center justify-center text-sm font-semibold  text-deepNaviBlue transition-all ease-in"
        target="_blank"
      >
        <p className="text-base">{icon}</p>
        <p className="ml-2">{ctaName}</p>
      </a>
    </div>
  );
}
