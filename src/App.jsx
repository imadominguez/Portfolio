import { useEffect, useState } from "react";

// ------------- Components --------------- //
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import AboutMe from "./pages/AboutMe";
// -------------- Hooks ---------------- //

import "./App.css";
import LineGradient from "./components/LineGradient";
import MySkills from "./pages/MySkills";

function App() {
  const [selectedPage, setSelectedPage] = useState("inicio");

  const [isTopOfPage, setisTopOfPage] = useState(true);
  // const isAboveMediumScreens = useMediaQuery("(min-width: 920px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setisTopOfPage(true);
      if (window.scrollY !== 0) setisTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className=" flex h-screen flex-col items-center justify-center bg-[#E6E6E6]  text-black dark:bg-zinc-800 dark:text-slate-200">
      <div className="relative h-screen w-full snap-y  snap-mandatory overflow-auto ">
        <NavBar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <div className="mx-auto w-5/6 snap-center md:w-full">
          <Landing />

          <LineGradient />
        </div>
        <div className="mx-auto w-5/6 snap-center md:w-full">
          <AboutMe />
          <LineGradient />
        </div>
        <div className="mx-auto w-5/6 snap-center md:w-full">
          <MySkills />
          <LineGradient />
        </div>
      </div>

      <a
        href="#inicio"
        className="absolute right-10 bottom-10 animate-bounce rounded-full border-2 border-[#AC945F] px-4 py-2"
      >
        ⬆
      </a>
      <div className="absolute right-0 left-0 bottom-0 z-50 pb-2  pt-3 text-center  text-xs font-bold tracking-widest sm:top-0 sm:bottom-auto">
        <span className="rounded-full bg-[#AC945F] px-4 py-2">
          🚧 Este portfolio se encuentra en desarrollo 🚧
        </span>
      </div>
    </div>
  );
}

export default App;
