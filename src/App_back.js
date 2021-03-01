import React, { Component } from "react";
import "./App.css";

import Header from "./components/header/header.component";
import ItemsList from "./components/items-list/items-list.component";
import CustomInput from "./components/custom-input/custom-input.component";

import TASK_DATA from "./data/task-data";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: TASK_DATA,
      newTask: {
        title: "",
        completed: false,
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState(
      {
        tasks: [...this.state.tasks, this.state.newTask],
        newTask: {
          title: "",
          completed: false,
        },
      },
      () => console.log(this.state)
    );
  };

  handleChange = (e) => {
    this.setState({
      newTask: {
        title: e.target.value,
        completed: false,
      },
    });
  };

  render() {
    const { tasks } = this.state;
    // console.log(tasks);
    return (
      <div className="app">
        <Header />
        <form onSubmit={this.handleSubmit}>
          <CustomInput
            name="add-note"
            placeholder="Create task"
            onChange={this.handleChange}
            value={this.state.newTask.title}
            type="text"
          />
        </form>
        <ItemsList tasks={tasks} />
      </div>
    );
  }
}

export default App;
