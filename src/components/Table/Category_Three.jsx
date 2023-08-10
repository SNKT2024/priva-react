import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import "../../css/table.css";
import axios from "axios";

export default function Category_Three() {
  return (
    <>
      <Container className="mt-2">
        <h1>Antidiabetci Drug</h1>
      </Container>
      <Container className="mt-3">
        <TB />
      </Container>
    </>
  );
}

const TB = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get("http://localhost:8081/category_thirteen").then((res) => {
      setData(res.data.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Table className="rounded" striped hover responsive>
      <thead className="yellow-thead">
        <tr>
          <th>Sr.No</th>
          <th>Name</th>
          <th>Description</th>
          <th>Form</th>
        </tr>
      </thead>
      <tbody>
        {data.map((eachData, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{eachData.name}</td>
              <td>{eachData.description}</td>
              <td>{eachData.form}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
