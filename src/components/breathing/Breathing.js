import React, { Component } from 'react';
import BreathingAnimation from '././breathingAnimation';
import Utils from '../utils/utils';
export default class Breathing extends Component {

componentDidMount = () => {
    Utils.getWidthAndHeight()
    BreathingAnimation.init(Utils.canvasWidth, Utils.canvasHeight);
    window.addEventListener('resize', this.resizeHandler);
}
componentWillUnmount = () => {
    BreathingAnimation.stop();
    window.removeEventListener('resize', this.resizeHandler);
}
resizeHandler = () => {
  Utils.getWidthAndHeight()
  BreathingAnimation.resize(Utils.canvasWidth, Utils.canvasHeight);
}
  render() {
    return (
      <div id="breathing"></div>
    );
  }
}
