import React from "react";
import { useNavigate } from "react-router-dom";
import { buttonSound } from "../../assets";
import useSound from "use-sound";

const StartScreen: React.FC = () => {
  const navigate = useNavigate();

  const sendToLoadingScreen = () => {
    playSoundButton();
    navigate("/loading");
  };

  const [playSoundButton] = useSound(buttonSound);

  return (
    <div className="commonBody">
      <button className="buttonStyle" onClick={sendToLoadingScreen}>
        START
      </button>
    </div>
  );
};

export default StartScreen;
