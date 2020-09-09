import React from 'react';

function Message(props) {
    let {username, message, date, isSender=false} = props.message;
    return (
        <p className={`chat__message ${isSender? ("chat__userMessage"):('')}`}>
            <span className="chat__name">{username}</span>
            {message}
            <span className="chat__timestamp">{date}</span>
        </p>
    )
}

export default Message;
