import React, { Component } from 'react';
import CandyAnimation from './candyAnimation';
import Utils from '../utils/utils';
import PauseButton from '../PauseButton';
export default class PezBackground extends Component {

  componentDidMount = async () => {
    setTimeout(this.createSwirls, 100)
    window.addEventListener('resize', this.resizeHandler);
  }
  createSwirls = () => {
    Utils.getWidthAndHeight()
    CandyAnimation.init(Utils.canvasWidth, Utils.canvasHeight);
  }
  componentWillUnmount = () => {
    CandyAnimation.destroy();
    window.removeEventListener('resize', this.resizeHandler);
  }
  resizeHandler = () => {
    Utils.getWidthAndHeight()
    CandyAnimation.resize(Utils.canvasWidth, Utils.canvasHeight);
  }

  render() {
    return <>
    <div id="candy-canvas"></div>
    <PauseButton buttonHandler={CandyAnimation} />
    </>;
  }
}
