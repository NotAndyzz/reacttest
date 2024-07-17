import { ChangeEvent, useEffect, useState } from "react";

function Calculator() {
  const [newNum, setNewNum] = useState<number>(0);
  const [addnum, setAddNum] = useState<number>(0);
  const [lastop, setLastOp] = useState<string>("");
  const [res, setRes] = useState<number>(0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setNewNum(0);
    } else {
      const currentNum = parseFloat(value);
      if (!isNaN(currentNum)) {
        setNewNum(currentNum);
      }
    }
  };

  function setEnteredNumber(value: number) {
    if (newNum != null) {
      let newValue = newNum * 10 + value;
      setNewNum(newValue);
    }
  }

  function calculate(value: string) {
    setAddNum(newNum);
    setNewNum(0);
    switch (value) {
      case "+":
        setRes(addnum + newNum);
        setLastOp("+");
        break;
      case "-":
        setRes(addnum - newNum);
        setLastOp("-");
        break;
      case "*":
        setRes(addnum * newNum);
        setLastOp("*");
        break;
      case "/":
        setRes(addnum / newNum);
        setLastOp("/");
        break;
      case "=":
        switch (lastop) {
          case "+":
            setRes(addnum + newNum);
            break;
          case "-":
            setRes(addnum - newNum);
            break;
          case "*":
            setRes(addnum * newNum);
            break;
          case "/":
            setRes(addnum / newNum);
            break;
        }
        setNewNum(res);
        break;
    }

    console.log("After switch: ", addnum, newNum);
  }

  return (
    <div>
      <h1>CALCULATOR</h1>
      <br />
      <div>{addnum}</div>
      <input
        className="inputNum"
        placeholder="..."
        value={newNum}
        onChange={handleInputChange}
      />
      {["+", "-", "*", "/", "="].map((e, i) => (
        <button
          key={"asssaa" + i}
          className="opbtn"
          onClick={() => calculate(e)}
        >
          {e}
        </button>
      ))}

      <br />
      <div>
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((element, index) => {
          return (
            <>
              {index % 3 === 0 && <br />}
              <button
                key={"baaaaaa" + index}
                className="numbtn"
                onClick={() => setEnteredNumber(element)}
              >
                {element}
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Calculator;
