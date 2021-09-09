import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        backgroundColor: "#000",
        display: "grid",
        gridTemplateColumns: "10% 90%",
        alignContent: "center",
        position: 'sticky',
        top: 0
      }}
    >
      <Link to="/" style={{textDecoration: 'none'}}>
        <div
          style={{
            color: "#fff",
            textAlign: "center",
            textDecoration: "none ",
          }}
        >
          Lucid Blog
        </div>
      </Link>
      <div style={{ display: "flex", justifyContent: "center"}}>
        <div
          style={{
            backgroundColor: "#fff",
            width: "300px",
            maxHeight: "20px",
            padding: "5px",
            display: "flex",
            alignItems: "center",
            borderRadius: "6px",
          }}
        >
          <BiSearchAlt />
          <input
            type="text"
            placeholder="Search"
            style={{
              border: "none",
              outline: "none",
              padding: "3px",
              marginLeft: "2px",
              width: "90%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
