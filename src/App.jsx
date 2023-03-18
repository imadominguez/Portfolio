import { useEffect, useState } from "react";

// ------------- Components --------------- //
import NavBar from "./pages/NavBar";
import DotGroup from "./pages/DotGroup";
import Landing from "./pages/Landing";
// -------------- Hooks ---------------- //
import useMediaQuery from "./hooks/useMediaQuery";
import "./App.css";

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
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-zinc-800">
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
    </div>
  );
}

export default App;
