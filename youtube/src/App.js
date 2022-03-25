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
import NotificationsIcon from '@mui/icons-material/Notifications'
import YouTube from 'react-youtube';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideBarNav  from './SideBarNav';
import Video from './Video'
import { render } from 'react-dom';
export default class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        {/* <Download />
        <Video className="Video" /> */}
      </div>
    )
  }
}



export class Header extends React.Component{
  render(){
    
  
    return(

      <div class="container">
        
      <SideBarNav />
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


async function onReady(event){
  event.target.pauseVideo();
}

 function onClick(event){
  console.log(event);
}

export function Download(props){
  return(
    <div>
    <YouTube onReady={onReady}/>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/NUeUCkL3isk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
} 



async function Clicked(event){
  event.target.playVideo();
}





