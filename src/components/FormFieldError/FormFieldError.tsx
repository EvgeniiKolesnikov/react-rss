import './FormFieldError.scss';

interface Props {
  error: string | undefined;
}

export default function FormFieldError({ error }: Props) {
  return error ? <label className="form__field-error">{error}</label> : <></>;
}
