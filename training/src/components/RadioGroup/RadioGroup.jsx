import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RadioGroup extends Component {
  render() {
    const { onChange, options } = this.props;
    console.log(options[0]);
    return (
      <>
        <div>
          <input type="radio" name="sportRole" id="role" value={options[0].value} onChange={onChange} />
          <label htmlFor={options[0].label}>
            {' '}
            {options[0].value}
          </label>
        </div>
        <div>
          <input type="radio" name="sportRole" id="role" value={options[1].value} onChange={onChange} />
          <label htmlFor={options[1].label}>
            {' '}
            {options[1].value}
          </label>
        </div>
        <div>
          <input type="radio" name="sportRole" id="role" value={options[2].value} onChange={onChange} />
          <label htmlFor={options[2].label}>
            {' '}
            {options[2].value}
          </label>
        </div>
        <div>
          <input type="radio" name="sportRole" id="role" value={options[3].value} onChange={onChange} />
          <label htmlFor={options[0].label}>
            {' '}
            {options[3].value}
          </label>
        </div>
      </>
    );
  }
}
RadioGroup.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.instanceOf(Array),
};

RadioGroup.defaultProps = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.instanceOf(Array),
};
export default RadioGroup;
