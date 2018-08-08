import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../../store/actions/counter.action';

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="counter">
        <span>{this.props.counter.count}</span>
        
        <div className="counter__actions">
          <button className="btn btn--counter btn--counter--increase" onClick={this.props.increase}>Increase</button>
          <button className="btn btn--coutner btn--counter--decrease" onClick={this.props.decrease}>Decrease</button>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    counter: state.counter,
  }),
  {
    increase,
    decrease,
  }
)(Counter);