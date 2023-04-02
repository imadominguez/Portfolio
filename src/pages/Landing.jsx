import useMediaQuery from "../hooks/useMediaQuery";
import profile from "../assets/ima.jpg";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { TypeAnimation } from "react-type-animation";
import { HiDocumentArrowDown, HiEnvelope } from "react-icons/hi2";
import SocialMediaIcons from "../components/SocialMediaIcons";

function Landing({ setSelectedPage }) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 920px)");
  const handleDownloadPdf = () => {
    window.open("http://localhost:3000/imanoldominguezsanchez.pdf", "_blank");
  };
  return (
    <section
      id="inicio"
      className="flex min-h-[99vh] flex-col items-center justify-center gap-4 py-10 md:h-[99vh]   md:flex-row md:gap-16  "
    >
      {/* image section */}
      <div className="z-10  mt-16  flex flex-col items-center justify-center md:order-2 md:mt-0 md:flex-row-reverse">
        {isAboveMediumScreens ? (
          <motion.div
            viewport={{ once: true, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.5 }}
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: { opacity: 1 },
            }}
            className="relative z-0  before:absolute before:-top-4 before:-left-4 before:z-[-1] before:h-full before:w-full before:max-w-[400px] before:rounded-t-[400px] before:rounded-b-[400px] before:border-2 before:border-darkSecondary"
          >
            <img
              src={profile}
              alt="profile"
              className="z-10 w-full max-w-[350px] rounded-t-[400px] rounded-b-[400px] saturate-150 transition duration-500 "
            />
          </motion.div>
        ) : (
          <motion.img
            animate="visible"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.7 }}
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: { opacity: 1 },
            }}
            src={profile}
            alt="profile"
            className="z-10 w-full max-w-[200px] rounded-t-[400px] rounded-b-[400px] shadow-lg shadow-white/20 saturate-150 transition duration-500"
          />
        )}
      </div>
      {/* MAIN SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 1,
          type: "spring",
        }}
        variants={{
          hidden: { opacity: 0, x: -150 },
          visible: { opacity: 1, x: 0 },
        }}
        className="z-30 flex  min-w-[317px] max-w-[400px] flex-col items-center justify-center  gap-4 "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, type: "spring" }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <span className="z-10 flex flex-col  items-center justify-center gap-4 text-center font-robotoMono text-lg md:text-start">
            <span className="z-20 text-2xl  font-semibold dark:text-darkSecondary">
              <TypeAnimation
                sequence={[
                  "Imanol Dominguez",
                  1000,
                  "Full Stack Developer",
                  2000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </span>

          <p className=" mx-auto w-4/5 p-3 pt-5 text-left font-robotoSerif md:w-full  ">
            Programador y tutor e-learning con un año de experiencia en la
            industria de la educación.
          </p>
        </motion.div>
        {/* CAAL TO ACTIONS */}
        <motion.div
          className="mt-5 flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1, type: "spring" }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="flex items-center gap-2 rounded-l-md bg-darkSecondary bg-gradient-to-r from-darkSecondary via-darkViteGradient to-darkSecondary py-3 px-7 font-roboto  font-semibold  text-white transition  duration-500 hover:via-darkSecondary hover:text-gray-700 active:shadow-inner active:shadow-black active:transition-none"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <HiEnvelope />
            Contactame
          </AnchorLink>

          <a
            className="flex items-center gap-2 rounded-r-md border-r border-t border-b py-3 px-7 font-roboto font-semibold transition duration-500 active:shadow-inner active:shadow-darkSecondary active:transition-none dark:border-darkSecondary dark:text-darkSecondary dark:shadow-darkSecondary dark:hover:dark:text-white"
            href="https://drive.google.com/file/d/1vlr9weZneQZlGJ8zbSPGhfOTYf8IxgrJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiDocumentArrowDown /> Descarga CV
          </a>
        </motion.div>
        <motion.div
          className="mt-5 flex h-[50px] justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 1, type: "spring" }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Landing;
