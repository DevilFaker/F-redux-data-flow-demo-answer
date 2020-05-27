import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName } from '../actions';

class Name extends Component {
  render() {
    return (
      <div>
        Input your name, please!
        <input type="text" onChange={this.props.handleNameChange} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleNameChange(event) {
    dispatch(setName(event.target.value));
  }
});

export default connect(null, mapDispatchToProps)(Name);
