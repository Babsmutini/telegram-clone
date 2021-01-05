import React from 'react'
import {MoreHoriz} from '@material-ui/icons'
import './Thread.css'
import {Avatar, IconButton} from '@material-ui/core'
const Thread = () => {
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
            </div>
            <IconButton>
                <MoreHoriz className="thread__header__details" />
            </IconButton>
        </div>
    )
}

export default Thread
