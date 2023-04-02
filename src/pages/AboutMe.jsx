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
          Hola👋
          <motion.span
            variants={variantSpanOne}
            initial="hidden"
            whileInView="visible"
            className="pt-2 leading-6 tracking-wider"
          >
            Soy de Buenos Aires, Argentina. Con conocimientos previos en Gestión
            de Empresas con una base sólida en áreas como finanzas, marketing,
            recursos humanos y estrategia empresarial. Busco nuevos desafíos y
            oportunidades para crecer y mejorar mis habilidades. Me caracterizo
            por ser proactivo y comprometido.
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
            className="mx-auto mt-10  pt-2 text-center font-robotoSerif  leading-6 tracking-widest  md:w-4/5"
          >
            Si te interesa un programador con{" "}
            <span className="font-semibold uppercase text-darkSecondary underline underline-offset-[3px]">
              ganas de progresar
            </span>{" "}
            y{" "}
            <span className="font-semibold uppercase text-darkSecondary underline underline-offset-[3px]">
              afrontar nuevos desafíos
            </span>
          </motion.span>
          <a
            href="#contact"
            className="mt-6 max-w-sm animate-bounce gap-2 self-center rounded-md bg-darkSecondary bg-gradient-to-r from-darkSecondary via-darkViteGradient to-darkSecondary py-3 px-7 text-center font-roboto font-semibold text-white/80  shadow-lg  shadow-gray-300/50 transition-all  duration-500 hover:via-darkSecondary hover:text-gray-700  "
          >
            <span className="">😀 ¡Contacta conmigo! 😀</span>
          </a>
        </p>
      </motion.div>
    </section>
  );
}

export default AboutMe;
