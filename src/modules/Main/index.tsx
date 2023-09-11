import React, { useState } from "react";

import useSound from "use-sound";
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
  buttonSound,
} from "../../assets";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

const Main: React.FC = () => {
  const [upArrowSelected, setUpArrowSelected] = useState(false);
  const [leftArrowSelected, setLeftArrowSelected] = useState(false);
  const [rightArrowSelected, setRightArrowSelected] = useState(false);
  const [downArrowSelected, setDownArrowSelected] = useState(false);
  const [clawSelected, setClawSelected] = useState(false);

  const navigate = useNavigate();

  const [playSoundButton] = useSound(buttonSound);
  const verifyController = (id: number) => {
    switch (id) {
      case 1:
        setUpArrowSelected(!upArrowSelected);
        setLeftArrowSelected(false);
        setRightArrowSelected(false);
        setDownArrowSelected(false);
        break;
      case 2:
        setUpArrowSelected(false);
        setLeftArrowSelected(!leftArrowSelected);
        setRightArrowSelected(false);
        setDownArrowSelected(false);
        break;
      case 3:
        setUpArrowSelected(false);
        setLeftArrowSelected(false);
        setRightArrowSelected(!rightArrowSelected);
        setDownArrowSelected(false);
        break;
      case 4:
        setUpArrowSelected(false);
        setLeftArrowSelected(false);
        setRightArrowSelected(false);
        setDownArrowSelected(!downArrowSelected);
        break;

      default:
        break;
    }
  };

  const onchangeClawState = () => {
    playSoundButton();
    setClawSelected(!clawSelected);
    const timer = setTimeout(() => {
      navigate("/ranking");
    }, 3000);
    return () => clearTimeout(timer);
  };

  const onchangeUpArrowState = () => {
    playSoundButton();
    verifyController(1);
  };

  const onchangeLeftArrowState = () => {
    playSoundButton();
    verifyController(2);
  };

  const onchangeRightArrowState = () => {
    playSoundButton();
    verifyController(3);
  };
  const onchangeDownArrowState = () => {
    playSoundButton();
    verifyController(4);
  };

  return (
    <>
      <div className="headerMain"></div>
      <div className="bodyHome">
        <Button
          image={BTN_Garra}
          imageSelect={BTN_Garra_DW}
          customStyles={{ marginBottom: 30, marginTop: 80, height: 200 }}
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
    </>
  );
};

export default Main;
