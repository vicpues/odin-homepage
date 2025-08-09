import "./ProjectCard.css";
import GithubIcon from "../../assets/icons/github.svg?react";
import OpenIcon from "../../assets/icons/open-in-new.svg?react";

export default function ProjectCard({
  name,
  description,
  thumbnail,
  sourceLink,
  liveLink,
}) {
  return (
    <li className="card-container">
      <article className="project-card">
        <img src="" alt="" />
        <div className="name-links-container">
          <h3 className="project-name">{name}</h3>
          <a className="project-link" href={sourceLink}>
            <GithubIcon className="project-icon github" />
          </a>
          <a className="project-link" href={liveLink}>
            <OpenIcon className="project-icon open" />
          </a>
        </div>
        <p className="project-description">{description}</p>
      </article>
    </li>
  );
}
