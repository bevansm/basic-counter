import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  state = {
    value: this.props.value
  };

  styles = {
    fontSize: 25,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-info btn-sm m-2"
        >
          Increment
        </button>
        <button onClick={this.handleClear} className={this.formatClear()}>
          Clear
        </button>
        <button
          onClick={this.handleDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  handleDelete() {
    this.props.onClear(this.state.value);
    this.props.onDelete(this.props.id);
  }

  handleIncrement() {
    this.setState({ value: this.state.value + 1 });
    this.props.onIncrement(this.props.id);
  }

  handleClear() {
    this.props.onClear(this.state.value, this.state.id);
    this.setState({ value: 0 });
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatClear() {
    let classes = "btn btn-sm btn-";
    classes += this.state.value === 0 ? "secondary" : "info";
    return classes;
  }

  formatValue() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
