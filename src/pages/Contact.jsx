import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import Typewriter from "typewriter-effect";
import FormInputHandler from "../components/feature/form/FormInputHandler";
import SectionTitle from "../components/reUseable/bigTitle/SectionTitle";
import SocialButton from "../components/reUseable/socialButtons/SocialButton";
import axios from "axios";


function Contact({ setModalMessage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSize, setMessageSize] = useState("");

  //Emailjs IDs
  const service_id = "service_a7qd5rr";
  const template_id = "template_dk6nv7u";
  const public_key = "1N2CpNzOsF5AMbxmH";

  async function sendEmail(e) {
    e.preventDefault();

    const Data = {
      service_id: service_id,
      template_id: template_id,
      user_id: public_key,

      template_params: {
        from_name: name,
        from_email: email,
        to_name: "tamim ahamed",
        message: message,
      },
    };

    try {
      if (message.length > 6) {
        const response = await axios.post(
          "https://api.emailjs.com/api/v1.0/email/send",
          Data,
        );
        if (response.status === 200) {
          setModalMessage(true);
          setTimeout(() => {
            setModalMessage(false);
          }, 2000);
          setName("");
          setEmail("");
          setMessage("");
        }
      } else {
        setMessageSize("Message length required at least 6 char!");
      }
    } catch (error) {
      setModalMessage(error);
    }
  }

  return (
    <>
      <SectionTitle
        title1="Contact"
        title2="Any Question?"
        description="Have questions or seeking collaboration? Let's connect! Whether it's a project discussion or any inquiry, I'm here to help."
      />
      <main
        id="contact"
        className="rounded-4xl border-1 dark:border-white/30 p-6 bg-white dark:bg-transparent dark:text-darkMode-textGray"
      >
        <div>
          <div className="rounded-2xl bg-flatBg dark:bg-darkMode-background border-1 p-6 dark:border-darkMode-textGray/20">
            <div className="">
              <h3 className="font-semibold">Direct message</h3>
              <div className="flex flex-col  justify-between gap-4 lg:flex-row">
                <div className="mt-2 flex flex-wrap gap-2">
                  <SocialButton
                    icon={<FaTelegramPlane />}
                    ctaName="Telegram"
                    link="https://t.me/Tamim_Tomim"
                  />
                  <SocialButton
                    icon={<BsWhatsapp />}
                    ctaName="Whatsapp"
                    link="https://wa.me/8801629749167?text=Hello,%20there!"
                  />
                </div>
                <div className="lg:basis-[30%] xl:basis-3/12">
                  <p className="text-sm font-medium lg:mb-0 mb-4 flex items-center text-deepNavi/50 dark:text-darkMode-textGray/90">
                    <MdInfoOutline className="mr-1 text-lg text-deepNavi/50" />{" "}
                    Typical response time
                    <span className="font-bold text-highlighter ml-1 dark:text-darkMode-green">
                      <Typewriter
                        options={{
                          strings: ["@1hour", "!!"],
                          autoStart: true,
                          loop: true,
                          delay: 100,
                          deleteSpeed: 100,
                          cursor: "",
                        }}
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <form
              onSubmit={sendEmail}
              className=" mx-auto w-full max-w-[480px] sm:my-10 md:my-16"
            >
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
                className=" mt-1 w-full rounded-xl border-1 px-4 py-4 outline-none dark:bg-white/5"
                cols="30"
                rows="5"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {messageSize ? (
                <p className="text-sm text-red">{messageSize}</p>
              ) : (
                ""
              )}

              <button
                type="submit"
                onSubmit={sendEmail}
                aria-required
                className="text-whitep group mt-4
                 flex w-full cursor-pointer items-center justify-center gap-1 rounded-xl 
                 bg-deepNavi py-3 font-medium text-white transition-all duration-200 ease-in 
                 hover:bg-sky-700 dark:bg-darkMode-textGray dark:text-darkMode-background hover:dark:bg-darkMode-green"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
