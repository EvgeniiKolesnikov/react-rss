import './FormCard.scss';

export type FormCardType = {
  name: string;
  date: string;
  pet: string;
  assent: boolean;
  gender: string;
  img: string | null;
};

export default function FormCard({ name, date, pet, assent, gender, img }: FormCardType) {
  return (
    <div className="form__card">
      <div className="form__card-item">Name: {name}</div>
      <div className="form__card-item">Date: {date}</div>
      <div className="form__card-item">Pet: {pet}</div>
      <div className="form__card-item">Assent: {assent ? 'Yes' : 'No'}</div>
      <div className="form__card-item">Gender: {gender}</div>
      {img && <img className="form__card-img" src={img} alt="card-image" />}
    </div>
  );
}
