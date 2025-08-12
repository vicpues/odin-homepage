import "./ProjectCard.css";
import GithubIcon from "../../assets/icons/github.svg?react";
import OpenIcon from "../../assets/icons/open-in-new.svg?react";
import { ResponsiveImage } from "@responsive-image/react";

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
        <ResponsiveImage src={thumbnail} alt="" />
        <div className="name-links-container">
          <h3 className="project-name">{name}</h3>
          <a
            className="project-link"
            target="_blank"
            href={sourceLink}
            aria-label={`Open ${name} on github`}
          >
            <GithubIcon className="project-icon github" />
          </a>
          <a
            className="project-link"
            target="_blank"
            href={liveLink}
            aria-label={`Open ${name} in a new tab`}
          >
            <OpenIcon className="project-icon open" />
          </a>
        </div>
        <p className="project-description">{description}</p>
      </article>
    </li>
  );
}
