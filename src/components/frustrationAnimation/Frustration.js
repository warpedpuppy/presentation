import React, { Component } from 'react';
import FrustrationAnimation from './frustrationAnimation';
import Utils from './utils';
export default class Frustration extends Component {

componentDidMount = () => {
    Utils.getWidthAndHeight()
    FrustrationAnimation.init(Utils.canvasWidth, Utils.canvasHeight);
    window.addEventListener('resize', this.resizeHandler);
}
componentWillUnmount = () => {
    FrustrationAnimation.stop();
    window.removeEventListener('resize', this.resizeHandler);
}
resizeHandler = () => {
  Utils.getWidthAndHeight()
  FrustrationAnimation.resize(Utils.canvasWidth, Utils.canvasHeight);
}
  render() {
    return (
      <div id="frustration"></div>
    );
  }
}
