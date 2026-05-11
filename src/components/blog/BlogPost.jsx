import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { createBlogPosts } from "../../editable-stuff/blog";

const BlogPost = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const bloglist = createBlogPosts(t);
  const post = bloglist[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-lg mt-5">
      {post && (
        <div>
          <h1 className="display-2 text-center">{post.title}</h1>
          <img className="img-fluid mb-2" src={post.image} alt={post.title} style={{width: "auto", height: "315px", objectFit: "contain", display: "block", marginLeft: "auto", marginRight: "auto", border: "1px solid black", borderRadius: "2px", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)"}}/>
          {post.getBlog()}
        </div>
      )}
      {!post && <h1 className="display-1 text-center">{t('common:blog.notFound')}</h1>}
    </div>
  );
};

export default BlogPost;
