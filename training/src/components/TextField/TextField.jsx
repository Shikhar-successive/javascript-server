import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style';

class TextField extends Component {
  render() {
    const {
      value, onChange, onBlur, error,
    } = this.props;
    // console.log(value);
    // console.log(disabled);
    // console.log(this.props);
    return (
      <>
        <input style={style.text} type="text" value={value} onChange={onChange} onBlur={onBlur} />
        {error ? <div style={{ color: 'red' }}>{error}</div> : ''}
      </>
    );
  }
}
TextField.propTypes = {
  // disabled: PropTypes.bool,
  value: PropTypes.string,
  // error: PropTypes.string,
  // pattern: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
};
TextField.defaultProps = {
  // disabled: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  // error: PropTypes.string.isRequired,
  // pattern: PropTypes.pattern,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
};
export default TextField;
