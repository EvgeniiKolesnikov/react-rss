import React, { Component } from 'react';
import './SearchBar.scss';

interface Props {
  value?: string;
}

interface State {
  value: string;
}

export default class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount(): void {
    const lastValue = localStorage.getItem('rss-input-value') || '';
    this.setState({ value: lastValue });
  }

  componentWillUnmount(): void {
    localStorage.setItem('rss-input-value', this.state.value);
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
        <input
          className="search-bar"
          onChange={this.onChange}
          type="text"
          value={this.state?.value || ''}
          placeholder="Search..."
          title="search-bar"
        />
      </>
    );
  }
}
