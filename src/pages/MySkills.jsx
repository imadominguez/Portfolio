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
      className="mx-auto flex max-w-3xl flex-col items-start justify-center gap-5  py-20"
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
