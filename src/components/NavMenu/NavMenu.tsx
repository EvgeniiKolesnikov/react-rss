import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.scss';

interface State {
  name: string;
}

export default class NavMenu extends Component<Record<string, never>, State> {
  render() {
    return (
      <nav className="nav-menu" role="navigation">
        <ol className="nav-menu__list">
          <li className="nav-menu__item">
            <Link className="nav-menu__link" to="./">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-menu__link" to="./aboutus">
              About Us
            </Link>
          </li>
        </ol>
      </nav>
    );
  }
}
