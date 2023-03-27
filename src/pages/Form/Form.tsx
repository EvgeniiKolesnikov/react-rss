import FormCard, { FormCardType } from 'components/FormCard/FormCard';
import FormSubmitMessage from 'components/FormSubmitMessage/FormSubmitMessage';
import Header from 'components/Header/Header';
import React, { Component } from 'react';
import './Form.scss';

type ErrorsType = {
  name: string;
  date: string;
  pet: string;
  assent: string;
  gender: string;
  img: string | null;
};

interface Props {
  value?: string;
}

interface State {
  isShowMessage: boolean;
  errors: ErrorsType;
  cards: FormCardType[];
}

export default class Form extends Component<Props, State> {
  private nameInput: React.RefObject<HTMLInputElement>;
  private dateInput: React.RefObject<HTMLInputElement>;
  private selectPetInput: React.RefObject<HTMLSelectElement>;
  private checkboxAssentInput: React.RefObject<HTMLInputElement>;
  private radioInputMale: React.RefObject<HTMLInputElement>;
  private radioInputFemale: React.RefObject<HTMLInputElement>;
  private fileInput: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameInput = React.createRef();
    this.dateInput = React.createRef();
    this.selectPetInput = React.createRef();
    this.checkboxAssentInput = React.createRef();
    this.radioInputMale = React.createRef();
    this.radioInputFemale = React.createRef();
    this.fileInput = React.createRef();

    this.state = {
      isShowMessage: false,
      errors: { name: '', date: '', pet: '', assent: '', gender: '', img: null },
      cards: [],
    };
  }

  validate(newCard: FormCardType) {
    const errors: ErrorsType = {
      name: newCard.name.search(/^([A-ZА-Я][a-zа-я]{2,15})/)
        ? 'The Name should consist of 3-11 letters and start with a Capital letter'
        : '',
      date: newCard.date.length === 0 ? 'Invalid Date' : '',
      pet: newCard.pet.length === 0 ? 'Choose your pet' : '',
      assent: !newCard.assent ? 'Accept the consent' : '',
      gender: newCard.gender.length === 0 ? 'Choose gender' : '',
      img: newCard.img ? '' : 'Add an image',
    };

    return errors;
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElem = e.target as HTMLFormElement;

    const newCard: FormCardType = {
      name: this.nameInput.current!.value,
      date: this.dateInput.current!.value,
      pet: this.selectPetInput.current!.value,
      assent: this.checkboxAssentInput.current!.checked,
      gender: this.radioInputMale.current!.checked
        ? 'Male'
        : this.radioInputFemale.current!.checked
        ? 'Female'
        : '',
      img:
        (this.fileInput.current?.files &&
          this.fileInput.current?.files.length > 0 &&
          URL.createObjectURL(this.fileInput.current!.files![0])) ||
        null,
    };

    const errors = this.validate(newCard);

    this.setState((state) => ({
      isShowMessage: state.isShowMessage,
      errors: errors,
      cards: [...state.cards],
    }));

    const hasAnyError = Object.values(errors).some((v) => v || v !== '');

    if (hasAnyError) {
      return;
    }

    this.setState((state) => ({
      isShowMessage: state.isShowMessage,
      errors: { name: '', date: '', pet: '', assent: '', gender: '', img: null },
      cards: [...state.cards, newCard],
    }));

    formElem.reset();
    this.showSubmitMessage();
  }

  showSubmitMessage(): void {
    this.setState((prevState) => ({
      isShowMessage: true,
      cards: prevState.cards,
    }));

    const timer: NodeJS.Timeout = setTimeout(() => {
      this.setState((prevState) => ({
        isShowMessage: false,
        cards: prevState.cards,
      }));
      clearTimeout(timer);
    }, 3000);
  }

  render() {
    return (
      <>
        <Header name="Form" />
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form__item">
            {this.state.errors.name && (
              <label className="form__label-error">{this.state.errors.name}</label>
            )}
            <label className="form__label">Name:</label>
            <input
              className="form__input"
              type="text"
              ref={this.nameInput}
              placeholder="Enter your name"
            />
          </div>

          <div className="form__item">
            {this.state.errors.date && (
              <label className="form__label-error">{this.state.errors.date}</label>
            )}
            <label className="form__label">Date:</label>
            <input
              className="form__input"
              type="date"
              max="9999-12-31"
              ref={this.dateInput}
              placeholder="Enter date"
            />
          </div>

          <div className="form__item">
            {this.state.errors.pet && (
              <label className="form__label-error">{this.state.errors.pet}</label>
            )}
            <label className="form__label">Your pet:</label>
            <select className="form__select" ref={this.selectPetInput}>
              <option value="">Set your pet</option>
              <option value="No pet">No pet</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form__item">
            {this.state.errors.assent && (
              <label className="form__label-error">{this.state.errors.assent}</label>
            )}
            <label className="form__label">Cross my heart and hope to die. It is true</label>
            <input className="form__input" type="checkbox" ref={this.checkboxAssentInput} />
          </div>

          <div className="form__item">
            {this.state.errors.gender && (
              <label className="form__label-error">{this.state.errors.gender}</label>
            )}
            <label className="form__label">Gender:</label>
            <input
              className="form__radio"
              type="radio"
              name="gender"
              value="male"
              ref={this.radioInputMale}
            />
            Male
            <input
              className="form__radio"
              type="radio"
              name="gender"
              value="female"
              ref={this.radioInputFemale}
            />
            Female
          </div>

          <div className="form__item">
            {this.state.errors.img && (
              <label className="form__label-error">{this.state.errors.img}</label>
            )}
            <label className="form__label"></label>
            <input
              className="form__input"
              type="file"
              ref={this.fileInput}
              placeholder="Add file"
              accept="image/*"
            />
          </div>

          <input className="form__submit" type="submit" value="Submit" />
        </form>

        {this.state.isShowMessage && <FormSubmitMessage />}
        <div className="form__cards">
          {this.state.cards.map((formCard: FormCardType, i: number) => (
            <FormCard key={i} {...formCard} />
          ))}
        </div>
      </>
    );
  }
}
