import FormCard, { FormCardType } from 'components/FormCard/FormCard';
import FormSubmitMessage from 'components/FormSubmitMessage/FormSubmitMessage';
import Header from 'components/Header/Header';
import LabelError from 'components/LabelError/LabelError';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Form.scss';

export default function Form() {
  const [isShowMessage, setIsShowMessage] = useState<boolean>(false);
  const [cards, setCards] = useState<FormCardType[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormCardType>({
    reValidateMode: 'onSubmit',
  });

  const onSubmit = (newCard: FormCardType) => {
    const fileList = newCard.img as FileList | null;
    const imgUrl = fileList && fileList?.length > 0 ? URL.createObjectURL(fileList[0]) : null;
    newCard.img = imgUrl;
    setCards((prevCards) => [...prevCards, newCard]);

    reset();
    showSubmitMessage();
  };

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
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__item">
          <LabelError error={errors.name?.message} />
          <label className="form__label">Name:</label>
          <input
            className="form__input"
            type="text"
            {...register('name', {
              validate: (n) =>
                n.search(/^([A-ZА-Я][a-zа-я]{2,15})/)
                  ? 'The Name should consist of 3-11 letters and start with a Capital letter'
                  : true,
            })}
            placeholder="Enter your name"
          />
        </div>

        <div className="form__item">
          <LabelError error={errors.date?.message} />
          <label className="form__label">Date:</label>
          <input
            className="form__input"
            type="date"
            {...register('date', {
              validate: (date) => {
                return date.length === 0 ? 'Invalid Date' : true;
              },
            })}
            max="9999-12-31"
            placeholder="Enter date"
          />
        </div>

        <div className="form__item">
          <LabelError error={errors.pet?.message} />
          <label className="form__label">Your pet:</label>
          <select
            className="form__select"
            {...register('pet', {
              validate: (pet) => {
                return pet.length === 0 ? 'Choose your pet' : true;
              },
            })}
          >
            <option value="">Set your pet</option>
            <option value="No pet">No pet</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form__item">
          <LabelError error={errors.assent?.message} />
          <label className="form__label">Cross my heart and hope to die. It is true</label>
          <input
            className="form__input"
            type="checkbox"
            {...register('assent', {
              validate: (assent) => (!assent ? 'Accept the consent' : true),
            })}
          />
        </div>

        <div className="form__item">
          <LabelError error={errors.gender?.message} />
          <label className="form__label">Gender:</label>
          <input
            className="form__radio"
            type="radio"
            value="male"
            {...register('gender', {
              required: 'Choose a gender',
            })}
          />
          Male
          <input
            className="form__radio"
            type="radio"
            value="female"
            {...register('gender', {
              required: 'Choose a gender',
            })}
          />
          Female
        </div>

        <div className="form__item">
          <LabelError error={errors.img?.message} />
          <label className="form__label"></label>
          <input
            className="form__input"
            type="file"
            {...register('img', {
              validate: (img) => (img && img.length > 0 ? true : 'Add an image'),
            })}
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
