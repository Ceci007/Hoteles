import React, { Component } from "react";
import Hero from "./components/hero";
import Hotels from "./components/hotels";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotels: ""
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica"
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ hotels: json, hotelsLoaded: true });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { hotels } = this.state;

    return (
      <div>
        <Hero totalHotels={hotels.length} />
        <Hotels>{hotels}</Hotels>
      </div>
    );
  }
}

export default App;
