import ContactLinks from "../contact-links/ContactLinks";
import CrabFooterImage from "../../assets/images/crab-footer.jpg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="contact">
        <h2>Contact me</h2>
        <p>
          Please get in touch if you think our work could be mutually beneficial
        </p>
        <p>
          1234 Random Road
          <br />
          Random Town, California 12345
        </p>
        <p>
          555-555-55555
          <br />
          vicpues.is.not.real@gmail.com
        </p>
        <ContactLinks />
      </div>
      <img src={CrabFooterImage} alt="" />
    </footer>
  );
}
