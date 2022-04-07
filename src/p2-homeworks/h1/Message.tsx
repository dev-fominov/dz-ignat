import React from 'react'
import s from './Message.module.css';

type MessagesType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagesType) {
    return (
        <div className={s.item}>
            <img src={props.avatar} alt={props.name} />
            <div className={s.flexContent}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
