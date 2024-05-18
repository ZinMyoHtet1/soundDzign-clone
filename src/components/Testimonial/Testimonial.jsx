import "./Testimonial.css";
import { person1, person2, person3 } from "../../assets";

const Testimonial = () => {
  return (
    <section id="testimonial" className="dark">
      <div className="wrapper">
        <h2>What our students say?</h2>
        <div className="content-container">
          <div className="testimonial">
            <img src={person1} alt="person1" />
            <div className="details">
              <div className="name">Adam</div>
              <div className="comment">Nice video class</div>
            </div>
          </div>
          <div className="testimonial">
            <img src={person2} alt="person2" />
            <div className="details">
              <div className="name">Emily Ren</div>
              <div className="comment">How awesome it is!</div>
            </div>
          </div>
          <div className="testimonial">
            <img src={person3} alt="person3" />
            <div className="details">
              <div className="name">Mary Pink</div>
              <div className="comment">
                I was very excited to join this class
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
