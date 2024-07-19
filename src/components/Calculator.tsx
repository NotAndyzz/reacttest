import { ChangeEvent, useEffect, useState } from "react";
import Alert from "./Alert";
import "../Calculator.css";

function Calculator() {
  let [currentInput, setCurrentInput] = useState<number>(0);
  let [result, setResult] = useState<number>(0);
  const [lastOperation, setLastOperation] = useState<string>("");
  const [isChanged, setIsChanged] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setCurrentInput(0);
      setIsChanged(false);
    } else {
      const currentNum = parseFloat(value);
      if (!isNaN(currentNum)) {
        setCurrentInput(currentNum);
        setIsChanged(true);
      }
    }
  };

  function onNumberPressed(value: number) {
    const newValue = currentInput * 10 + value;
    setCurrentInput(newValue);
    setIsChanged(true);
  }

  function handleOperationClick(value: string) {
    lastOperation === value;
    if (isChanged) {
      const res = calculate(result, currentInput, lastOperation);
      setResult(res);
      setCurrentInput(0);
      setIsChanged(false);
    }

    if (value != "=") {
      setLastOperation(value);
    }
  }

  function clearCalc() {
    setCurrentInput(0);
    setResult(0);
    setLastOperation("");
    setIsChanged(false);
  }

  function calculate(res: number, currInput: number, operation: string) {
    console.log("calculate", { res, currInput, operation });
    let temp = 0;
    switch (operation) {
      case "+":
        temp = res + currInput;
        break;
      case "-":
        temp = res - currInput;
        break;
      case "*":
        temp = res * currInput;
        break;
      case "/":
        temp = res / currInput;
        break;
      default:
        return currInput;
    }
    console.log(temp);
    return temp;
  }

  return (
    <div className="container">
      <div>
        <h1>CALCULATOR</h1>
        <br />
        <div className="calculator">
          <div className="minititles">
            <h3 id="resultid">{result}</h3>
          </div>
          <div className="inputClass">
            <input
              className="inputNum"
              value={currentInput}
              onChange={handleInputChange}
            />
          </div>
          <div className="operationss">
            {["+", "-", "*", "/", "="].map((e, i) => (
              <button
                key={"asssaa" + i}
                className="opbtn"
                onClick={() => handleOperationClick(e)}
              >
                {e}
              </button>
            ))}
          </div>
          <div className="grid-container">
            {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((element, index) => {
              return (
                <>
                  <button
                    key={"baaaaaa" + index}
                    className="grid-item"
                    onClick={() => onNumberPressed(element)}
                  >
                    {element}
                  </button>
                </>
              );
            })}
            <button className="grid-item" onClick={clearCalc}>
              AC
            </button>
            <button
              className="grid-item"
              onClick={() => alert("Made by Andis")}
            >
              ?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
