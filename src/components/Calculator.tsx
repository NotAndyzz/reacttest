import { ChangeEvent, useEffect, useState } from "react";
import Alert from "./Alert";
import "../Calculator.css";
import StyledButton from "./Button";
import { AppDispatch, RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
import { save } from "../state/calculator/calculatorSlice";

function Calculator() {
  let [currentInput, setCurrentInput] = useState<number>(0);
  let [result, setResult] = useState<number>(0);
  const [lastOperation, setLastOperation] = useState<string>("");
  const [isChanged, setIsChanged] = useState(false);
  const val = useSelector((state: RootState) => state.calculator.value);
  const dispatch = useDispatch<AppDispatch>();

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

  function setStore() {
    setCurrentInput(val);
    setIsChanged(true);
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
              <StyledButton
                onClick={() => handleOperationClick(e)}
                background="hotpink"
                hovercolor="lightpink"
                children={e}
                key={"asssaa" + i}
                padding="10px 40px"
              ></StyledButton>
            ))}
          </div>
          <div className="grid-container">
            {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((element, index) => {
              return (
                <>
                  <StyledButton
                    onClick={() => onNumberPressed(element)}
                    background="darkorange"
                    hovercolor="purple"
                    key={"baaaaaa" + index}
                  >
                    {element}
                  </StyledButton>
                </>
              );
            })}
            <StyledButton
              onClick={clearCalc}
              background="darkorange"
              hovercolor="purple"
            >AC</StyledButton>
          
            <StyledButton
              onClick={() => dispatch(save(result))}
              background="darkorange"
              hovercolor="purple"
              fontsize="30px"
            >
              💾 Hi
            </StyledButton>
          </div>
        </div>
      </div>
      <StyledButton
        onClick={setStore}
        background="red"
        hovercolor="purple"
        fontsize="16px"
        padding="10px"
      >
        Hi
      </StyledButton>
    </div>
  );
}

export default Calculator;
