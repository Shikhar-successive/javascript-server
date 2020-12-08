import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class TextField extends Component {
  render() {
    const {
      value, disabled, error, pattern,
    } = this.props;
    console.log(value);
    console.log(disabled);
    console.log(this.props);
    return (
      <>
        <input className="style_valid" type="text" defaultValue={value} disabled={disabled} error={error} pattern={pattern} />
      </>
    );
  }
}
TextField.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string,
  pattern: PropTypes.string,
};
TextField.defaultProps = {
  disabled: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  pattern: PropTypes.pattern,
};
export default TextField;
