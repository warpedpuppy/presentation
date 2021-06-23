import React, { Component } from 'react';
// import BreathingAnimation from '././breathingAnimation';
import Fireworks from './Fireworks'
import Utils from '../utils/utils'
export default class Breathing extends Component {

componentDidMount = () => {
    Utils.getWidthAndHeight()
    // BreathingAnimation.init(Utils.canvasWidth, Utils.canvasHeight);
    Fireworks.init(Utils.canvasWidth, Utils.canvasHeight);
    window.addEventListener('resize', this.resizeHandler);
}
componentWillUnmount = () => {
    Fireworks.stop();
    window.removeEventListener('resize', this.resizeHandler);
}
resizeHandler = () => {
  Utils.getWidthAndHeight()
  Fireworks.resize(Utils.canvasWidth, Utils.canvasHeight);
}
  render() {
    return (
      <div id="breathing"></div>
    );
  }
}
