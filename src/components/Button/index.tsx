import React from "react";

interface ButtonProps {
  handleEvent?: () => void;
  customStyles?: React.CSSProperties;
  isSelect: boolean;
  image: string;
  imageSelect: string;
}

const Button: React.FC<ButtonProps> = ({
  customStyles,
  handleEvent,
  isSelect,
  image,
  imageSelect,
}) => {
  return isSelect ? (
    <img
      style={customStyles}
      onClick={handleEvent}
      src={imageSelect}
      alt={imageSelect}
    ></img>
  ) : (
    <img
      style={customStyles}
      onClick={handleEvent}
      src={image}
      alt={imageSelect}
    ></img>
  );
};

export default Button;
