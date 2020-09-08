import React from 'react';
import '../css/Sidebar.css';
import ChatBubble from '@material-ui/icons/ChatBubbleOutline';
import {Avatar, IconButton} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import ExpandIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from '../components/SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={"https://avatarfiles.alphacoders.com/250/250472.jpg"} />
                
                <div className="sidebar__headerRight">
                    <IconButton>
                        <ChatBubble />
                    </IconButton>

                    <IconButton>
                        <MoreIcon />
                    </IconButton>

                    <IconButton>
                        <ExpandIcon className={"expandSidebar"}/>
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input placeholder={"Search for someone to bother"} type={"text"}/>
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    );
}

export default Sidebar;
