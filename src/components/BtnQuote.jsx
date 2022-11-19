import React from 'react'

const BtnQuote = ({objStyleBtn,handleClick}) => {
  return (
    <button style={objStyleBtn} onClick={handleClick} className='card__btn'>&gt;</button>
   
  )
}

export default BtnQuote