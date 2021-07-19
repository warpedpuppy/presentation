import React, { Component } from 'react';
import SwimAnimation from './supportingClasses/swimAnimation';
import './FishBackground.css'
import PauseButton from '../PauseButton';
export default class FishBackground extends Component {

  state={
    animation: undefined
  }
  componentDidMount = () => {
    this.swim = SwimAnimation()
    this.swim.init();
    this.setState({animation: this.swim})
  }
  componentWillUnmount = () => {
    this.swim.stop();
  }
  render() {
    return (
      <>
        <div id="fish-canvas"></div>
        {this.state.animation && <PauseButton buttonHandler={this.state.animation} />}
      </>
    );
  }
}
