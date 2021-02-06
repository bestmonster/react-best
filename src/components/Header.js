import React from "react";
import Logo from "./Logo";
import Title from "../style/title/Title";
import { Button } from "../style/botton/Button";

const Header = () => {
  let companyname = "Best Mint";
  const companyAddress = <p>Rayong City</p>;
  let num = 10;
  const showMessage = () => {
    return companyname + ".com";
  };

  const isLogin = false;
  const showMe = () => {
    alert("Hello Chris");
  };
  const product = [
    { id: 1, name: "Real Madrid" },
    { id: 2, name: "Juventus" },
  ];

  return (
    <>
      <Title>Hey Baimint</Title>
      <h1>Hello {companyname}</h1>
      {companyAddress}
      {num + 20} <br />
      {showMessage()}
      {isLogin === true ? <p>ยินดีต้อนรับ</p> : <p>กรุณาล็อกอิน</p>}
      {/* {isLogin === true && (
        <>
          <p>ยินดีต้อนรับ</p>
          <p>ยินดีต้อนรับ2</p>
        </>
      )} */}
      {isLogin ? <Logo /> : <p>ไม่มีรูปภาพ</p>}
      {/* <button onClick={showMe}>Click Here</button> */}
      <Button primary onClick={showMe}>
        Click Me
      </Button>
      <br />
      <ul>
        {product.map((product, index) => {
          return (
            <li key={product.id}>
              {product.name} {index + 1}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Header;
