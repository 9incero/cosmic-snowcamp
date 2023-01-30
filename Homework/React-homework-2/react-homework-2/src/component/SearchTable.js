import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "../App.css";

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

export default SearchTable;
