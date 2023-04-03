import './FormInputError.scss';

interface Props {
  error: string | undefined;
}

export default function FormInputError({ error }: Props) {
  return error ? <label className="form__input-error">{error}</label> : <></>;
}
