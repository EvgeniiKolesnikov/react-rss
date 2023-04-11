import './Backdrop.scss';

interface IBackdrop {
  closeDetails: () => void;
}

export default function Backdrop({ closeDetails }: IBackdrop) {
  return <div className="backdrop" onClick={closeDetails}></div>;
}
