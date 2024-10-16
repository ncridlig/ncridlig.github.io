import React, { Fragment } from "react";
// import { useScrollPosition } from "../../hooks/useScrollPosition";

class BlogBuilder {
  list = [];

  constructor({ title, image, description }) {
    this.title = title;
    this.image = image;
    this.description = description;
  }

  addImage = (imageSrc) => {
    this.list.push(
      <div key={this.list.length} style={{ textAlign: "center" }}>
        <img
          src={imageSrc}
          alt="Blog"
          style={{
            maxWidth: "100%",
            border: "4px solid lightblue", /* Blue border */
            borderRadius: "10px", /* Rounded corners */
            padding: "10px", /* Space between image and border */
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", /* Soft shadow */
            display: "block",
            marginLeft: "auto",
            marginRight: "auto", /* Center align the image */
          }}
        />
      </div>
    );
    return this;
  };
  
  addParagraph = (props) => {
    this.list.push(
      <p key={this.list.length} className="lead">
        {props}
      </p>
    );
    return this;
  };

  addHeading = (props) => {
    this.list.push(
      <Fragment key={this.list.length}>
        <h1 className="">{props}</h1>
        <hr />
      </Fragment>
    );
    return this;
  };

  addFooter = (date) => {
    this.list.push(
      <footer key={this.list.length} className="text-muted text-center mt-5">
        <p>Written on: {date}</p>
      </footer>
    );
    return this;
  };

  addVideo = (videoUrl) => {
    this.list.push(
      <div key={this.list.length} className="text-center">
        <iframe
          width="560"
          height="315"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    );
    return this;
  };

  getBlog = () => {
    return <div className="container-lg">{this.list}</div>;
  };
}

export { BlogBuilder };
