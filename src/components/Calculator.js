import React from 'react';
import './Calculator.css';

const Square = () => (
  <div className="button-wrap">
    <span type="button" className="result span_5">
      0
    </span>
    <button type="button" className="button">
      AC
    </button>
    <button type="button" className="button">
      +/-
    </button>
    <button type="button" className="button">
      %
    </button>
    <button type="button" className="button colored">
      &divide;
    </button>
    <button type="button" className="button">
      7
    </button>
    <button type="button" className="button">
      8
    </button>
    <button type="button" className="button">
      9
    </button>
    <button type="button" className="button colored">
      &times;
    </button>
    <button type="button" className="button">
      4
    </button>
    <button type="button" className="button">
      5
    </button>
    <button type="button" className="button">
      6
    </button>
    <button type="button" className="button colored">
      &minus;
    </button>
    <button type="button" className="button">
      1
    </button>
    <button type="button" className="button">
      2
    </button>
    <button type="button" className="button">
      3
    </button>
    <button type="button" className="button colored">
      +
    </button>
    <button type="button" className="button button_3">
      0
    </button>
    <button type="button" className="button">
      .
    </button>
    <button type="button" className="button colored">
      =
    </button>
  </div>
);

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-container">
        <div className="calc-wrap">
          <Square />
        </div>
      </div>
    );
  }
}

export default Calculator;
