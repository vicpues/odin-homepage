import "./MyWork.css";
import ProjectCard from "../project-card/ProjectCard";
import Octopus1 from "../../assets/images/octopus-1.jpg?aspect=1.7&responsive";
import Octopus2 from "../../assets/images/octopus-2.jpg?aspect=1.7&responsive";
import Octopus3 from "../../assets/images/octopus-3.jpg?aspect=1.7&responsive";
import Octopus4 from "../../assets/images/octopus-4.jpg?aspect=1.7&responsive";
import Octopus5 from "../../assets/images/octopus-5.jpg?aspect=1.7&responsive";
import Octopus6 from "../../assets/images/octopus-6.jpg?aspect=1.7&responsive";

export default function MyWork() {
  return (
    <section id="my-work">
      <h2>My Work</h2>
      <ul className="works-container">
        {projecInfo.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </ul>
    </section>
  );
}

const projecInfo = [
  {
    name: "Project name",
    description:
      "Short description of your project. Just a couple lines will do",
    thumbnail: Octopus1,
    sourceLink: "",
    liveLink: "",
  },
  {
    name: "Project name",
    description:
      "Short description of your project. Just a couple lines will do",
    thumbnail: Octopus2,
    sourceLink: "",
    liveLink: "",
  },
  {
    name: "Project name",
    description:
      "Short description of your project. Just a couple lines will do",
    thumbnail: Octopus3,
    sourceLink: "",
    liveLink: "",
  },
  {
    name: "Project name",
    description:
      "Short description of your project. Just a couple lines will do",
    thumbnail: Octopus4,
    sourceLink: "",
    liveLink: "",
  },
  {
    name: "Project name",
    description:
      "Short description of your project. Just a couple lines will do",
    thumbnail: Octopus5,
    sourceLink: "",
    liveLink: "",
  },
  {
    name: "Project name",
    description:
      "Short description of your project. Just a couple lines will do",
    thumbnail: Octopus6,
    sourceLink: "",
    liveLink: "",
  },
];
