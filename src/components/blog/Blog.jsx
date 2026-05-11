import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { createBlogPosts } from "../../editable-stuff/blog";
import { Link } from "react-router-dom";

const Blog = () => {
  const { t } = useTranslation();
  const bloglist = useMemo(() => createBlogPosts(t), [t]);

  return (
    <div id="blog" className="container-lg mt-5 bg-blue">
      <h2 className="display-4 pb-5 text-center">{t('common:blog.heading')}</h2>
      {bloglist.map((value, index) => (
        <BlogCard
          key={value.title}
          title={value.title}
          description={value.description}
          image={value.image}
          index={index}
        />
      ))}
    </div>
  );
};

const BlogCard = ({ index, title, image, description }) => {
  const { t } = useTranslation();

  return (
    <div className="m-5">
      <div className="row">
        <div className="col-4 col-lg-12">
          <img src={image} className="img-fluid rounded border border-dark border-1 shadow" alt={title} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
        </div>
        <div className="col-8 col-lg-12">
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <Link to={`${process.env.PUBLIC_URL}/blog/${index}`}>
            {t('common:blog.readMore')}{" "}
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export { Blog };
