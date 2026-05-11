import React, { Fragment } from "react";

class BlogBuilder {
  list = [];

  constructor({ title, image, description }) {
    this.title = title;
    this.image = image;
    this.description = description;
  }

  addImage = (id, imageSrc) => {
    this.list.push(
      <div key={id} className="text-center my-4">
        <img
          src={imageSrc}
          alt="Blog"
          className="img-fluid rounded border border-info border-3 p-2 shadow-sm"
          style={{ maxWidth: "720px" }}
        />
      </div>
    );
    return this;
  };

  addParagraph = (id, text) => {
    this.list.push(
      <p key={id} className="lead">
        {text}
      </p>
    );
    return this;
  };

  addHeading = (id, text) => {
    this.list.push(
      <Fragment key={id}>
        <h1>{text}</h1>
        <hr />
      </Fragment>
    );
    return this;
  };

  addFooter = (id, date) => {
    this.list.push(
      <footer key={id} className="text-muted text-center mt-5">
        <p>Written on: {date}</p>
      </footer>
    );
    return this;
  };

  addLinkParagraph = (id, text, linkText, linkUrl) => {
    this.list.push(
      <p key={id} className="lead">
        {text}{" "}
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      </p>
    );
    return this;
  };

  addVideo = (id, videoUrl) => {
    this.list.push(
      <div key={id} className="ratio ratio-16x9 my-4" style={{ maxWidth: "720px", marginLeft: "auto", marginRight: "auto" }}>
        <iframe
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
