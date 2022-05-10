import React from "react";
import Key from "./Key";

function Keyboard() {

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "K", "M"];

  return (
    <div className="Keyboard">
      <div className="line1">
        {
        keys1.map((key0,v) => {
          return <Key keyVal = {key0.v}></Key>;
        })
        }
      </div>
      <div className="line2">
        {
        keys2.map((key1,v) => {
          return <Key keyVal = {key1.v}></Key>;
        }
        )}
      </div>
      <div className="line3">
        {keys3.map((key2,v) => {
          return <Key keyVal = {key2.v}></Key>;
        })}
      </div>
    </div>
  );
}


export default Keyboard;