import React, { Component } from 'react';
import './LabelError.scss';

interface Props {
  value: string | null;
}

export default class LabelError extends Component<Props> {
  render() {
    return this.props.value && <label className="form__label-error">{this.props.value}</label>;
  }
}
