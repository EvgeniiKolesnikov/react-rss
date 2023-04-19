import Form from 'components/Form/Form';
import FormCards from 'components/FormCards/FormCards';
import FormSubmitMessage from 'components/FormSubmitMessage/FormSubmitMessage';
import Header from 'components/Header/Header';
import { addFormCard } from 'redux/formCardsSlice';
import { FormCardType } from 'components/FormCard/FormCard';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useEffect, useState } from 'react';
import './FormPage.scss';

export default function FormPage() {
  const formCards = useAppSelector((state) => state.formCards.formCards);
  const dispatch = useAppDispatch();

  const [isShowMessage, setIsShowMessage] = useState<boolean>(false);
  const [cards, setCards] = useState<FormCardType[]>(formCards);

  useEffect(() => {
    setCards(formCards);
  }, [formCards]);

  function showSubmitMessage(): void {
    setIsShowMessage(true);
    setTimeout(() => {
      setIsShowMessage(false);
    }, 3000);
  }

  function updateCards(newCard: FormCardType) {
    dispatch(addFormCard(newCard));
    showSubmitMessage();
  }

  return (
    <>
      <Header name="Form" />
      <Form updateCards={updateCards} />
      {isShowMessage && <FormSubmitMessage />}
      <FormCards formCards={cards} />
    </>
  );
}
