import './App.css';
import React, { createContext, useState } from "react";
import { WordleBodyDefault } from "./words";
import Keyboard from './components/Keyboard';
import WordleBody from './components/WordleBody';

export const AppContext = createContext();

function App() {

  const [board, setWordleBody] = useState(WordleBodyDefault);

  return (
    <div className="App">
      <nav>
       SWAHILI WORDLE 
      </nav>
      <AppContext.Provider value ={{board,setWordleBody}}>
      {/* <div className='game'> */}
      <WordleBody/>
      <Keyboard/>
      {/* </div>         */}
     </AppContext.Provider>
    </div>
  );
}

export default App;




