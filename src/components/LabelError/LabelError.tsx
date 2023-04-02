import './LabelError.scss';

interface Props {
  value: string | null;
}

export default function LabelError({ value }: Props) {
  return value ? <label className="form__label-error">{value}</label> : <></>;
}
