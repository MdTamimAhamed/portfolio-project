import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import RoundedMedia from "../utils/RoundedMedia";

function Footer() {
  return (
    <section className="rounded-rt-2xl mt-10 w-full justify-between rounded-tl-2xl rounded-tr-2xl bg-white px-6 py-12 font-inter dark:bg-darkMode-background dark:text-darkMode-textGray sm:flex lg:px-16">
      <div className="flex flex-col">
        <div className="flex items-center justify-start">
          <img src="/assets/images/care.svg" alt="care_emoji" />
          <h1 className="ml-2 font-semibold">Crafted with care by me</h1>
        </div>
        <p className="text-left text-[12px] sm:text-right">
          &copy; tamim ahamed 2024 | All rights reserved.
        </p>
      </div>
      <div className="mt-8 sm:mt-0">
        <h1 className="mb-2 text-left font-semibold dark:text-darkMode-textGray sm:text-right">
          Follow me on
        </h1>
        <div className="flex flex-wrap items-center justify-start gap-2">
          <RoundedMedia
            icon={<FaGithub />}
            link="https://github.com/MdTamimAhamed"
          />
          <RoundedMedia
            icon={<FaFacebook />}
            link="https://www.facebook.com/tamim.ssgt/"
          />
          <RoundedMedia
            icon={<RiInstagramFill />}
            link="https://www.instagram.com/tamim_ahamed_zan/"
          />
          <RoundedMedia
            icon={<FaLinkedin />}
            link="https://www.linkedin.com/in/tamim-ahamed-000432174/"
          />
        </div>
      </div>
    </section>
  );
}

export default Footer;
