import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class TextField extends Component {
  render() {
    const {
      value, onChange,
    } = this.props;
    // console.log(value);
    // console.log(disabled);
    // console.log(this.props);
    return (
      <>
        <input className="style_TextField" type="text" value={value} onChange={onChange} />
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
};
TextField.defaultProps = {
  // disabled: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  // error: PropTypes.string.isRequired,
  // pattern: PropTypes.pattern,
  onChange: PropTypes.func,
};
export default TextField;
