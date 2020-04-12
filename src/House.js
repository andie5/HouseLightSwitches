import React from "react";

class House extends React.Component {
  state = {
    rooms: {
      kitchen: true,
      bathroom: false,
      livingRoom: true,
      bedroom: false,
    },
  };

  handleKitchenLight = (action) => {
    this.state.rooms.kitchen
      ? this.setState({ rooms: { ...this.state.rooms, kitchen: false } })
      : this.setState({ rooms: { ...this.state.rooms, kitchen: true } });
  };

  handleBathroomLight = (action) => {
    this.state.rooms.bathroom
      ? this.setState({ rooms: { ...this.state.rooms, bathroom: false } })
      : this.setState({ rooms: { ...this.state.rooms, bathroom: true } });
  };

  handleLivingLight = (action) => {
    this.state.rooms.livingRoom
      ? this.setState({ rooms: { ...this.state.rooms, livingRoom: false } })
      : this.setState({ rooms: { ...this.state.rooms, livingRoom: true } });
  };

  handleBedroomLight = (action) => {
    this.state.rooms.bedroom
      ? this.setState({ rooms: { ...this.state.rooms, bedroom: false } })
      : this.setState({ rooms: { ...this.state.rooms, bedroom: true } });
  };

  // Check the status of the light and display text to show whether it is on and off
  checkLight = (currentLight) => {
    return currentLight ? "ON" : "OFF";
  };

  render() {
    return (
      <div>
        Kitchen light is: {this.checkLight(this.state.rooms.kitchen)}
        <div>
          <button onClick={this.handleKitchenLight}>Kitchen light</button>
        </div>
        <br />
        Bathroom light is: {this.checkLight(this.state.rooms.bathroom)}
        <div>
          <button onClick={this.handleBathroomLight}>Bathroom light</button>
        </div>
        <br />
        Living room light is: {this.checkLight(this.state.rooms.livingRoom)}
        <div>
          <button onClick={this.handleLivingLight}>Living Room light</button>
        </div>
        <br />
        Bedroom room light is: {this.checkLight(this.state.rooms.bedroom)}
        <div>
          <button onClick={this.handleBedroomLight}>Bedroom light</button>
        </div>
      </div>
    );
  }
}

export default House;
