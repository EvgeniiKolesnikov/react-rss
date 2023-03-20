import { cardType } from 'data/CardsData';
import React, { Component } from 'react';
import './Card.scss';

interface State {
  name: string;
}

export default class Card extends Component<cardType, State> {
  constructor(card: cardType) {
    super(card);
  }
  render() {
    return (
      <div className="card">
        <img className="card__image" src={this.props.img} alt={this.props.img} />
        <div className="card__price">{this.props.price}</div>
        <div className="card__brand">{this.props.brand}</div>
        <div className="card__desc">{this.props.desc}</div>
      </div>
    );
  }
}
