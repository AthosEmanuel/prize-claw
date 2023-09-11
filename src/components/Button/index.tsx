import React from "react";

interface ButtonProps {
  handleEvent?: () => void;
  customStyles?: React.CSSProperties;
  isSelect: boolean;
  image: string;
  imageSelect: string;
  alt: string;
}

const Button: React.FC<ButtonProps> = ({
  customStyles,
  handleEvent,
  isSelect,
  image,
  imageSelect,
  alt,
}) => {
  return isSelect ? (
    <img
      style={customStyles}
      onClick={handleEvent}
      src={imageSelect}
      alt={alt}
    ></img>
  ) : (
    <img style={customStyles} onClick={handleEvent} src={image} alt={alt}></img>
  );
};

export default Button;
