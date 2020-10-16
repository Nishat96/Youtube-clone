import React from 'react';
import "./Header.css";
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

function Header() {
    return (
        <div className="header">
            <div className="header_left"> 
                <MenuSharpIcon />
                <img className="header_logo" src="https://neilpatel.com/wp-content/uploads/2015/09/youtube.png" alt="" />
            </div>   
            <div className="header_mid">
                <input type="text" placeholder="Search"/>
                <SearchIcon className ="header_inputbutton" />
            </div>
            <div className="header_right">
                <VideoCallIcon className="header_icon"/>
                <AppsIcon className="header_icon"/>
                <NotificationsIcon className="header_icon"/>
                <AccountCircleSharpIcon className="header_icon" />
            </div>


        </div>
    )
}

export default Header;
