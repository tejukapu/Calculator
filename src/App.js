import React, { useState } from 'react';
import "./styles.css";

function Calculator() {
  const [displayValue, setDisplayValue] = useState(' ');
  
  function handleButtonClick(event) {
    const buttonValue = event.target.value;
    if (buttonValue === '=') {
      setDisplayValue(eval(displayValue));
    } else if (buttonValue === 'C') {
      setDisplayValue('');
    } else {
      setDisplayValue(displayValue + buttonValue);
    }
  }
  
  return (
    <div className="calculator">
      <h2 style={{fontFamily:"cursive", display:"inline-block"}}>Calculator </h2>
      <div className="display">{displayValue}</div>
      <button value="7" onClick={handleButtonClick}>7</button>
      <button value="8" onClick={handleButtonClick}>8</button>
      <button value="9" onClick={handleButtonClick}>9</button>
      <button value="/" onClick={handleButtonClick}>÷</button>
      <button value="4" onClick={handleButtonClick}>4</button>
      <button value="5" onClick={handleButtonClick}>5</button>
      <button value="6" onClick={handleButtonClick}>6</button>
      <button value="*" onClick={handleButtonClick}>×</button>
      <button value="1" onClick={handleButtonClick}>1</button>
      <button value="2" onClick={handleButtonClick}>2</button>
      <button value="3" onClick={handleButtonClick}>3</button>
      <button value="-" onClick={handleButtonClick}>-</button>
      <button value="0" onClick={handleButtonClick}>0</button>
      <button value="." onClick={handleButtonClick}>.</button>
      <button value="=" onClick={handleButtonClick}>=</button>
      <button value="+" onClick={handleButtonClick}>+</button>
      <button className="span-2" value="C" onClick={handleButtonClick}>C</button>
    </div>
  );
}

export default Calculator;
