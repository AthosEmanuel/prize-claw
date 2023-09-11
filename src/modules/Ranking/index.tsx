import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import { buttonSound } from "../../assets";
import "./style.css";

const RankingScreen: React.FC = () => {
  const [playSoundButton] = useSound(buttonSound);
  const [user, setUser] = useState("");
  const [handleButton, setHandleButton] = useState(true);
  const navigate = useNavigate();
  const sendToEndScreen = () => {
    playSoundButton();
    navigate("/end");
  };

  const handleChange = (e: any) => {
    const newValue = e.target.value;
    setUser(newValue);
    if (newValue.length >= 3) {
      setHandleButton(!handleButton);
    } else {
      setHandleButton(true);
    }
  };
  console.log(user);

  return (
    <div className="commonBody">
      <h2 style={{ marginBottom: 50 }}>RANKING</h2>

      <input
        className="inputStyle"
        maxLength={3}
        value={user}
        onChange={handleChange}
      ></input>
      <button
        className="buttonStyle"
        onClick={sendToEndScreen}
        disabled={handleButton}
      >
        AVANÇAR
      </button>
    </div>
  );
};

export default RankingScreen;

// getInitialState() {
//   return {email: ''}
// },
// handleChange(e) {
//   this.setState({email: e.target.value})
// },
// render() {
//   return <div>
//     <input name="email" value={this.state.email} onChange={this.handleChange}/>
//     <button type="button" disabled={!this.state.email}>Button</button>
//   </div>
// }
