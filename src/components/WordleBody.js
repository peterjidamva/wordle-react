  
import Letter from "./Letter";

function WordleBody() {

  return (
    <div className="board">
      <div className="row">
        <Letter LetterPosition ={0} attemptV = {0}/>
        <Letter LetterPosition ={1} attemptV = {0}/>
        <Letter LetterPosition ={2} attemptV = {0}/>
        <Letter LetterPosition ={3} attemptV = {0}/>
        <Letter LetterPosition ={4} attemptV = {0}/>
      </div>
      <div className="row">
      <Letter LetterPosition ={0} attemptV = {1}/>
      <Letter LetterPosition ={1} attemptV = {1}/>
      <Letter LetterPosition ={2} attemptV = {1}/>
      <Letter LetterPosition ={3} attemptV = {1}/>
      <Letter LetterPosition ={4} attemptV = {1}/>


      </div>
      <div className="row">
      <Letter LetterPosition ={0} attemptV = {2}/>
      <Letter LetterPosition ={1} attemptV = {2}/>
      <Letter LetterPosition ={2} attemptV = {2}/>
      <Letter LetterPosition ={3} attemptV = {2}/>
      <Letter LetterPosition ={4} attemptV = {2}/>

      </div>
      <div className="row">
      <Letter LetterPosition ={0} attemptV = {3}/>
      <Letter LetterPosition ={1} attemptV = {3}/>
      <Letter LetterPosition ={2} attemptV = {3}/>
      <Letter LetterPosition ={3} attemptV = {3}/>
      <Letter LetterPosition ={4} attemptV = {3}/>

      </div>
      <div className="row">
      <Letter LetterPosition ={0} attemptV = {4}/>
      <Letter LetterPosition ={1} attemptV = {4}/>
      <Letter LetterPosition ={2} attemptV = {4}/>
      <Letter LetterPosition ={3} attemptV = {4}/>
      <Letter LetterPosition ={4} attemptV = {4}/>

      </div>
      <div className="row">
      <Letter LetterPosition ={0} attemptV = {5}/>
      <Letter LetterPosition ={1} attemptV = {5}/>
      <Letter LetterPosition ={2} attemptV = {5}/>
      <Letter LetterPosition ={3} attemptV = {5}/>
      <Letter LetterPosition ={4} attemptV = {5}/>

      </div>
    </div>
  );
}

export default WordleBody;
