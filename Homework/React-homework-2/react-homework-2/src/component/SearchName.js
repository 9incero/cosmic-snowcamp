import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";

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

export default SearchName;
