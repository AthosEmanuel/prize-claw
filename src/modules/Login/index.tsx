import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
//import { Title, Button } from "./../../components";
import "./style.css";

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1e3);
    return () => clearTimeout(timer);
  }, [count]);

  if (count == 3) {
    navigate("/home");
  }

  console.log(count);
  useEffect(() => {
    //setClawSelected(false);
  }, []);

  return (
    <div className="bodyLogin">
      <h1>CARREGANDO ...</h1>
    </div>
  );
};

export default Home;
