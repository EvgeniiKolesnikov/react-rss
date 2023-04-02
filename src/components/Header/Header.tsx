import './Header.scss';

interface Props {
  name: string;
}

export default function Header({ name }: Props) {
  return <div className="header">{name}</div>;
}
