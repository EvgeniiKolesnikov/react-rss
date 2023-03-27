import Header from 'components/Header/Header';
import React, { Component } from 'react';
import './Form.scss';

export type FormCardType = {
  name: string;
  date: string;
  pet: string;
  assent: boolean;
  gender: string;
};

interface Props {
  value?: string;
}

interface State {
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
    };

    this.setState((state) => ({
      cards: [...state.cards, newCard],
    }));

    formElem.reset();
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
              required
            />
          </div>

          <input className="form__submit" type="submit" value="Отправить" />
        </form>

        <div className="form__cards">
          {this.state.cards.map((card: FormCardType, i: number) => (
            <div key={i} className="form__card">
              <div className="form__card-item">Name: {card.name}</div>
              <div className="form__card-item">Date: {card.date}</div>
              <div className="form__card-item">Pet: {card.pet}</div>
              <div className="form__card-item">Assent: {card.assent ? 'Yes' : 'No'}</div>
              <div className="form__card-item">Gender: {card.gender}</div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
