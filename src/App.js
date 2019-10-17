import React, { Component } from "react";
import Hero from "./components/hero";
import Hotels from "./components/hotels";
import Filters from "./components/filters";

class App extends Component {
  constructor(props) {
    super(props);

    const today = new Date();

    this.state = {
      filters: {
        dateFrom: today,
        dateTo: new Date(today.valueOf() + 86400000), // 12 * 30 * 24 * 10.000
        country: undefined,
        price: undefined,
        rooms: undefined
      },
      hotels: []
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(payload) {
    this.setState({
      filters: payload
    });
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
    let { hotels, filters } = this.state;
    hotels = hotels.filter(
      hotel =>
        filters.dateFrom <= hotel.availabilityFrom &&
        filters.dateTo <= hotel.availabilityTo &&
        (filters.country ? hotel.country === filters.country : true) &&
        (filters.price ? hotel.price <= filters.price : true) &&
        (filters.rooms ? hotel.rooms <= filters.rooms : true)
    );

    return (
      <div>
        <Hero totalHotels={hotels.length} filters={filters} />
        <Filters
          filters={this.state.filters}
          onFilterChange={this.handleFilterChange}
        />
        <Hotels>{hotels}</Hotels>
      </div>
    );
  }
}

export default App;
