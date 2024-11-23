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
    <section className=" text-xl font-bold mt-4 rounded-xl my-10">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 ">
        {socialData.map((item) => (
          <a
            className="cursor-pointer text-deepNavi basis-1/4"
            href={item.address}
            target="_blank"
            key={item.id}
          >
            <div
              className=" group hover:cursor-pointer relative hover:text-white hover:bg-deepNavi bg-white  py-3 overflow-hidden z-10
            flex items-center px-4 rounded-xl transition-all duration-100 ease-in"
            >
              <figure className="flex text-xl items-center justify-center rounded-xl transition-all ease-in duration-200">
                {item.icon}
              </figure>
              <p className="ml-2 text-black text-base font-medium group-hover:text-white">
                {item.text}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default SocialProfile;
