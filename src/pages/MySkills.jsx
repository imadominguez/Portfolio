import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Javascript from "../assets/logos/Javascript";
import React from "../assets/logos/React";
import Redux from "../assets/logos/Redux";
import Html from "../assets/logos/Html";
import Css from "../assets/logos/Css";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 920px)");
  const variantH2 = {
    hidden: { x: -50 },
    visible: {
      x: 0,
      transition: { duration: 1.2, type: "spring" },
    },
  };
  return (
    <section
      id="skills"
      className="pt-1mix-blend-saturation mx-auto flex min-h-screen w-4/5 max-w-3xl flex-col items-center justify-center gap-10"
    >
      <div className=" flex w-full flex-col items-start ">
        <motion.h2
          variants={variantH2}
          initial="hidden"
          whileInView="visible"
          className="font-robotoMono text-2xl font-bold uppercase tracking-[1px]  "
        >
          Habilidades
        </motion.h2>
        <div className="mt-2 h-0.5 w-36 dark:bg-darkSecondary "></div>
      </div>
      {/* LENGUAJES */}
      <article className="w-full overflow-hidden rounded-2xl border shadow-lg dark:border-white dark:shadow-white ">
        <div className="border-b-[1px] border-white py-2">
          <h2 className="ml-5 font-roboto uppercase  tracking-widest">
            Lenguajes
          </h2>
        </div>
        <div className="grid grid-cols-3 p-5">
          <div className="flex w-full flex-col items-center justify-center">
            <Javascript width={"50px"} height={"50px"} />
            <span>Javascript</span>
          </div>
        </div>
      </article>
      {/* FRONTEND */}
      <article className="w-full overflow-hidden rounded-2xl border shadow-lg dark:border-white dark:shadow-white">
        <div className="border-b-[1px] border-white py-2">
          <h2 className="ml-5 font-roboto uppercase  tracking-widest">
            Frontend
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-y-5 p-5">
          <div className="flex flex-col items-center justify-center">
            <Html width={"50px"} height={"50px"} />
            <span>HTML</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Css width={"50px"} height={"50px"} />
            <span>CSS</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <React width={"50px"} height={"50px"} />
            <span>React</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Redux width={"50px"} height={"50px"} />
            <span>Redux</span>
          </div>
        </div>
      </article>
      {/* BACKEND */}
      <article className="w-full overflow-hidden rounded-2xl border shadow-lg dark:border-white dark:shadow-white">
        <div className="border-b-[1px] border-white py-2">
          <h2 className="ml-5 font-roboto uppercase  tracking-widest">
            Backend
          </h2>
        </div>
        <div></div>
      </article>
      {/* DATA BASE */}
      <article className="w-full overflow-hidden rounded-2xl border shadow-lg dark:border-white dark:shadow-white">
        <div className="border-b-[1px] border-white py-2">
          <h2 className="ml-5 font-roboto uppercase  tracking-widest">
            Base de datos
          </h2>
        </div>
        <div></div>
      </article>
      {/* FRAMEWORKS */}
      <article className="w-full overflow-hidden rounded-2xl border shadow-lg dark:border-white dark:shadow-white">
        <div className="border-b-[1px] border-white py-2">
          <h2 className="ml-5 font-roboto uppercase  tracking-widest">
            Frameworks
          </h2>
        </div>
        <div></div>
      </article>
    </section>
  );
};

export default MySkills;
