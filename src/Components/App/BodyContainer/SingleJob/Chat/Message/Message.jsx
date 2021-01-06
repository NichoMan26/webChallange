import cls from './Message.module.css'

const Message = (props) => {
    console.log('props: ', props.message);


    return (
        <div  className={props.message.author.toLowerCase() === 'me' ? cls.wrapperMe : cls.wrapper}>
            {props.message.message}
        </div>
    )
      
}
export default Message