import React, { Component } from 'react';
import PezAnimation from './pezAnimation';
import Utils from './utils';
export default class PezBackground extends Component {

  componentDidMount = async () => {
    setTimeout(this.createSwirls, 100)
    window.addEventListener('resize', this.resizeHandler);
  }
  createSwirls = () => {
    Utils.getWidthAndHeight()
    PezAnimation.init(Utils.canvasWidth, Utils.canvasHeight);
  }
  componentWillUnmount = () => {
    PezAnimation.destroy();
    window.removeEventListener('resize', this.resizeHandler);
  }
  resizeHandler = () => {
    Utils.getWidthAndHeight()
    PezAnimation.resize(Utils.canvasWidth, Utils.canvasHeight);
  }

  render() {
    return <div id="pez-canvas"></div>;
  }
}
