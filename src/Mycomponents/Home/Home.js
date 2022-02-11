import React, { useEffect } from "react";
import Topics from "./Topics";
import Topic from "./Topic";

import "./Home.css";
import { render } from "@testing-library/react";
let Data = "";
function Home() {
  return (
    <div className="Home">
      <div>
        <h3 className="text">Search a Topic</h3>
      </div>
      <div className="input_bar">
        <input
          type="text"
          className="search"
          id="input_text"
          placeholder="Enter Someting..."
        />
        <button
          className="search_btn"
          onClick={() => {
            let inpt = document.getElementById("input_text");
            let datas = inpt.value;
            let url = `http://hn.algolia.com/api/v1/search?query=${datas}`;
            if (url == "") {
              console.log("Opps We are not able to find the desired result");
            } else {
              fetch(url)
                .then((response) => response.json())
                .then((data) => {
                  let arr = data.hits;
                  arr.map((value) => {
                    if (value.title != null && value.title != "") {
                      render(
                        <Topic
                          author={value.author}
                          title={value.title}
                          id={value.objectID}
                          descreption={value.created_at}
                        />
                      );
                    }
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            }
            inpt.value = "";
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Home;
