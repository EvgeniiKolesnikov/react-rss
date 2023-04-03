import './FormInputLabel.scss';

interface Props {
  text: string | undefined;
}

export default function FormInputLabel({ text }: Props) {
  return text ? <label className="form__input-label">{text}</label> : <></>;
}
