import { motion } from "framer-motion";

import { TechSkills } from "../components/TechSkills";

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
      className="mx-auto flex min-h-[98vh] w-4/5 max-w-3xl flex-col items-center justify-center gap-10"
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
      <TechSkills />
    </section>
  );
};

export default MySkills;
