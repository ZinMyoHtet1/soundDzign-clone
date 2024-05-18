import "./Navbar.css";
import { burger, closeIcon, logo } from "../../assets";
import { useState } from "react";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleToggle = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <>
      <nav>
        <a className="logo" href="#">
          <img src={logo} alt="logo" />
        </a>
        <ul className="menu">
          <li className="menu-item">
            <a href="#topics">Course Details</a>
          </li>
          <li className="menu-item">
            <a href="#info">About</a>
          </li>
          <li className="menu-item">
            <a href="#blog">Blog</a>
          </li>
          <li className="menu-item">
            <a href="#testimonial">Testimonials</a>
          </li>
        </ul>
        <div className="mobile-menu-btn" onClick={handleToggle}>
          <img src={burger} alt="menuIcon" />
        </div>
      </nav>
      <div className={`mobile-menu-container ${openMenu ? "open" : ""}`}>
        <ul className="menu">
          <li className="menu-item">
            <a href="#topics" onClick={() => setOpenMenu(false)}>
              Course Details
            </a>
          </li>
          <li className="menu-item">
            <a href="#info" onClick={() => setOpenMenu(false)}>
              About
            </a>
          </li>
          <li className="menu-item">
            <a href="#blog" onClick={() => setOpenMenu(false)}>
              Blog
            </a>
          </li>
          <li className="menu-item">
            <a href="#testimonial" onClick={() => setOpenMenu(false)}>
              Testimonials
            </a>
          </li>
        </ul>
        <div className="menu-close-btn" onClick={() => setOpenMenu(false)}>
          <img src={closeIcon} alt="close-tag" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
