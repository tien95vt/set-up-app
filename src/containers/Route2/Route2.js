import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import axios from 'axios';

class Route2 extends Component {
  getPost() {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => console.log(response.data));
  }

  render() {
    return (
      <div>
        <div>Test 2</div>
        <Button variant="success" onClick={this.getPost}>Get Post</Button>
      </div>
    );
  }
}

export default Route2;