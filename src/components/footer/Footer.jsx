import GithubIcon from "../../assets/icons/github.svg?react";
import LinkedinIcon from "../../assets/icons/linkedin.svg?react";
import TwitterIcon from "../../assets/icons/twitter.svg?react";
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
        <div className="about-icons-container">
          <a className="about-link" href="">
            <GithubIcon className="about-icon github" />
          </a>
          <a className="about-link" href=""></a>
          <LinkedinIcon className="about-icon linkedin" />
          <a className="about-link" href="">
            <TwitterIcon className="about-icon twitter" />
          </a>
        </div>
      </div>
      <img src={CrabFooterImage} alt="" />
    </footer>
  );
}
