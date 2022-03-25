import React from 'react'
import './App.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuIcon from '@mui/icons-material/Menu';
import './style.css'
import { FaSearch, FaUserAlt } from 'react-icons/fa';
import Autocomplete from '@mui/material/Autocomplete'
import ListIcon from '@mui/icons-material/List';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import NotificationsIcon from '@mui/icons-material/Notifications';
export default class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
      </div>
    )
  }
}



export class Header extends React.Component{
  render(){
    
  
    return(

      <div class="container">
        
        <MenuIcon className='Menu' />
        <YouTubeIcon className='YoutubeHeader'></YouTubeIcon>
        <div className = "Icons">
        <NotificationsIcon className='Icon Extra' />
        <ViewComfyIcon className='Grid Extra' />
        <VideoCallIcon className='Video Extra'/>
        </div>
        

        <div class="box">
    <div class="search-bar">
      <form>
        <input type="text" placeholder="Search" />
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
      </form>
      
    </div>
    <hr />
  </div>
      </div>
    )
  }
}
