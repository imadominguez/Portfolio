import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import useMediaQuery from "../hooks/useMediaQuery";
import {
  HiBars3,
  HiBars3BottomRight,
  HiOutlineXMark,
  HiHome,
  HiIdentification,
  HiCodeBracketSquare,
  HiBriefcase,
  HiEnvelope,
} from "react-icons/hi2";
import { AnimatePresence, motion } from "framer-motion";
import style from "./style";
import ButtonDarkMode from "../components/ButtonDarkMode";

const Link = ({ page, selectedPage, setSelectedPage, component }) => {
  const lowerCasePage = page.toLowerCase().split(" ").join("");
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage && "dark:text-darkSecondary"
      } flex items-center gap-3`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {component}
      {page}
    </AnchorLink>
  );
};
const container = {
  hidden: { opacity: 0, x: 500 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delayChildren: 0.5,
      ease: "easeOut",
      type: "keyframes",
    },
    x: 0,
  },
};
const variants = {
  hidden: {
    opacity: 0,
    x: 220,
  },
  visible: ({ delay }) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 0.1,
    },
    x: 0,
  }),
};
const variantNav = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.6,
    },
  },
};
function NavBar({ isTopOfPage, selectedPage, setSelectedPage }) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 1100px)");
  const navbarBackground = isTopOfPage
    ? " "
    : "dark:from-zinc-700 dark:to-zinc-800  ";
  const navbarText = isTopOfPage
    ? "dark:hover:text-darkSecondary"
    : "dark:hover:text-darkSecondary";
  return (
    <nav
      className={` ${navbarBackground} : fixed top-0 z-40 w-full bg-[#E6E6E6] bg-gradient-to-b py-2 shadow-sm  shadow-black transition duration-300 ease-in dark:from-zinc-700 dark:to-zinc-800 md:py-4`}
    >
      <div className="mx-auto flex w-5/6 items-center justify-between">
        <motion.h4
          variants={variantNav}
          initial="hidden"
          animate="visible"
          className={`cursor-pointer font-roboto ${navbarText} text-3xl font-bold transition duration-500`}
        >
          ID
        </motion.h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <motion.div
            variants={variantNav}
            initial="hidden"
            animate="visible"
            className="flex justify-between gap-16 font-robotoMono text-sm font-semibold"
          >
            <div className={`${style.navItems} ${navbarText} `}>
              <Link
                page="inicio"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                component={<HiHome />}
              />
            </div>
            <div className={`${style.navItems} ${navbarText} `}>
              <Link
                page="Sobre mi"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                component={<HiIdentification />}
              />
            </div>
            <div className={`${style.navItems} ${navbarText} `}>
              <Link
                page="Habilidades"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                component={<HiCodeBracketSquare />}
              />
            </div>
            <div className={`${style.navItems} ${navbarText} `}>
              <Link
                page="Proyectos"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                component={<HiBriefcase />}
              />
            </div>
            <div className={`${style.navItems} ${navbarText} `}>
              <Link
                page="Contacto"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                component={<HiEnvelope />}
              />
            </div>
            <div className={`${style.navItems} ${navbarText} `}>
              <ButtonDarkMode />
            </div>
          </motion.div>
        ) : (
          <button
            className="rounded-full p-3 dark:bg-gray-700/80"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            {isMenuToggled ? <HiBars3BottomRight /> : <HiBars3 />}
          </button>
        )}

        {/* MOBILE MENU */}
        <AnimatePresence>
          {!isAboveSmallScreens && isMenuToggled && (
            <>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="fixed top-0 left-0 right-0 -z-10 min-h-screen bg-gray-900/90"
                exit={{
                  x: 500,
                  transition: {
                    delay: 0.35,
                    duration: 0.3,
                    type: "spring",
                    ease: "easeOut",
                  },
                }}
              ></motion.div>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                exit={{
                  x: 500,
                  transition: {
                    delay: 0,
                    duration: 0.2,
                    type: "spring",
                    ease: "easeOut",
                  },
                }}
                className={`fixed right-0 bottom-0 h-full w-[300px] opacity-0 transition-all  duration-300 ${
                  isMenuToggled && "opacity-100"
                } dark:bg-[#212529] `}
              >
                <div className="flex justify-end py-2 px-7">
                  <button
                    className="rounded-full p-3 dark:bg-darkSecondary"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    <HiOutlineXMark />
                  </button>
                </div>
                <div className="grid h-96 place-content-center gap-10">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    custom={{ delay: 0.3 }}
                    variants={variants}
                    className={`flex items-center gap-2 transition duration-500 ${
                      selectedPage == "inicio" && "text-darkSecondary"
                    }`}
                  >
                    <HiHome />
                    <Link
                      page="inicio"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    custom={{ delay: 0.5 }}
                    animate="visible"
                    variants={variants}
                    className={`flex items-center gap-2 transition duration-500 ${
                      selectedPage == "¿Quiénsoy?" && "text-darkSecondary"
                    }`}
                  >
                    <HiIdentification />
                    <Link
                      page="¿Quién soy?"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    custom={{ delay: 0.7 }}
                    animate="visible"
                    variants={variants}
                    className={`flex items-center gap-2 transition duration-500 ${
                      selectedPage == "skills" && "text-darkSecondary"
                    }`}
                  >
                    <HiCodeBracketSquare />
                    <Link
                      page="Habilidades"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    custom={{ delay: 0.9 }}
                    variants={variants}
                    className={`flex items-center gap-2 transition duration-500 ${
                      selectedPage == "projects" && "text-darkSecondary"
                    }`}
                  >
                    <HiBriefcase />
                    <Link
                      page="projects"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    custom={{ delay: 1.1 }}
                    animate="visible"
                    variants={variants}
                    className={`flex items-center gap-2 transition duration-500 ${
                      selectedPage == "contact" && "text-darkSecondary"
                    }`}
                  >
                    <HiEnvelope />
                    <Link
                      page="Contacto"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default NavBar;
