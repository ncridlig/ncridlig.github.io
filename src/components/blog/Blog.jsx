import React from "react";
import { BlogBuilder } from "./BlogBuilder";
import bloglist from "../../editable-stuff/blog";
import { Link } from "react-router-dom";
const Blog = (props) => {
  return (
    <div id="blog" className="container-lg mt-5 bg-blue">
      <h2 className="display-4 pb-5 text-center">Blog</h2>
      {bloglist.map((value, index) => {
        return (
          <BlogCard
            key={index}
            title={value.title}
            description={value.description}
            image={value.image}
            index={index}
          />
        );
      })}
    </div>
  );
};

const BlogCard = ({ index, title, image, description }) => {
  return (
    <div className="m-5">
      <div className="">
        <div className="row">
          <div className="col-4 col-lg-12">
            <img src={image} className="card-img" alt="..." style={{ width: "100px", height: "100px", objectFit: "cover", border: "1px solid black", borderRadius: "5px", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }} />
          </div>
          <div className="col-8 col-lg-12">
            <div className="">
              <h1 className="">{title}</h1>
              <p className="lead">{description}</p>
              <Link to={`${process.env.PUBLIC_URL}/blog/${index}`}>
                Read more...{" "}
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export { Blog, BlogBuilder };
