import { CardType } from 'types/api';
import './DetailedCard.scss';

interface IDetailedCard {
  closeDetails: () => void;
  card: CardType;
}

export default function DetailedCard({ card, closeDetails }: IDetailedCard) {
  return (
    <div className="detailed-card">
      <div className="detailed-card__close" onClick={closeDetails}></div>
      <img className="detailed-card__image" src={card.image} alt={`${card.name} image`} />
      <div className="detailed-card__name">{card.name}</div>

      <div className="detailed-card__about">
        <div className="detailed-card__left-side">
          <div className="detailed-card__item">Gender</div>
          <div className="detailed-card__item">Status</div>
          <div className="detailed-card__item">Location</div>
          <div className="detailed-card__item">Species</div>
        </div>
        <div className="detailed-card__right-side">
          <div className="detailed-card__gender">{card.gender}</div>
          <div className="detailed-card__gender">{card.status}</div>
          <div className="detailed-card__gender">{card.location.name}</div>
          <div className="detailed-card__gender">{card.species}</div>
        </div>
      </div>
    </div>
  );
}
