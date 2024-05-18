import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Navbar />
        <div className="cta">
          <p className="course-name">Sound Design Masterclass</p>
          <h1 className="hero-body">Learn Art of Sound Design</h1>
          <a href="#" className="btn-demo">
            Demo Lesson
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
