import FormCard, { FormCardType } from 'components/FormCard/FormCard';
import FormSubmitMessage from 'components/FormSubmitMessage/FormSubmitMessage';
import Header from 'components/Header/Header';
import LabelError from 'components/LabelError/LabelError';
import React, { useRef, useState } from 'react';
import './Form.scss';

type ErrorsType = {
  name: string;
  date: string;
  pet: string;
  assent: string;
  gender: string;
  img: string | null;
};

type Input = React.RefObject<HTMLInputElement>;
type Select = React.RefObject<HTMLSelectElement>;

export default function Form() {
  const nameInput: Input = useRef(null);
  const dateInput: Input = useRef(null);
  const selectPetInput: Select = useRef(null);
  const checkboxAssentInput: Input = useRef(null);
  const radioInputMale: Input = useRef(null);
  const radioInputFemale: Input = useRef(null);
  const fileInput: Input = useRef(null);

  const [isShowMessage, setIsShowMessage] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<ErrorsType>({
    name: '',
    date: '',
    pet: '',
    assent: '',
    gender: '',
    img: null,
  });
  const [cards, setCards] = useState<FormCardType[]>([]);

  function validate(newCard: FormCardType) {
    const errors: ErrorsType = {
      name: newCard.name.search(/^([A-ZА-Я][a-zа-я]{2,15})/)
        ? 'The Name should consist of 3-11 letters and start with a Capital letter'
        : '',
      date: newCard.date.length === 0 ? 'Invalid Date' : '',
      pet: newCard.pet.length === 0 ? 'Choose your pet' : '',
      assent: !newCard.assent ? 'Accept the consent' : '',
      gender: newCard.gender.length === 0 ? 'Choose a gender' : '',
      img: newCard.img ? '' : 'Add an image',
    };

    return errors;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElem = e.target as HTMLFormElement;

    const newCard: FormCardType = {
      name: nameInput.current!.value,
      date: dateInput.current!.value,
      pet: selectPetInput.current!.value,
      assent: checkboxAssentInput.current!.checked,
      gender: radioInputMale.current!.checked
        ? 'Male'
        : radioInputFemale.current!.checked
        ? 'Female'
        : '',
      img:
        (fileInput.current?.files &&
          fileInput.current?.files.length > 0 &&
          URL.createObjectURL(fileInput.current!.files![0])) ||
        null,
    };

    const errors = validate(newCard);
    setFormErrors(errors);

    const hasAnyError = Object.values(errors).some((v) => v || v !== '');

    if (hasAnyError) {
      return;
    }

    setFormErrors({ name: '', date: '', pet: '', assent: '', gender: '', img: null });
    setCards((prevCards) => [...prevCards, newCard]);

    formElem.reset();
    showSubmitMessage();
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
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__item">
          <LabelError value={formErrors.name} />
          <label className="form__label">Name:</label>
          <input
            className="form__input"
            type="text"
            ref={nameInput}
            placeholder="Enter your name"
          />
        </div>

        <div className="form__item">
          <LabelError value={formErrors.date} />
          <label className="form__label">Date:</label>
          <input
            className="form__input"
            type="date"
            max="9999-12-31"
            ref={dateInput}
            placeholder="Enter date"
          />
        </div>

        <div className="form__item">
          <LabelError value={formErrors.pet} />
          <label className="form__label">Your pet:</label>
          <select className="form__select" ref={selectPetInput}>
            <option value="">Set your pet</option>
            <option value="No pet">No pet</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form__item">
          <LabelError value={formErrors.assent} />
          <label className="form__label">Cross my heart and hope to die. It is true</label>
          <input className="form__input" type="checkbox" ref={checkboxAssentInput} />
        </div>

        <div className="form__item">
          <LabelError value={formErrors.gender} />
          <label className="form__label">Gender:</label>
          <input
            className="form__radio"
            type="radio"
            name="gender"
            value="male"
            ref={radioInputMale}
          />
          Male
          <input
            className="form__radio"
            type="radio"
            name="gender"
            value="female"
            ref={radioInputFemale}
          />
          Female
        </div>

        <div className="form__item">
          <LabelError value={formErrors.img} />
          <label className="form__label"></label>
          <input
            className="form__input"
            type="file"
            ref={fileInput}
            placeholder="Add file"
            accept="image/*"
          />
        </div>

        <input className="form__submit" type="submit" value="Submit" />
      </form>

      {isShowMessage && <FormSubmitMessage />}
      <div className="form__cards">
        {cards.map((formCard: FormCardType, i: number) => (
          <FormCard key={i} {...formCard} />
        ))}
      </div>
    </>
  );
}
