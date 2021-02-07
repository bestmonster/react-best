import React from "react";

const Sidebar = () => {
  //   let fullname = "Best S.Wareechol";
  const [fullname, setFullname] = React.useState("Best S.Wareechol");
  const [isShow, setIsshow] = React.useState(true);
  const changeName = () => {
    // fullname = "Mint";
    setFullname("Mint");
    setIsshow(!isShow);
  };

  React.useEffect(() => {
    console.log("Sidebar");
  });

  React.useEffect(() => {
    console.log("Sidebar on etime only");
  }, []);

  React.useEffect(() => {
    console.log("Sidebar :" + fullname);
  }, [fullname]);

  return (
    <div>
      <h3>Sidebar</h3>
      {isShow ? <p>I Love You</p> : <p>I Miss You</p>}
      <p>Hello {fullname}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default Sidebar;
