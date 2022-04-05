import React,{useContext} from 'react'

import { AppContext } from '../App'
import {WordleBodyDefault} from '../words'

function Letter(LetterPosition , attemptV) {

  const {wordleBody} = useContext(AppContext)

  const letter = WordleBodyDefault[[attemptV][LetterPosition]]
  console.log(LetterPosition)
  // console.log(WordleBodyDefault[0][1]);

  return (
    
    <div className='letter'>{letter}</div>  
  )
}

export default Letter