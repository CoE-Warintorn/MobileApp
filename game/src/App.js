import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';

const word = ['h', 'e', 'l', 'l', 'o'];

class App extends Component {
  render() {
    return (
      <div className='App'>
        {
          word.map((c, i) => <CharacterCard key={i} value={c} />)
        }
      </div>
    );
  }
}

export default App;
