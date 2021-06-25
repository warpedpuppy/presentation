import React, { Component } from 'react';
import DangerLandAnimation from './dangerlandAnimation';
import Utils from '../utils/utils';
import './DangerLand.css';
export default class DangerLand extends Component {

componentDidMount = () => {
    Utils.getWidthAndHeight()
    DangerLandAnimation.init(Utils.canvasWidth, Utils.canvasHeight);
    window.addEventListener('resize', this.resizeHandler);
}
componentWillUnmount = () => {
    DangerLandAnimation.stop();
    window.removeEventListener('resize', this.resizeHandler);
}
resizeHandler = () => {
  Utils.getWidthAndHeight()
  DangerLandAnimation.resize(Utils.canvasWidth, Utils.canvasHeight);
}
  render() {
    return (
      <>
      <div id="danger-land"></div>
      <div>hit space to jump!</div>
      </>
    );
  }
}
