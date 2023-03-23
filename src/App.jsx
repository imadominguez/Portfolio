import { useEffect, useState } from "react";

// ------------- Components --------------- //
import NavBar from "./pages/NavBar";
import DotGroup from "./pages/DotGroup";
import Landing from "./pages/Landing";
import AboutMe from "./pages/AboutMe";
// -------------- Hooks ---------------- //
import useMediaQuery from "./hooks/useMediaQuery";
import "./App.css";
import LineGradient from "./components/LineGradient";
import MySkills from "./pages/MySkills";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  const [isTopOfPage, setisTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 920px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setisTopOfPage(true);
      if (window.scrollY !== 0) setisTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className=" flex min-h-screen flex-col items-center justify-center bg-[#E6E6E6] text-black dark:bg-zinc-800 dark:text-slate-200">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="mx-auto w-5/6 md:w-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
      </div>
      <Landing />
      <LineGradient />
      <div className="mx-auto w-5/6 md:w-full">
        <AboutMe />
      </div>
      <div className="mx-auto w-5/6 md:w-full">
        <MySkills />
      </div>
    </div>
  );
}

export default App;
