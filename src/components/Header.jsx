import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <img src={logo} alt="Logo" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="font-semibold text-accent">{date}</p>
    </div>
  );
};

export default Header;
