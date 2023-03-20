import React, { Component } from 'react';
import './Header.scss';

interface Props {
  name: string;
}

interface State {
  name: string;
}

export default class Header extends Component<Props, State> {
  render() {
    return <div className="header">{this.props.name}</div>;
  }
}
