import React, { useState, useEffect } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';


const LiveChat = () => {
  // const [LiveMessages, setLiveMessage] = useState("");
  const [liveMessages, setLiveMessage] = useState("");

    const dispatch = useDispatch();

    const chatMessage = useSelector((store) => store.chat.messages);
    

    useEffect(() => {
        const i = setInterval(() => {
            // API Polling
            // console.log("API Polling")


            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20) + "🚀"
            })
        );
        }, 1000);

        return () => clearInterval(i);

    }, []);

  return (
    <>
    <div className='livechat'>
    <div>
   {
    chatMessage.map((c, i) => (
   <ChatMessage key={i} name={c.name} message={c.message}
     />)) }
     </div>
    </div>


  <form>
    <div className='input-box' 
    onSubmit={(e)=>{
      e.preventDefault();
      console.log("ON Form Submit", liveMessages);

      dispatch(
        addMessage({
          name: "Mahak Sahu",
          message: liveMessages,
        })
      )
     
    }}>
      <input className='text' type='text' value={liveMessages} onChange={(e) => {
        setLiveMessage(e.target.value);
      }}></input>
      <button className='send'>Send</button>
    </div>
    </form>
    </>
  )
}

export default LiveChat;