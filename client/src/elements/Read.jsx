import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/get_student/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="container-fluid vw-100 vh-100 bg-primary">
      <h1>User {id}</h1>
      <Link to="/" className="btn btn-success">Back</Link>
      {data.map((student) => {
        return (
          <ul className="list-group">
            <li className="list-group-item">
              <b>ID: </b>
              {student["id"]}
            </li>
            <li className="list-group-item">
              <b>Name: </b>
              {student["name"]}
            </li>
            <li className="list-group-item">
              <b>description: </b>
              {student["description"]}
            </li>
            <li className="list-group-item">
              <b>Priority: </b>
              {student["priority"]}
            </li>
            <li className="list-group-item">
              <b>Status: </b>
              {student["status"]}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Read;