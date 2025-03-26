import React, { useEffect, useState } from 'react'
import { youtubeVideo } from '../utils/contants';
import { cardData } from '../utils/cardData';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  useEffect(() => {
    fetchData()
  },[]);

  const fetchData = () => {
    setlistofCard (youtubeVideo);
  };

  const [listofCard, setlistofCard] = useState([]);

  console.log ("VideoContainer Rendered" .listofCard);

  
  // console.log(YOUTUBE_VIDEOS_API);





  // const [videos, setVideos] = useState([]);

  //  useEffect(() => {

  //   getVideos();

  //  }, []);

  //  const getVideos = async () => {
  //   const data = await fetch(YOUTUBE_VIDEOS_API);
  //   // const json = await data.json();
  //   console.log(youtubeVideo);
  //   setVideos(cardData);
  //  };


  
  return (
    <div className='card'>
    {cardData.map((cardData) => (
    
   <Link to={"/watch?v="+ cardData.id}><VideoCard key={cardData.id} info={cardData} />

   </Link> ))}
     
    
   
    </div>
  );
};

export default VideoContainer
