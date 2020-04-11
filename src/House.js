import React from "react";

class House extends React.Component {
  state = {
    kitchen: true,
    bathroom: false,
    livingRoom: true,
    bedroom: false,
  };

  handleKitchenLight = (action) => {
    this.state.kitchen
      ? this.setState({ kitchen: false })
      : this.setState({ kitchen: true });
  };

  handleBathroomLight = (action) => {
    this.state.bathroom
      ? this.setState({ bathroom: false })
      : this.setState({ bathroom: true });
  };

  handleLivingLight = (action) => {
    this.state.livingRoom
      ? this.setState({ livingRoom: false })
      : this.setState({ livingRoom: true });
  };

  handleBedroomLight = (action) => {
    this.state.bedroom
      ? this.setState({ bedroom: false })
      : this.setState({ bedroom: true });
  };

  render() {
    return (
      <div>
        Kitchen light is: {this.state.kitchen ? "ON" : "OFF"}
        <div>
          <button onClick={this.handleKitchenLight}>Kitchen light</button>
        </div>
        <br />
        Bathroom light is: {this.state.bathroom ? "ON" : "OFF"}
        <div>
          <button onClick={this.handleBathroomLight}>Bathroom light</button>
        </div>
        <br />
        Living room light is: {this.state.livingRoom ? "ON" : "OFF"}
        <div>
          <button onClick={this.handleLivingLight}>Living Room light</button>
        </div>
        <br />
        Bedroom room light is: {this.state.bedroom ? "ON" : "OFF"}
        <div>
          <button onClick={this.handleBedroomLight}>Bedroom light</button>
        </div>
      </div>
    );
  }
}

export default House;
