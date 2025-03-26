import React, { useEffect, useState } from 'react'
import { cardData } from '../utils/cardData';
import { youtubeVideo } from '../utils/contants';

const VideoCard = ({ info }) => {
    console.log(info);
    // const [cardInfo, setcardInfo] = useState(null);

    // console.log(youtubeVideo, "youtubeVideo");
    // console.log(cardData, "cardData");

    // useEffect(() => {
    //   fetchcardData();
    // },[]);

    // const fetchcardData = async () => {
    //   setcardInfo (cardData);
    // }
    // if (cardData === null) return 

    // const { snippet, title, thumbnails } = cardData[0].info;
    // const { channelTitle, statistics } = cardData[0].info;

    // return cardInfo === null ? (
    //   <Shimmer></Shimmer>
    // ) : (
    //   <div>
    //    <img alt='thumbnail' src = {thumbnails.medium.url}></img>
    //   <ul>
     
    //   <li>{snippet}</li>
    //     <li>{title}</li>
    //     <li>{channelTitle}</li>
    //     <li>{statistics.viewCount}</li>
    //   </ul> 

    //   </div>
    // );
  
  
   
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='video-card'  style={{ overflowWrap: 'break-word', height: 250 }}>
  
      <img  className='video-img' alt='thumbnail' width={"210px"}  src = {thumbnails.medium.url }></img>
      
        {/* <h4 className='title'>{title}</h4>
        <h4>{channelTitle}</h4>
        <h4>{statistics.viewCount} views</h4> */}
      
      <h4
       className='title'>{title}
       {channelTitle}
       {statistics.viewCount} views
       
        
      </h4>
      
        
    </div>
  );
}

export default VideoCard
