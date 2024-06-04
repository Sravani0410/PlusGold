import React from "react";
import "./MediaLovesPlus.css";
import image from "../assests/images/Group 1707481292.png";
import dots from "../assests/images/Group 1707481287.png";
const MediaLovesPlus = () => {
  const media = [
    /* Array of media articles */
  ];

  return (
    <section className="media-loves-plus">
      <div className="media-heading">
        <h2>The media loves Plus</h2>
        <p>Top publications & news media talks about us</p>
      </div>
      <div className="media-article">
        <img src={image} />
      </div>
      <div className="media-dots">
        <img src={dots} />
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
