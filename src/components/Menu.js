import React from "react";
import Logo from "./Logo";
import useHover from "../hooks/UseHover";

const Menu = () => {
  //เรียก hooks custom
  const [hover, attrs] = useHover();

  return (
    <div>
      <h1>Menu</h1>
      {hover ? <h3>Main Menu</h3> : null}

      {/* <span onMouseOver={mouseOver} onMouseOut={mouseOut}> */}
      <span {...attrs}>
        <Logo />
      </span>
    </div>
  );
};

export default Menu;
