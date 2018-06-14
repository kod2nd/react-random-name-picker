import React, { Component } from 'react';
import RandomButton from './RandomButton';
import Title from './Title'
import DisplayWinners from './DisplayWinners'
import math from "mathjs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ["gordon", "sahil", "david", "sally", "jane", "alice"],
      luckyWinnerIndex: null,
      valueOfInputBox: ""
    }
    // this.handleClick = this.handleClick.bind(this);
  };

  render() {
    return (
      <div>
        <Title />
        {/* <h3>The winner is: {this.state.names[this.state.luckyWinnerIndex]}</h3> */}

        <DisplayWinners winner={this.state}/>

        <RandomButton handleClick={() => this.handleClick()} />
      </div>
    );
  };

  handleClick() {
    return this.setState({
      luckyWinnerIndex: math.randomInt(this.state.names.length)
    });
  }
}

export default App;
