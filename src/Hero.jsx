import CrabHeroImage from "./assets/images/crab-hero.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <figure>
        <img src={CrabHeroImage} alt="" />
        <figcaption>
          <h1>Vic Pues</h1>
        </figcaption>
      </figure>
    </section>
  );
}
