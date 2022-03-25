import React from 'react';
import './App.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuIcon from '@mui/icons-material/Menu';
import './style.css'
import { FaSearch, FaUserAlt } from 'react-icons/fa';
import Autocomplete from '@mui/material/Autocomplete'
import ListIcon from '@mui/icons-material/List';
import ExploreIcon from '@mui/icons-material/Explore';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import NotificationsIcon from '@mui/icons-material/Notifications'
import YouTube from 'react-youtube';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import HomeIcon from '@mui/icons-material/Home';
import { render } from 'react-dom';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
export default  class SideBarNav extends React.Component{
    render(){
        return(
            <div>
            <SideNav className='Color'
            onSelect={(selected) => {
                
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                      
                    <HomeIcon>  Home</HomeIcon>
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                       <ExploreIcon />
                    </NavText>

                    <NavText>
                       <ExploreIcon />
                    </NavText>

                    <NavText>
                        <SubscriptionsIcon />

                    </NavText>
                    <NavItem eventKey="charts/linechart">
                        <NavText>
                            
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts/barchart">
                        <NavText>
                            Bar Chart
                        </NavText>
                    </NavItem>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
        </div>
        )
    }
}
