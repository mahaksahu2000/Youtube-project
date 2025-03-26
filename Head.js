import React from 'react'
import { toggleMenu } from '../utils/appSlice.js';
import { useDispatch } from 'react-redux';

const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());

    }
  return (
    <div className="head">
    <div className="logo-container">
      <img 
      onClick={() => toggleMenuHandler()}

      className="logo" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"></img>

      <a href='/'>

      <img className="youtube-logo" src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg'></img> 
      </a>
    </div>
    <div className="search-box">
    <div>
    <input className="style-input" type='text'/>
        <button className="button"><img className="search-logo" src="https://cdn0.iconfinder.com/data/icons/art-designing-glyph/2048/1871_-_Magnifier-512.png" width={"21px"}></img>
        </button>
        </div>

        {/* <div className='suggest'>
  
           <p>Iphone</p>
           <p >Iphone Pro</p>
           <p>Iphone Pro</p>
           <p>Iphone Pro</p>
           <p >Iphone Pro</p>
           <p>Iphone Pro</p>
         
        </div> */}

      </div>
      <div>
        <img className='user' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&s'></img>
      </div>
    </div>
  );
}
  
export default Head;
