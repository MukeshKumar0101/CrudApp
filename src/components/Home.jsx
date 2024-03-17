/** @format */

import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let history = useNavigate();
  // const [abcd, setAbcd] = useState(false);

  const handleEdit = (id, name, age) => {
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("id", id);
  };

  const handleDelete = (id) => {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);

    Employees.splice(index, 1);
    // setAbcd((prev) => !prev);
    history("/");
    console.log(Employees);
  };

  return (
    <>
      <div>
        <div className="overflow-x-auto">
          <Table striped bordered hover size="sm" width="100">
            <thead>
              <tr className=" border-2 border-blue-400">
                <th className="bg-[#81689D] text-white text-lg font-bold">
                  Name
                </th>
                <th className="bg-[#81689D] text-white text-lg font-bold">
                  Age
                </th>
                <th className="bg-[#81689D] text-white text-lg font-bold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {Employees && Employees.length > 0
                ? Employees.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td className="bg-blue-300 text-white font-bold text-lg whitespace-nowrap">
                          {item.name}
                        </td>
                        <td className="bg-[#333A73] text-white font-bold text-lg whitespace-nowrap">
                          {item.age}
                        </td>
                        <td className="whitespace-nowrap">
                          <Link to={`/edit`}>
                            <Button
                              className="bg-[#114232] text-white text-lg font-bold"
                              onClick={() =>
                                handleEdit(item.id, item.name, item.age)
                              }>
                              {" "}
                              Edit{" "}
                            </Button>
                          </Link>
                          &nbsp;
                          <Button
                            className="bg-[#D24545] text-white text-lg font-bold"
                            onClick={() => handleDelete(item.id)}>
                            {" "}
                            Delete{" "}
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                : "no data available"}
            </tbody>
          </Table>
        </div>
        <br />
        <Link className="d-grid gap-2" to="/create">
          <Button
            className="bg-[#387ADF] font-bold text-lg text-white w-full"
            size="lg">
            Create
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Home;
