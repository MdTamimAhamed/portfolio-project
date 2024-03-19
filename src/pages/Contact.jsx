import SocialButton from "../utils/SocialButton";
import { FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import FormInputHandler from "../utils/FormInputHandler";
import { useState } from "react";
import { IoMdSend } from "react-icons/io";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  console.log(name);

  return (
    <>
      <main
        id="contact"
        className="mt-10 rounded-2xl bg-white px-6 py-12 lg:px-16"
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
              <div className="mt-2 flex flex-wrap gap-2">
                <SocialButton icon={<FaTelegramPlane />} ctaName="Telegram" />
                <SocialButton icon={<BsWhatsapp />} ctaName="Whatsapp" />
              </div>
              <div>
                <p className="text-sm font-medium text-deepNaviBlue text-deepNaviBlue/50">
                  **Typical response time{" "}
                  <span className="font-bold text-highlighter">@1 hour</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border-[1px] p-4">
            <form className=" mx-auto my-4 w-full max-w-[480px] sm:my-10 md:my-16">
              <FormInputHandler
                state={name}
                setState={setName}
                type="text"
                placeholderText="Your name"
              />
              <FormInputHandler
                state={email}
                setState={setEmail}
                type="email"
                placeholderText="Email"
              />
              <textarea
                className="mt-1 w-full rounded-xl border-[1px] border-deepNaviBlue/30 px-4 py-4 outline-secondary/20"
                cols="30"
                rows="5"
                placeholder="Message here..."
              ></textarea>

              <button
                type="button"
                className="text-whitep mt-4 flex w-full cursor-pointer items-center justify-center gap-1 rounded-xl bg-deepNaviBlue py-3 font-medium text-white transition-all duration-150 ease-in hover:bg-deepNaviBlue/90"
              >
                Send
                <IoMdSend className="text-xl text-primary" />
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
