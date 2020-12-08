import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Slider extends Component {
  id

  constructor(props) {
    super(props);

    this.state = {
      number: 1,
    };
  }

  componentDidMount() {
    console.log('inside Componant did Mount');
    this.id = setInterval(() => {
      console.log('inside SetInterval');
      this.setState((prevState) => ({ number: prevState.number + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log('inside Componant Will Unmount');
    clearInterval(this.id);
  }

  render() {
    const {
      alttext, banners, defaultbanner, duration, height, random,
    } = this.props;
    const { number } = this.state;
    return (
      <>
        <div className="style_slider">
          <b>
            THis is Slider
          </b>
          <div
            alttext={alttext}
            banners={banners}
            defaultbanner={defaultbanner}
            duration={duration}
            height={height}
            random={random}
          >
            <div>{alttext}</div>
            <div>{banners}</div>
            <div>{defaultbanner}</div>
            <div>{duration}</div>
            <div>{height}</div>
            <div>{random}</div>
            <div>{number}</div>
          </div>
        </div>
      </>
    );
  }
}
Slider.propTypes = {
  alttext: PropTypes.string,
  banners: PropTypes.instanceOf(Array),
  defaultbanner: PropTypes.string,
  duration: PropTypes.number,
  height: PropTypes.number,
  random: PropTypes.bool,
};
Slider.defaultProps = {
  alttext: PropTypes.defaultBanner,
  banners: PropTypes.array,
  defaultbanner: PropTypes.string,
  duration: PropTypes.number,
  height: PropTypes.number,
  random: PropTypes.bool,
};
export default Slider;
