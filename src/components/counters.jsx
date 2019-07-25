import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ],
    sumOfValues: 4,
    nextId: 4
  };

  constructor() {
    super();
    this.addCounter = this.addCounter.bind(this);
    this.removeBottomCounter = this.removeBottomCounter.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  render() {
    return this.myCounters();
  }

  handleDelete = counterId => {
    console.log("Deletin'", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleClear = (clearedValue, counterId) => {
    console.log("before clear", this.state.sumOfValues);
    let counters = this.state.counters;
    let i = this.findIndexOfInCounters(counterId);
    counters[i].value = 0;
    let sumOfValues = this.state.sumOfValues - clearedValue;
    this.setState({ counters, sumOfValues });
    console.log("new sum", sumOfValues);
  };

  handleIncrement = counterId => {
    let counters = this.state.counters;
    let i = this.findIndexOfInCounters(counterId);
    counters[i].value = counters[i].value + 1;
    this.setState({ counters, sumOfValues: this.state.sumOfValues + 1 });
    console.log("sumOfValues", this.state.sumOfValues);
  };

  findIndexOfInCounters(counterId) {
    let counters = this.state.counters;
    let i = 0;
    for (let j = 0; j < counters.length; j++) {
      if (counters[j].id === counterId) {
        i = j;
        break;
      }
    }
    return i;
  }

  moshCountersChildrenProps() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onClear={this.handleClear}
            onIncrement={this.handleIncrement}
            value={counter.value}
            id={counter.id}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }

  myCounters() {
    return (
      <div>
        <h1>
          Total Counters: {this.state.counters.length}, Total Count:{" "}
          {this.state.sumOfValues}
        </h1>
        <h2>
          <button
            className="btn btn-primary btn-sm m-1"
            onClick={this.addCounter}
          >
            Add Counter
          </button>
          <button
            className={this.formatRemove()}
            onClick={this.removeBottomCounter}
          >
            Remove Bottom Counter
          </button>
          <button className={this.formatRemove()} onClick={this.clearAll}>
            Clear All
          </button>
        </h2>
        <div>
          {this.state.counters.map(counter => (
            <Counter
              key={counter.id}
              onDelete={this.handleDelete}
              onClear={this.handleClear}
              onIncrement={this.handleIncrement}
              value={counter.value}
              id={counter.id}
            >
              <h4>Counter #{counter.id}</h4>
            </Counter>
          ))}
        </div>
      </div>
    );
  }

  counterSize() {
    if (this.isEmpty()) {
      return 0;
    }
    return this.state.counters.length;
  }

  formatRemove() {
    let btn = "m-1 btn btn-sm btn-";
    if (this.isEmpty()) {
      return btn + "secondary";
    }
    return btn + "primary";
  }

  addCounter() {
    this.setState({
      counters: [...this.state.counters, { id: this.state.nextId, value: 0 }],
      nextId: this.state.nextId + 1
    });
  }

  removeBottomCounter() {
    if (!this.isEmpty()) {
      const counters = this.state.counters;
      let i = counters.length - 1;
      let id = counters[i].id;
      let value = counters[i].value;
      this.handleClear(value, id);
      this.handleDelete(id);
    }
  }

  clearAll() {
    this.setState({
      counters: [],
      sumOfValues: 0,
      nextId: 0
    });
  }

  isEmpty() {
    const counters = this.state.counters;
    return counters === undefined || counters.length === 0;
  }
}

export default Counters;
