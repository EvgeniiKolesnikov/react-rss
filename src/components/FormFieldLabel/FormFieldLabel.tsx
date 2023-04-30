import './FormFieldLabel.scss';

interface Props {
  text: string | undefined;
}

export default function FormFieldLabel({ text }: Props) {
  return text ? <label className="form__field-label">{text}</label> : <></>;
}
