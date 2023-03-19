import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
function AboutMe() {
  const isAboveMediumScreens = useMediaQuery("min-width: 920px");
  return (
    <section id="Conoceme" className="mx-auto h-screen w-4/5  py-24">
      <h2 className="font-robotoMono uppercase tracking-[1px] md:px-36 ">
        sobre mi
      </h2>
      <div className="mt-2 h-0.5 w-36 dark:bg-white md:mx-36"></div>
      <div className="py-10">
        <p className="flex flex-col font-robotoSerif">
          Hola👋.
          <span className="pt-2 leading-6">
            Mi nombre es Imanol, soy de Buenos Aires, Argentina. Soy programador
            Full Stack y tutor e-learning con un año de experiencia en la
            industria de la educación. Me apasiona crear soluciones atractivas e
            innovadoras en el desarrollo de aplicaciones web, utilizando mis
            habilidades en HTML, CSS, JavaScript y React.
          </span>
          <span className="pt-2 leading-6">
            ¡Me encanta trabajar en equipo y siempre estoy buscando aprender
            nuevas habilidades y conocimientos para poder brindar mis
            conocimientos actualizados!💪
          </span>
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
