import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style';

class SelectField extends Component {
  render() {
    const {
      value, onChange, options, defaultText, onBlur, error,
    } = this.props;
    // console.log(options[1].label);
    return (
      <>
        <select style={style.text} name="sport" id="sport" onChange={onChange} value={value} onBlur={onBlur}>
          <option value="">{defaultText}</option>
          {
            options.map((option) => (
              <option value={option.label} key={option.label}>{option.value}</option>
            ))
          }
        </select>
        {error ? <div style={{ color: 'red' }}>{error}</div> : ''}
      </>
    );
  }
}

SelectField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.instanceOf(Array),
  defaultText: PropTypes.string,
  onBlur: PropTypes.func,
  error: PropTypes.string,
};

SelectField.defaultProps = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.instanceOf(Array),
  defaultText: PropTypes.string,
  onBlur: PropTypes.func,
  error: PropTypes.string,
};
export default SelectField;
