import React from "react";
import { useState } from "react";

function Claculator() {
  const [value, setValue] = useState("");
  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" className="form-control" value={value} />
          </div>
          <div>
            <input
              type="button"
              value="AC"
              className="btn btn-outline-primary"
              onClick={(e) => setValue("")}
            />
            <input
              type="button"
              value="DEL"
              className="btn btn-outline-primary"
              onClick={(e) => setValue(value.slice(0, -1))}
            />
            <input
              type="button"
              value="/"
              className="btn btn-outline-primary"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="*"
              className="btn btn-outline-primary"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="7"
              className="btn btn-outline-primary"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="8"
              className="btn btn-outline-primary"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="9"
              className="btn btn-outline-primary"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="-"
              className="btn btn-outline-primary"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="4"
              className="btn btn-outline-primary"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="5"
              className="btn btn-outline-primary"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="6"
              className="btn btn-outline-primary"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="+"
              className="btn btn-outline-primary"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="1"
              className="btn btn-outline-primary"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="2"
              className="btn btn-outline-primary"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="3"
              className="btn btn-outline-primary"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="."
              className="btn btn-outline-primary"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="00"
              className="btn btn-outline-primary"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="0"
              className="btn btn-outline-primary"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="="
              className="btn btn-outline-primary equal"
              onClick={(e) => setValue(eval(value))}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Claculator;
