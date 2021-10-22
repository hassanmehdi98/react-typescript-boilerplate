import React from "react";
import { Props } from "./types";

const Header: React.FC<Props> = ({ title, slogan, onTitleClick }) => {
  return (
    <div>
      <h1 onClick={onTitleClick}>{title}</h1>
      <h3>Our moto is: {slogan}</h3>
    </div>
  );
};

export default Header;
