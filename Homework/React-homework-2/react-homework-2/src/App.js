import "./App.css";
import SearchName from "./component/SearchName";
import SearchTable from "./component/SearchTable";
import Detail from "./component/Detail";
import { useEffect, useState, PureComponent } from "react";
import { Routes, Route, NavLink, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const namelist = [];
const datalist = [];
let foodnum = -1;

function App() {
  const [foodname, SetFoodname] = useState("");
  const [mode, setMode] = useState("");
  const [table, setTable] = useState("");

  async function viewdata(foodname) {
    setMode("VIEW_TABLE");
    let results = null;
    for (let i = 0; i < datalist.length; i++) {
      if (datalist[i].key === foodname) {
        console.log(datalist[i].key);
        console.log("hh", foodname);
        foodnum = i;
        results = datalist[i].context.map((result) => (
          <tr>
            <td>
              <NavLink to={"/" + result.id}>{result.name}</NavLink>
            </td>
            <td>{result.group}</td>
            <td>{result.maker}</td>
          </tr>
        ));

        break;
      }
    }
    console.log(results);
    setTable(<SearchTable key={foodname} resultlist={results}></SearchTable>);

    console.log(table);
  }

  async function fetchdata(foodname) {
    setMode("LODING");
    console.log(mode);
    const dataResponse = await fetch(
      "https://openapi.foodsafetykorea.go.kr/api/bfd83e6cd7b94b279eaa/I2790/json/1/5/DESC_KOR=" +
        foodname
    );

    const data = await dataResponse.json();
    console.log(data);
    let tmp = [];
    for (let i = 0; i < 5; i++) {
      tmp.push({
        id: i,
        name: data.I2790.row[i].DESC_KOR,
        group: data.I2790.row[i].GROUP_NAME,
        maker: data.I2790.row[i].MAKER_NAME,
        content: data.I2790.row[i],
      });
    }
    datalist.push({ key: foodname, context: tmp });
    console.log(datalist);
    const view = await viewdata(foodname);
  }
  useEffect(() => {
    console.log(foodname);
    console.log(!datalist.includes(foodname));
    if (foodname !== "") {
      if (!namelist.includes(foodname)) {
        fetchdata(foodname);
      } else {
        console.log("이미있음");
        viewdata(foodname);
      }
      namelist.push(foodname);
    }
  }, [foodname]);

  if (mode === "LODING") {
    return <p>검색 중입니다.</p>;
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

      <Routes>
        <Route path="/" element={table}></Route>
        <Route
          path="/:id"
          element={<Detail datalist={datalist} foodnum={foodnum} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
