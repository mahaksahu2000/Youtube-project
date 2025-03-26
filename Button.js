import React from 'react'

const Button = ({ name }) => {
  return (
    <div className='button-list'>
        <button className='btn'>{name}</button>
        
    </div>
  )
}

export default Button;