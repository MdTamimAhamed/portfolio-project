import SocialButton from "../utils/SocialButton";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <section className="rounded-rt-2xl mt-10 flex w-full justify-between rounded-tl-2xl rounded-tr-2xl bg-white px-8 py-12 font-inter lg:px-16">
      <div>
        <h1 className="mb-2 font-semibold">Follow me on</h1>
        <div className="flex flex-wrap items-center justify-start gap-2">
          <SocialButton
            icon={<FaGithub />}
            ctaName="Github"
            link="https://github.com/MdTamimAhamed"
          />
          <SocialButton
            icon={<FaFacebook />}
            ctaName="Facebook"
            link="https://www.facebook.com/tamim.ssgt/"
          />
          <SocialButton
            icon={<RiInstagramFill />}
            ctaName="Instagram"
            link="https://www.instagram.com/tamim_ahamed_zan/"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-end">
          <img src="/src/assets/images/svg/care.svg" alt="care emoji" />
          <h1 className="ml-2 font-semibold">Crafted with care by me</h1>
        </div>
        <p className="text-right text-[12px]">
          &copy; tamim Ahamed 2024 | All rights reserved.{" "}
        </p>
      </div>
    </section>
  );
}

export default Footer;
