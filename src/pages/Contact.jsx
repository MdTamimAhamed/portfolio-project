import SocialButton from "../utils/SocialButton";
import { FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

function Contact() {
  return (
    <>
      <main
        id="contact"
        className="mt-10 rounded-2xl bg-white px-8 py-20 lg:px-16"
      >
        <h1 className="pb-4 text-xl font-bold text-deepNaviBlue">Contact</h1>
        <div>
          <h1
            className=" bg-gradient-to-r from-secondary to-primary bg-clip-text 
            pb-2 text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl"
          >
            Seeking Collab?
          </h1>
          <p className="mt-2 w-full md:w-4/5">
            Have questions or seeking collaboration? Let's connect! Whether it's
            a project discussion or any inquiry, I'm here to help.
          </p>

          <div className="mt-6">
            <h3 className="font-semibold">Direct message</h3>
            <div className="flex flex-col items-baseline justify-between gap-4 sm:flex-row">
              <div className="mt-2 flex gap-2">
                <SocialButton icon={<FaTelegramPlane />} ctaName="Telegram" />
                <SocialButton icon={<BsWhatsapp />} ctaName="Whatsapp" />
              </div>
              <div>
                <p className="text-sm font-medium text-deepNaviBlue">
                  **Typical response time{" "}
                  <span className="font-bold text-highlighter">@1 hour</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
