import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends Component {
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
  subtract() {
    this.setState({ count: this.state.count - 1 });
  }
  
  render() {
    return (
      <div>
        <div>WaitListed Students:{this.state.count}</div>
        <button onClick={this.add}>
          Add 1 WaitListed Students:
        </button>
        <div>Add mulitpul WaitListed Students:</div>
        <div><input><button onClick ={this.add}>
          
        </button></input></div>
        
      </div>
    );
  }
}
export default numberOfWaitList;