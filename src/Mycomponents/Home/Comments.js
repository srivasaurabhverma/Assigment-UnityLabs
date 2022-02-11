import { render } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import "./Comments.css";
import ReactDOM from "react-dom";
function Comments() {
  const [data, setData] = useState({ children: [] });
  let id = localStorage.getItem("Id");

  useEffect(async () => {
    const result = await axios(`https://hn.algolia.com/api/v1/items/${id}`);

    localStorage.setItem("points", result.data.points);
    setData(result.data);
  }, []);

  let check = 0;
  if (data.children.length == 0) {
    let comments__ = document.getElementById("comments__");
    
    console.log(comments__);
    check = 1;
  }

  let title = localStorage.getItem("title");
  let points = localStorage.getItem("points");

  let comment = "Here Are All Comments";

  if (check == 1) {
    comment = "No comments";
  }

  if (check == 1) {
    points = "Updating..";
  }

  return (
    <div className="comments">
      <h1 className="title_">{title}</h1>
      <h5 className="points"> Points: {points}</h5>
      <h4 className="comment_title" id="comments__">
        {comment}
      </h4>
      {data.children.map((value) => {
        var parser = new DOMParser();
        var doc = parser.parseFromString(value.text, "text/html");

        if (doc.body.textContent === "null") {
          console.log(1);
        } else if (doc.body.textContent != "") {
          render(<Comment comments={doc.body.textContent} />);
        }
      })}
    </div>
  );
}

export default Comments;
