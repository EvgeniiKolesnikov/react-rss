import { cardType } from 'data/CardsData';
import './Card.scss';

export default function Card({ id, img, brand, desc, price }: cardType) {
  return (
    <div className="card">
      <img className="card__image" src={img} alt={`card image ${id}`} />
      <div className="card__price">{price}</div>
      <div className="card__brand">{brand}</div>
      <div className="card__desc">{desc}</div>
    </div>
  );
}
