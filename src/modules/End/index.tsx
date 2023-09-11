import React from "react";
import useSound from "use-sound";
import { useNavigate } from "react-router-dom";
import { buttonSound } from "../../assets";

const EndScreen: React.FC = () => {
  const navigate = useNavigate();

  const sendToFirstScreen = () => {
    playSoundButton();

    navigate("/");
  };

  const [playSoundButton] = useSound(buttonSound);

  return (
    <div className="commonBody">
      <h1>Obrigado por jogar!</h1>
      <button
        className="buttonStyle"
        style={{ fontSize: 15 }}
        onClick={sendToFirstScreen}
      >
        JOGAR NOVAMENTE
      </button>
    </div>
  );
};

export default EndScreen;
