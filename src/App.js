import { Todocard } from "./Components/todocard";
import "./App.css";
// import {Inputbox} from "./Components/Inputbox";
import { useState } from "react";

function App() {
  const initialvalue = [{ task: "Make notes", isChecked: false }];
  const [list, setList] = useState(initialvalue);
  const [input, setInput] = useState("");

  // function toggleCheck(){
  //   setChecked(!checked);
  // }

  return (
    <div>
      <div className="header">
        <span className="text1"> To-Do Maker</span>
        <span className="text2"> No need to sweat the small stuff</span>
      </div>
      <div>
        <div className="container">
          <input
            className="input"
            type="text"
            onChange={(event) => {
              const val = event.target.value;

              setInput(val);
            }}
          />
          <button
            className="Add-btn"
            onClick={() => {
              const value = input;
              if (value === "") {
                alert("Please enter some value!");
              } else {
                const obj = { task: value, isChecked: false };
                setList([...list, obj]);
              }
            }}
          >
            Add Todo
          </button>
        </div>
      </div>

      <div className="list">
        {list.map((item) => (
          <Todocard task={item.task} isChecked={item.isChecked} />
        ))}
      </div>
    </div>
  );
}

export default App;
