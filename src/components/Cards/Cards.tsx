import { CardType } from 'types/api';
import './Cards.scss';
import Card from 'components/Card/Card';

type Cards = {
  cards: CardType[];
};

export default function Cards({ cards }: Cards) {
  return (
    <div className="cards">
      {cards.map((card: CardType) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}
