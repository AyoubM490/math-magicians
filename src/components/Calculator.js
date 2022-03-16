import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    const { total, next } = this.state;
    const input = document.querySelector('.input');
    if (next !== null) {
      input.value = next;
    } else if (total !== null) {
      input.value = total;
    }
  }

  handleClick(e) {
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, e.target.textContent));
  }

  render() {
    return (
      <div className="calc-container">
        <div className="calc-wrap">
          <div className="button-wrap">
            <input className="button span_5 input" placeholder="0" />
            <button type="button" className="button" onClick={this.handleClick}>
              AC
            </button>
            <button type="button" className="button" onClick={this.handleClick}>
              +/-
            </button>
            <button type="button" className="button" onClick={this.handleClick}>
              %
            </button>
            <button
              type="button"
              className="button colored"
              onClick={this.handleClick}
            >
              &divide;
            </button>
            <button type="button" className="button" onClick={this.handleClick}>
              7
            </button>
            <button type="button" className="button" onClick={this.handleClick}>
              8
            </button>
            <button type="button" className="button" onClick={this.handleClick}>
              9
            </button>
            <button
              type="button"
              className="button colored"
              onClick={this.handleClick}
            >
              &times;
            </button>
            <button type="button" className="button" onClick={this.handleClick}>
              4
            </button>
            <button type="button" className="button" onClick={this.handleClick}>
              5
            </button>
            <button type="button" className="button" onClick={this.handleClick}>
              6
            </button>
            <button
              type="button"
              className="button colored"
              onClick={this.handleClick}
            >
              &minus;
            </button>
            <button type="button" className="button" onClick={this.handleClick}>
              1
            </button>
            <button type="button" className="button" onClick={this.handleClick}>
              2
            </button>
            <button type="button" className="button" onClick={this.handleClick}>
              3
            </button>
            <button
              type="button"
              className="button colored"
              onClick={this.handleClick}
            >
              +
            </button>
            <button
              type="button"
              className="button button_3"
              onClick={this.handleClick}
            >
              0
            </button>
            <button type="button" className="button" onClick={this.handleClick}>
              .
            </button>
            <button
              type="button"
              className="button colored"
              onClick={this.handleClick}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
