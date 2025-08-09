import GithubIcon from "../../assets/icons/github.svg?react";
import LinkedinIcon from "../../assets/icons/linkedin.svg?react";
import TwitterIcon from "../../assets/icons/twitter.svg?react";
import "./ContactLinks.css";

export default function ContactLinks() {
  return (
    <div className="links-container">
      <a href="" className="contact-link" aria-label="Mock link to github">
        <GithubIcon className="link-icon github" />
      </a>
      <a href="" className="contact-link" aria-label="Mock link to linkedin">
        <LinkedinIcon className="link-icon linkedin" />
      </a>
      <a href="" className="contact-link" aria-label="Mock link to twitter">
        <TwitterIcon className="link-icon twitter" />
      </a>
    </div>
  );
}
