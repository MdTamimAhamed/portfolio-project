import { AiFillBehanceCircle } from "react-icons/ai";
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
    {
      id: 5,
      icon: <AiFillBehanceCircle />,
      text: "Behance",
      address: "https://www.behance.net/tamimahamed",
    },
  ];
  return (
    <section className="mt-10 text-xl font-bold p-8 border-2 border-slate-100 rounded-2xl">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-8 text-3xl ">
        {socialData.map((item) => (
          <a
            className="cursor-pointer text-white basis-1/4"
            href={item.address}
            target="_blank"
            key={item.id}
          >
            <div className=" group hover:cursor-pointer relative overflow-hidden z-10  flex items-center border-slate-100 border-2 p-2 rounded-full">
              <figure className="bg-black w-10 h-10 flex text-2xl items-center justify-center rounded-full">
                {item.icon}
              </figure>
              <p className="ml-6 font-medium text-lg text-black group-hover:text-white">
                {item.text}
              </p>
              <span
                className="absolute inset-0 -z-10 before:block before:w-0 before:h-full before:bg-black dark:before:bg-white
                  before:rounded-full group-hover:before:w-full before:transition-all before:duration-500 before:ease-in-out"
              ></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default SocialProfile;
