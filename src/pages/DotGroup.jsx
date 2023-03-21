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
          selectedPage === "aboutme" ? selectedStyles : "dark:bg-white"
        } h-4 w-4 rounded-full `}
        href={`#aboutme`}
        onClick={() => setSelectedPage("aboutme")}
      />
      <AnchorLink
        className={`${
          selectedPage === "skills" ? selectedStyles : "dark:bg-white"
        } h-4 w-4 rounded-full `}
        href={`#skilss`}
        onClick={() => setSelectedPage("skills")}
      />
      <AnchorLink
        className={`${
          selectedPage === "projects" ? selectedStyles : "dark:bg-white"
        } h-4 w-4 rounded-full `}
        href={`#projects`}
        onClick={() => setSelectedPage("projects")}
      />
      <AnchorLink
        className={`${
          selectedPage === "contact" ? selectedStyles : "dark:bg-white"
        } h-4 w-4 rounded-full `}
        href={`#contact`}
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
}

export default DotGroup;
