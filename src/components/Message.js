import React from 'react';

function Message(props) {
    let {username, message, date, isSender=false} = props.message;
    return (
            <div className={`messageWrapper ${isSender? ("userMessageWrapper"):('')}`}>
                <p className="chat__name">{username}</p>
                <p className={`chat__message ${isSender? ("chat__userMessage"):('')}`}>{message}</p>
                <p className="chat__timestamp">{date}</p>
            </div>

    )
}

export default Message;
