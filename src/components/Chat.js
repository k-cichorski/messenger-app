import React from 'react';
import '../css/Chat.css';
import {Avatar, IconButton} from '@material-ui/core';
import AttachmentIcon from '@material-ui/icons/Attachment';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import ExpandIcon from "@material-ui/icons/ExpandMore";

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachmentIcon />
                    </IconButton>
                    <IconButton>
                        <MoreIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">User</span>
                    actual message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat__message chat__userMessage">
                    <span className="chat__name">Me</span>
                    my message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>

            <div className="chat__footer">
                <form className="chat__footerForm">
                    <input type="text" className="chat__input" placeholder="Don't be shy, say something..."/>
                    <IconButton>
                        <ExpandIcon className={"chat__footerFormButton"}/>
                    </IconButton>
                </form>
            </div>
        </div>
    )
}

export default Chat;
