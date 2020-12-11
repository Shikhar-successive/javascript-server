import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class SelectField extends Component {
  render() {
    const {
      value, onChange, options, defaultText,
    } = this.props;
    console.log(options[1].label);
    return (
      <select className="style_select" name="sport" id="sport" onChange={onChange} value={value}>
        <option value="">
          {' '}
          {defaultText}
          {' '}
        </option>
        <option value={options[0].label}>
          {' '}
          {options[0].value}
          {' '}
        </option>
        <option value={options[1].label}>
          {' '}
          {options[1].value}
          {' '}
        </option>
      </select>
    );
  }
}

SelectField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.instanceOf(Array),
  defaultText: PropTypes.string,
};

SelectField.defaultProps = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.instanceOf(Array),
  defaultText: PropTypes.string,
};
export default SelectField;
