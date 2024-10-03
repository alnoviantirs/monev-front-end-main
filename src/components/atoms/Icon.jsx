// src/components/atoms/Icon.js
import React from "react";
import { Gear, Lightbulb, GraduationCap } from "phosphor-react";

const Icon = ({ type }) => {
  switch (type) {
    case "gear":
      return <Gear size={24} weight="bold" color="#f1a13b" />;
    case "light":
      return <Lightbulb size={24} weight="bold" color="#57e09e" />;
    case "graduation":
      return <GraduationCap size={24} weight="bold" color="#f39c12" />;
    default:
      return null;
  }
};

export default Icon;
