import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import "./Topic.css";
function Topic({ title, descreption, author, id }) {
  return (
    <div className="Topic" id="topicdone">
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="descreption">
        <a
          className="links"
          href="/comments"
          onClick={() => {
            localStorage.setItem("Id", id);
            localStorage.setItem("title", title);
          }}
        >
          To Khow more click here
        </a>
      </div>
      <div className="author">
      <span className="athr">Author</span> : {author}
      </div>
    </div>
  );
}

export default Topic;
