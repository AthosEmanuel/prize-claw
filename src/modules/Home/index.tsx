import React from "react";
//import { Title, Button } from "./../../components";
import "./style.css";
import { BTN_Baixo, BTN_Cima, BTN_Direita, BTN_Esquerda } from "../../assets";
///import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  //const history = useHistory();

  //   const handleClick = () => {
  //     history.push("/pokedex");
  //   };

  return (
    <div className="bodyHome">
      <h1>Home</h1>
      <img src={BTN_Cima} height={100}></img>
      <img src={BTN_Esquerda} height={100}></img>
      <img src={BTN_Direita} height={100}></img>
      <img src={BTN_Baixo} height={100}></img>
    </div>
  );
};

export default Home;
