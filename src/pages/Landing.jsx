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
      className="mx-auto flex max-w-3xl flex-col items-start justify-center gap-5  py-20"
    >
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
          hidden: { opacity: 0, y: 150 },
          visible: { opacity: 1, y: 0 },
        }}
        className="z-30 flex  min-w-[317px] max-w-[800px] flex-col items-center justify-center  gap-4 "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, type: "spring" }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <span className="z-10 flex flex-col  items-center justify-center gap-4 text-center font-robotoMono text-lg md:text-start">
            <span className="z-20 text-3xl font-semibold  dark:text-darkSecondary md:text-5xl">
              <TypeAnimation
                sequence={["Imanol Dominguez", 1500, "Full Stack Developer", 1500]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </span>

          <p className=" mx-auto  max-w-md pt-5 text-center font-robotoSerif  ">
            Programador y tutor e-learning con un año de experiencia en la industria de la
            educación.
          </p>
        </motion.div>
        {/* CAAL TO ACTIONS */}
        <motion.div
          className="mt-5 flex flex-col justify-center gap-2 xs:flex-row  md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            delay: 0.2,
            duration: 1,
            type: "spring",
          }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="flex h-12 items-center justify-center  gap-2 rounded-full bg-gradient-to-r from-[#AC945F] to-[#AC645F] py-4 px-10  font-roboto  font-semibold text-white  transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contactame
          </AnchorLink>

          <a
            className="flex h-12  items-center justify-center rounded-full border-[3px] border-[#AC945F] py-4 px-10"
            href="https://drive.google.com/file/d/1vlr9weZneQZlGJ8zbSPGhfOTYf8IxgrJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar CV
          </a>
        </motion.div>
        <motion.div
          className="mt-5 flex h-[50px] justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            delay: 0.4,
            duration: 1,
            type: "spring",
          }}
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
