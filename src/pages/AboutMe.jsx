import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
function AboutMe() {
  const isAboveMediumScreens = useMediaQuery("min-width: 920px");

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };
  const variantH2 = {
    hidden: { x: -50 },
    visible: {
      x: 10,
      transition: { duration: 1.2, type: "spring" },
    },
  };
  const variantSpanOne = {
    hidden: { x: 50 },
    visible: { x: 0, transition: { duration: 1, type: "spring" } },
  };
  const variantSpanTwo = {
    hidden: { x: -50 },
    visible: { x: 0, transition: { duration: 1, type: "spring" } },
  };
  return (
    <section
      id="aboutme"
      className=" mx-auto flex min-h-screen w-4/5 max-w-3xl flex-col items-center justify-center py-24 md:pt-48"
    >
      <motion.h2
        variants={variantH2}
        initial="hidden"
        whileInView="visible"
        className="font-robotoMono uppercase tracking-[1px]  "
      >
        sobre mi
      </motion.h2>
      <div className="mt-2 h-0.5 w-36 dark:bg-white "></div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        className="py-10"
      >
        <p className="flex flex-col font-robotoSerif">
          Hola👋.
          <motion.span
            variants={variantSpanOne}
            initial="hidden"
            whileInView="visible"
            className="pt-2 leading-6"
          >
            Mi nombre es Imanol, soy de Buenos Aires, Argentina. Soy programador
            Full Stack y tutor e-learning con un año de experiencia en la
            industria de la educación. Me apasiona crear soluciones atractivas e
            innovadoras en el desarrollo de aplicaciones web, utilizando mis
            habilidades en HTML, CSS, JavaScript y React.
          </motion.span>
          <motion.span
            variants={variantSpanTwo}
            initial="hidden"
            whileInView="visible"
            className="pt-2 leading-6"
          >
            ¡Me encanta trabajar en equipo y siempre estoy buscando aprender
            nuevas habilidades y conocimientos para poder estar siempre
            actualizado!💪
          </motion.span>
          <motion.span
            variants={variantSpanOne}
            initial="hidden"
            whileInView="visible"
            className="mt-10 flex flex-col pt-2 text-center text-xl uppercase leading-6 text-darkSecondary"
          >
            Si te interesa un programador con ganas de progresar y afrontar
            nuevos desafíos
          </motion.span>
          <span className="mt-4 text-center text-lg font-bold uppercase tracking-[1px] text-darkSecondary">
            ¡Contacta conmigo!
          </span>
        </p>
      </motion.div>
    </section>
  );
}

export default AboutMe;