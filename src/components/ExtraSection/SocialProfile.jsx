import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
function SocialProfile() {
  const socialData = [
    {
      id: 1,
      icon: <FaGithub />,
      text: "GitHub",
      address: "https://github.com/MdTamimAhamed",
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      text: "LinkedIn",
      address: "https://www.linkedin.com/in/tamim-ahamed-000432174/",
    },
    {
      id: 3,
      icon: <FaFacebook />,
      text: "Facebook",
      address: "https://www.facebook.com/tamim.ssgt/",
    },
    {
      id: 4,
      icon: <RiInstagramFill />,
      text: "Instagram",
      address: "https://www.instagram.com/tamim_ahamed_zan/",
    },
  ];
  return (
    <section className="mt-10 text-xl font-bold p-8 border-2 border-slate-100 rounded-2xl">
      <div>
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-6 text-3xl dark:text-darkMode-textGray md:gap-4 md:text-[26px]">
          {socialData.map((item) => (
            <div className=" group relative z-10 basis-1/4 flex items-center border-slate-100 border-2 p-2 rounded-full">
              <figure className="bg-black w-12 h-12 flex items-center justify-center rounded-full">
                <a
                  className="cursor-pointer transition-all duration-150 text-white ease-in hover:text-primary"
                  href={item.address}
                  target="_blank"
                >
                  {item.icon}
                </a>
              </figure>
              <p className="ml-6 font-medium text-lg">{item.text}</p>
              <span
                className="absolute inset-0 -z-10 before:block before:w-full before:h-full before:bg-red before:rounded-full top-1/2 
              -translate-y-1/2 "
              ></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProfile;
