import React, { useEffect, useState } from "react";

export default function TrafficLight() {
  const [color, setColor] = useState(null);
  const [contador, setContador] = useState(0);

  function changeLight() {
    console.log(contador);
    switch (contador) {
      case 1:
        setColor("red");
        break;
      case 2:
        setColor("yellow");
        break;
      case 3:
        setColor("green");
        break;
      case 4:
        setContador(1);
        setColor("red");
        break;
    }
  }

  useEffect(() => {
    changeLight();
  }, [contador]);

  return (
    <div className="container">
      <div className="trafficlight">
        <button
          id="red"
          onClick={() => {
            setColor("red");
          }}
          style={{ boxShadow: `0 0 40px 1px ${color == "red" ? color : ""}` }}
          className="lights"
        ></button>
        <button
          id="yellow"
          onClick={() => {
            setColor("yellow");
          }}
          style={{
            boxShadow: `0 0 40px 1px ${color == "yellow" ? color : ""}`,
          }}
          className="lights"
        ></button>
        <button
          id="green"
          onClick={() => {
            setColor("green");
          }}
          style={{ boxShadow: `0 0 40px 1px ${color == "green" ? color : ""}` }}
          className="lights"
        ></button>
      </div>
      <div className="post">
        <button
          onClick={() => {
            setContador((contador) => contador + 1);
            console.log(contador);
          }}
          className="button"
        >
          <strong>PUSH</strong>
        </button>
      </div>
    </div>
  );
}
