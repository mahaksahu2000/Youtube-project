import React from 'react'

const ChatMessage = ({ name, message }) => {
  return (
    <div className='chatmessage'>
   <img className='img'
  alt='user' 
  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&s'></img>

  <span className='name'>{name}</span>
  <span>{message}</span>
    </div>
  )
}

export default ChatMessage;
