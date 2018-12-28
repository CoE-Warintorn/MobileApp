import React, { Component } from 'react';

class CharacterCard extends Component {
  state = {
    activated: false
  }

  handleClick = () => {
    this.setState({ activated: true })
  }

  render() {
    return (
      <div onClick={this.handleClick} style={{ color: this.state.activated ? 'red' : 'black' }}>
        {this.props.value}
      </div>
    );
  }
}

export default CharacterCard;
