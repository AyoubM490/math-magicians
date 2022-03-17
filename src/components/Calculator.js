import React, { useState, useEffect } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calc, setCalc] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  useEffect(() => {
    const { total, next } = calc;
    const input = document.querySelector('.input');
    if (next !== null) {
      input.value = next;
    } else if (total !== null) {
      input.value = total;
    }
  }, [calc]);

  function handleClick(e) {
    if (e.target.textContent === 'AC') {
      const input = document.querySelector('.input');
      input.value = 0;
    }
    const result = calculate(calc, e.target.textContent);
    setCalc({ ...calc, ...result });
  }

  return (
    <div className="calc-container">
      <div className="calc-wrap">
        <div className="button-wrap">
          <input className="button span_5 input" placeholder="0" />
          <button type="button" className="button" onClick={handleClick}>
            AC
          </button>
          <button type="button" className="button" onClick={handleClick}>
            +/-
          </button>
          <button type="button" className="button" onClick={handleClick}>
            %
          </button>
          <button
            type="button"
            className="button colored"
            onClick={handleClick}
          >
            ÷
          </button>
          <button type="button" className="button" onClick={handleClick}>
            7
          </button>
          <button type="button" className="button" onClick={handleClick}>
            8
          </button>
          <button type="button" className="button" onClick={handleClick}>
            9
          </button>
          <button
            type="button"
            className="button colored"
            onClick={handleClick}
          >
            x
          </button>
          <button type="button" className="button" onClick={handleClick}>
            4
          </button>
          <button type="button" className="button" onClick={handleClick}>
            5
          </button>
          <button type="button" className="button" onClick={handleClick}>
            6
          </button>
          <button
            type="button"
            className="button colored"
            onClick={handleClick}
          >
            -
          </button>
          <button type="button" className="button" onClick={handleClick}>
            1
          </button>
          <button type="button" className="button" onClick={handleClick}>
            2
          </button>
          <button type="button" className="button" onClick={handleClick}>
            3
          </button>
          <button
            type="button"
            className="button colored"
            onClick={handleClick}
          >
            +
          </button>
          <button
            type="button"
            className="button button_3"
            onClick={handleClick}
          >
            0
          </button>
          <button type="button" className="button" onClick={handleClick}>
            .
          </button>
          <button
            type="button"
            className="button colored"
            onClick={handleClick}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
