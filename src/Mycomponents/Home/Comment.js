import React from "react";
import "./Comment.css";
function Comment({ comments }) {
  return (
    <div className="comment" id="comments">
     {comments}
    </div>
  );
}

export default Comment;
