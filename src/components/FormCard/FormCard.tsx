import { FormCardType } from 'pages/Form/Form';
import React, { Component } from 'react';
import './FormCard.scss';

export default class FormCard extends Component<FormCardType> {
  constructor(card: FormCardType) {
    super(card);
  }
  render() {
    return (
      <div className="form__card">
        <div className="form__card-item">Name: {this.props.name}</div>
        <div className="form__card-item">Date: {this.props.date}</div>
        <div className="form__card-item">Pet: {this.props.pet}</div>
        <div className="form__card-item">Assent: {this.props.assent ? 'Yes' : 'No'}</div>
        <div className="form__card-item">Gender: {this.props.gender}</div>
        <img className="form__card-img" src={this.props.img} alt="card-image" />
      </div>
    );
  }
}
