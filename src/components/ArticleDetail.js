import React from "react";
import AuthorCard from "./AuthorCard";
import articles from "./../data";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

export default function ArticleDetail({ match }) {
  console.log("hello " + match.params.title);
  const article = articles.find((a) => {
    return a.name === match.params.title;
  });
  const relatedArticles = articles.filter(
    (realtedArticle) => realtedArticle.title != article.title
  );

  // Smooth Scrolling to Top of the Page when a link is clicked.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <div style={{ width: "60%" }}>
          <h1>{article.title}</h1>
          <br />
          <hr />
          <AuthorCard article={article} />
          <hr />
          <br />
          <div style={{fontWeight: '600', lineHeight: 2, letterSpacing: '1px'}}>
            {article.content.map((content) => (
              <p>{content}</p>
            ))}
          </div>
        </div>
      </div>
      {/* Other Related Blog Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>Other Blogs:</h3>
        <div style={{ width: "60%" }}>
          {relatedArticles.map((realtedArticle, childKey) => (
            <div key={childKey}>
              <Link
                to={`/article/${realtedArticle.name}`}
                onClick={scrollToTop}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <ArticleCard article={realtedArticle} />
              </Link>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


