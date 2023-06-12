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
      className="mx-auto flex max-w-3xl flex-col items-start justify-center gap-5  py-20"
    >
      <motion.h2
        variants={variantH2}
        initial="hidden"
        whileInView="visible"
        className="mt-20 font-robotoMono text-2xl font-bold uppercase tracking-[1px]  "
      >
        sobre mi
      </motion.h2>
      <div className="mt-2 h-0.5 w-36 dark:bg-darkSecondary "></div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        className="py-5"
      >
        <div className="flex flex-col gap-5 font-robotoSerif">
          <span>Hola👋</span>
          <motion.span
            variants={variantSpanOne}
            initial="hidden"
            whileInView="visible"
            className="tracking-wider"
          >
            Soy de Buenos Aires, Argentina. Con conocimientos previos en Gestión de
            Empresas con una base sólida en áreas como finanzas, marketing, recursos
            humanos y estrategia empresarial.
            <br /> Busco nuevos desafíos y oportunidades para crecer y mejorar mis
            habilidades. Me caracterizo por ser proactivo y comprometido.
          </motion.span>
          <motion.span
            variants={variantSpanTwo}
            initial="hidden"
            whileInView="visible"
            className="text-center "
          >
            ¡Me encanta trabajar en equipo y siempre estoy buscando aprender nuevas
            habilidades y conocimientos para poder estar continuamente actualizado! 💪
          </motion.span>
          <motion.span
            variants={variantSpanOne}
            initial="hidden"
            whileInView="visible"
            className="mx-auto    text-center   tracking-widest  md:w-4/5"
          >
            Si te interesa un programador con{" "}
            <span className="font-semibold uppercase text-darkSecondary">
              ganas de progresar
            </span>{" "}
            y{" "}
            <span className="font-semibold uppercase text-darkSecondary ">
              afrontar nuevos desafíos
            </span>
          </motion.span>
          <a
            href="#contact"
            className=" flex h-12  max-w-sm animate-bounce items-center justify-center gap-2 self-center rounded-full bg-gradient-to-r from-[#AC945F] to-[#AC645F] py-4 px-10  font-roboto  font-semibold text-white  transition duration-500 "
          >
            <span className=""> ¡Contacta conmigo! </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutMe;
