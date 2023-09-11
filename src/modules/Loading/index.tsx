import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main");
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="commonBody">
      <h1>CARREGANDO ...</h1>
    </div>
  );
};

export default Home;
