import React, { Component } from 'react';
import SwimAnimation from './supportingClasses/swimAnimation';

export default class FishBackground extends Component {

  componentDidMount = () => {
    this.swim = SwimAnimation()
    this.swim.init();
  }
  componentWillUnmount = () => {
    this.swim.stop();
  }
  render() {
    return (
      <div id="fish-canvas"></div>
    );
  }
}
