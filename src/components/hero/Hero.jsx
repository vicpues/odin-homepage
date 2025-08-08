import "./Hero.css";
import CrabHeroImage from "../../assets/images/crab-hero.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <figure>
        <img src={CrabHeroImage} alt="" />
        <figcaption>
          <h1>Vic Pues</h1>
        </figcaption>
      </figure>
      <h2>About me</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione at
        cupiditate aut quisquam nam. Libero illo dignissimos, consequatur
        laborum quasi sed eius voluptates, veritatis odit deserunt aperiam
        distinctio velit.
      </p>
    </section>
  );
}
