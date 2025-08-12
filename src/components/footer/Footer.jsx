import ContactLinks from "../contact-links/ContactLinks";
import { ResponsiveImage } from "@responsive-image/react";
import CrabFooterImage from "../../assets/images/crab-footer.jpg?aspect=0.6&responsive";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="contact">
        <h2>Contact me</h2>
        <p className="message">
          Please get in touch if you think our work could be mutually beneficial
        </p>
        <p>
          1234 Random Road
          <br />
          Random Town, California 12345
        </p>
        <address>
          <a href="tel:+NOT-A-REAL-PHONE">555-555-55555</a>
          <br />
          <a href="mailto:NOT-A-REAL-ADDRESS">vicpues.is.not.real@gmail.com</a>
        </address>
        <ContactLinks />
      </div>
      <ResponsiveImage src={CrabFooterImage} alt="" className="footer-image" />
    </footer>
  );
}
