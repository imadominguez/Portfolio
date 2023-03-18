import AnchorLink from "react-anchor-link-smooth-scroll-v2";
function DotGroup({ selectedPage, setSelectedPage }) {
  const selectedStyles = `relative bg-white before:absolute before:w-2 before:h-2
  before:rounded-full before:boder-2 before:border-darkSecondary before:left-[50%] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-darkSecondary
   before:top-[50%]
  `;

  return (
    <div className="fixed top-[45%] right-7 flex flex-col gap-6">
      <AnchorLink
        className={`${
          selectedPage === "home" ? selectedStyles : "dark:bg-white"
        } h-4 w-4 rounded-full `}
        href="#home"
        onClick={() => setSelectedPage("home")}
      />
      <AnchorLink
        className={`${
          selectedPage === "Conoceme" ? selectedStyles : "dark:bg-white"
        } h-4 w-4 rounded-full `}
        href={`#Conoceme`}
        onClick={() => setSelectedPage("Conoceme")}
      />
      <AnchorLink
        className={`${
          selectedPage === "Habilidades" ? selectedStyles : "dark:bg-white"
        } h-4 w-4 rounded-full `}
        href={`#Habilidades`}
        onClick={() => setSelectedPage("Habilidades")}
      />
      <AnchorLink
        className={`${
          selectedPage === "Proyectos" ? selectedStyles : "dark:bg-white"
        } h-4 w-4 rounded-full `}
        href={`#Proyectos`}
        onClick={() => setSelectedPage("Proyectos")}
      />
      <AnchorLink
        className={`${
          selectedPage === "Contacto" ? selectedStyles : "dark:bg-white"
        } h-4 w-4 rounded-full `}
        href={`#Contacto`}
        onClick={() => setSelectedPage("Contacto")}
      />
    </div>
  );
}

export default DotGroup;
