/* eslint-disable no-eval */
/* eslint-disable lines-between-class-members */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Math extends Component {
  getResult = () => {
    const { first, second, operator } = this.props;
    if (operator === '/' && second === 0) {
      return 'infinity';
    }
    if (!['+', '-', '*', '/'].includes(operator)) {
      return 'Invalid operator';
    }
    return eval(first + operator + second);
  };

  render() {
    const {
      children, first, second, operator,
    } = this.props;
    return (
      <>
        <p>
          {
            children ? children({
              first, second, result: this.getResult(), operator,
            }) : `${first} Add ${second} = ${this.getResult}`
          }
        </p>
      </>
    );
  }
}
Math.propTypes = {
  first: PropTypes.number,
  second: PropTypes.number,
  children: PropTypes.element,
  operator: PropTypes.string,
};
Math.defaultProps = {
  first: PropTypes.number,
  second: PropTypes.number,
  children: PropTypes.element,
  operator: PropTypes.string,
};
export default Math;
