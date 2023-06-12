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
    <div className=" ">
      <div className="relative h-screen w-full snap-y snap-mandatory  overflow-auto scroll-smooth bg-[#E6E6E6]  text-black dark:bg-zinc-800 dark:text-slate-200 ">
        <NavBar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <div className="mx-auto grid min-h-screen w-5/6 snap-center place-content-center md:w-full">
          <Landing />
        </div>
        <div className="mx-auto grid min-h-screen w-5/6 snap-center place-content-center md:w-full">
          <AboutMe />
        </div>
        <div className="mx-auto grid min-h-screen w-5/6 snap-center place-content-center md:w-full">
          <MySkills />
        </div>
        <div className="mx-auto grid min-h-screen  w-5/6  snap-center place-content-center ">
          <ul className="flex snap-x snap-mandatory gap-2 overflow-x-auto">
            <li className="h-96 w-96 shrink-0 snap-center bg-red-300"></li>
            <li className="h-96 w-96 shrink-0 snap-center bg-gray-500"></li>

            <li className="h-96 w-96 shrink-0 snap-center bg-blue-400"></li>
            <li className="h-96 w-96 shrink-0 snap-center bg-yellow-400"></li>
            <li className="h-96 w-96 shrink-0 snap-center bg-orange-500"></li>
            <li className="h-96 w-96 shrink-0 snap-center bg-black"></li>
          </ul>
        </div>
      </div>
      <a
        href="#inicio"
        className="right-10 bottom-10 hidden animate-bounce rounded-full border-2 border-[#AC945F] px-4 py-2 lg:absolute"
      >
        ⬆
      </a>
      <div className="absolute  left-5 top-2 z-50 pb-2  pt-3 text-center  text-xs font-bold tracking-widest sm:top-0 sm:bottom-auto">
        <span className="rounded-full bg-[#AC945F] px-4 py-2">🚧 En desarrollo 🚧</span>
      </div>
    </div>
  );
}

export default App;
