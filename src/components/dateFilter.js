import React, { Component } from "react";

class DateFilter extends Component {
  constructor(props) {
    super(props);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(event) {
    this.props.onDateChange(event);
  }

  render() {
    let date = `${this.props.date.getFullYear()}-${String(
      this.props.date.getMonth() + 1
    ).padStart(2, 0)}-${String(this.props.date.getDate()).padStart(2, 0)}`;
    return (
      <div className="field">
        <div className="control has-icons-left">
          <input
            className="input"
            type="date"
            onChange={this.handleDateChange}
            value={date}
            name={this.props.name}
          />
          <span className="icon is-small is-left">
            <i className={`fas fa-${this.props.icon}`}></i>
          </span>
        </div>
      </div>
    );
  }
}

export default DateFilter;
