import React, { useEffect, useState } from "react";
import Logout from "./logout";
import Employee from "./employee";

const Home = () => {
  const [emps, setEmps] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/emp").then(res => {
      res.json().then(data => setEmps(data.employees));
    });
  }, []);
  return (
    <div>
      <Logout />
      {emps.map(e => {
        return <Employee emp={e} key={e.id} />;
      })}
    </div>
  );
};

export default Home;
