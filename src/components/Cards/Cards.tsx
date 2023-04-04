import './Cards.scss';
import CardsData, { cardType } from '../../data/CardsData';
import Card from 'components/Card/Card';

export default function Cards() {
  return (
    <div className="cards">
      {CardsData.map((card: cardType) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}
