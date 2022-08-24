import React, { useState } from "react";
import CardList from "../CardList/CardList";
import "./main.css";

const Main = () => {
  const [data, setData] = useState();

  return (
    <div className="main">
      <CardList data={data} setData={setData} />
    </div>
  );
};

export default Main;

