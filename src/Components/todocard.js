import { useState } from "react";

export function Todocard(props) {
  const [visible, setVisible] = useState("flex");
  const [strike,setStrike] = useState("task")

  function removeCard() {
    setVisible("none");
  }
function lineThrough(){
  if(strike === "task"){
    setStrike("strike");
  }
  else{
    setStrike("task");
  }
}
  return (
    <div id="card" className="card" style={{ display: visible }}>
      <input className="checkbox" type="checkbox" onChange={lineThrough}/>
      <p className={strike}>
        {props.task}
      </p>
      <button className="delete-btn" onClick={removeCard}>
        <span className="material-symbols-rounded" style={{color:"white"}}>delete</span>
      </button>
    </div>
  );
}
