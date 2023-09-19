import React from 'react'
import '../Styles/LeftBox.css';
import {FaSpotify,FaEquals} from "react-icons/fa"; //! Spotify logo
import {HiSearch} from "react-icons/hi";


function LeftBox() {
  return <div className='LeftMenu'>
      <div className='logoImage'>
        <i><FaSpotify/></i>
        <h2>Spotify</h2>
        <i><FaEquals/></i>
      </div>
    
    <div className='searchBox'>
      <input type='text' placeholder='Search___'/>
      <i>HiSearch</i>
      </div> {/*Searching for songs*/}
  
  </div>


  
  }
export {LeftBox}