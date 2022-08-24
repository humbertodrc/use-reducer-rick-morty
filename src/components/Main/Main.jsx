import React, { useContext, useState } from "react";
import { LogginContext } from '../../store/LogginContext';
import CardList from "../CardList/CardList";
import "./main.css";

const Main = () => {
  const [data, setData] = useState();

  const { state } = useContext(LogginContext)
  

  return (
    <div className="main">
      {state.isLoggedIn && state.isRegistered ?  <CardList data={data} setData={setData} /> : <div>No estas logeado</div>}
    </div>
  );
};

export default Main;

