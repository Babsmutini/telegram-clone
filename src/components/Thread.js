import React, { useState } from 'react'
import {MoreHoriz, SendRounded, MicNoneOutlined, TimerOutlined} from '@material-ui/icons'
import './Thread.css'
import {Avatar, IconButton} from '@material-ui/core'
const Thread = () => {
    const [input, setInput] = useState('');
    const sendMessage = (e) => {
        e.preventDefault();
        //firebase
        setInput('')
    }
    return (
        <div className="thread">
            <div className="thread__header">
                <div className="thread__header__contents">
                    <Avatar />
                    <div className="thread__header__contents__info">
                        <h4>ThreadName</h4>
                        <h5>Last seen</h5>
                    </div>
                </div>
                <IconButton>
                <MoreHoriz className="thread__header__details" />
            </IconButton>
            </div>   
            <div className="thread__messages">

            </div>
            <div className="thread__input">
                <input placeholder="Write a message..." type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
                <IconButton onClick={sendMessage}>
                    <TimerOutlined/>
                </IconButton>
                <IconButton onClick={sendMessage}>
                    <SendRounded/>
                </IconButton>
                <IconButton onClick={sendMessage}>
                    <MicNoneOutlined/>
                </IconButton>
            </div>
        </div>
    )
}

export default Thread
