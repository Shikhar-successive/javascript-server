import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style';

class TextField extends Component {
  render() {
    const {
      value, onChange, onBlur, error, disabled,
    } = this.props;
    return (
      <>
        <input style={style.text} type="text" defaultValue={value} onChange={onChange} onBlur={onBlur} disabled={disabled} />
        {error ? <div style={{ color: 'red' }}>{error}</div> : ''}
      </>
    );
  }
}
TextField.propTypes = {
  disabled: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};
export default TextField;
