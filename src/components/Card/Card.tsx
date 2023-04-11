import { CardType } from 'types/api';
import './Card.scss';
import Backdrop from 'components/Backdrop/Backdrop';
import { useState } from 'react';
import DetailedCard from 'components/DetailedCard/DetailedCard';

export default function Card(props: CardType) {
  const [isShowDetails, setIsShowDetails] = useState(false);

  const onClick = () => {
    setIsShowDetails(true);
  };

  const closeDetails = () => {
    setIsShowDetails(false);
  };

  return (
    <>
      {isShowDetails && <DetailedCard closeDetails={closeDetails} card={props} />}
      {isShowDetails && <Backdrop closeDetails={closeDetails} />}

      <div className="card" onClick={onClick}>
        <img className="card__image" src={props.image} alt={`${props.name} image`} />
        <div className="card__name">{props.name}</div>
      </div>
    </>
  );
}
