import Form from 'components/Form/Form';
import FormCards from 'components/FormCards/FormCards';
import FormSubmitMessage from 'components/FormSubmitMessage/FormSubmitMessage';
import Header from 'components/Header/Header';
import { FormCardType } from 'components/FormCard/FormCard';
import { useState } from 'react';
import './FormPage.scss';

export default function FormPage() {
  const [isShowMessage, setIsShowMessage] = useState<boolean>(false);
  const [cards, setCards] = useState<FormCardType[]>([]);

  function updateCards(newCard: FormCardType) {
    setCards((prevCards) => [...prevCards, newCard]);
  }

  function showSubmitMessage(): void {
    setIsShowMessage(true);

    const timer: NodeJS.Timeout = setTimeout(() => {
      setIsShowMessage(false);
      clearTimeout(timer);
    }, 3000);
  }

  return (
    <>
      <Header name="Form" />
      <Form updateCards={updateCards} showSubmitMessage={showSubmitMessage} />
      {isShowMessage && <FormSubmitMessage />}
      <FormCards formCards={cards} />
    </>
  );
}
