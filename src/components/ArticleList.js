import React from "react";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";

export default function ArticleList({ articles }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "50%" }}>
        {articles.map((article, childKey) => {
          return (
            <div key={childKey}>
              <Link
                key={childKey}
                to={`/article/${article.name}`}
                style={{
                  textDecoration: "none",
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                <ArticleCard article={article} />
              </Link>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
