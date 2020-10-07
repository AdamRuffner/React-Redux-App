import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchCharacters } from './store/actions';
import CharacterCards from './components/CharacterCards';



function App(props) {
const fetchCharacters = e => {
  e.preventDefault();
  props.fetchCharacters()
}

  return (
    <div className="App">
        <h1>Find All the Characters!</h1>
        {props.characters.map((character) => (
          <h2 key={character.id} > {character.name}</h2>
          ))}
        <button onClick = {fetchCharacters}> Get Characters!</button>
    </div>
  );
}

const mapToStateProps = (state) => {
  return {
    characters: state.characters,
    isLoading: state.isLoading,
    error: state.error,
  }
}

export default connect(mapToStateProps, {fetchCharacters}) (App);
