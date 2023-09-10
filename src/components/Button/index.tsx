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
    <img style={customStyles} onClick={handleEvent} src={imageSelect}></img>
  ) : (
    <img style={customStyles} onClick={handleEvent} src={image}></img>
  );
};

export default Button;
