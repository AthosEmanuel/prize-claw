import React, { useEffect, useState } from "react";
//import { Title, Button } from "./../../components";
import "./style.css";
import {
  BTN_Baixo,
  BTN_Baixo_DW,
  BTN_Cima,
  BTN_Cima_DW,
  BTN_Direita,
  BTN_Direita_DW,
  BTN_Esquerda,
  BTN_Esquerda_DW,
  BTN_Garra,
  BTN_Garra_DW,
} from "../../assets";
import { Button } from "../../components";
///import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const [upArrowSelected, setUpArrowSelected] = useState(false);
  const [leftArrowSelected, setLeftArrowSelected] = useState(false);
  const [rightArrowSelected, setRightArrowSelected] = useState(false);
  const [downArrowSelected, setDownArrowSelected] = useState(false);
  const [clawSelected, setClawSelected] = useState(false);

  //const history = useHistory();

  //   const handleClick = () => {
  //     history.push("/pokedex");
  //   };

  useEffect(() => {
    //setClawSelected(false);
  }, []);

  const onchangeClawState = () => {
    setClawSelected(!clawSelected);
  };

  const onchangeUpArrowState = () => {
    setUpArrowSelected(!upArrowSelected);
  };

  const onchangeLeftArrowState = () => {
    setLeftArrowSelected(!leftArrowSelected);
  };

  const onchangeRightArrowState = () => {
    setRightArrowSelected(!rightArrowSelected);
  };
  const onchangeDownArrowState = () => {
    setDownArrowSelected(!downArrowSelected);
  };

  return (
    <div className="bodyHome">
      <h1>Home</h1>

      <Button
        image={BTN_Garra}
        imageSelect={BTN_Garra_DW}
        customStyles={{ marginBottom: 30, height: 200 }}
        isSelect={clawSelected}
        handleEvent={onchangeClawState}
      ></Button>
      <div className="bodyButtons">
        <div></div>
        <Button
          image={BTN_Cima}
          imageSelect={BTN_Cima_DW}
          customStyles={{ height: 100 }}
          isSelect={upArrowSelected}
          handleEvent={onchangeUpArrowState}
        ></Button>

        <div></div>
        <Button
          image={BTN_Esquerda}
          imageSelect={BTN_Esquerda_DW}
          customStyles={{ height: 100 }}
          isSelect={leftArrowSelected}
          handleEvent={onchangeLeftArrowState}
        ></Button>
        <div></div>
        <Button
          image={BTN_Direita}
          imageSelect={BTN_Direita_DW}
          customStyles={{ height: 100 }}
          isSelect={rightArrowSelected}
          handleEvent={onchangeRightArrowState}
        ></Button>
        <div></div>
        <Button
          image={BTN_Baixo}
          imageSelect={BTN_Baixo_DW}
          customStyles={{ height: 100 }}
          isSelect={downArrowSelected}
          handleEvent={onchangeDownArrowState}
        ></Button>
      </div>
    </div>
  );
};

export default Home;
