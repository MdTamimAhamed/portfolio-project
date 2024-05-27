import axios from "axios";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import FormInputHandler from "../utils/FormInputHandler";
import SocialButton from "../utils/SocialButton";

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
      <main
        id="contact"
        className="mt-10 rounded-2xl bg-white px-6 py-12 dark:bg-darkMode-background dark:text-darkMode-textGray lg:px-16"
      >
        <h1 className="pb-4 text-xl font-bold text-deepNaviBlue dark:text-darkMode-textGray">
          Contact
        </h1>
        <div>
          <h1
            className=" bg-gradient-to-r from-secondary via-primary via-60%  to-primary to-10% bg-clip-text 
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
              <div>
                <p className="text-sm font-medium text-deepNaviBlue text-deepNaviBlue/50 dark:text-darkMode-textGray/90">
                  **Typical response time{" "}
                  <span className="font-bold text-highlighter dark:text-darkMode-green">
                    @1 hour
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border-[1px] p-4 dark:border-darkMode-textGray/20">
            <form
              onSubmit={sendEmail}
              className=" mx-auto my-4 w-full max-w-[480px] sm:my-10 md:my-16"
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
                className=" mt-1 w-full rounded-xl border-[1px] border-deepNaviBlue/30 px-4 py-4 outline-none dark:bg-white/5"
                cols="30"
                rows="5"
                placeholder="Message here..."
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
                 bg-deepNaviBlue py-3 font-medium text-white transition-all duration-200 ease-in 
                 hover:bg-deepNaviBlue/90 dark:bg-darkMode-textGray dark:text-darkMode-background hover:dark:bg-darkMode-green"
              >
                Send
                <IoMdSend className="text-xl text-primary transition-all duration-200 ease-in group-hover:ml-2 dark:text-darkMode-background" />
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
