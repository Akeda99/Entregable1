import React from 'react'
import BtnQuote from './BtnQuote'

const QuoteBox = ({quoteRandom,handleClick, colorandom}) => {

const objStyle={
    color: colorandom
}
const objStyleBtn={
    backgroundColor: colorandom
}

  return (
    <article className='card' style={objStyle}>
        <i className="fa-solid fa-quote-left card__icon" ></i>
        <p className='card__quote'>{quoteRandom.quote}</p>

        <h1 className='card__author'>{quoteRandom.author}</h1>

        <BtnQuote
        objStyleBtn={objStyleBtn}
        handleClick={handleClick}
         />
    </article>
  )
}

export default QuoteBox