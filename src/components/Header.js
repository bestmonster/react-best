import React from "react";
import Logo from "./Logo";

const Header = () => {
  let companyname = "Best Mint";
  const companyAddress = <p>Rayong City</p>;
  let num = 10;
  const showMessage = () => {
    return companyname + ".com";
  };

  const isLogin = false;

  return (
    <>
      <Logo />
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
    </>
  );
};

export default Header;
