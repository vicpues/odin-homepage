import "./ProjectCard.css";

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
          <a className="project-link" href={sourceLink}></a>
          <a className="project-link" href={liveLink}></a>
        </div>
        <p className="project-description">{description}</p>
      </article>
    </li>
  );
}
