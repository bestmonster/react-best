import React from "react";
import { logo } from "../style/style";

const Logo = () => {
  const logoImage = {
    url:
      "https://4.bp.blogspot.com/-gmAdskOYFjI/UfJIrkOUCVI/AAAAAAAAC1w/W9fCeJCbIdc/s1600/Cristiano-Ronaldo-001.jpg",
  };

  return (
    <div>
      <img style={logo} src={logoImage.url} width="80%" alt="Ronaldo" />
    </div>
  );
};

export default Logo;
