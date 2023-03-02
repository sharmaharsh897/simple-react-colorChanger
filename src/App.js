import React, { useState } from "react";
import "./styles.css";
function App(props) {
  const [style, setStyle] = useState("cont");

  const changeStyle = () => {
    setStyle("cont2");
  };
  return (
    <>
      <div className={style}></div>
      <button className="but" onClick={changeStyle}>
        Click me!
      </button>
    </>
  );
}
export default App;
