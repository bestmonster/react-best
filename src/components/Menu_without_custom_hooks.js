import React from "react";
import Logo from "./Logo";

const Menu = () => {
  const [hover, setHover] = React.useState(false);

  const mouseOver = () => {
    setHover(true);
  };
  const mouseOut = () => {
    setHover(false);
  };
  return (
    <div>
      <h1>Menu</h1>
      {hover ? <h3>Main Menu</h3> : null}
      <span onMouseOver={mouseOver} onMouseOut={mouseOut}>
        <Logo />
      </span>
    </div>
  );
};

export default Menu;
