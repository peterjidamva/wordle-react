import React,{useContext} from 'react'
import { AppContext } from '../App'
import {WordleBodyDefault} from '../words'


function Letter(LetterPosition , attemptV) {
  const {board} = useContext(AppContext)

  const letter = board[[attemptV][LetterPosition]];
  // console.log(LetterPosition)

  console.log(WordleBodyDefault[[attemptV][LetterPosition]])

  return (
    
    <div className='letter'>{letter}</div>  
  )
}

export default Letter