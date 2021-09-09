import { getFormattedDate } from "../functions/getFormattedDate";

export default function AuthorCard({ article }) {
  // console.log(article);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          display: "inline-block",
          marginRight: "8px",
          borderRadius: "3px",
        }}
      >
        <img
          src={article.image}
          alt="#"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
      <div style={{ display: "inline-block" }}>
        <p style={{ fontSize: "23px", fontWeight: "bold", margin: "0 0" }}>
          Dipesh Shrestha
        </p>
        <pre style={{ display: 'inline-block',color: "rgba(128,128,128,0.6)", margin: '0 0'}}>
          Published on{" "}
          <pre style={{  display: 'inline-block',color: "rgba(128,128,128,0.9)" , margin: '0 0'}}>
            {getFormattedDate(article.date)}
          </pre>
        </pre>
      </div>
    </div>
  );
}
