import "./Hero.css";
import { ResponsiveImage } from "@responsive-image/react";
import CrabHeroImage from "../../assets/images/crab-hero.jpg?aspect=0.55&responsive";
import ContactLinks from "../contact-links/ContactLinks";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">
        <figure>
          <ResponsiveImage
            src={CrabHeroImage}
            alt=""
            className="hero-image"
            loading="eager"
          />
          <figcaption>
            <h1>Vic Pues</h1>
          </figcaption>
        </figure>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione
          at cupiditate aut quisquam nam. Libero illo dignissimos, consequatur
          laborum quasi sed eius voluptates, veritatis odit deserunt aperiam
          distinctio velit.
        </p>
        <ContactLinks />
      </div>
    </section>
  );
}
