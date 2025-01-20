import { useState } from "react";
import A from "./State/A";
import B from "./State/B";
import C from "./State/C";

function State() {
  const [value, setValue] = useState(0);
  
  console.log("rendering component");
  return (
    <div className="border border-red-600 m-4 p-4">
      Learning State
      <h1>value is {value}</h1>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Add
      </button>
      <div className="flex gap-4">
        <A />
        <B />
        <C />
      </div>
    </div>
  );
}

export default State;
