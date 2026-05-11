import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { createBlogPosts } from "../../editable-stuff/blog";

const BlogPost = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const bloglist = createBlogPosts(t);
  const post = bloglist[id];
  const lastIndex = bloglist.length - 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="container-lg mt-5">
      {post && (
        <div>
          <h1 className="display-2 text-center">{post.title}</h1>
          <img
            className="img-fluid mb-4 d-block mx-auto rounded border border-dark border-1 shadow"
            src={post.image}
            alt={post.title}
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
          {post.getBlog()}

          <nav className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top">
            <div>
              {id > 0 && (
                <Link
                  to={`${process.env.PUBLIC_URL}/blog/${Number(id) - 1}`}
                  className="btn btn-outline-primary"
                >
                  &larr; {t("common:blog.previous")}
                </Link>
              )}
            </div>
            <Link to={`${process.env.PUBLIC_URL}/blog`} className="btn btn-outline-secondary">
              {t("common:blog.allPosts")}
            </Link>
            <div>
              {id < lastIndex && (
                <Link
                  to={`${process.env.PUBLIC_URL}/blog/${Number(id) + 1}`}
                  className="btn btn-outline-primary"
                >
                  {t("common:blog.next")} &rarr;
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
      {!post && <h1 className="display-1 text-center">{t("common:blog.notFound")}</h1>}
    </div>
  );
};

export default BlogPost;
