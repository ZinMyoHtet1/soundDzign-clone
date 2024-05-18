import { socialIcons } from "../../assets";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer" className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="link">
            <div className="app-logo">
              Sound<span className="red">DZign</span>
            </div>
            <img src={socialIcons} alt="social-icons" />
            <div className="copyright">
              This website is designed by GTcoding @copyright 2023
            </div>
          </div>
          <div className="link">
            <div className="title">Quick Links</div>
            <div className="sources">
              <a href="#">Blog</a>
              <a href="#">Privacy</a>
            </div>
          </div>
          <div className="link">
            <div className="title">Contact Us</div>
            <div className="sources">
              <a href="#">jys@gmail.com</a>
              <a href="#">+9594949494</a>
            </div>
          </div>
        </div>
        <div className="copyright last">
          This website is designed by GTcoding @copyright 2023
        </div>
      </div>
    </section>
  );
};

export default Footer;
