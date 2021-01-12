import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style';

class TextField extends Component {
  render() {
    const {
      value, onChange, onBlur, error,
    } = this.props;
    return (
      <>
        <input style={style.text} type="text" value={value} onChange={onChange} onBlur={onBlur} />
        {error ? <div style={{ color: 'red' }}>{error}</div> : ''}
      </>
    );
  }
}
TextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};
export default TextField;
