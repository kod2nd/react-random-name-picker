import React, { Component } from 'react';
import RandomButton from './RandomButton';
import Title from './Title'
import DisplayWinners from './DisplayWinners'
import Form from './Form'
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

        <DisplayWinners winnerSelector={this.state.names} winnerIndex={this.state.luckyWinnerIndex} />

        <RandomButton handleClick={() => this.handleClick()} />

        <Form userInputValue={this.state.valueOfInputBox} onChange={(event) => this.handleChange(event)} onClick={() => this.handleUpdateNamesClick()} />
      </div>
    );
  };

  handleClick() {
    return this.setState({
      luckyWinnerIndex: math.randomInt(this.state.names.length)
    });
  }

  handleChange(event) {
    return this.setState({
      valueOfInputBox: event.target.value
    })
  }

  handleUpdateNamesClick() {
    this.setState({
      names: [...this.state.names, this.state.valueOfInputBox],
    });

    this.setState({ valueOfInputBox: "" })
  }


}

export default App;
