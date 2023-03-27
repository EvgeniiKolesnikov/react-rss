import FormCard, { FormCardType } from 'components/FormCard/FormCard';
import FormSubmitMessage from 'components/FormSubmitMessage/FormSubmitMessage';
import Header from 'components/Header/Header';
import React, { Component } from 'react';
import './Form.scss';

interface Props {
  value?: string;
}

interface State {
  isShowMessage: boolean;
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
      cards: [],
    };
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElem = e.target as HTMLFormElement;

    const newCard: FormCardType = {
      name: this.nameInput.current!.value,
      date: this.dateInput.current!.value,
      pet: this.selectPetInput.current!.value,
      assent: this.checkboxAssentInput.current!.checked,
      gender: this.radioInputMale.current!.checked ? 'Male' : 'Female',
      img: URL.createObjectURL(this.fileInput.current!.files![0]),
    };

    this.setState((state) => ({
      isShowMessage: state.isShowMessage,
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
            <label className="form__label">Name:</label>
            <input
              className="form__input"
              type="text"
              ref={this.nameInput}
              placeholder="Enter your name"
              pattern="^([A-ZА-Я][a-zа-я]{2,15})"
              required
            />
          </div>

          <div className="form__item">
            <label className="form__label">Date:</label>
            <input
              className="form__input"
              type="date"
              max="9999-12-31"
              ref={this.dateInput}
              placeholder="Enter date"
              required
            />
          </div>

          <div className="form__item">
            <label className="form__label">Your pet:</label>
            <select className="form__select" required ref={this.selectPetInput}>
              <option value="">Set your pet</option>
              <option value="No pet">No pet</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form__item">
            <label className="form__label">Cross my heart and hope to die. It is true</label>
            <input
              className="form__input"
              type="checkbox"
              ref={this.checkboxAssentInput}
              placeholder=""
              required
            />
          </div>

          <div className="form__item">
            <label className="form__label">Gender:</label>
            <input
              className="form__radio"
              type="radio"
              name="gender"
              value="male"
              ref={this.radioInputMale}
              required
            />
            Male
            <input
              className="form__radio"
              type="radio"
              name="gender"
              value="female"
              ref={this.radioInputFemale}
              required
            />
            Female
          </div>

          <div className="form__item">
            <label className="form__label"></label>
            <input
              className="form__input"
              type="file"
              ref={this.fileInput}
              placeholder="Add file"
              accept="image/*"
              required
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
