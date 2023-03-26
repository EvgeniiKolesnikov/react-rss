import Header from 'components/Header/Header';
import React, { Component } from 'react';
import './Form.scss';

type CardType = {
  name: string;
  date?: Date;
};

interface Props {
  value?: string;
}

interface State {
  cards: CardType[];
}

export default class Form extends Component<Props, State> {
  private nameInput: React.RefObject<HTMLInputElement>;
  private dateInput: React.RefObject<HTMLInputElement>;
  private selectInput: React.RefObject<HTMLSelectElement>;
  private checkboxInput: React.RefObject<HTMLInputElement>;
  private fileInput: React.RefObject<HTMLInputElement>;
  private radioInputMale: React.RefObject<HTMLInputElement>;
  private radioInputFemale: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameInput = React.createRef();
    this.dateInput = React.createRef();
    this.selectInput = React.createRef();
    this.checkboxInput = React.createRef();
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

    console.log('Name: ' + this.nameInput.current?.value);
    const cardName = this.nameInput.current?.value;
    const newCard: CardType = { name: cardName || 'Www' };

    this.setState((state) => ({
      cards: [...state.cards, newCard],
    }));

    console.log(this.state);

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
            <select className="form__select" required ref={this.selectInput}>
              <option value="">Set your pet</option>
              <option value="no pet">no pet</option>
              <option value="dog">dog</option>
              <option value="cat">cat</option>
              <option value="other">other</option>
            </select>
          </div>

          <div className="form__item">
            <label className="form__label">Cross my heart and hope to die. It is true</label>
            <input
              className="form__input"
              type="checkbox"
              ref={this.checkboxInput}
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
          {this.state.cards.map((card: CardType, i: number) => (
            <div key={i} className="form__card">
              <div className="card__name">{card.name}</div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
