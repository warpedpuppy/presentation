import React, { Component } from 'react';
import PsychologyAnimation from './psychologyAnimation';
import Utils from '../utils/utils';
export default class Frustration extends Component {

componentDidMount = () => {
    Utils.getWidthAndHeight()
    PsychologyAnimation.init(Utils.canvasWidth, Utils.canvasHeight);
    window.addEventListener('resize', this.resizeHandler);
}
componentWillUnmount = () => {
  PsychologyAnimation.stop();
    window.removeEventListener('resize', this.resizeHandler);
}
resizeHandler = () => {
  Utils.getWidthAndHeight()
  PsychologyAnimation.resize(Utils.canvasWidth, Utils.canvasHeight);
}
  render() {
    return (
      <div id="psychology"></div>
    );
  }
}
