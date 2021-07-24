import React from 'react'
import s from './message.module.scss'

type messageType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message = ({avatar, name, message, time}: messageType) => {
    return (
        <div className={s.bubble}>
            <div className={s.avatar}>
                <img className={s.image} src={avatar} alt={name}/>
            </div>
            <div className={s.message}>
                <div className={s.name}>{name}</div>
                <div className={s.text}>{message}</div>
                <div className={s.time}>{time}</div>
            </div>
        </div>
    )
}

export default Message
