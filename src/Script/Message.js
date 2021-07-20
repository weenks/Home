import React from 'react'
import "../Style/Message.css"
import {Avatar} from "@material-ui/core";

function Message({ timestamp, user, message }) {
    return (
        <div className="message">
            <Avatar src={user.photo} />
            <div className="message__info">
                <h4>
                    {user.displayName}
                    <span className="message__timestamp">
                        {new Date(timestamp?.toDate()).toString()}
                    </span>
                </h4>

                <p>{message}</p>
            </div>
        </div>
    );
}

export default Message
