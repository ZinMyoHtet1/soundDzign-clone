import { redCorner, studentIcon, videoIcon } from "../../assets";
import "./Info.css";

const Info = () => {
  return (
    <section id="info" className="dark">
      <div className="wrapper">
        <div className="content-container">
          <div className="content">
            <img src={studentIcon} alt="student-icon" />
            <div className="amount">23000+</div>
            <div className="type">student</div>
          </div>

          <div className="content">
            <img src={videoIcon} alt="video-icon" />
            <div className="amount">26hours</div>
            <div className="type">Video Contents</div>
          </div>
        </div>
        <img className="redCorner" src={redCorner} alt="red-corner" />
      </div>
    </section>
  );
};

export default Info;
