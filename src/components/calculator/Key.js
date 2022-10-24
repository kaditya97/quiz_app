import React, { Component } from 'react';

export default class Key extends Component {
  classes = this.props.className ? this.props.className : 'calc-button';
  render() {
    return (
      <button
        className={this.classes}
        onClick={this.props.keyClick.bind(this, this.props.keyLog, this.props.math)}
      >{this.props.Tag}</button>
    );
  }
}

