import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchCharacters } from './store/actions';
import CharacterCards from './components/CharacterCards';
import styled from 'styled-components';



function App(props) {
const fetchCharacters = e => {
  e.preventDefault();
  props.fetchCharacters()
}

return (
  <StyledDiv className="App">
    <StyledHead src="https://i.redd.it/o6cwlzg3exk41.png" alt="header" />
    <CharacterCards />
    <StyledButton onClick={fetchCharacters}>SHOW ME CHARACTERS</StyledButton>
  </StyledDiv>
);
}

const mapToStateProps = (state) => {
  return {
    characters: state.characters,
    isLoading: state.isLoading,
    error: state.error,
  }
}

const StyledHead = styled.img`
  width: 100%;
`

const StyledDiv = styled.div`
  margin: 0 auto;
`

const StyledButton = styled.button`
  background-color: #06A2CB;
  border-radius: 25px;
  color: black;
  font-family: 'monaco';
  padding: .5%;
  margin: 2% auto;
  transition: .2s ease-in-out;

  &:hover {
    background-color: limegreen;
    color: black;
    transition: .2s ease-in-out;
    transform: scale(1.1);
  }
`

export default connect(mapToStateProps, {fetchCharacters}) (App);
