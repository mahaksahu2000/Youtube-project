import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
// import { useParams, useSearchParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());

    },[]);
  return (

    <div>
    <div className='watch'  style={{ display:"flex"}}>
    <div>
    <iframe 
    width="900" 
    height="400" 
    src={"https://www.youtube.com/embed/1kmjAnvFw3I?si=efnqlO-LNt73I3Qu"+ searchParams.get("v")} 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowFullScreen>
    </iframe>
    </div>
    <div>
      <LiveChat/>
    </div>
        {/* <iframe 
        width="900" 
        height="400" 
        src={"https://www.youtube.com/embed/1uDl6cjH6Mc?si=2UBeHNAzjCcEghxv"+ searchParams.get("/watch?v="+ "v")}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullScreen></iframe> */}
    </div>
    <CommentsContainer/>
   

    </div>
  )
};

export default WatchPage;