import React from 'react'
import '../Styles/LeftBox.css';
import {FaSpotify,FaEquals} from "react-icons/fa"; //! Spotify logo


function LeftBox() {
  return <div className='LeftMenu'>

    <div id='logoImage'>
    <i><FaSpotify /></i>
    <h2>Spotify</h2>
    <i><FaEquals/></i>
      </div> //?ICONS
    
    <div className='searchBox'></div> //! Search Bar for searching songs
  
  </div>


  
  }
export {LeftBox}