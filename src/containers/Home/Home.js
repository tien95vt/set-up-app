import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import * as actions from '../../store/actions/index';

class Home extends Component {
  render() {
    return (
      <div>
        <div>Home Page</div>
        <p>a1: <strong>{this.props.a1}</strong></p>
        <p>b1: <strong>{this.props.b1}</strong></p>
        <Button variant="primary" onClick={this.props.handleAAA111}>Handle AAA111</Button>
        <Button variant="warning" onClick={() => this.props.handleBBB111(20)}>Handle BBB111</Button>
      </div>

    );

  }
}

const mapStateToProps = state => {
  return {
    a1: state.aaaReducer.a1,
    a2: state.aaaReducer.a2,
    b1: state.bbbReducer.b1,
    b2: state.bbbReducer.b2
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleAAA111: () => dispatch(actions.handleAAA111()),
    handleBBB111: (count) => dispatch(actions.handleBBB111(count))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);