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
      x: 0,
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
      id="sobremi"
      className=" mx-auto flex min-h-[98vh] w-4/5 max-w-3xl flex-col items-start justify-center py-24 md:pt-48"
    >
      <motion.h2
        variants={variantH2}
        initial="hidden"
        whileInView="visible"
        className="font-robotoMono text-2xl font-bold uppercase tracking-[1px]  "
      >
        sobre mi
      </motion.h2>
      <div className="mt-2 h-0.5 w-36 dark:bg-darkSecondary "></div>
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
            Soy de Buenos Aires, Argentina. Me apasiona crear soluciones
            atractivas e innovadoras en el desarrollo de
            <span className="font-bold dark:text-darkSecondary">
              {" "}
              aplicaciones web
            </span>
            , utilizando mis habilidades en
            <span className=" tracking-[1px] text-html"> HTML</span>,
            <span className=" tracking-[1px] text-css"> CSS 3</span>,
            <span className=" tracking-[1px] text-javascript"> JavaScript</span>
            ,<span className=" tracking-[1px] text-react"> React</span>,
            <span className=" tracking-[1px] text-redux"> redux</span>,
            <span className=" tracking-[1px] text-white"> express </span>y
            <span className=" tracking-[1px] text-postgre"> postgreSQL</span>
          </motion.span>
          <motion.span
            variants={variantSpanTwo}
            initial="hidden"
            whileInView="visible"
            className="pt-10 text-center leading-6"
          >
            ¡Me encanta trabajar en equipo y siempre estoy buscando aprender
            nuevas habilidades y conocimientos para poder estar continuamente
            actualizado! 💪
          </motion.span>
          <motion.span
            variants={variantSpanOne}
            initial="hidden"
            whileInView="visible"
            className="mx-auto mt-10 flex  items-center gap-2 pt-2 text-center font-roboto text-xl font-semibold uppercase leading-6 tracking-widest text-darkSecondary/80 md:w-4/5"
          >
            <span>🧐</span>
            Si te interesa un programador con ganas de progresar y afrontar
            nuevos desafíos
            <span>🧐</span>
          </motion.span>
          <a
            href="#contact"
            className="mt-6 animate-bounce text-center text-lg font-bold uppercase tracking-widest text-darkSecondary "
          >
            <span className="">😀 ¡Contacta conmigo! 😀</span>
          </a>
        </p>
      </motion.div>
    </section>
  );
}

export default AboutMe;
