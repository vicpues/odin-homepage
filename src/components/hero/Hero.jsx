import "./Hero.css";
import CrabHeroImage from "../../assets/images/crab-hero.jpg";
import GithubIcon from "../../assets/icons/github.svg?react";
import LinkedinIcon from "../../assets/icons/linkedin.svg?react";
import TwitterIcon from "../../assets/icons/twitter.svg?react";

export default function Hero() {
  return (
    <section className="hero">
      <figure>
        <img src={CrabHeroImage} alt="" />
        <figcaption>
          <h1>
            Vic
            <br />
            Pues
          </h1>
        </figcaption>
      </figure>
      <h2>About me</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione at
        cupiditate aut quisquam nam. Libero illo dignissimos, consequatur
        laborum quasi sed eius voluptates, veritatis odit deserunt aperiam
        distinctio velit.
      </p>
      <div className="about-icons-container">
        <a href="" className="about-icon github">
          <GithubIcon />
        </a>
        <a href="" className="about-icon linkedin">
          <LinkedinIcon />
        </a>
        <a href="" className="about-icon twitter">
          <TwitterIcon />
        </a>
      </div>
    </section>
  );
}
