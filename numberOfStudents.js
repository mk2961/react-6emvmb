import React from 'react';
import ReactDOM from 'react-dom';


class numberOfStudents extends App {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    };

    this.add = this.add.bind(this);
  }

  add() {
    this.setState({ count: this.state.count + 1 });
  }
  
  
  
  render() {
    return (
      <div>
        <div>Enrolled Students:{this.state.count}</div>
        <button onClick={this.add}>
          Add 1 Enrolled Student
        </button>

        <div>Add Multipul Enrolloed  Students:</div>
        <div><input></input><button onClick={this.subtract.bind(this)}>
          Increase Students
        </button></div>

        
      </div>
    );
}};

export default numberOfStudents;