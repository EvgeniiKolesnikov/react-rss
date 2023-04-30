import './FormCards.scss';
import FormCard, { FormCardType } from 'components/FormCard/FormCard';

interface Props {
  formCards: FormCardType[];
}

export default function FormCards({ formCards }: Props) {
  return (
    <div className="form__cards">
      {formCards.map((formCard: FormCardType, i: number) => (
        <FormCard key={i} {...formCard} />
      ))}
    </div>
  );
}
