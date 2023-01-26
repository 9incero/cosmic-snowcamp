import "./App.css";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const datalist = [];

function SearchName(props) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const foodname = event.target.foodname.value;
        props.onCreate(foodname);
      }}
    >
      <input type="text" name="foodname" placeholder="검색어를 입력하세요" />
      <input type="submit" value="검색"></input>
    </form>
  );
}

function SearchTable(props) {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>상품명</th>
          <th>종류</th>
          <th>생산업체</th>
        </tr>
      </thead>
      <tbody>{props.resultlist}</tbody>
    </Table>
  );
}
function App() {
  let table = null;
  const [foodname, SetFoodname] = useState("");
  const [mode, setMode] = useState("");

  useEffect(() => {
    console.log(foodname);
    if (foodname !== "") {
      //이전에 검색하지 않았을때만(추가해야함)
      fetch(
        "https://openapi.foodsafetykorea.go.kr/api/bfd83e6cd7b94b279eaa/I2790/json/1/5/DESC_KOR=" +
          foodname
      )
        //then을 await으로 바꿔야함
        .then((response) => response.json())
        .then((data) => {
          let tmp = [];
          for (let i = 0; i < 5; i++) {
            tmp.push({
              name: data.I2790.row[i].DESC_KOR,
              group: data.I2790.row[i].GROUP_NAME,
              maker: data.I2790.row[i].MAKER_NAME,
            });
          }
          datalist.push({ key: foodname, context: tmp });
          console.log(datalist);
          setMode("VIEW_TABLE");
        });
    }
  }, [foodname]);

  if (mode === "VIEW_TABLE") {
    let results = null;
    for (let i = 0; i < datalist.length; i++) {
      if (datalist[i].key === foodname) {
        console.log(datalist[i].key);
        console.log("hh", foodname);

        results = datalist[i].context.map((result) => (
          <tr>
            <td>{result.name}</td>
            <td>{result.group}</td>
            <td>{result.maker}</td>
          </tr>
        ));
        break;
      }
    }
    console.log(results);
    table = <SearchTable key={foodname} resultlist={results}></SearchTable>;
    console.log(table);
  }
  return (
    <div className="App">
      <h1>음식 영양성분 검색기</h1>
      <SearchName
        onCreate={(_foodname) => {
          console.log(_foodname);
          SetFoodname(_foodname);
        }}
      ></SearchName>
      {table}
    </div>
  );
}

export default App;
