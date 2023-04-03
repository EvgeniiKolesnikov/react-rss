import './LabelError.scss';

interface Props {
  error: string | undefined;
}

export default function LabelError({ error }: Props) {
  return error ? <label className="form__label-error">{error}</label> : <></>;
}
