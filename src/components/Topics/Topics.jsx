import { topicDawImg, yellowCorner } from "../../assets";
import "./Topics.css";

const Topics = () => {
  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What will you learn?</h2>
        <div className="topic-contents">
          <ul>
            <li>What are frequencies?</li>
            <li>Using Daw</li>
            <li>Vocal Processing</li>
            <li>Mixing</li>
            <li>Mixing Console</li>
            <li>Mastering</li>
          </ul>
          <div className="topic-image">
            <img src={topicDawImg} alt="topc-image" />
          </div>
        </div>
        <div className="yellow-corner">
          <img src={yellowCorner} alt="yellow-corner" />
        </div>
      </div>
    </section>
  );
};

export default Topics;
