import React from 'react'
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import VideoCard from './VideoCard';
import WatchPage from './WatchPage';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div style={{ display: "flex" }}>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body;