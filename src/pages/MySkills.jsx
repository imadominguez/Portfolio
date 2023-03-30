import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Javascript from "../assets/logos/Javascript";
import React from "../assets/logos/React";
import Redux from "../assets/logos/Redux";
import Html from "../assets/logos/Html";
import Css from "../assets/logos/Css";
import Node from "../assets/logos/Node";
import Express from "../assets/logos/Express";
import PostgreSQL from "../assets/logos/PostgreSQL";
import Sql from "../assets/logos/Sql";

const MySkills = () => {
  const variantH2 = {
    hidden: { x: -50 },
    visible: {
      x: 0,
      transition: { duration: 1.2, type: "spring" },
    },
  };
  return (
    <section
      id="habilidades"
      className="pt-1mix-blend-saturation mx-auto flex min-h-[98vh] w-4/5 max-w-3xl flex-col items-center justify-center gap-10"
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
      <article className="grid  grid-cols-2 gap-10 font-roboto font-medium tracking-widest md:grid-cols-3">
        <div className="flex flex-col items-center gap-2 rounded-lg bg-black/80 p-4 dark:bg-black/50">
          <Html width={"54px"} height={"54px"} />
          <span className="text-html">HTML</span>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-lg bg-black/80 p-4 dark:bg-black/50">
          <Css width={"54px"} height={"54px"} />
          <span className="text-css">CSS 3</span>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-lg bg-black/80 p-4 dark:bg-black/50">
          <Javascript width={"54px"} height={"54px"} />
          <span className="text-javascript">JavaScript</span>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-lg bg-black/80 p-4 dark:bg-black/50">
          <React width={"54px"} height={"54px"} />
          <span className="text-react">React</span>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-lg bg-black/80 p-4 dark:bg-black/50">
          <Redux width={"54px"} height={"54px"} />
          <span className="text-redux">Redux</span>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-lg bg-black/80 p-4 dark:bg-black/50">
          <Node width={"54px"} height={"54px"} />
          <span className="text-node">Node</span>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-lg bg-black/80 p-4 dark:bg-black/50">
          <Express />
          <span className="text-white">Express</span>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-lg bg-black/80 p-4 dark:bg-black/50">
          <PostgreSQL width={"54px"} height={"54px"} />
          <span className="text-postgre">PostgreSQL</span>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-lg bg-black/80 p-4 dark:bg-black/50">
          <Sql width={"54px"} height={"54px"} />
          <span className="text-sql">SQL</span>
        </div>
      </article>
    </section>
  );
};

export default MySkills;
