import React, { Component } from 'react';
import './Cards.scss';
import CardsData, { cardType } from '../../data/CardsData';
import Card from 'components/Card/Card';

interface State {
  name: string;
}

export default class Cards extends Component<Record<string, never>, State> {
  render() {
    return (
      <div className="cards">
        {CardsData.map((card: cardType) => (
          <Card
            key={card.id}
            id={card.id}
            img={card.img}
            price={card.price}
            brand={card.brand}
            desc={card.desc}
          />
        ))}
      </div>
    );
  }
}
