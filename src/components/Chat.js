import React, {useState, useRef, useEffect} from 'react';
import '../css/Chat.css';
import {Avatar, IconButton} from '@material-ui/core';
import AttachmentIcon from '@material-ui/icons/Attachment';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import ExpandIcon from "@material-ui/icons/ExpandMore";
import Message from '../components/Message';
import {useStateValue} from "../store/StateProvider";
import {NEW_MESSAGE} from '../store/reducer';

function Chat() {
    const [{messages}, dispatch] = useStateValue();
    const [messageInput, setMessageInput] = useState('');
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [messages]);

    const handleSubmit = e => {
        e.preventDefault();
        let messageToSend = messageInput.trim();
        if (messageToSend.length !== 0) {
            let action = {
                type: NEW_MESSAGE,
                message: {
                    username: 'Me',
                    message: messageToSend,
                    date: new Date().toUTCString(),
                    isSender: true
                }
            }
            setMessageInput('');
            dispatch(action);
        } else {
            setMessageInput('');
        }
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Kuba Cichorski</h3>
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

                {messages.map((message, index) => <Message key={index} message={message} /> )}

                <div ref={messagesEndRef} />

            </div>

            <div className="chat__footer">
                <form className="chat__footerForm" >
                    <input type="text" className="chat__input" placeholder="Don't be shy, say something..."
                        onChange={e => setMessageInput(e.target.value)}
                        value={messageInput}/>

                    <IconButton onClick={(e) => handleSubmit(e)}>
                        <input type="submit" style={{display: 'none'}} />
                        <ExpandIcon className={"chat__footerFormButton"}/>
                    </IconButton>
                </form>
            </div>
        </div>
    )
}

export default Chat;
