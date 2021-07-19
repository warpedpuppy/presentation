import React, { Component } from 'react';
// import BreathingAnimation from '././breathingAnimation';
import FireworksAnimation from './fireworksAnimation'
import Utils from '../utils/utils'
import PauseButton from '../PauseButton';
export default class Fireworks extends Component {

componentDidMount = () => {
    Utils.getWidthAndHeight()

    FireworksAnimation.init(Utils.canvasWidth, Utils.canvasHeight);
    window.addEventListener('resize', this.resizeHandler);
}
componentWillUnmount = () => {
  FireworksAnimation.stop();
    window.removeEventListener('resize', this.resizeHandler);
}
resizeHandler = () => {
  Utils.getWidthAndHeight()
  FireworksAnimation.resize(Utils.canvasWidth, Utils.canvasHeight);
}
  render() {
    return (
      <>
      <div id="breathing"></div>
      <PauseButton buttonHandler={FireworksAnimation} />
      </>
    );
  }
}
