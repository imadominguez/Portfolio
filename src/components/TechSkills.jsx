import Redux from "../assets/logos/Redux";
import Html from "../assets/logos/Html";
import Css from "../assets/logos/Css";
import Node from "../assets/logos/Node";
import Express from "../assets/logos/Express";
import PostgreSQL from "../assets/logos/PostgreSQL";
import Sql from "../assets/logos/Sql";
import Javascript from "../assets/logos/Javascript";
import React from "../assets/logos/React";

export const TechSkills = () => {
  return (
    <article className="grid w-full grid-cols-2  gap-x-5 gap-y-2 md:grid-cols-3">
      {tecnology.map((tec) => (
        <div
          key={tec.name}
          className="flex items-center justify-center  rounded-lg bg-black/80 p-4 dark:bg-black/50"
        >
          {tec.svg}
          {tec.tecnology}
        </div>
      ))}
    </article>
  );
};

const tecnology = [
  {
    tecnology: <span className="text-html">HTML</span>,
    svg: <Html width={"54px"} height={"54px"} />,
    name: "HTML",
  },
  {
    tecnology: <span className="text-css">CSS 3</span>,
    svg: <Css width={"54px"} height={"54px"} />,
    name: "CSS 3",
  },
  {
    tecnology: <span className="text-javascript">JavaScript</span>,
    svg: <Javascript width={"54px"} height={"54px"} />,
    name: "JavaScript",
  },
  {
    tecnology: <span className="text-react">React</span>,
    svg: <React width={"54px"} height={"54px"} />,
    name: "React",
  },
  {
    tecnology: <span className="text-redux">Redux</span>,
    svg: <Redux width={"54px"} height={"54px"} />,
    name: "Redux",
  },
  {
    tecnology: <span className="text-node">Node</span>,
    svg: <Node width={"54px"} height={"54px"} />,
    name: "Node",
  },
  {
    tecnology: <span className="text-white">Express</span>,
    svg: <Express />,
    name: "Express",
  },
  {
    tecnology: <span className="text-postgre">PostgreSQL</span>,
    svg: <PostgreSQL width={"54px"} height={"54px"} />,
    name: "PostgreSQL",
  },
  {
    tecnology: <span className="text-sql">SQL</span>,
    svg: <Sql width={"54px"} height={"54px"} />,
    name: "SQL",
  },
];
