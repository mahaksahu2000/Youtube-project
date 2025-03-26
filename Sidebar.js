import React from 'react'
import { useSelector } from 'react-redux';
import store from '../utils/store';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);


      //Early Return pattern
    if(!isMenuOpen) return null;

    return (
      <div className="sidebar">
       <ul className="ul">
          <li><Link to="/">Home</Link></li>
          <li>Shorts</li>
          <li>Video</li>
          <li>Live</li>
        </ul>
  
  <h3 className="sub">Subscription</h3>
        <ul className="ul">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
  
      <h3 className="sub">Watch Later</h3>
        <ul className="ul">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    );
  }
export default Sidebar;  