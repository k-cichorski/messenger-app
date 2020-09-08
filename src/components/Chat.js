import React from 'react';
import '../css/Chat.css';
import {Avatar} from '@material-ui/core';

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen...</p>
                </div>
            </div>
        </div>
    )
}

export default Chat;
