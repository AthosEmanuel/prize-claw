import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import useSound from "use-sound";

import { Main, Login, Ranking, End, Start } from "./modules";

import "./style.css";
import { music } from "./assets";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function App() {
  const [playSound] = useSound(music, { loop: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleDocumentClick = () => {
      if (count === 0) {
        playSound();
        setCount(1);
        document.removeEventListener("click", handleDocumentClick);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [count, playSound]);

  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/loading" element={<Login />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/ranking" element={<Ranking />}></Route>
          <Route path="/end" element={<End />}></Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

root.render(<App />);
reportWebVitals();
