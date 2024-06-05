import React from "react";
import "./MediaLovesPlus.css";
import image from "../assests/images/media1.png";
import dots from "../assests/images/media2.png";
const MediaLovesPlus = () => {
  // const media = [
  //   /* Array of media articles */
  // ];

  return (
    <section className="media-loves-plus">
      <div className="media-heading">
        <h2>The media loves Plus</h2>
        <p>Top publications & news media talks about us</p>
      </div>
      <div className="media-article">
        <img src={image} alt="image1" />
      </div>
      <div className="media-dots">
        <img src={dots} alt="dot" />
      </div>
      {/* <div className="media-articles">
        {media.map((article, index) => (
          <div key={index} className="media-article">
            <img src={article.image} alt={`Article ${index + 1}`} />
            <p>{article.title}</p>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default MediaLovesPlus;
