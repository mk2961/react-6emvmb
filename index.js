import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import numberOfStudents from './numberOfStudents';
import numberOfWaitList from './numberOfWaitList';
import propTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        <numberOfStudents></numberOfStudents>>
        <numberOfWaitList></numberOfWaitList>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
