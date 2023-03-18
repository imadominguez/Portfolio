import useMediaQuery from "../hooks/useMediaQuery";
import profile from "../assets/ima.jpg";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { TypeAnimation } from "react-type-animation";

function Landing({ setSelectedPage }) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 920px)");
  return (
    <section
      id="home"
      className="gap-16 py-10 md:flex md:h-full md:items-center md:justify-between  "
    >
      {/* image section */}
      <div className="z-10 mx-auto mt-10 flex w-screen flex-col   items-center justify-center gap-10 md:order-2 md:mt-0 md:flex-row-reverse">
        {isAboveMediumScreens ? (
          <div className="relative z-0  before:absolute before:-top-4 before:-left-4 before:z-[-1] before:h-full before:w-full before:max-w-[400px] before:rounded-t-[400px] before:rounded-b-[400px] before:border-2 before:border-darkSecondary">
            <img
              src={profile}
              alt="profile"
              className="z-10 w-full max-w-[350px] rounded-t-[400px] rounded-b-[400px] saturate-150 transition duration-500 "
            />
          </div>
        ) : (
          <img
            src={profile}
            alt="profile"
            className="z-10 w-full max-w-[320px] rounded-t-[400px] rounded-b-[400px] saturate-150 transition duration-500"
          />
        )}

        {/* MAIN SECTION */}
        <div className="z-30 flex min-w-[317px] max-w-[400px] flex-col gap-4   ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span className="z-10 flex flex-col  items-center justify-center gap-4 text-center font-robotoMono text-lg md:text-start">
              Hola yo soy{" "}
              <span className="z-20 text-2xl  font-semibold dark:text-darkSecondary">
                <TypeAnimation
                  sequence={[
                    "Imanol Dominguez",
                    1000,
                    "Full Stack Developer",
                    2000,
                    "Desarrollador Web",
                    1000,
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                />
              </span>
            </span>
          </motion.div>
          <div>
            <p className="text-center font-robotoSerif md:text-left ">
              Soy programador Full Stack y tutor e-learning con un año de
              experiencia en la industria de la educación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
