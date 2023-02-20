import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Routes, Route, NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [content, setContent] = useState();
  let foodName = "";
  let msg = "";
  let food = "";
  async function request(props) {
    setContent("불러오는 중");
    let response = await axios.get("http://localhost:8000" + props);
    // console.log(response.data);
    if (props === "/") {
      let newlist = JSON.stringify(response.data);
      console.log(newlist);
      let obj = JSON.parse(newlist);
      console.log(obj);
      console.log(obj["foods"]);
      let resultlist = obj["foods"];
      const result = resultlist.map((resultlist) => (
        <div>
          <p key={resultlist.foodName}>
            {resultlist.foodName}: {resultlist.description}
          </p>
        </div>
      ));
      console.log(result);
      setContent(result);
    } else if (props === "/total") {
      let newtotal = response.data;
      setContent(newtotal["총 갯수"]);
    }
  }

  function save() {
    setContent(
      <>
        <p>
          <input
            type="text"
            placeholder="음식이름을 입력하세요"
            onChange={(event) => {
              foodName = event.target.value;
            }}
          ></input>
        </p>
        <div>
          <textarea
            placeholder="내용을 입력하세요"
            onChange={(event) => {
              msg = event.target.value;
            }}
          ></textarea>
        </div>

        <div>
          <button
            onClick={(event) => {
              event.preventDefault();

              console.log(foodName, msg);
              const data = {
                foodName: foodName,
                msg: msg,
              };

              axios
                .post("http://localhost:8000/save", JSON.stringify(data), {
                  headers: {
                    "Content-Type": `application/json`,
                  },
                })
                .then((res) => {
                  console.log(res);
                });
            }}
          >
            저장
          </button>
        </div>
      </>
    );
  }
  function delete_file() {
    setContent(
      <>
        <p>
          <input
            type="text"
            placeholder="삭제하고 싶은 음식이름"
            onChange={(event) => {
              food = event.target.value;
            }}
          ></input>
        </p>
        <button
          onClick={(event) => {
            event.preventDefault();

            console.log(foodName, msg);
            const data = {
              food: food,
            };

            axios
              .post("http://localhost:8000/delete", JSON.stringify(data), {
                headers: {
                  "Content-Type": `application/json`,
                },
              })
              .then((res) => {
                console.log(res);
              });
          }}
        >
          삭제
        </button>
      </>
    );
  }
  return (
    <div className="App">
      <h1>TEST</h1>
      <h2>{content}</h2>
      <button onClick={() => request("/")}>목록</button>
      <button onClick={save}>저장</button>
      <button onClick={() => request("/total")}>개수</button>
      <button onClick={delete_file}>삭제</button>
    </div>
  );
}

export default App;
