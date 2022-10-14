import React, { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters.tsx";
import "./header.scss";

const Header = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <h1 className="main-header">
      <AnimatedLetters
        letterClass={letterClass}
        strArray={"Today's Goals".split("")}
        idx={20}
      />
    </h1>
  );
};

export default Header;
