import React, { useEffect, useState } from 'react';
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
    <div className="calcWrapper">
      <div>
        <h2 className="mdHeading">Let&apos;s do some Math!</h2>
      </div>
      <div className="calc-container">
        <div className="calc-wrap">
          <div className="button-wrap">
            <input className="button span_5 input" placeholder="0" />
            <button className="button" type="button" onClick={handleClick}>
              AC
            </button>
            <button className="button" type="button" onClick={handleClick}>
              +/-
            </button>
            <button className="button" type="button" onClick={handleClick}>
              %
            </button>
            <button
              className="button colored"
              type="button"
              onClick={handleClick}
            >
              ÷
            </button>
            <button className="button" type="button" onClick={handleClick}>
              7
            </button>
            <button className="button" type="button" onClick={handleClick}>
              8
            </button>
            <button className="button" type="button" onClick={handleClick}>
              9
            </button>
            <button
              className="button colored"
              type="button"
              onClick={handleClick}
            >
              x
            </button>
            <button className="button" type="button" onClick={handleClick}>
              4
            </button>
            <button className="button" type="button" onClick={handleClick}>
              5
            </button>
            <button className="button" type="button" onClick={handleClick}>
              6
            </button>
            <button
              className="button colored"
              type="button"
              onClick={handleClick}
            >
              -
            </button>
            <button className="button" type="button" onClick={handleClick}>
              1
            </button>
            <button className="button" type="button" onClick={handleClick}>
              2
            </button>
            <button className="button" type="button" onClick={handleClick}>
              3
            </button>
            <button
              className="button colored"
              type="button"
              onClick={handleClick}
            >
              +
            </button>
            <button
              className="button span_3"
              type="button"
              onClick={handleClick}
            >
              0
            </button>
            <button className="button" type="button" onClick={handleClick}>
              .
            </button>
            <button
              className="button colored"
              type="button"
              onClick={handleClick}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
