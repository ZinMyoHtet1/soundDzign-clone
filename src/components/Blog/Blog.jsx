import { musicThumnail } from "../../assets";
import "./Blog.css";

const Blog = () => {
  return (
    <section id="blog" className="pink">
      <div className="wrapper">
        <h2>Latest Posts</h2>
        <div className="content-container">
          <div className="post">
            <div className="tag">music</div>
            <img src={musicThumnail} alt="" className="post-img" />
            <div className="title">This is post title</div>
          </div>
          <div className="post">
            <div className="tag">music</div>
            <img src={musicThumnail} alt="" className="post-img" />
            <div className="title">This is post title</div>
          </div>
          <div className="post">
            <div className="tag">music</div>
            <img src={musicThumnail} alt="" className="post-img" />
            <div className="title">This is post title</div>
          </div>
        </div>
        <div className="btn-container">
          <a href="#" className="btn-all-post">
            All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
