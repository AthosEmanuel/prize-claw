import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import "./style.css";

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1e3);
    return () => clearTimeout(timer);
  }, [count]);

  if (count == 3) {
    navigate("/");
  }

  console.log(count);
  useEffect(() => {
    //setClawSelected(false);
  }, []);

  return (
    <div className="bodyEnd">
      <h1>END</h1>
    </div>
  );
};

export default Home;
