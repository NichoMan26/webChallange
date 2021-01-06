import cls from './Chat.module.css'
import Message from './Message/Message'

import { useParams } from 'react-router-dom'

const Chat = (props) => {
    const ID = +useParams().id


    const changeMessage = (e) => {
        e.preventDefault()
        props.updateNewMessage(e.currentTarget.value)
    }
    const sentMessage = (e) => {
        e.preventDefault()
        props.addNewMessage(ID)
        props.updateNewMessage('')
    }

    let MSG = props.job.chat.map((obj, idx) => {
        return <Message key={idx} message={obj} />
    })


    return (
        <div className={cls.wrapper}>
            <div className={cls.authorWrapper}>
                <div className={cls.authtor}>Me</div>
                <div className={cls.authtor}>{props.job.customer}</div>
            </div>
            <div className={cls.messages}>
                {MSG}
            </div>
            <div className={cls.newMessage}>
                <form className={cls.inputWrapper}>
                    <input value={props.newMessage} onChange={changeMessage} className={cls.input} type='text' />
                    <button onClick={sentMessage}className={cls.button}>Send</button>
                </form>
            </div>
        </div>
    )

}
export default Chat