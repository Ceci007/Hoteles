import React, { Component } from "react";
import OptionsFilter from "./optionsFilter";
import DateFilter from "./dateFilter";

class Filters extends Component {
  constructor(props) {
    super(props);

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleDateChange(event) {
    let payload = this.props.filters;
    payload[event.target.name] = new Date(event.target.value);
    if (payload["dateFrom"].valueOf() >= payload["dateTo"].valueOf()) {
      payload["dateTo"] = new Date(payload["dateFrom"].valueOf() + 86400000);
    } else if (
      payload["dateTo"].valueOf() >
      payload["dateFrom"].valueOf() + 2592000000
    ) {
      payload["dateTo"] = new Date(payload["dateFrom"].valueOf() + 2592000000);
    }
    this.props.onFilterChange(payload);
  }

  handleOptionChange(event) {
    let payload = this.props.filters;
    payload[event.target.name] = event.target.value;

    this.props.onFilterChange(payload);
  }

  render() {
    return (
      <nav
        className="navbar is-info"
        style={{ justifyContent: "center", padding: "2rem 0" }}
      >
        <div className="navbar-item">
          <DateFilter
            date={this.props.filters.dateFrom}
            onDateChange={this.handleDateChange}
            name="dateFrom"
            icon="sign-in-alt"
          />
        </div>
        <div className="navbar-item">
          <DateFilter
            date={this.props.filters.dateTo}
            onDateChange={this.handleDateChange}
            name="dateTo"
            icon="sign-out-alt"
          />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            onOptionChange={this.handleOptionChange}
            options={[
              { value: undefined, name: "Todos los países" },
              { value: "Argentina", name: "Argentina" },
              { value: "Brasil", name: "Brasil" },
              { value: "Chile", name: "Chile" },
              { value: "Uruguay", name: "Uruguay" }
            ]}
            selected={this.props.filters.country}
            name="country"
            icon="globe"
          />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            onOptionChange={this.handleOptionChange}
            options={[
              { value: undefined, name: "Cualquier precio" },
              { value: 1, name: "$" },
              { value: 2, name: "$$" },
              { value: 3, name: "$$$" },
              { value: 4, name: "$$$$" }
            ]}
            selected={this.props.filters.price}
            name="price"
            icon="dollar-sign"
          />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            onOptionChange={this.handleOptionChange}
            options={[
              { value: undefined, name: "Cualquier tamaño" },
              { value: 10, name: "Hotel pequeño" },
              { value: 20, name: "Hotel mediano" },
              { value: 30, name: "Hotel grande" }
            ]}
            selected={this.props.filters.rooms}
            name="rooms"
            icon="bed"
          />
        </div>
      </nav>
    );
  }
}

export default Filters;
