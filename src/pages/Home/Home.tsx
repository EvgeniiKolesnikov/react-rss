import Cards from 'components/Cards/Cards';
import Header from 'components/Header/Header';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { Component } from 'react';
import './Home.scss';

export default class Home extends Component {
  render() {
    console.log('Home');

    return (
      <>
        <Header name="Home" />
        <SearchBar />
        <Cards />
      </>
    );
  }
}
