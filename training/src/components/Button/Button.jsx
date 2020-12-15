import React, { Component } from 'react';
import PropTypes from 'prop-types';
import btnstyle from './style';

class Button extends Component {
  clearContent = () => {
    window.location.reload();
  }

  render() {
    const {
      color, disabled, style, value, onClick,
    } = this.props;
    const btnprimary = btnstyle[color];
    console.log(disabled, '--------DISABLED');
    if (disabled) {
      return (
        <>
          <p style={style}>
            <button type="button" onClick={this.clearContent}> Reset</button>
            <button type="button" disabled={disabled} onClick={onClick}>{value}</button>
          </p>
        </>
      );
    }

    return (
      <>
        <p style={style}>
          <button type="button" onClick={this.clearContent}> Reset</button>
          <button type="button" style={btnprimary} onClick={onClick}>{value}</button>
        </p>
      </>
    );
  }
}
Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  style: PropTypes.instanceOf(Object),
  color: PropTypes.string,
};
Button.defaultProps = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  style: PropTypes.instanceOf(Object),
  color: PropTypes.string,
};
export default Button;
