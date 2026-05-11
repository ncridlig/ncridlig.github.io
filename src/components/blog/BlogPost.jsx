import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { createBlogPost } from "../../editable-stuff/blog";

const POST_COUNT = 4;

const BlogPost = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const idx = Number(id);
  const lastIndex = POST_COUNT - 1;

  const post = useMemo(() => createBlogPost(idx, t), [idx, t]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [idx]);

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
              {idx > 0 && (
                <Link
                  to={`${process.env.PUBLIC_URL}/blog/${idx - 1}`}
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
              {idx < lastIndex && (
                <Link
                  to={`${process.env.PUBLIC_URL}/blog/${idx + 1}`}
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
