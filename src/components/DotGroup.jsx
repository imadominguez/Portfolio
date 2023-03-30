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
          selectedPage === "inicio" ? selectedStyles : "dark:bg-white"
        } h-4 w-4 rounded-full `}
        href="#inicio"
        onClick={() => setSelectedPage("inicio")}
      />
      <AnchorLink
        className={`${
          selectedPage === "sobremi" ? selectedStyles : "dark:bg-white"
        } h-4 w-4 rounded-full `}
        href={`#sobremi`}
        onClick={() => setSelectedPage("sobremi")}
      />
      <AnchorLink
        className={`${
          selectedPage === "habilidades" ? selectedStyles : "dark:bg-white"
        } h-4 w-4 rounded-full `}
        href={`#habilidades`}
        onClick={() => setSelectedPage("habilidades")}
      />
      <AnchorLink
        className={`${
          selectedPage === "proyectos" ? selectedStyles : "dark:bg-white"
        } h-4 w-4 rounded-full `}
        href={`#proyectos`}
        onClick={() => setSelectedPage("proyectos")}
      />
      <AnchorLink
        className={`${
          selectedPage === "contacto" ? selectedStyles : "dark:bg-white"
        } h-4 w-4 rounded-full `}
        href={`#contacto`}
        onClick={() => setSelectedPage("contacto")}
      />
    </div>
  );
}

export default DotGroup;
