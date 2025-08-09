import "./MyWork.css";
import ProjectCard from "../project-card/ProjectCard";

export default function MyWork() {
  return (
    <section id="my-work">
      <h2>My Work</h2>
      <ul className="works-container">
        {projecInfo.map((project) => (
          <ProjectCard {...project} />
        ))}
      </ul>
    </section>
  );
}

const projecInfo = [
  {
    name: "Project name",
    description:
      "Short description of your project. Just a couple lines will do",
    thumbnail: "",
    sourceLink: "",
    liveLink: "",
  },
  {
    name: "Project name",
    description:
      "Short description of your project. Just a couple lines will do",
    thumbnail: "",
    sourceLink: "",
    liveLink: "",
  },
  {
    name: "Project name",
    description:
      "Short description of your project. Just a couple lines will do",
    thumbnail: "",
    sourceLink: "",
    liveLink: "",
  },
  {
    name: "Project name",
    description:
      "Short description of your project. Just a couple lines will do",
    thumbnail: "",
    sourceLink: "",
    liveLink: "",
  },
  {
    name: "Project name",
    description:
      "Short description of your project. Just a couple lines will do",
    thumbnail: "",
    sourceLink: "",
    liveLink: "",
  },
  {
    name: "Project name",
    description:
      "Short description of your project. Just a couple lines will do",
    thumbnail: "",
    sourceLink: "",
    liveLink: "",
  },
];
